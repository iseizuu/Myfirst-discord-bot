module.exports = {
    name: 'ping',
    alias: ['pong'],
    deskripsi: 'Mengecek ping bot',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging....`);
        msg.edit(`🏓 Pong! ${client.ws.ping}ms\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}`);
    }
};

