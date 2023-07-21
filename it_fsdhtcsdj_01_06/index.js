//
wSocket = require("ws");
wsServer = new wSocket.Server({ port:8000 });
//establish a websocket connection
wsServer.on('connection', (wsClient) => {
  wsClient.send('{ "connection" : "Good!"}');
  //message to Server
  wsClient.on('message', (message) => {
    let clientNo = 0;
    //each listening client
    wsServer
    .clients
    .forEach( client => {
      client.send(`{ "message" : ${message} ${clientNo++}}`);
    });
  });
});

//
