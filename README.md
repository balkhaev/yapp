# Yapp

Yapp is schema-based framework for creating enterprise-ready web application.

## Features
- One schema for GraphQL, Mongoose, Elasticsearch, ACL
- Out-of-box authentication, searching, queue
- Generated admin dashboard
- Email sender
- File manager

## Quickstart

Init project
```
mkdir blog
cd blog
npm init -f
npm i yapp
```

Create `blog/src/index.js`
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

Schema includes acl, methods, hooks and mapping for models

### Fields

#### string
```
type: String
input: <input type="text" />
```

- **unique** *boolean* - unique field
- **required** *boolean* - required field
- **maxLength** *integer* - maximum length of field

#### text
```
type: String
input: <textarea />
```

- **unique** *boolean* - unique field
- **required** *boolean* - required field
- **maxLength** *integer* - maximum length of field

#### richtext
```
type: String
input: <wysiwyg />
```

- **unique** *boolean* - unique field
- **required** *boolean* - required field
- **maxLength** *integer* - maximum length of field

#### email
```
type: String
input: <input type="email" />
```

- **unique** *boolean* - unique field
- **required** *boolean* - required field
- **maxLength** *integer* - maximum length of field

#### select
```
type: Array
input: <select />
```

- **required** *boolean* - required field
- **maxLength** *integer* - maximum length of field
- **options** *array* - options for select

#### password
```
type: String
input: <input type="password" />
```

- **unique** *boolean* - unique field
- **required** *boolean* - required field
- **maxLength** *integer* - maximum length of field

#### checkbox
```
type: Boolean
input: <input type="checkbox" />
```

- **required** *boolean* - required field

#### datetime
```
type: DateTime
input: <input type="datetime-local" />
```

- **required** *boolean* - required field
- **format** *string* - formatting for date
- **yearMin** *integer* - minimal year
- **yearMax** *integer* - maximum year

#### integer
```
type: Integer
input: <input type="number" />
```

- **max** *integer* - maximum value
- **min** *integer* - minimal value
- **required** *boolean* - required field

#### float
```
type: Float
input: <input type="number" />
```

- **max** *integer* - maximum value
- **min** *integer* - minimal value
- **required** *boolean* - required field

#### file
```
type: String
input: <input type="file" multiple? />
```

- **required** *boolean* - required field
- **many** *boolean* - array of files

#### relationship
```
type: String
input: <input type="select" multiple? />
```

- **required** *boolean* - required field
- **many** *boolean* - array of relationships

#### json
```
type: Object
input: <textarea />
```

- **required** *boolean* - required field

## Functions

### Auth

Password-based strategy authentication.

```
POST /api/login

{
  "login": "testLogin",
  "password": "testPassword"
}
```

### Queue

Add job to queue

```
POST /api/queue

{
  "queue": "queueName",
  "job": {
    //job data...
  }
}
```

### Email

Send email

```
POST /api/sendmail

{
  "to": "test@domain.com",
  "subject": "Test email subject",
  "body": "Test email body"
}
```
