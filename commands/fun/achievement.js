const Discord = require('discord.js');

module.exports = {
    name: 'achievement',
    alias: ['mcachiev', 'achiev'],
    deskripsi: 'Membuat Achievement Minecraft',
    usage: '<name>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        if (!args[0]) return message.reply('Masukan text seskuamu');
        const text1 = args.join('%20');
        const embed = new Discord.MessageEmbed()
            .setColor('#ff9900')
            .setImage(`https://api.alexflipnote.dev/achievement?text=${text1}&icon`);
        return message.channel.send({ embed });
    }
};
