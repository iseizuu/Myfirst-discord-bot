const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'prefixreset',
    alias: ['deleteprefix'],
    deskripsi: 'Menghapus prefix server',
    usage: 'prefix <new-prefix>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Command prefix hanya bisa diset oleh Admin');
        db.delete(`prefix_${message.guild.id}`);
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('✅ Prefix Direset')
            .setDescription('Prefix direset menjadi Default /`aes`');
        return message.channel.send(embed);
    }
};
