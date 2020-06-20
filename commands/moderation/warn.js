const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Ah, Dibutuhkan ADMINISTRATOR Permission")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("Mention Usernya yang mau diwarn - warn @mention <reaosn>")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Hmmm, mana bisa warn sesama kaumku ? xixiixix")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("Warn dirimu sendiri? maap ga bisa")
    }
    
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("Dih, Ngewarn ko ga ada alasannya?")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    }
    
  
  } 
}