const Discord = require("discord.js");
const superagent = require('superagent');
const axios = require('axios');
module.exports = {
  name: "neko",
    deskripsi: "Im a Neko",
    run: async (client, message, args) => {

        let getJoke = async () => {
              let response = await axios.get(
        "https://nekos.life/api/neko"
        );
      let joke = response.data;
      return joke;
    };
  let jokeValue = await getJoke();
        let Embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Here's Your Neko OwO")
    .setImage(jokeValue.neko) 
            return message.channel.send(Embed)
    
    
  }
}