const WebSocket = require('ws');

const wsserver = new WebSocket.WebSocketServer({ port: 9999 });

wsserver.on('connection', function connection(wsocket) {
  
  wsocket.on('message', function message(data, isBinary) {
    console.log("got message", data);
    wsserver.clients.forEach(function each(client) {
      if (client !== wsocket && client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

});