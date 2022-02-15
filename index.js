require('dotenv').config();
let express = require('express');
let boarder = require('body-parser');
let apiRouter = require('./router').router;
let cors = require('cors');

const server = express();

server.use(cors());

server.use(boarder.urlencoded({ extended: true }));
server.use(boarder.json());

server.use('/api/',apiRouter());

server.listen(process.env.PORT, function () {
    console.log("listen port : "+ process.env.PORT);
});

module.exports = server