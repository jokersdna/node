//Node JS Application sample
const http = require('http');

const server = http.create((req, res) => {
  res.statuscode= 200;
  res.// A simple Node.js web server
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, GitHub Actions and Docker!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});	
