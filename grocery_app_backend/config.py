import os
from dotenv import load_dotenv
import redis

load_dotenv()

# DB env variables established from docker compose file.
class ApplicationConfig:
  SECRET_KEY = os.getenv("SECRET_KEY")

  SQLALCHEMY_TRACK_MODIFICATIONS = False
  SQLALCHEMY_ECHO = True
  SQLALCHEMY_DATABASE_URI = (f"mysql+pymysql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}"
      f"@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_DATABASE')}")

  SESSION_TYPE = "redis"
  SESSION_PERMANENT = False
  SESSION_USE_SIGNER = True
  SESSION_REDIS = redis.StrictRedis(host='redis', port=6379)
  