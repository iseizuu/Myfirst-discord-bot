const Discord = require('discord.js');
const { Client, Collection } = require("discord.js");
const client = new Client();


//24jam nonstop
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


client.login(process.env.TOKEN)