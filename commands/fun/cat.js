const Discord = require('discord.js');
const axios = require('axios');
module.exports = {
    name: 'cat',
    alias: [''],
    deskripsi: 'How cute my neko?',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const getCat = async() => {
            const response = await axios.get('https://aws.random.cat/meow');
            const res = response.data;
            return res;
        };
        const ress = await getCat();
        const Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`Im a neko ${message.member.displayName}`)
            .setImage(`${ress.file}`);
        return message.channel.send(Embed);
    }
};
