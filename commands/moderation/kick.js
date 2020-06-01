const Discord = require("discord.js");

module.exports = {
  name: "kick",
    deskripsi: "Kick member",
    run: (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send("Kick tidak berfungsi kecuali admin")
    }
    if(!message.guild.me.hasPermission("BAN_MEMBERS")){
      return message.channel.send("Saya bukan admin sayang");
    }
    if(!args[0]){
      return message.channel.send("Id yang mau dikick ?");
    }
  let target = args[0];
  let member = message.guild.members.cache.get(target) || message.mentions.members.first()
  if (!member) return message.reply(`membernya gada tolol`)
  member.kick()
      return message.reply(` Terkick.`);
  }
}