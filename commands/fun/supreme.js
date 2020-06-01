const Discord = require("discord.js");
const request = require('request');

module.exports = {
    name: "supreme",
    alias: ["supremelogo"],
    category: "info",
     deskripsi: "Membuat supreme logo",
    usage: "<name>",
    run: async (client, message, args) => {
           if(!args[0]) return message.reply("Masukan text sesukamu, dan jangan lebih 1kata :) ");
         let text1 = args.join(" ");
          const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setImage(`https://api.alexflipnote.dev/supreme?text=${text1}`) 
    message.channel.send({embed});

  }
}