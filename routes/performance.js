var express = require('express'),
    router = express.Router(),
    util  = require('util'),
    spawn = require('child_process').spawn;

/* GET cpu usage */
router.get('/cpu', function(req, res, next) {
  var memory  = spawn('sh', ['../bash_scripts_available_memory.sh']);
  ls.stdout.on('data', function (data) {
    res.send(data);
  });
});

/* GET memory usage */
router.get('/memory', function(req, res, next) {
  res.send({
    'available': 12312,
    'used': 1234
  });
});

module.exports = router;
