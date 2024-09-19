from flask import Flask, jsonify, request, session
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session
from models import Item, Subcategory, User


def register_routes(app: Flask, db: SQLAlchemy):

  bcrypt = Bcrypt(app)
  server_session = Session(app)
  
  @app.route('/')
  def index():
    query = request.args.get('query')
    category = request.args.get('category')

    if category == 'all' or category == None:
      groceries = Item.query.filter(Item.name.like(f"%{query}%")).all()
    else:
      groceries = Item.query.join(Subcategory).filter(Item.name.like(f"%{query}%"), Subcategory.name == category).all()
    return jsonify(groceries)
  
  # Returns meta data about logged in user
  @app.route("/@me")
  def get_current_user():
    # pulls value from session cookie key "user_id"
    user_id = session.get("user_id")

    if not user_id:
      return jsonify({"error": "Unauthorized"}), 401
    
    user: User = User.query.filter_by(user_id=user_id).first()

    return jsonify({
      "userID": user.user_id,
      "userEmail": user.email,
      "userFN": user.fname,
      "userLN": user.lname
    })
  
  @app.route("/signup", methods=["POST"])
  def register_user():
    email = request.json["userEmail"]
    password = request.json["userPassword"]
    fname = request.json["userFN"]
    lname = request.json["userLN"]

    # returns true if user already exists already and should not be registered
    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
      return jsonify({"error": "User already exists"}), 409
    
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password, fname=fname, lname=lname)

    # session is a temporary staging area for database operations
    db.session.add(new_user)
    db.session.commit()

    # sets user_id parameter within the session cookie on client
    session["user_id"] = new_user.user_id

    return jsonify({
      "userID": new_user.user_id,
      "userEmail": new_user.email,
      "userFN": new_user.fname,
      "userLN": new_user.lname
    })
  
  @app.route("/signin", methods=["POST"])
  def login_user():
    email = request.json["userEmail"]
    password = request.json["userPassword"]

    # returns true if user already exists
    user: User = User.query.filter_by(email=email).first()

    # status code 401 is unauthorized access - perhaps reroute to create user page
    if not user:
      return jsonify({"error": "Unauthorized"}), 401
    
    # returns True if password in DB is dehashed to provided password
    if not bcrypt.check_password_hash(user.password, password):
      return jsonify({"error": "Unauthorized"}), 401
    
    # sets user_id parameter within the session cookie on client
    session["user_id"] = user.user_id
    
    return jsonify({
      "userID": user.user_id,
      "userEmail": user.email,
      "userFN": user.fname,
      "userLN": user.lname
    })
  
  @app.before_request
  def handle_preflight():
      if request.method == 'OPTIONS':
          return '', 204

  @app.route("/signout", methods=["POST"])
  def signout_user():
    session.pop("user_id")
    return '', 200
  
