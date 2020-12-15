const { stripIndents } = require('common-tags');
const sentences = require('../../json/typing-test');
const times = {
    baby: 60000,
    easy: 25000,
    medium: 20000,
    hard: 15000,
    extreme: 10000,
    impossible: 5000
};

module.exports = {
    name: 'typingtest',
    alias: ['fast'],
    deskripsi: 'Mengetes seberapa cepat skill mengetik anda',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const sentence = sentences[Math.floor(Math.random() * sentences.length)];
        await message.channel.send(stripIndents`
			**Tulis kembali kalimat dibawah ini, ingat jangan copas!.**
      ${sentence} 
		`);
        const now = Date.now();
        const msgs = await message.channel.awaitMessages(res => res.author.id === message.author.id, {
            max: 1,
            times
        });
        if (!msgs.size) return message.reply('Maaf, kamu kalah');
        if (msgs.first().content !== sentence) return message.reply('Sepertinya kamu typo :)');
        return message.channel.send(`Selamatttt!!! Butuh waktu ${(Date.now() - now) / '1000'} detik saja untuk menulisnya`);
    }
};
