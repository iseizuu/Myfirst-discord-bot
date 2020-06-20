const db = require("quick.db")
const { default_prefix } = require("../../config.json")
const Discord = require('discord.js')
module.exports = {
  name: "prefixset",
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
    //PERMISSION
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Command Prefix hanya diperuntukkan oleh Admin")
    }
    
    if(!args[0]) {
      let embed1 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Prefix Command Detail')
      .setDescription('Kamu dapat mengganti prefix bot sesuai kemauan anda.')
      .addField('**Default Prefix**', `${default_prefix}`)
      .addField('**Usage**', `${default_prefix} prefixset <prefix>`)
      .addField('**Reset Prefix**', 'Botprefix **prefixreset**')
      return message.channel.send(embed1)
    } 
    
    if(args[1]) {
      return message.channel.send("Mana bisa 2 kata __-")
    }
    
    if(args[0].length > 3) {
      return message.channel.send("Mohon masukan maksimal 3 kata doang")
    }

    db.set(`prefix_${message.guild.id}`, args[0])
    let embed = new Discord.MessageEmbed()
    .setTitle('Mengganti Prefix')
    .setColor('RANDOM')
    .setDescription(`Prefix Bot sekarang \`${args[0]}\``)
    .setTimestamp()
  await message.channel.send(embed)
  }
}