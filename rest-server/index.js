
// import requirements
require('dotenv').config();

const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./routes');
const db = require('./sql');
const port = process.env.PORT;

//instantiate express
const app = express();

// use middleware
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client-angular')));

app.use('/assets', express.static(path.join(__dirname, '../node_modules/angular')));

// use routes
app.use('/api', router);

// listen with server
app.listen(process.env.PORT, () => {
  console.log('server listening on: ', process.env.PORT);
});
