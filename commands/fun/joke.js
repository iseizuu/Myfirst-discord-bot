const Discord = require("discord.js");
const superagent = require('superagent');
const axios = require('axios');
module.exports = {
  name: "joke",
    deskripsi: "Wanna Hearing my jokes?",
    run: async (client, message, args) => {
        let getJoke = async () => {
              let response = await axios.get(
        "http://www.official-joke-api.appspot.com/random_joke"
        );
      let joke = response.data;
      return joke;
    };
  let jokeValue = await getJoke();
        let Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Here's Joke for you ${message.member.displayName} \n\n  ** ▬▬▬▬▬▬▬▬▬▬▬▬\n ${jokeValue.setup} ** \n\n Answer : \n ** ${jokeValue.punchline} \n▬▬▬▬▬▬▬▬▬▬▬▬ **`)
            return message.channel.send(Embed)
    
    
  }
}