const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const bodyParser = require('body-parser');
const rutas = require('./routes/index');


//config
const port = process.env.PORT || 3000;
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(morgan('dev'));

/**** mysql */
//variables de entorno, esas vienen de docker
const mysqlhost = process.env.MYSQLHOST || '192.168.1.25';
const mysqluser = process.env.MYSQLUSER || "root";
const mysqlpass = process.env.MYSQLPASS || "123456789";


//date base

app.use(myConnection(mysql, {
   host: 'localhost',
   user: 'Jhony',
   password: 'Jhony1920.',
   port: 3306,
   database: 'PRUEBALAB'
 }, 'single'));
 
//routes 
app.use('/', rutas);
 



app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))




