const db = require('quick.db');

module.exports = {
    name: 'resetwarns',
    alias: ['rwarn', 'warn-reset', 'warnr'],
    deskripsi: 'Menghapus warn kepada user',
    usage: 'rwarns <@user>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Hanya admin yang bisa menjalankan command');

        const user = message.mentions.members.first();
        if (!user) return message.channel.send('Mention juga user yang mau direset .');
        if (message.mentions.users.first().bot) return null;
        if (message.author.id === user.id) return message.channel.send('Kamu tidak bisa menghapus warn dirisendiri');


        const warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
        if (warnings === null) return message.channel.send(`${message.mentions.users.first().username} Tidak ditemukan data warn`);


        db.delete(`warnings_${message.guild.id}_${user.id}`);
        user.send(`Semua warn kamu di hapus oleh ${message.author.username} dari ${message.guild.name}`);
        return message.channel.send(`Menghapus semua warn di ${message.mentions.users.first().username}`);
    }
};
