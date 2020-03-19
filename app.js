const express = require('express');
const database = require('./models/database');
const path = require('path');
const getAllUrlsRoute = require('./routes/getAllUrlRoute');
const formAllUrlRoute  = require('./routes/formUrlRoute');
const variableUrlRoute = require('./routes/variableUrlRoute');
const app = express()

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const {urls} = database;

// const loadTables = async () => {
//     await urls()
//     .then(() => console.log('completed'))
//     .catch((e) => console.log(e))
// }
// loadTables()

app.use(getAllUrlsRoute)
app.use(formAllUrlRoute)
app.use(variableUrlRoute)

module.exports = app;
