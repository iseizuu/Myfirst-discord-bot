const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
    name: 'wallpaper',
    alias: ['wall', 'wp'],
    deskripsi: 'Menampilkan Anime Wallpaper',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const getNekos = async() => {
            const response = await axios.get('https://nekos.life/api/v2/img/wallpaper');
            const res = response.data;
            return res;
        };
        const result = await getNekos();
        const Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('Here is your Wallpaper')
            .addField('Download', `[Download here](${result.url})`
            .setImage(`${result.url}`);
            .setFooter(`Requested by ${message.author.tag}`)
        return message.channel.send(Embed);
    }
};
