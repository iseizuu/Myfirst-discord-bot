const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  alias: ["pp", "ava"],
  deskripsi: "Untuk Menampilkan avatar",
  run: async (client, message, args) => {
  let target = args[0];
  let member = message.guild.members.cache.get(target) || message.mentions.members.first() || message.member;
    let Embed = new Discord.MessageEmbed()
    .setColor(message.member.displayHexColor === "#000000" ? "RANDOM" : message.member.displayHexColor)
    .setImage(message.mentions.members.first().user.displayAvatarURL(({ size: 512 })))
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL)
    return message.channel.send(Embed)
  }
}