const Discord = require("discord.js");

module.exports = {
  name: "ban",
    deskripsi: "Banned Member",
    run: (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send("Sayangnya anda bukan admin :(")
    }
    if(!message.guild.me.hasPermission("BAN_MEMBERS")){
      return message.channel.send("Admin ken saya");
    }
    if(!args[0]){
      return message.channel.send("Id yang mau diban ?");
    }
  let target = args[0];
  let member = message.guild.members.cache.get(target) || message.mentions.members.first()
  if (!member) return message.reply(`membernya gada Sahabat`)
  member.ban()
  }
}