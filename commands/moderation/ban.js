module.exports = {
    name: 'ban',
    alias: [''],
    deskripsi: 'Banned Member',
    usage: 'ban [user]',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Anda tidak diperbolehkan menggunakan command ini');
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('Saya tidak punya `BAN_MEMBERS` permission');
        if (!args[0]) return message.channel.send('Contoh penggunaan: `ban @user`');

        const member = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
        if (!member) return message.reply('Tag seseorang yang mau di banned');
        if (!member.bannable) return message.reply(`Aku tidak bisa membanned orang ini.`);
        return member.ban();
    }
};
