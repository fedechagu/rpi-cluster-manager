var express = require('express'),
    router = express.Router(),
    os = require('os');
    
/* GET system usage */
router.get('/system', function(req, res, next) {
  res.send({
    'cpus': os.cpus(),
    'totalMemory': os.totalmem(),
    'freeMemory': os.freemem(),
    'loadAverage': os.loadavg(),
    'platform': os.platform()
  });
});

module.exports = router;
