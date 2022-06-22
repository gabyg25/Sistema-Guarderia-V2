const express = require('express');
const path = require('path');
const morgan = require('morgan');
const servers = express();

const indexRouter = require('./routers/index');
const { json } = require('express');

//Settig 
servers.set('port',5000);
servers.set('view engine', 'ejs');
servers.set('views', path.join(__dirname,'view'));

// extraccion de datos
servers.use(express.urlencoded({extended:false}));
servers.use(express(json));

//Router
servers.use(indexRouter);

// middleware
servers.use(morgan('dev'));

// Static Files
servers.use(express.static(path.join(__dirname,'public')));

//Server
servers.listen(servers.get('port'), () => {
    console.log(`Server On Port: ${servers.get('port')}`);
});