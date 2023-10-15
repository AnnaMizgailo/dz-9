const getRouter = require("./get"); 
const postRouter = require("./post");

function handler(request, response) {
  switch (request.method) {
    case "GET":
      getRouter(request, response);
      break;
    case "POST":
      postRouter(request, response);
      break;
  }
}

module.exports = handler;