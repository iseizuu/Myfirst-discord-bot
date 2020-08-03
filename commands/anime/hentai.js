const Discord = require("discord.js");
const superagent = require('superagent');
const axios = require('axios');
module.exports = {
  name: "hentai",
      alias: ["xxx","nfsw"],
    deskripsi: "Dont do with this commands",
    run: async (client, message, args) => {
        //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Fiture ini hanya bisa digunakan oleh admin :)")
      if (!message.channel.nsfw && message.member.permissions.has("MANAGE_CHANNELS") && message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send("Need nfsw channel");
        let getJoke = async () => {
              let response = await axios.get(
        "https://nekos.life/api/v2/img/hentai"
        );
      let joke = response.data;
      return joke;
    };
  let jokeValue = await getJoke();
        let Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .setImage(jokeValue.url)
            return message.channel.send(Embed)
    
    
  }
}
