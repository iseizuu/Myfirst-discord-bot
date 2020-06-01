const Discord = require("discord.js");
const { stripIndents } = require('common-tags');
const { list } = require('../../util/Util');
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
  name: "typingtest",
    deskripsi: "Set timer",
    run: async (client, message, args) => {
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
		if (!msgs.size) return message.reply('Sorry! You lose!');
		if (msgs.first().content !== sentence) return message.reply('Sorry! You made a typo, so you lose!');
		return message.channel.send(`Nice job! 10/10! You deserve some cake! (Took ${(Date.now() - now) / 1000} seconds)`);
	}
};
