const Discord = require('discord.js');

module.exports = {
    name: 'say',
    alias: [''],
    deskripsi: 'Suruh bot untuk bicara',
    usage: 'say <text>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        const sayang = args.join(' ');
        if (!args[0]) return message.reply('Mau ngomong apaan kak?');

        const Embed = new Discord.MessageEmbed()
            .setColor(message.member.displayHexColor === '#000000' ? 'RANDOM' : message.member.displayHexColor)
            .setDescription(sayang)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL());
        return message.channel.send(Embed);
    }
};
