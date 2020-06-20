const db = require("quick.db")
const { default_prefix } = require("../../config.json")
const Discord = require('discord.js')
module.exports = {
  name: "prefixreset",
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
    //PERMISSION
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Command prefix hanya dipetukkan oleh Admin")
    }
    
      db.delete(`prefix_${message.guild.id}`)
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('✅ Prefix Direset')
    .setDescription('Prefix direset menjadi Default /\`aes\`')
     return await message.channel.send(embed)
     
  }
}