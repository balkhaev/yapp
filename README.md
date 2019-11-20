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


## Examples

### Simple blog

```
mkdir blog
cd blog
npm init -f
npm i yapp
```

Create `blog/src/index`
```js
const path = require('path');
const yapp = require('yapp');

const app = yapp({
  name: 'Blog',
});

module.exports = app;
```

Create `blog/src/schemas/Post.js`
```js
module.exports = {
  fields: {
    author: {
      type: 'relationship',
      ref: 'User',
    },
    title: {
      type: 'text'
    },
    text: {
      type: 'text'
    },
    status: {
      type: 'select',
      options: ['published', 'drafted'],
    },
    slug: {
      type: 'slug',
      from: 'title',
    },
  },
  methods: {
    draft() {
      return this.update({ status: 'drafted' });
    },
    publish() {
      return this.update({ status: 'published' })
    }
  },
};
```

Make GraphQL query
```gql
query AllPosts {
  allPosts() {
    id,
    title,
    text,
    author: {
      id,
      name,
      email
    }
  }
}
```

or REST Api request
```
GET /api/posts
```

**Profit!**
