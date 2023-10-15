const http = require("http");
const router = require("./router/index");

const server = http.createServer(router);
server.listen(2007);