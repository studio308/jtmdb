[![Travis build status](https://travis-ci.com/studio308/jtmdb.svg?branch=master)](https://travis-ci.com/github/studio308/jtmdb)
[![NPM version](http://img.shields.io/npm/v/jtmdb.svg?style=flat-square)](https://www.npmjs.org/package/jtmdb)

## Jtmdb - A Javascript client library for The Movie Database API

You want to interact with The Movie Database's API, and you want to use Typescript? Oh, you are in for a treat. Jtmdb is the library to do just that. 

### Installation

`npm i jtmdb`

### Configuration

Jtmdb will only work with your API Read Access Token (v4 auth).

```typescript
import { Jtmdb } from 'jtmdb';

const jtmdb = new Jtmdb({
  v4AccessToken: 'yourTmdbV4AccessToken'
})
```

### Usage

Jtmdb has three generic methods (`get`, `post`, and `delete`) to handle interacting with endpoints not yet implemented.

```typescript
let results = await jtmdb.get('/version/resource', {
  query: 'parameters'
})

results = await jtmdb.post('/version/resource', {
  body: 'values'
}, {
  query: 'parameters'
})

results = await jtmdb.delete('/version/resource', {
  query: 'parameters'
})
```

The intention for Jtmdb is to have all TMDb endpoints implemented with the following format:

```typescript
jtmdb.{module}.{method}
```

For example:
```typescript
const results = await jtmdb.search.multi({
  query: 'Fight Club'
})
```

Currently, the following modules of TMDb API are implemented:

- Movies
- People
- Search