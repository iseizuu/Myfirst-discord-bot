module.exports = {
    name: 'adminsay',
    alias: ['as'],
    deskripsi: 'Administrator only',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        message.delete();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Oh no, anda bukan admin :)');
        const botmessage = args.join(' ');
        return message.channel.send(botmessage);
    }
};
