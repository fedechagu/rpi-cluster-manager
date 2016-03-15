const express = require('express')
const router = express.Router()
const mqtt = require('mqtt')
const stringify = require('json-stringify')
const r = require('rethinkdb')
const mqttClient = mqtt.connect('mqtt://localhost:1884')

let connection
r.connect({host: 'localhost', port: 28015, db: 'rpi_cluster'}, function (err, conn) {
  if (err) throw err
  connection = conn

  r.table('devices').changes().run(connection, function (err, cursor) {
    cursor.each(function (err, row) {
      if (err) throw err
      mqttClient.publish('/devices', stringify(row))
    })
  })
})

/* GET device list */
router.get('/', function (req, res, next) {
  r.table('devices').run(connection, function (err, cursor) {
    if (err) throw err
    cursor.toArray(function (err, results) {
      if (err) throw err
      res.send(results)
    })
  })
})

/* Add device */
router.post('/', function (req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(500).send('Device cannot be empty')
    return
  }

  let device = req.body
  r.table('devices').insert(device).run(connection, function (err, cursor) {
    if (err) throw err
    res.send('Device added')
  })
})

/* Delete device */
router.delete('/:id', function (req, res, next) {
  r.table('devices').get(req.params.id).delete().run(connection, function (err) {
    if (err) throw err
    res.status(200).send()
  })
})

module.exports = router
