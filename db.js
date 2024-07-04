/** Database for lunchly */

const pg = require("pg");
require('dotenv').config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const db = new pg.Client(`postgresql://${username}:${password}@localhost:5432/lunchly`);

db.connect()
    .then(() => console.log('Connected to the Lunchly database'))
    .catch(err => console.error('Connection error', err));

module.exports = db;
