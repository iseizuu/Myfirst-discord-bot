const db = require("quick.db")

module.exports = {
  name: "resetwarns",
  alias: ["rwarn","warn-reset","warnr"],
  usage: "rwarns <@user>",
  description: "Reset warnings of mentioned person",
  run: async (client, message, args) => {
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Anda bukan admin, sorry xixixixi")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("Mention juga user yang mau direset .")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Saya tidak bisa warn bot")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("Mana bisa reset warn diri sendiri")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} Ngga ada salah`)
    }
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`)
    await message.channel.send(`Reseted all warnings of ${message.mentions.users.first().username}`)
    
  
    
}
}