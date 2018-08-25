// import our initialized express app and http module
const app = require("./app");
const http = require("http");

// select the port assigned by the environment or 3000 and normalize the port into a string, number, or false
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// create server
const server = http.createServer(app);

// the app will listen to requests at port 3000 or whatever the environment assigns
// this allows us to run our app from localhost:3000
server.listen(port);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

server.on("listening", () => {
  console.log(`server is listening for requests on port ${server.address().port}`);
});
