"use strict";

var pg = require('pg');

var dotenv = require('dotenv');

dotenv.config();
var pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL2 || process.env.DATABASE_URL
});
pool.on('connect', function () {
  console.log('connected to the Database');
});
/**
 * Create Parcels Table
 */

var createParcelsTable = function createParcelsTable() {
  var queryText = "CREATE TABLE IF NOT EXISTS\n  parcels(\n  id UUID PRIMARY KEY,\n  destination TEXT NOT NULL,\n  user_id UUID NOT NULL,\n  price INT,\n  pickup_location TEXT NOT NULL,\n  created_date TIMESTAMP,\n  modified_date TIMESTAMP,\n  status VARCHAR(128),\n  present_location TEXT,\n  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE\n  )";
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  })["catch"](function (err) {
    console.log(err.toString());
    pool.end();
  });
};
/**
 * Create Users Table
 */


var createUsersTable = function createUsersTable() {
  var queryText = "CREATE TABLE IF NOT EXISTS\n  users(\n  id UUID PRIMARY KEY,\n  first_name VARCHAR(128),\n  last_name VARCHAR(128),\n  other_name VARCHAR(128),\n  phone INTEGER,\n  email VARCHAR(128) UNIQUE NOT NULL,\n  password VARCHAR(128) NOT NULL,\n  is_admin BOOLEAN,\n  created_date TIMESTAMP,\n  modified_date TIMESTAMP\n  )";
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  })["catch"](function (err) {
    console.log(err.toString());
    pool.end();
  });
};
/**
 * Drop Parcels Table
 */


var dropParcelsTable = function dropParcelsTable() {
  var queryText = 'DROP TABLE IF EXISTS parcels';
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  })["catch"](function (err) {
    console.log(err.toString());
    pool.end();
  });
};
/**
 * Drop Users Table
 */


var dropUsersTable = function dropUsersTable() {
  var queryText = 'DROP TABLE IF EXISTS users';
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  })["catch"](function (err) {
    console.log(err.toString());
    pool.end();
  });
};
/**
 * Create All Tables
 */


var createAllTables = function createAllTables() {
  createParcelsTable();
  createUsersTable();
};
/**
 * Drop All Tables
 */


var dropAllTables = function dropAllTables() {
  dropParcelsTable();
  dropUsersTable();
};

pool.on('remove', function () {
  process.exit(0);
});
module.exports = {
  createParcelsTable: createParcelsTable,
  createUsersTable: createUsersTable,
  createAllTables: createAllTables,
  dropUsersTable: dropUsersTable,
  dropParcelsTable: dropParcelsTable,
  dropAllTables: dropAllTables
};

require('make-runnable');