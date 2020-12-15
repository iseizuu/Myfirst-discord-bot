const Discord = require('discord.js');
const axios = require('axios');
module.exports = {
    name: 'hentai',
    alias: ['xxx', 'nfsw'],
    deskripsi: 'Mengirim gambar hentai',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send('Command ini harus berada di nsfw channel');
        const getNekos = async() => {
            const response = await axios.get('https://nekos.life/api/v2/img/hentai');
            const res = response.data;
            return res;
        };
        const result = await getNekos();
        const Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setImage(result.url);
        return message.channel.send(Embed);
    }
};
