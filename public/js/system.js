// Create a client instance
client = new Paho.MQTT.Client('localhost', Number(9002), "Ui");

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});

var freeMemory;

// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  client.subscribe("system/performance");
  //message = new Paho.MQTT.Message("Hello");
  //message.destinationName = "/World";
  //client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  var systemInfo = JSON.parse(message.payloadString);
  var availableMemoryPercent = Math.round(systemInfo.freeMemory / systemInfo.totalMemory * 100);
  document.querySelector('#availableMemory').value = availableMemoryPercent;
  document.querySelector('#platform').innerHTML = systemInfo.platform;
  debugger;
  document.querySelector('#freeMemory').innerHTML = Math.round(systemInfo.freeMemory/1000000).toLocaleString();
  document.querySelector('#totalMemory').innerHTML = Math.round(systemInfo.totalMemory/1000000).toLocaleString();
}
