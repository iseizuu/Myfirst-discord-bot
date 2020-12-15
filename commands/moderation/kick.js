module.exports = {
    name: 'kick',
    alias: [''],
    deskripsi: 'Kick member',
    usage: 'kick <user>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Anda tidak mempunyai `KICK_MEMBERS` permission');
        if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('Aku tidak mempunyai `KICK_MEMBERS` permission');
        if (!args[0]) return message.channel.send('Contoh penggunaan: `kick @user`');

        const member = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
        if (!member) return message.reply('Tag seseorang yang mau di kick');
        if (!member.kickable) return message.reply(`Aku tidak bisa membanned orang ini.`);
        member.kick();
        return message.reply(` Terkick.`);
    }
};
