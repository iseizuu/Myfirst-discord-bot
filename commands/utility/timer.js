const Discord = require("discord.js");
const superagent = require('superagent');const ms = require('ms');

module.exports = {
  name: "timer",
      alias: ["settimer","sett"],
    deskripsi: "Set timer",
    run: async (client, message, args) => {
        if (message.author.id !== '271576733168173057') return message.channel.send('no, u cant');
 let Timer = args[0];

  if(!args[0]){
    return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
  }

  message.channel.send(":white_check_mark: " + "| Timer Started for: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` The Timer Has FINISHED!, it lasted: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));
}
}