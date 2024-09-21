const express = require('express');
const mysql = require('mysql');

const app = express()
const db=mysql.createConnection()
app.listen(3000, () => {
    console.log('logged')
})