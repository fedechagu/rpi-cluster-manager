var express = require('express'),
    router = express.Router();

/* GET cpu usage */
router.get('/cpu', function(req, res, next) {
  res.send('80%');
});

/* GET memory usage */
router.get('/memory', function(req, res, next) {
  res.send({
    'available': 12312,
    'used': 1234
  });
});

module.exports = router;
