var os = require('os'),
    mqtt = require('mqtt'),
    stringify = require('json-stringify'),
    client  = mqtt.connect('mqtt://localhost:1884');

setInterval(function() {

  var performance = {
    'cpus': os.cpus(),
    'totalMemory': os.totalmem(),
    'freeMemory': os.freemem(),
    'loadAverage': os.loadavg(),
    'platform': os.platform()
  };

  client.publish('system/performance', stringify(performance));

}, 1000);
