const db = require('quick.db');

module.exports = {
    name: 'setwelcome',
    alias: ['setwc'],
    deskripsi: 'Beri Greeting message kepada member baru',
    usage: 'setwelcome <channel>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        const cekCh = db.get(`welchannel_${message.guild.id}`, channel.id);
        if (cekCh) return message.channel.send('Welcome channel sudah diaktifkan sebelumnya');

        if (!message.member.hasPermission(['ADMINISTRATOR'])) return message.reply('Hanya admin yang bisa menggunakan command ini');
        if (!channel) return message.channel.send('Channel tidak disebutkan/tag');


        db.set(`welchannel_${message.guild.id}`, channel.id);
        return message.channel.send(`Welcome Channel Diaktifkan ${channel}`);
    }
};
