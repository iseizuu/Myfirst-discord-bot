const Discord = require('discord.js');
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();

module.exports = {
    name: 'anime',
    alias: [''],
    deskripsi: 'Cari anime favoritmu',
    usage: 'anime <anime> | anime Naruto',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        if (!args[0]) return message.channel.send('Masukan nama anime');

        const search = args.join(' ');
        return kitsu.searchAnime(search).then(result => {
            if (!result.length) return message.channel.send('Maaf tidak ada hasil tersedia');


            const embed = new Discord.MessageEmbed()
                .setTitle(result[0].titles.english ? result[0].titles.english : search)
                .setColor('RANDOM')
                .setDescription(result[0].synopsis.replace(/<[^>]*>/gu, '').split('\n')[0])
                .setThumbnail(result[0].posterImage.original, '100', '200');

            return message.channel.send(embed);
        });
    }
};
