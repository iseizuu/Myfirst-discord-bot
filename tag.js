const Discord = require('discord.js');
const { MessageEmbed: Embed } = require("discord.js");
const {prefix = 'aes',
} = require('./config.json');
const ytdl = require('ytdl-core');

const client = new Discord.Client();
const queue = new Map();

client.on('message', async message => {
  
  let embed = new Embed()
  .setColor("2F3136")
  .setDescription(`Hai **${message.author.tag}**, prefixku adalah **${prefix}**   🎉🥳`)
  if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`)
  return message.channel.send(embed)
});

client.login(process.env.TOKEN)