const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
    name: 'neko',
    alias: [''],
    deskripsi: 'Mengirim Random NEKO',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const getNekos = async() => {
            const response = await axios.get('https://nekos.life/api/neko');
            const res = response.data;
            return res;
        };
        const result = await getNekos();
        const Embed = new Discord.MessageEmbed()
            .setColor('#ff9900')
            .setTitle("Here's Your Neko OwO")
            .setImage(result.neko);
        return message.channel.send(Embed);
    }
};
