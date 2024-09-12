-- Create DB within Docker container
CREATE DATABASE IF NOT EXISTS groceries;
USE groceries;


DROP TABLE IF EXISTS subcategories;
DROP TABLE IF EXISTS items;

CREATE TABLE subcategories (
  category_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (category_id) 
);

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  category_id int NOT NULL,
  image VARCHAR(255) NOT NULL,
  price DECIMAL(18, 2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES subcategories(category_id)
);

INSERT INTO subcategories (name)
VALUES
  ("pantry"),      -- 1
  ("seafood"),     -- 2 
  ("bakedGoods"),  -- 3
  ("dairy"),       -- 4
  ("produce"),     -- 5
  ("deli"),        -- 6
  ("frozen"),      -- 7
  ("meat"),        -- 8
  ("spices"),      -- 9
  ("drinks"),      -- 10
  ("alcohol");     -- 11



INSERT INTO items (name, category_id, image, price)
VALUES
("Driscoll's Organic Strawberries", 5, "Strawberries.webp", 4.95),
("Organic Asparagus Bundle", 5, "Asparagus.webp", 5.50),
("Brownberry Sourdough Bread", 3, "Sourdough.webp", 3.75),
("Chocolate Chip Muffins", 3, "Muffins.webp", 6.99),
("Barilla Fusilli Pasta", 1, "Pasta.webp", 4.99),
("Cinnamon Toast Crunch", 1, "Cereal.jfif", 6.25),
("Salmon Filet - 8oz", 2, "Salmon.jpg", 12.15),
("Panamel Shrimp - 50 Count", 2, "Shrimp.jpg", 14.99),
("Horizon Organic - Whole Milk", 4, "Milk.webp", 4.89),
("Yoplait Yogurt - Strawberry", 4, "Yogurt.webp", 3.99),
("Buddig Ham - 7oz", 6, "Ham.webp", 8.49),
("Oscar Meyer Roast Beef - 7oz", 6, "Beef.webp", 9.49),
("Drumstick - 4ct", 7, "IceCream.webp", 5.39),
("Jack's Frozen Pizza", 7, "Pizza.webp", 7.00),
("Filet Mignon - 8oz", 8, "Filet.jpg", 16.99),
("Chicken Breasts - 3ct", 8, "Chicken.webp", 7.95),
("McCormick Paprika", 9, "Paprika.webp", 3.99),
("McCormick Garlic Powder", 9, "GarlicPowder.webp", 3.79),
("Blue Gatorade - 8ct - 20oz", 10, "Gatorade.webp", 7.49),
("Arnold Palmer", 10, "ArnoldPalmer.webp", 0.99),
("Bud Light - 12ct - 12oz", 11, "BudLight.webp", 16.99);

