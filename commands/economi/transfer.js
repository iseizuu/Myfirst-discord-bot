const db = require('quick.db');

module.exports = {
    name: 'transfer',
    alias: ['tf', 'givebal'],
    deskripsi: 'Beri seseorang credit, dengan nilai yang kamu tentukan',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        if (!message.mentions.members.first()) return message.channel.send('**Hmmm, tulis jumlah credit yang mau ditransfer kemudian Mention penerima transerannya**');

        const targetMember = message.mentions.members.first();
        const amount = parseInt(args.join(' ').replace(targetMember, ''));

        if (isNaN(amount)) return message.channel.send('**Tulis jumlah credit yang mau ditransfer**');

        let targetBalance = await db.fetch(`userBalance_${targetMember.id}`);
        let selfBalance = await db.fetch(`userBalance_${message.author.id}`);
        const startBalance = 0;

        if (targetBalance === null) targetBalance = startBalance;
        if (selfBalance === null) selfBalance = startBalance;

        if (amount > selfBalance) return message.channel.send('**Maaf, credit kamu tidak cukup.**');

        db.add(`userBalance_${targetMember.id}`, amount);
        db.subtract(`userBalance_${message.author.id}`, amount);

        return message.channel.send(`**Berhasil mentrasfer $${amount} ke ${targetMember.user.username}!**`);
    }
};
