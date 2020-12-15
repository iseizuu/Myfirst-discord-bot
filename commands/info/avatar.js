const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    alias: ['pp', 'ava'],
    deskripsi: 'Untuk Menampilkan avatar',
    usage: 'avatar <user>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        const member = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.member;
        const Embed = new MessageEmbed()
            .setColor(message.member.displayHexColor === '#000000' ? 'RANDOM' : message.member.displayHexColor)
            .setImage(member.user.displayAvatarURL(({ size: 2048 })))
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL);
        return message.channel.send(Embed);
    }
};
