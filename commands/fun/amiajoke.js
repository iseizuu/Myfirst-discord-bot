const Discord = require('discord.js');

module.exports = {
    name: "amiajoke",
    run: (client, message, args) => {
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL() : message.author.avatarURL();
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setImage(`https://api.alexflipnote.dev/amiajoke?image=` + avatar) 
    message.channel.send({embed});
  }
}
