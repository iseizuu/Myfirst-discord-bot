const Discord = require("discord.js");

module.exports = {
  name: "say",
      deskripsi: "Suruh bot untuk bicara",
  run: async (client, message, args) => {
    let sayang = args.join(" ");
    if (!args[0]) return message.reply("Mau ngomong apaan kak?");
    
    let Embed = new Discord.MessageEmbed()
    .setColor(message.member.displayHexColor === "#000000" ? "RANDOM" : message.member.displayHexColor)
    .setDescription(sayang)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL())
      message.channel.send(Embed)
  }
}