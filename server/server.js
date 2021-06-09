const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');

dotenv.config();
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database connected"));
mongoose.set('useFindAndModify', false);


app.use(express.json())

app.use('/', routesUrls);
app.listen(3001, function () {
    console.log("Running");
});