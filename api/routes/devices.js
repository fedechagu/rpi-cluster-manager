const express = require('express'),
      router = express.Router(),
      path = require('path'),
      os = require('os'),
      mqtt = require('mqtt'),
      stringify = require('json-stringify'),
      r = require('rethinkdb'),
      mqttClient = mqtt.connect('mqtt://localhost:1884')

let connection = null
r.connect( {host: 'localhost', port: 28015, db: 'rpi_cluster'}, function(err, conn) {
  if (err) throw err
  connection = conn

  r.table('devices').changes().run(connection, function(err, cursor) {
     cursor.next(function(err, row) {
       if (err) throw err
       mqttClient.publish('devices/list', stringify(row.new_val));
     })
  });
})

/* GET device list */
router.get('/', function(req, res, next) {

  r.table('devices').run(connection, function(err, cursor) {
    if (err) throw err;
    cursor.toArray(function(err, results) {
      if (err) throw err
       res.send(results)
    })
  })

})

/* Add device */
router.post('/', function(req, res, next) {

  if(Object.keys(req.body).length == 0) {
    res.status(500).send('Device cannot be empty')
    return
  }

  var device = req.body;

  r.table('devices').insert(device).run(connection, function (err, cursor) {
    if (err) throw err;
    res.send('Device added')
  });
})

module.exports = router;
