const express = require('express');
const app = express();
const countRoutes = require('./routes/index');

//middlewares
app.use(express.json());

//config
app.set('port', 4000);


//routes
app.use('/api/v1',countRoutes);

module.exports = app;