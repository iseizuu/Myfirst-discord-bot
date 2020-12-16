const Discord = require('discord.js');
module.exports = {
    name: 'amiajoke',
    alias: ['aaj'],
    deskripsi: 'Memes?',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        const avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL() : message.author.avatarURL();
        const embed = new Discord.MessageEmbed()
            .setColor('#ff9900')
            .setImage(`https://api.alexflipnote.dev/amiajoke?image=${ avatar}`);
        return message.channel.send({ embed });
    }
};
