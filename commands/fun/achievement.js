//https://api.alexflipnote.dev/achievement?text=text&icon

const Discord = require("discord.js");

module.exports = {
    name: "achievement",
    alias: ["mcachiev","achiev"],
    category: "info",
     deskripsi: "Membuat PHub logo",
    usage: "<name>",
    run: async (client, message, args) => {
           if(!args[0]) return message.reply("Masukan text seskuamu");
          let text1 = args[0]; 
          const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setImage(`https://api.alexflipnote.dev/achievement?text=${text1}&icon`) 
    message.channel.send({embed});

}
}