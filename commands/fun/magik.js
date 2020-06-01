//https://api.alexflipnote.dev/filter/magik?image=
const Discord = require('discord.js');

module.exports = {
    name: "magik",
    run: (client, message, args) => {
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: "png", size: 512 }) : message.author.avatarURL({ format: "png", size: 512 });
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setImage(`https://api.alexflipnote.dev/filter/magik?image=`+avatar) 
    message.channel.send({embed});
  }
}