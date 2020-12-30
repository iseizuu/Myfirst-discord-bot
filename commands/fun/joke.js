const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
    name: 'joke',
    alias: [''],
    deskripsi: 'Mau mendengar joke?',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const getJoke = async() => {
            const response = await axios.get('http://www.official-joke-api.appspot.com/random_joke');
            const joke = response.data;
            return joke;
        };
        const jokeValue = await getJoke();
        const Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`Ini joke untukmu ${message.member.displayName} \n\n  ** ▬▬▬▬▬▬▬▬▬▬▬▬\n ${jokeValue.setup} ** \n\n Answer : \n ** ${jokeValue.punchline} \n▬▬▬▬▬▬▬▬▬▬▬▬ **`);
        return message.channel.send(Embed);
    }
};
