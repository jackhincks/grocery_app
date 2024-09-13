from app import db
from sqlalchemy.orm import relationship
from dataclasses import dataclass

@dataclass
class Item(db.Model):
  __tablename__ = 'items'

  id:int = db.Column(db.Integer, autoincrement=True, primary_key=True)
  name:str = db.Column(db.String(100), nullable=False)
  category_id:int = db.Column(db.Integer, db.ForeignKey('subcategories.category_id'), nullable=False)
  image:str = db.Column(db.String(255), nullable=False)
  price:float = db.Column(db.DECIMAL(18, 2), nullable=False)

  subcategories = relationship('Subcategory', back_populates='items')

  def __repr__(self):
    return f'Item: {self.name}'

@dataclass
class Subcategory(db.Model):
  __tablename__ = 'subcategories'

  category_id:int = db.Column(db.Integer, autoincrement=True, primary_key=True)
  name:str = db.Column(db.String(100), nullable=False)

  items = relationship('Item', back_populates='subcategories')