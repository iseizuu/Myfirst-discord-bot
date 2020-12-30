const Discord = require('discord.js');

module.exports = {
    name: 'saran',
    alias: ['suggestion', 'sr'],
    usage: 'saran <isi saran>',
    deskripsi: 'Mengirim saran untuk server',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (bot, message, args) => {
        message.delete();

        const suggestion = args.join(' ');
        if (!suggestion) return message.channel.send(`Silahkan Tulis Saran Untuk Server!`);

        const msg = message.guild.channels.cache.find(ch => ch.name === 'saran');
        if (!msg) return message.channel.send('Channel tidak ditemukan');

        message.channel.send('Saran anda sudah dikirim, tunggu sampai admin menanggapi! ')
            .then(mxx => mxx.delete({ timeout: 15000 }));
        const Embed = new Discord.MessageEmbed()
            .setFooter(bot.user.username, bot.user.displayAvatarURL)
            .setTimestamp()
            .addField(`Saran Baru dari :`, `**${message.author.tag}**`)
            .addField(`Saran:`, `${suggestion}\n**Silahkan Admin Untuk Menanggapi!**`)
            .setColor('#ff2052');
        return message.channel.send(Embed);
    }
};
