const Discord = require('discord.js');
const { Client, Collection } = require("discord.js");
const client = new Client();

client.on('message', async message => {
let anyyeong = message.channel.send({
  })
  if (message.author.bot || !message.guild) return;
  let korea = ["anyyeong","annyeonghaseyo","annyeonghaseyo!","yeoboseyo","yeoboseyo!"]
  if(korea.includes(message.content))
  return message.channel.send('안녕하세요 🤞!');
});

client.login(process.env.TOKEN)