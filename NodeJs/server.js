let net = require('net')

let server = net.createServer(function(socket){
	socket.on('data', function(data){
		socket.write('你好')
	})
	socket.on('end', function(){
		console.log('断开连接')
	})
	socket.write('欢迎光临')
})

server.listen(8124, function(){
	console.log('server bound')
})