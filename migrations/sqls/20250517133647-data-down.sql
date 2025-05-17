--  Down migration to remove dummy data

DELETE FROM orders;
DELETE FROM products;
DELETE FROM users;
DELETE FROM categories;