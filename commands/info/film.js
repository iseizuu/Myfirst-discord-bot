const Discord = require('discord.js');
const imdb = require('imdb-api');

module.exports = {
    name: 'film',
    alias: ['imdb'],
    deskripsi: 'Menampilkan Informasi film',
    usage: 'film <nama film>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        if (!args.length) return message.channel.send('Masukan judul filmnya');
        const imob = new imdb.Client({ apiKey: '5e36f0db' });
        const movie = await imob.get({ name: args.join(' ') });
        const embed = new Discord.MessageEmbed()
            .setTitle(movie.title)
            .setColor('RANDOM')
            .setThumbnail(movie.poster)
            .setDescription(movie.plot)
            .setFooter(`Rating: ${movie.rating}`)
            .addField('Negara', movie.country, true)
            .addField('Bahasa', movie.languages, true)
            .addField('Tipe', movie.type, true);
        return message.channel.send(embed);
    }
};
