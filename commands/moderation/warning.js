const db = require('quick.db');

module.exports = {
    name: 'warnings',
    alias: [''],
    deskripsi: 'Get the warnings of yours or mentioned person',
    usage: 'warnings <user>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        const user = message.mentions.members.first() || message.member;

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
        if (warnings === null) warnings = '0';

        return message.channel.send(`${user} Sudah **${warnings}** warning(s)`);
    }
};
