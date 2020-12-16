const Discord = require('discord.js');
const axios = require('axios');
const { getMember } = require('../../util/Util');

module.exports = {
    name: 'slap',
    alias: ['tampol'],
    deskripsi: 'Tampol seseorang',
    usage: 'slap <user>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        let person = getMember(message, args[0]);
        if (!person || message.author.id === person.id) {
            person = message.guild.members.cache
                .filter(user => user.id !== message.author.id)
                .random();
        }

        const getNekos = async() => {
            const response = await axios.get('https://nekos.life/api/v2/img/slap');
            const res = response.data;
            return res;
        };
        const result = await getNekos();
        const Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`OwO, ${message.author.username} Menampol ${person.user.username}`)
            .setImage(`${result.url}`);
        return message.channel.send(Embed);
    }
};
