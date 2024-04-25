
// var express = require('express');
// var router = require('./routes/index');

import express from 'express';
import todoRouter from './routes/todo.js';
import mongoose from 'mongoose';
import cors from 'cors';

await mongoose.connect('mongodb://localhost:27017/Todo');

const  app = express();
app.use(cors());
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static('public'));



app.use('/', todoRouter);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
