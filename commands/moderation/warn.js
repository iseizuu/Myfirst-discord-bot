const db = require('quick.db');

module.exports = {
    name: 'warn',
    alias: [''],
    usage: 'warn <@mention> <reason>',
    deskripsi: 'Memberi warn kepada user yang melanggar rules',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Hanya admin server yang dapat menjalankan command ini.');

        const user = message.mentions.members.first();
        if (!user) return message.channel.send('Mention Usernya yang mau diwarn - warn @mention <reason>');
        if (message.mentions.users.first().bot) return message.channel.send('Aku tidak bisa memberi warn kepada bot');
        if (message.author.id === user.id) return message.channel.send('Tidak bisa memberi warn ke dirisendiri');
        if (client.config.owner.includes(user.id)) return message.channel.send('Tidak bisa memberi warn ke developer');

        const reason = args.slice('1').join(' ');
        if (!reason) return message.channel.send('Dih, Ngewarn ko ga ada alasannya?');

        const warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
        if (warnings === '3') return message.channel.send(`${message.mentions.users.first().username} Sudah mencapai 3 warning`);
        if (warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, '1');
            user.send(`Kamu di warn di **${message.guild.name}** karena ${reason}`);
            return message.channel.send(`Sukses Warn **${message.mentions.users.first().username}** karena ${reason}`);
        } else if (warnings !== null) {
            db.add(`warnings_${message.guild.id}_${user.id}`, '1');
            user.send(`Kamu di warn di **${message.guild.name}** karena ${reason}`);
            return message.channel.send(`Sukses Warn **${message.mentions.users.first().username}** karena ${reason}`);
        }
        return null;
    }
};
