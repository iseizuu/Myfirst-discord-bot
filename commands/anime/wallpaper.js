const Discord = require("discord.js");
const axios = require('axios');

module.exports = {
    name: "wp",
  alias: ["wallpaper"],
    category: "fun",
    deskripsi: "Anime wallpaper",
    run: async (client, message, args) => {
        let getJoke = async () => {
              let response = await axios.get(
        "https://nekos.life/api/v2/img/wallpaper"
        );
      let joke = response.data;
      return joke;
    };
  let jokeValue = await getJoke();
        let Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .setImage(`${jokeValue.url}`)
            return message.channel.send(Embed)
  }
}
