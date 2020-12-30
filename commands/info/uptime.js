/* eslint-disable no-magic-numbers */
module.exports = {
    name: 'uptime',
    alias: ['up'],
    deskripsi: 'Menampilkan seberapa lama bot ini aktif',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        const milliseconds = parseInt((client.uptime % 1000) / 100);
        let seconds = parseInt((client.uptime / 1000) % 60);
        let minutes = parseInt((client.uptime / (1000 * 60)) % 60);
        let hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? `0${ hours}` : hours;
        minutes = (minutes < 10) ? `0${ minutes}` : minutes;
        seconds = (seconds < 10) ? `0${ seconds}` : seconds;

        return message.channel.send(`Saya aktif ** ${ hours } **Jam, **${ minutes }** Menit dan **${ seconds }.${ milliseconds }** Detik!`);
    }
};
