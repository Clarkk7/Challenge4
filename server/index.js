console.log("Implement servermu disini yak 😝!");
const http = require('http');
const fs = require('fs');

const PORT = 8000;

function onRequest(req, res) {
    switch (req.url) {
      case '/':
        res.writeHead(200)
        req.url = "index.html";
        break;
      case '/search':
        res.writeHead(200)
        req.url = "index.example.html";
        break;
    }
    
    let path = "public/" + req.url;
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    })
  }
    const server = http.createServer(onRequest);

    server.listen(PORT, 'localhost', () => {
        console.log('Server sudah berjalan, silahkan buka http://localhost:%d', PORT)
    })