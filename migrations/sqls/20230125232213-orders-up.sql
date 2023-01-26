/* Replace with your SQL commands */
CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    productID integer,
    quantity integer,
    userID integer,
    status BOOLEAN
);