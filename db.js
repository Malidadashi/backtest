const express = require('express');
const mongoose = require('mongoose')
const app = express();

const uri = "mongodb+srv://ali:Ma101010@nodejs.sgw7o.mongodb.net/?retryWrites=true&w=majority&appName=nodejs";


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));



app.listen(3000);