var os = require('os'),
  mqtt = require('mqtt'),
  stringify = require('json-stringify'),
  client  = mqtt.connect('mqtt://localhost:1883');

setInterval(function() {
  var performance = {
    'cpus': os.cpus(),
    'totalMemory': os.totalmem(),
    'freeMemory': os.freemem(),
    'loadAverage': os.loadavg(),
    'platform': os.platform()
  };

  client.publish('performance', stringify(performance));

}, 1);

client.on('connect', function() {
  client.subscribe('performance', function() {
    client.on('message', function (topic, message, packet) {
      console.log("Received '" + message + "' on '" + topic + "'");
    });
  });

});
