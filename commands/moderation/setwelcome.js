const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "setwelcome",
    deskripsi: "Beri Greeting message kepada member baru",
    run: async (client, message, args) => {
    
    let channel = message.mentions.channels.first() //mentioned channel
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
     return message.reply("Nope, Admin only").then(m => m.delete({ timeout: 4000 }));
    }
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id) //set id in var
    
    message.channel.send(`Welcome Channel Diaktifkan ${channel}`) //send success message
  }
}