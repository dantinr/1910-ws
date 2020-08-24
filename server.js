const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 });
 
wss.on('connection', function connection(ws) {
	//接收客户端数据
	ws.on('message', function incoming(message) {

		ws.send(message);	//向客户端发送数据

	});

});

