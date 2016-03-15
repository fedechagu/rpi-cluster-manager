const os = require('os')
const mqtt = require('mqtt')
const stringify = require('json-stringify')
const r = require('rethinkdb')
const client = mqtt.connect('mqtt://localhost:1884')

let connection
r.connect({host: 'localhost', port: 28015, db: 'rpi_cluster'}, function (err, conn) {
  if (err) throw err
  connection = conn
})

setInterval(function () {
  var performance = {
    'cpus': os.cpus(),
    'totalMemory': os.totalmem(),
    'freeMemory': os.freemem(),
    'loadAverage': os.loadavg(),
    'platform': os.platform()
  }

  client.publish('system/performance', stringify(performance))
}, 1000)
