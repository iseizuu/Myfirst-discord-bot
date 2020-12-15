const Discord = require('discord.js');

module.exports = {
    name: 'vote',
    alias: ['vt'],
    deskripsi: 'Voting',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const agree = '✅';
        const disagree = '❎';
        if (!args[0]) return message.reply('Tulis sesuatu yang mau divote!');

        const msg = await message.channel.send(`Question: ${message.content.split(' ').splice('1')
            .join(' ')} \nVoting! (Waktu: 15 detik)`);
        await msg.react(agree);
        await msg.react(disagree);

        const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, { time: 15e3 });
        msg.delete();

        const NO_Count = reactions.get(disagree).count;
        let YES_Count = reactions.get(agree);

        if (!YES_Count) YES_Count = '1';
        else YES_Count = reactions.get(agree).count;


        const sumsum = new Discord.MessageEmbed()

            .addField('Voting Selesai:', `${'----------------------------------------\nPertanyaan: '}${ message.content.split(' ').splice('1')
                .join(' ')}\nTotal vote (Yes):${YES_Count - '1'}\nTotal vots (NO): ${NO_Count - '1'}\n----------------------------------------`, true)
            .setColor('0x#FF0000');
        return message.channel.send({ embed: sumsum });
    }
};
