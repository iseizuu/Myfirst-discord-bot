const Discord = require("discord.js");
const axios = require('axios');
module.exports = {
  name: "catfact",
    deskripsi: "Wanna Hearing my jokes?",
    run: async (client, message, args) => {
        let getJoke = async () => {
              let response = await axios.get(
        "https://catfact.ninja/fact?max_length=140"
        );
      let joke = response.data;
      return joke;
    };
  let jokeValue = await getJoke();
        let Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Cats fact today for ${message.member.displayName} \n\n  ** ▬▬▬▬▬▬▬▬▬▬▬▬\n ${jokeValue.fact} \n▬▬▬▬▬▬▬▬▬▬▬▬ **`)
            return message.channel.send(Embed)
  }
}