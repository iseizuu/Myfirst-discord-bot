module.exports = {
    name: 'emojilist',
    alias: ['elist'],
    deskripsi: 'Menampilkan list emoji server',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        const emojis = message.guild.emojis.cache.filter(emoji => (client === 'animated' ? emoji.animated : !emoji.animated));
        if (!emojis.size) return message.channel.send(`Server ini tidak punya emoji`);
        return message.channel.send(emojis.map(emoji => emoji.toString()).sort()
            .join(' '), { split: { char: ' ' } });
    }
};
