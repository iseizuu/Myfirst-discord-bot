/* eslint-disable no-magic-numbers */
const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'aboutme',
    alias: ['stats', 'botinfo'],
    deskripsi: 'Menampilkan Informasi Bot',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        const totalSeconds = process.uptime();
        const realTotalSecs = Math.floor(totalSeconds % 60);
        const days = Math.floor((totalSeconds % 31536000) / 86400);
        const hours = Math.floor((totalSeconds / 3600) % 24);
        const mins = Math.floor((totalSeconds / 60) % 60);
        const embed = new Discord.MessageEmbed()
            .setAuthor('A e s t h e t i c', client.user.displayAvatarURL())
            .setColor('RANDOM')
            .setThumbnail(client.user.avatarURL())
            .addField('Prefix', 'aes')
            .addField('Born On', `${moment.utc(client.user.createdAt).format('MM/DD/YYYY h:mm A')}`)
            .addField('Current Version', '3.0.2')
            .addField('Servers', `${client.guilds.cache.size} servers`, true)
            .addField('Members', `${client.users.cache.size} members`, true)
            .addField('Memory Used', `${Math.round(used * 100) / 100}MB`, true)
            .addField('Cpu Used', `${Math.round(Number(used)) / 10}%`, true)
            .addField('Uptime', `${days} Hari, ${hours} Jam, ${mins} Menit, and ${realTotalSecs} Detik`)
            .setFooter(`Latency ${message.createdTimestamp - message.createdTimestamp}ms`)
            .setTimestamp();
        message.channel.send(embed);
    }
};
