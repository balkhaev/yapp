# Yapp

Yapp is schema-based framework for creating enterprise-ready web application.

## Features
- One schema for GraphQL, Mongoose, Elasticsearch, ACL
- Out-of-box authentication, searching, queue
- Generated admin dashboard

## Tech-stack

### Backend
- Elasticsearch
- Mongoose
- Express
- Redis
- Bull

### Admin UI
- React
- Axios
- Material-ui

## Schema

Schema includes mapping for models, acl and methods.

### Fields

#### text

```
input: <input type="text" />
```

- **maxLength**: maximum length of field

#### email

```
input: <input type="email" />
```

- **maxLength**: maximum length of field

#### select

```
input: <select />
```

- **maxLength**: maximum length of field
- **options**: options for select

#### password

```
input: <input type="password" />
```

- **maxLength**: maximum length of field

## Functions

### Auth

Password-based strategy authentication.

```
POST /api/login

{
  "login": "",
  "password": ""
}
```

### Admin UI

Advanced admin dashboard.

```
GET /admin
```
