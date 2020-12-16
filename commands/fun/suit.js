const Discord = require('discord.js');
const { promptMessage } = require('../../util/Util');

const chooseArr = ['🌑', '📄', '✂'];

module.exports = {
    name: 'suit',
    alias: ['kbg', 'rps'],
    deskripsi: 'Permainan kertas batu gunting',
    usage: 'rps',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setTitle('Pilih > BATU  > KERTAS  > GUNTING ')
            .setTimestamp();

        const mex = await message.channel.send(embed);
        const reacted = await promptMessage(mex, message.author, '30', chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await mex.reactions.removeAll();

        embed
            .setDescription('')
            .addField(result, `${reacted} vs ${botChoice}`);

        mex.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === '🌑' && clientChosen === '✂')
                || (me === '📄' && clientChosen === '🌑')
                || (me === '✂' && clientChosen === '📄')) return 'Selamat Kamu menang';
            else if (me === clientChosen) return 'Yah, Seri!';

            return 'Yah, Kamu kalah!';
        }
    }
};
