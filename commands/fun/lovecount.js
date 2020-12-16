const Discord = require('discord.js');
const { getMember } = require('../../util/Util');

module.exports = {
    name: 'lovecount',
    alias: ['lc'],
    category: 'fun',
    deskripsi: 'Kalkulator cinta dengan cara Tag Pasanganmu',
    usage: '[mention | id | username]',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        let person = getMember(message, args[0]);
        if (!person || message.author.id === person.id) {
            person = message.guild.members.cache
                .filter(maa => maa.id !== message.author.id)
                .random();
        }

        const love = Math.random() * '100';
        const loveIndex = Math.floor(love / '10');
        const loveLevel = '💖'.repeat(loveIndex) + '💔'.repeat('10' - loveIndex);

        const embed = new Discord.MessageEmbed()
            .setColor('#ffb6c1')
            .addField(`☁ = **${person.displayName}** loves **${message.member.displayName}** this much:`,
                `💟 = ${Math.floor(love)}%\n\n${loveLevel}`);

        return message.channel.send(embed);
    }
};
