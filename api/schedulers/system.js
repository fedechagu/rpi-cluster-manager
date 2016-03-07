const os = require('os'),
      mqtt = require('mqtt'),
      stringify = require('json-stringify'),
      r = require('rethinkdb'),
      client  = mqtt.connect('mqtt://localhost:1884')

var connection = null;
r.connect( {host: 'localhost', port: 28015, db: 'rpi_cluster'}, function(err, conn) {
    if (err) throw err;
    connection = conn;
});

setInterval(function() {

  var performance = {
    'cpus': os.cpus(),
    'totalMemory': os.totalmem(),
    'freeMemory': os.freemem(),
    'loadAverage': os.loadavg(),
    'platform': os.platform()
  };

  client.publish('system/performance', stringify(performance));

  //r.table('devices').insert(performance).run(connection);

}, 1000);
