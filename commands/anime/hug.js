const Discord = require('discord.js');
const axios = require('axios');
const { getMember } = require('../../util/Util');
module.exports = {
    name: 'hug',
    alias: ['peluk'],
    deskripsi: 'Peluk seseorang :)',
    usage: 'hug <user>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        let person = getMember(message, args[0]);
        if (!person || message.author.id === person.id) {
            person = message.guild.members.cache
                .filter(mac => mac.id !== message.author.id)
                .random();
        }

        const getNekos = async() => {
            const response = await axios.get('https://nekos.life/api/v2/img/hug');
            const res = response.data;
            return res;
        };
        const res = await getNekos();
        const Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`OwO, ${message.author.username} Memeluk ${person.user.username}`)
            .setImage(`${res.url}`);
        return message.channel.send(Embed);
    }
};
