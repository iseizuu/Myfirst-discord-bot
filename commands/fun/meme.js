const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    category: "fun",
    deskripsi: "Mengirim random meme",
    run: async (client, message, args) => {
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const image = await randomPuppy(random);
        let Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(image)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL)
            return message.channel.send(Embed)
    }
}