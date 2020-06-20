const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
 name: "moe",
    category: "fun",
    deskripsi: "Mengirim Random anime dari awnime",
    run: async (client, message, args) => {
    randomPuppy('awwnime')
    .then(url => {
        const embed = new Discord.MessageEmbed()
        .setImage(url)
        .setColor('#ff9900')
        return message.channel.send({ embed });
   })
   }
}