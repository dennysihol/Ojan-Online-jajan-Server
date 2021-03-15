# E-COMMERCE SERVER

List of available endpoints:
​
- `POST /login`
- `POST /products`
- `GET /products`
- `GET /products/:id`
- `PUT /products/:id`
- `PATCH /products/:id`
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

Response:

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

### POST /banners

description: 
  add new banner

Request:

- headers: access_token (string)

- data:

```json
{
    "title": "string",
    "category": "string",
    "image": "string",
    "status": "string",
}
```

Response:

- status: 200
- body:

```json
{
  "banner":  {
        "id": "integer",
        "title": "string",
        "category": "string",
        "image": "string",
        "status": "string",
        "updatedAt": "date",
        "createdAt": "date"
    },
    "message": "New banner added"
}
```

### GET /banners

description: 
  get all banners from database

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
    "banner": [
        {
        "id": "integer",
        "title": "string",
        "category": "string",
        "image": "string",
        "status": "string",
        "updatedAt": "date",
        "createdAt": "date"
        },
    ]
}
```

### GET /banners/:id

description: 
  get banner by id from database

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:

```json
{
    "banner":
        {
        "id": "integer",
        "title": "string",
        "category": "string",
        "image": "string",
        "status": "string",
        "updatedAt": "date",
        "createdAt": "date"
        },
}
```

### PUT /banners/:id

description: 
  edit banner by id

Request:

- headers: access_token (string)
- params: 
  - jobId: "integer" required
- data:

```json
{
    "title": "string",
    "category": "string",
    "image": "string",
    "status": "string",
}
```


Response:

- status: 201
- body:

```json
{
  "banner":  {
        "id": "integer",
        "title": "string",
        "category": "string",
        "image": "string",
        "status": "string",
        "updatedAt": "date",
        "createdAt": "date"
    },
    "message": "Edit banner Success"
}
```


### DELETE /banners/:id

description: 
  delete banner by id

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:

```json
{
  "message": "Banner has been deleted"
}
```