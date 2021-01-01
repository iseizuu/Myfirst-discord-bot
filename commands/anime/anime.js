const { MessageEmbed } = require('discord.js');
const { Anime } = require('mailist');
const get = new Anime();

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
        get.anime(search).then(result => {
            const res = result.data.anime.results[0];
            const embed = new MessageEmbed()
                .setAuthor('AniList (Anime)', 'https://i.imgur.com/iUIRC7v.png')
                .setColor('RANDOM')
                .setURL(res.siteUrl)
                .setTitle(res.title.romaji || res.title.english)
                .setThumbnail(res.coverImage.large)
                .setDescription(res.description.replace(/<br>/gu, '\n') || 'No Description')
                .setTimestamp()
                .setFooter(`Req : ${message.author.username}`)
                .addField('》Status', res.status, true)
                .addField('》Duration', `${res.duration || '??'} Minutes/eps`, true)
                .addField('》Episodes', res.episodes ? res.episodes : 'Undetected', true)
                .addField('》Season', res.season, true)
                .addField('》Score', `${res.meanScore || 0}%`, true)
                .addField('》Genres', res.genres.map(data => data), true)
                .addField('》Release', `${res.startDate.day}-${res.startDate.month}-${res.startDate.year}` || '??', true);
            return message.channel.send(embed);
        });
    }
};
