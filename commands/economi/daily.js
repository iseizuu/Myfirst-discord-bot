const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: 'daily',
    alias: ['harian'],
    deskripsi: 'Mengambil jatah harian',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const cooldown = 2.64e+7;
        const amount = `${Math.floor(Math.random() * '100') }500`;

        const lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > '0') {
            const timeObj = ms(cooldown - (Date.now() - lastDaily));

            return message.channel.send({
                embed: {
                    title: 'Gagal!',
                    color: 'RED',
                    description: `Kamu sudah mengambil jatah harian.\nKamu dapat mengambil lagi pada: **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s`
                }
            });
        }
        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.author.id}`, amount);
        const embed = new Discord.MessageEmbed()
            .addField(`${message.guild.name} Bank`, `\`💳\` **Kamu berhasil Check \`Daily\` harian sebesar:** \`Rp.${amount}\``)
            .setColor('#00d2ff');
        return message.channel.send(embed);
    }
};
