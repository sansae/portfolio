// import our initialized express app and http module
const app = require("./app");
const http = require("http");
// create server
const server = http.createServer(app);

// the app will listen to requests at port 3000
// we can run our app with $ node src/server
server.listen(3000);

server.on("listening", () => {
  console.log("server is listening for requests on port 3000");
});
