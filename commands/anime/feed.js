const Discord = require('discord.js');
const axios = require('axios');
module.exports = {
    name: 'feed',
    alias: [''],
    deskripsi: '',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const getNekos = async() => {
            const response = await axios.get('https://nekos.life/api/v2/img/feed');
            const res = response.data;
            return res;
        };
        const result = await getNekos();
        const Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Feeding')
            .setTimestamp()
            .setImage(`${result.url}`);
        return message.channel.send(Embed);
    }
};
