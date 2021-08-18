const express = require('express');
const app = require('../app');
const router = express.Router();
const { getTimes, registerTimes } = require('../controllers/ChronometerController')

router.get('/times', getTimes)
      .post('/times', registerTimes);


module.exports = router;