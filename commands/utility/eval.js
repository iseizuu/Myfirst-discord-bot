module.exports = {
    name: 'eval',
    alias: ['e'],
    deskripsi: '',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => message.channel.send('?')
};
