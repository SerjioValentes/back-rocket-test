"use strict";
var Pool = require('pg').Pool;
var pool = new Pool({
    host: '127.0.0.1',
    port: 5432,
    database: 'testbd',
    user: 'postgres',
    password: '123'
});
module.exports = pool;
