### PrivateDB Package

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

The MyDB package is a powerful database management library that provides easy-to-use functions for interacting with database. 

## Features

- Connect to your private data base
- Fetch and manipulate data
- Handle transactions
- Manage database connections

## Installation

Install the package :-

```
npm i privatedb
```

## Usage 

To connect to your database
```js
const db = require("privatedb")
db.connect();
```

To write a Data 
```js
let someVariable ={
    name:'Someone'
    age:'18'
}
db.write(someVariable)
```

To find a Data
```js
const someData = db.find(name,'Someone')
```

To find all the data associated
```js
const someData=db.findAll(age,'18')
```

To edit a old data 
```js
db.edit(name,'Someone','Otherone')
/**       ^      ^         ^
 *        |      |       New Data
 *        |    Old Data  
 *       Variable
*/
```