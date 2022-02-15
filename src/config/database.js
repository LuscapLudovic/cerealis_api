const {Client} = require('pg');
const client = new Client({
    host: process.env.DB_HOST,
    database: process.env.DB_BASE,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});
client.connect();
module.exports = client;
