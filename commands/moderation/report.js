const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = {
    name: 'report',
    alias: ['abuse'],
    deskripsi: 'Melaporkan member',
    usage: 'report <user>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        if (message.deletable) message.delete();

        const rMember = message.mentions.members.first() || message.guild.members.cache.find(args[0]);
        if (!rMember) return message.reply('Tag user yang mau dilaporkan');
        if (rMember.hasPermission('ADMINISTRATOR') || rMember.user.bot) return message.channel.send('Tidak bisa melaporkan user ini');

        if (!args[1]) return message.channel.send('Kamu tidak menulis alasannya');

        const channel = message.guild.channels.cache.find(chh => chh.id === 'CHANNEL ID');
        if (!channel) return message.channel.send('Channel tidak ditemukan');

        const embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor('Reported member', rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**- Member:** ${rMember} (${rMember.user.id})
            **- Pelapor:** ${message.member}
            **- Dilaporkan di:** ${message.channel}
            **- Alasan:** ${args.slice('1').join(' ')}`);

        return channel.send(embed);
    }
};
