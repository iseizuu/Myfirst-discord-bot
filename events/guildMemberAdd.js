const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

/**
 * @param {import('../structures/MaiClient')} client
 * @param {import('discord.js').GuildMember} member
 */

module.exports = (client, member) => {
    const chx = db.get(`welchannel_${member.guild.id}`);
    if (chx === null) return;

    const wembed = new MessageEmbed()
        .setAuthor(member.user.username, member.user.avatarURL())
        .setColor('#ff2050')
        .setThumbnail(member.user.avatarURL())
        .setDescription(`Yoooo ${member.user.username} Welcoming party`);
    client.channels.cache.get(chx).send(wembed);
};
