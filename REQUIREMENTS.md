# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index : `'/api/products' [GET]`
- Show :  `'/api/products/:id' [GET]`
- Create [token required]: `'/api/products/' [POST]`
- [OPTIONAL] Top 5 most popular products :
- [OPTIONAL] Products by category (args: product category) : `'/api/products/:category' [GET]`
- Delete [token required]: `'/api/products/:id' [DELETE]`

#### Users
- Index [token required]: `'/api/users'[GET]`
- Show [token required]: `'/api/users/:id'[GET]`
- Create [token required]: `'/api/users'[POST]`
- Auth [token required]: `'/api/users/signin'[GET]`
- update [token required]: `'/api/users/:id'[PUT]`

#### Orders
- Current Order by user (args: user id)[token required] : `'/api/orders/:id'[GET]`
- [OPTIONAL] Completed Orders by user (args: user id)[token required] : `'/api/orders/:completed'[GET]`
- Create : `'/api/orders'[POST]`
- update : `'/api/orders/:id'[PUT]`

#### Categories
- Create : `/api/category''[POST]`
- Index  : `'/api/category'[GET]`


## Data Shapes
#### Product

| Column               |  Type              |
|......................|....................|
| id                   | SERIAL PRIMARY KEY |
| name                 | VARCHAR            |
| price                | INT                |
| category             | VARCHAR            | 

#### User

|    Column             |     Type                  |   
|.......................|...........................|
| id                    |  SERIAL PRIMARY KEY       |
| firstName             |   VARCHAR                 |
| lastName              |   VARCHAR                 |
| password              |   VARCHAR                 |
| username              |   VARCHAR                 |

#### Orders

|   Column                                | Type                |
|.........................................|.....................|
| id                                      | SERIAL PRIMARY KEY  |
| id of each product in the order         | INT                 |
| quantity of each product in the order   | INT                 |
| user_id                                 | INT                 |
| status of order (active or complete)    | BOOLEAN             |

### Categories

|     Column            |      Type                   |
|.......................|.............................|
|id                     |    SERIAL PRIMARY KEY       |
|category               |    VARCHAR                  |