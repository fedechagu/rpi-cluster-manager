var express = require('express');
    router = express.Router(),
    path = require('path');
    os = require('os'),
    mqtt = require('mqtt'),
    stringify = require('json-stringify'),
    r = require('rethinkdb');
    client  = mqtt.connect('mqtt://localhost:1884');

var connection = null;
r.connect( {host: 'localhost', port: 28015, db: 'rpi_cluster'}, function(err, conn) {
    if (err) throw err;
    connection = conn;
});

//r.table('devices').insert(performance).run(connection);

/* GET device list */
router.get('/', function(req, res, next) {
  res.send([
      {
        id: 1,
        name: 'jenkins',
        status: 'online'
      },
      {
        id: 2,
        name: 'mosquitto',
        status: 'online'
      },
      {
        id: 3,
        name: 'nginx',
        status: 'online'
      },
      {
        id: 4,
        name: 'spark-master',
        status: 'online'
      },
      {
        id: 5,
        name: 'spark-slave-1',
        status: 'online'
      },
      {
        id: 6,
        name: 'spark-slave-2',
        status: 'offline'
      }
  ]);
});

module.exports = router;
