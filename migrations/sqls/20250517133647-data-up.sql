--  Insert dummy data into the categories table
INSERT INTO categories (category) VALUES
    ('Electronics'),
    ('Clothing'),
    ('Books'),
    ('Home & Kitchen'),
    ('Sports & Outdoors');

--  Insert dummy data into the users table
INSERT INTO users (firstName, lastName, username, password) VALUES
    ('John', 'Doe', 'johndoe', '$2b$10$mZgdLvHzrrVyj2BpGFYsSeHE.veu4NU.d5B93fzHYZUkufUms2oyi'),
    ('Jane', 'Smith', 'janesmith', 'passw$2b$10$mZgdLvHzrrVyj2BpGFYsSeHE.veu4NU.d5B93fzHYZUkufUms2oyiord456'),
    ('Robert', 'Jones', 'robertjones', '$2b$10$mZgdLvHzrrVyj2BpGFYsSeHE.veu4NU.d5B93fzHYZUkufUms2oyi'),
    ('Emily', 'Wilson', 'emilywilson', '$2b$10$mZgdLvHzrrVyj2BpGFYsSeHE.veu4NU.d5B93fzHYZUkufUms2oyi'),
    ('Michael', 'Brown', 'michaelbrown', '$2b$10$mZgdLvHzrrVyj2BpGFYsSeHE.veu4NU.d5B93fzHYZUkufUms2oyi');

--  Insert dummy data into the products table
INSERT INTO products (productName, price, category) VALUES
    ('Laptop', 1200, 1),
    ('T-shirt', 25, 2),
    ('Novel', 15, 3),
    ('Coffee Maker', 40, 4),
    ('Running Shoes', 80, 5),
    ('Smartphone', 800, 1),
    ('Jeans', 50, 2),
    ('Cookbook', 20, 3),
    ('Blender', 30, 4),
    ('Basketball', 25, 5);

--  Insert dummy data into the orders table
INSERT INTO orders (productID, quantity, userID, status) VALUES
    (1, 1, 1, TRUE),
    (2, 2, 2, TRUE),
    (3, 1, 3, FALSE),
    (4, 1, 4, TRUE),
    (5, 1, 5, FALSE),
    (6, 2, 1, TRUE),
    (7, 1, 2, TRUE),
    (8, 3, 3, FALSE),
    (9, 1, 4, TRUE),
    (10, 1, 5, TRUE),
    (1, 1, 2, FALSE),
    (3, 2, 4, TRUE),
    (5, 1, 1, TRUE),
    (7, 1, 3, FALSE),
    (9, 2, 5, TRUE),
    (2, 1, 1, TRUE),
    (4, 1, 3, TRUE),
    (6, 1, 2, FALSE),
    (8, 1, 4, TRUE),
    (10, 1, 5, FALSE);