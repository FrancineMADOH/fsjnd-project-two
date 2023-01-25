/* Replace with your SQL commands */

CREATE TABLE [IF NOT EXISTS] products(
    id SERIAL PRIMARY KEY,
    productName VARCHAR(100),
    price integer,
    category VARCHAR(100)
);

CREATE TABLE [IF NOT EXISTS]  users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    username VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE [IF NOT EXISTS] orders(
    id SERIAL PRIMARY KEY,
    productID integer,
    quantity integer,
    userID integer,
    status BOOLEAN
);

CREATE TABLE [IF NOT EXISTS] categories(
    id SERIAL PRIMARY KEY,
    category VARCHAR(100)
);