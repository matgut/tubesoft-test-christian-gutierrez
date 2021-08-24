const express = require('express');
const app = express();
const pkg = require('../package.json');
const cors = require('cors');
const countRoutes = require('./routes/index');

//middlewares
app.use(cors());
app.use(express.json());

//config
app.set('port',3001);
app.set('pkg', pkg);



//routes
app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        desciption: app.get('pkg').description,
        version: app.get('pkg').version
    });
});
app.use('/api/v1',countRoutes);


module.exports = app;