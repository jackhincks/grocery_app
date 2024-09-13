from flask import jsonify, render_template, request
from models import Item, Subcategory


def register_routes(app, db):
  
  @app.route('/')
  def index():
    query = request.args.get('query')
    category = request.args.get('category')

    if category == 'all' or category == None:
      groceries = Item.query.filter(Item.name.like(f"%{query}%")).all()
    else:
      groceries = Item.query.join(Subcategory).filter(Item.name.like(f"%{query}%"), Subcategory.name == category).all()
    return jsonify(groceries)