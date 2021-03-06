# E-COMMERCE SERVER

List of available endpoints:
​
- `POST /login`
- `POST /products`
- `GET /products`
- `GET /products/:id`
- `PUT /products/:id`
- `DELETE /products/:id`


### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Success Response:

- status: 200
- body:
  ​

```json
{
    "id": "integer",
    "email": "string",
    "role": "string",
    "access_token": "jwt string"
}
```

Fail Response:

- status: 401
- body:
  ​

```json
{
    "message" : "Invalid Email or Password"
}
```

### POST /products

description: 
  add new product

Request:

- headers: access_token (string)

- data:

```json
{
    "name": "string",
    "category": "string",
    "stock": "integer",
    "price": "integer",
    "image": "string",
}
```

Response:

- status: 200
- body:

```json
{
  "product":  {
        "id": "integer",
        "name": "string",
        "category": "string",
        "stock": "integer",
        "price": "integer",
        "image": "string",
        "updatedAt": "date",
        "createdAt": "date"
    },
    "message": "New Product Added"
}
```

Fail Response:

- status: 401
- body:

```json
{
   "message": "Not Authorized"
}
```

### GET /products

description: 
  get all products from database

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
    "product": [
        {
        "id": "integer",
        "name": "string",
        "category": "string",
        "stock": "integer",
        "price": "integer",
        "image": "string",
        "updatedAt": "date",
        "createdAt": "date"
        },
    ]
}
```

Fail Response:

- status: 404
- body:

```json
{
   "message": "Product not Found"
}
```

### GET /products/:id

description: 
  get products by id from database

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:

```json
{
    "product":
        {
        "id": "integer",
        "name": "string",
        "category": "string",
        "stock": "integer",
        "price": "integer",
        "image": "string",
        "updatedAt": "date",
        "createdAt": "date"
        },
}
```

Fail Response:

- status: 404
- body:

```json
{
   "message": "Product not Found"
}
```

### PUT /products/:id

description: 
  edit product by id

Request:

- headers: access_token (string)
- params: 
  - jobId: "integer" required
- data:

```json
{
    "name": "string",
    "category": "string",
    "stock": "integer",
    "price": "integer",
    "image": "string",
}
```


Response:

- status: 201
- body:

```json
{
  "product":  {
        "id": "integer",
        "name": "string",
        "category": "string",
        "stock": "integer",
        "price": "integer",
        "image": "string",
        "updatedAt": "date",
        "createdAt": "date"
    },
    "message": "Edit Product Success"
}
```

Fail Response:

- status: 404
- body:

```json
{
   "message": "Product not Found"
}
```


### DELETE /products/:id

description: 
  delete product by id

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:

```json
{
  "message": "product has been deleted"
}
```

Fail Response:

- status: 404
- body:

```json
{
   "message": "Product not Found"
}
```


### POST /carts/:ProductId

description: 
  add product to cart

Request:

- headers: access_token (string)

- data:

```json
{
    "ProductId": "integer",
    "UserId": "integer",
    "total": "integer",
}
```

Response:

- status: 201
- body:

```json
{
    "ProductId": "integer",
    "UserId": "integer",
    "total": "integer",
    "updatedAt": "date",
    "createdAt": "date"
}
```

Fail Response:

- status: 400
- body:

```json
{
   "message": "Bad Request"
}
```

### GET /carts/:UserId

description: 
  show all cart of user

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
    "id": "integer",
    "UserId": "integer",
    "ProductId": "integer",
    "total": "integer",
    "createdAt": "date",
    "updatedAt": "date",
    "Product": {
        "id": "integer",
        "name": "string",
        "category": "string",
        "stock": "integer",
        "price": "integer",
        "image": "string",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```

Fail Response:

- status: 401
- body:

```json
{
   "message": "Unauthorized"
}
```

### PATCH /carts/:id

description: 
  update total in cart

Request:

- headers: access_token (string)

- data:

```json
{
    "total": "integer",
}
```

Response:

- status: 201
- body:

```json
{
    "cart": [
        "1"
    ],
    "message": "Update success"
}
```

Fail Response:

- status: 400
- body:

```json
{
   "cart": [
        "0"
    ],
    "message": "Update failed"
}
```

### DELETE /carts/:id

description: 
  delete cart by id

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
    "cart": "1",
    "message": "Delete cart success"
}
}
```

Fail Response:

- status: 400
- body:

```json
{
   "cart": "0",
    "message": "Delete cart failed"
}
```