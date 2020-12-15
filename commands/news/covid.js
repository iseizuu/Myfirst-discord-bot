const Discord = require('discord.js');
const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();
module.exports = {
    name: 'corona',
    alias: ['covid'],
    deskripsi: 'Menampilkan Status Covid terkini',
    usage: 'covid <negara> atau <semua>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        if (!args.length) return message.channel.send('Masukkan nama negara');
        if (args.join(' ') === 'semua') {
            const corona = await track.all();

            const embed = new Discord.MessageEmbed()
                .setTitle('Kasus global')
                .setColor('#ff2050')
                .addField('Total Kasus', corona.cases, true)
                .addField('Total Meninggal', corona.deaths, true)
                .addField('Total Sembuh', corona.recovered, true)
                .addField('Kasus Hari Ini', corona.todayCases, true)
                .addField('Meninggal Hari Ini', corona.todayDeaths, true)
                .addField('Kasus Aktif', corona.active, true)
                .setFooter(message.author.tag, message.author.displayAvatarURL());
            return message.channel.send(embed);
        }
        const corona = await track.countries(args.join(' '));
        if (!corona) return message.channel.send('Data tidak ditemukan');
        const embed = new Discord.MessageEmbed()
            .setTitle(`${corona.country}`)
            .setColor('#ff2050')
            .addField('Total Kasus', corona.cases, true)
            .addField('Total Meninggal', corona.deaths, true)
            .addField('Total Sembuh', corona.recovered, true)
            .addField('Kasus Hari Ini', corona.todayCases, true)
            .addField('Meninggal Hari Ini', corona.todayDeaths, true)
            .addField('Kasus Aktif', corona.active, true)
            .setFooter(message.author.tag, message.author.displayAvatarURL());
        return message.channel.send(embed);
    }
};
