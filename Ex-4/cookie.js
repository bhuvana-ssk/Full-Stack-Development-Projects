const http = require('http');

function parseCookies (request) {
    const list = {};
    const cookieHeader = request.headers?.cookie;
    if (!cookieHeader) return list;

    cookieHeader.split(`;`).forEach(function(cookie) {
        let [ name, ...rest] = cookie.split(`=`);
        name = name?.trim();
        if (!name) return;
        const value = rest.join(`=`).trim();
        if (!value) return;
        list[name] = decodeURIComponent(value);
    });

    return list;
}

const server = http.createServer(function (request, response) {
    // To Read a Cookie
    const cookies = parseCookies(request);

    // To Write a Cookie
    response.writeHead(200, {
        "Set-Cookie": `mycookie=test`,
        "Content-Type": `text/plain`
    });

    response.end("Cookie Set Success !!!  "+cookies.toString());
    response.end(cookies);
}).listen(8080);

const {address, port} = server.address();
console.log(`Server running at :${port}`);