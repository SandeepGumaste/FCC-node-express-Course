const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  const url = req.url;
  if (url === "/") {
    console.log(req.url);
    console.log("user hit the server");
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>home page</h1>");
    res.end();
  } else if (url === "/about") {
    //about page
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  } else {
    //Error page
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Error page</h1>");
    res.end();
  }
});

server.listen(5000);
