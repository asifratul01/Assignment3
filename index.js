const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is Home Page</h1>');
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is About Page</h1>');
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is Contact Page</h1>');
    res.end();
  } else if (req.url == '/file-write') {
    fs.writeFile('demo.txt', 'Hello World', function (error) {
      if (error) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>File Write Fail</h1>');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>File Write Success</h1>');
        res.end();
      }
    });
  } else {
    res.write('<h1>404!Page not found</h1>');
    res.end();
  }
});
server.listen(5500);
console.log('It is listening on port 5500');
