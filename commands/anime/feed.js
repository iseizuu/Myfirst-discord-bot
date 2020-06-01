const Discord = require("discord.js");
const superagent = require('superagent');
const axios = require('axios');
module.exports = {
    name: "feed",
    category: "fun",
    deskripsi: "Feeding Ur waifu xD",
    run: async (client, message, args) => {
        let getJoke = async () => {
              let response = await axios.get(
        "https://nekos.life/api/v2/img/feed"
        );
      let joke = response.data;
      return joke;
    };
  let jokeValue = await getJoke();
        let Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Feeding')
            .setTimestamp()
            .setImage(`${jokeValue.url}`)
            return message.channel.send(Embed)
    
    
  }
}
