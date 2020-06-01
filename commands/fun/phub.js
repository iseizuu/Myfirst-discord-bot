const Discord = require("discord.js");
const request = require('request');

module.exports = {
    name: "pornhub",
    alias: ["phub","phublogo"],
    category: "info",
     deskripsi: "Membuat PHub logo",
    usage: "<name>",
    run: async (client, message, args) => {
           if(!args[1]) return message.reply("Masukan text sesukamu, ingat hanya 2 kata ya ! \n \`example : aes phub David Gadgetin\`");
                   
         let text1 = args[0]; 
         let text2 = args[1];
          const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setImage(`https://api.alexflipnote.dev/pornhub?text=${text1}&text2=${text2}`) 
    message.channel.send({embed});

}
}