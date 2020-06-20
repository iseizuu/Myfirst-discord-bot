const DBL = require('dblapi.js');
const express = require('express');
const http = require('http');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NjkwODY3NjYwNjI2MzMyNiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTg4MDg1MzczfQ.k_qkRcUUhNpk1btWnZkbbcZvjzxS07hfyqdE4MpWn5U

';
const app = express();
const server = http.createServer(app);
const dbl = new DBL(yourDBLTokenHere, { webhookAuth: 'password', webhookServer: server });

dbl.webhook.on('ready', hook => {
  console.log(`Webhook running with path ${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
});

app.get('/', (req, res) => {
  // ...
});

server.listen(5000, () => {
  console.log('Listening');
});