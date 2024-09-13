# Function to create application / avoid circular references
# routes.py imports models.py, models.py imports app.py, app.py imports routes.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import os

db = SQLAlchemy()

def create_app():
  app = Flask(__name__, template_folder='templates')
  CORS(app, resources={r"/*": {"origins": [r"http://localhost:5173", r"http://frontend:5173"]}})

  # Using PyMySQL example
  app.config['SQLALCHEMY_DATABASE_URI'] = (
      f"mysql+pymysql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}"
      f"@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_DATABASE')}"
  )

  db.init_app(app)

  from routes import register_routes
  register_routes(app, db)

  migrate = Migrate(app, db)

  return app
