const Discord = require("discord.js");
const superagent = require('superagent');
const axios = require('axios');
const { getMember } = require("../../function.js");
module.exports = {
  name: "slap",
    deskripsi: "Slap seseorang :v",
    run: async (client, message, args) => {
      let person = getMember(message, args[0]);
        if (!args[0]) return message.reply("Tag Sesorang yang membuat kamu zbll !!1!1 ");

        if (!person || message.author.id === person.id) {
            person = message.guild.members.cache
                .filter(m => m.id !== message.author.id)
                .random();
        }

        let getJoke = async () => {
              let response = await axios.get(
        "https://nekos.life/api/v2/img/slap"
        );
      let joke = response.data;
      return joke;
    };
  let jokeValue = await getJoke();
        let Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`OwO, ${message.author.username} Slappps ${message.mentions.users.first().username}`)
            .setImage(`${jokeValue.url}`)
            return message.channel.send(Embed)
    
    
  }
}