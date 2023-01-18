/* Replace with your SQL commands */

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    productName VARCHAR(100),
    price integer,
    category VARCHAR(100)
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    productID integer,
    quantity integer,
    userID integer,
    status BOOLEAN
);

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    category VARCHAR(100)
);