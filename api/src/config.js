const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();//read .env and find variables


const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env;

assert(DB_NAME, 'DATABASE NAME IS REQUIRED');
assert(DB_USER, 'DATABASE USER IS REQUIRED');
assert(DB_PASSWORD, 'DATABASE PASSWORD IS REQUIRED');
assert(DB_HOST, 'DATABASE HOST IS REQUIRED');
assert(DB_DIALECT, 'DATABASE DIALECT IS REQUIRED');

module.exports = {
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_password:process.env.DB_PASSWORD,
    db_host:process.env.DB_HOST,
    db_dialect: process.env.DB_DIALECT
}