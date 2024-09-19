# Function to create application / avoid circular references
# routes.py imports models.py, models.py imports app.py, app.py imports routes.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from config import ApplicationConfig
import os

db = SQLAlchemy()

def create_app():
  app = Flask(__name__)
  CORS(app, supports_credentials=True, origins=[r"http://localhost:5173/*", r"http://frontend:5173/*"])

  # Configure Flask App utilizing PyMySql
  app.config.from_object(ApplicationConfig)

  db.init_app(app)

  from routes import register_routes
  register_routes(app, db)

  migrate = Migrate(app, db)

  return app
