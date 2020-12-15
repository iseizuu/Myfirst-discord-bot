module.exports = {
    name: 'clear',
    alias: ['purge', 'clearchat'],
    deskripsi: 'Mengahpus chat',
    usage: 'clear <jumlah chat>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        if (message.deletable) message.delete();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Kamu tidak memiliki `MANAGE_MESSAGES` permission');
        if (isNaN(args[0]) || parseInt(args[0]) <= '0') return message.reply('Tidak bisa menghapus pesan, karena kamu tidak memberikan angka berapa banyak chat yang akan di hapus');
        if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.reply('Maaf aku tidak bisa menghapusnya');


        let deleteAmount = '';
        if (parseInt(args[0]) > '100') deleteAmount = '100';
        else deleteAmount = parseInt(args[0]);


        return message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Berhasil Menghapus \`${deleted.size}\` Message`))
            .catch(err => message.reply(`Oh no... ${err}`));
    }
};
