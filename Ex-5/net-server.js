var net = require("net");
const prompt = require("prompt-sync")({ sigint: true });
var server = net.createServer(function(connection) {
    console.log('Client connected.');
    connection.on('end', function() {
        console.log('Client disconnected.');
    });
  
    const a = prompt("Enter a message: ");
    //console.log(a);
    connection.write(a);
    connection.pipe(connection);
});
server.listen(5000, function() {
    console.log('Server is listening.');
});
