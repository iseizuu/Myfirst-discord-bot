const Discord = require("discord.js");

module.exports = {
  name: "adminsay",
      alias: ["as"],
  deskripsi: "Administrator only",
  run: async (client, message, args) => {
    
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Oh no, anda bukan admin :)")
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
  }
}