const { get } = require('axios');

module.exports = {
    name: 'moe',
    alias: ['awwnime'],
    deskripsi: 'Mengirim Random anime dari awwnime',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const { data } = await get('https://nezumiyuiz.glitch.me/api/anime');
        return message.channel.send({
            files: [ {
                attachment: data.url,
                name: 'awwnime.png'
            } ]
        });
    }
};
