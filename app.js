require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var mongoose = require('mongoose');

// This reads your database connection string from a .env file that you need
// to create at the root of the project, this reads an attribute called
// DATABASE_URL that you have to define yourself. Please note that the code
// will not run if a database connection isn't present.
const mongoConnection = process.env.DATABASE_URL;

mongoose.connect(mongoConnection);
const db = mongoose.connection;

// Logs when database returns an error
db.on('error', (error) => {
    console.log(error)
})

// Logs when your database is accessible
db.on('connected', () => {
    console.log('Database connection successful!')
})
var indexRouter = require('./routes/index');

var app = express();

// Middle-wares
app.use(helmet.hidePoweredBy());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routers
app.use('/', indexRouter);

module.exports = app;
