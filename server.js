'use strict'


const cors = require('cors')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const index = require('./routes');
const {appName, Port} = require('./config/config')

app.use(cors())
app.use(express.json());
app.use(express.json({ limit: "10mb" }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieparser());
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use('/', index)



app.listen(Port, () => {
    console.log(`Listening on ${Port}`)
})