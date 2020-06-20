const Discord = require("discord.js");
const axios = require('axios');
module.exports = {
  name: "cat",
    deskripsi: "How cute my neko?",
    run: async (client, message, args) => {
        let getJoke = async () => {
              let response = await axios.get(
        "https://aws.random.cat/meow"
        );
      let joke = response.data;
      return joke;
    };
  let jokeValue = await getJoke();
        let Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Im a neko ${message.member.displayName}`)
            .setImage(`${jokeValue.file}`)
            return message.channel.send(Embed)
  }
}