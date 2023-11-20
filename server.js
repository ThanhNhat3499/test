const express = require('express');
const path = require('path');

const app = express();
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
  
  //   res.setHeader('Content-Type', 'application/javascript');
  
    res.sendFile(filePath);
  });
app.get('/test', (req, res) => {
  const filePath = path.join(__dirname, 'example.js');

  res.setHeader('Content-Type', 'text/plain');

  res.sendFile(filePath);
});
app.listen(3001);