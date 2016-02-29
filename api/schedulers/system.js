var os = require('os'),
    mqtt = require('mqtt'),
    stringify = require('json-stringify'),
    r = require('rethinkdb');
    client  = mqtt.connect('mqtt://localhost:1884');

var connection = null;
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
    console.log(connection);

    /*r.db('test').tableCreate('performance').run(connection, function(err, result) {
        if (err) throw err;

    }); */
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

  //r.table('performance').insert(performance);

}, 1000);
