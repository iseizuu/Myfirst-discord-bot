
const Discord = require("discord.js");
const { stripIndents } = require('common-tags');
const request = require('node-superfetch');
const { shuffle, list } = require('../../util/Util');
const types = ['multiple', 'boolean'];
const difficulties = ['easy', 'medium', 'hard'];
const db = require('quick.db');
const choices = ['A', 'B', 'C', 'D'];
module.exports = {
  name: "quiz",
      deskripsi: "Quiz time",
    run: async (client, message, args) => {
    
		try {
			const { body } = await request
				.get('https://opentdb.com/api.php')
				.query({
					amount: 1,
					types,
					encode: 'url3986',
					difficulties
				});
			if (!body.results) return message.reply('Oh no, a question could not be fetched. Try again later!');
			const answers = body.results[0].incorrect_answers.map(answer => decodeURIComponent(answer.toLowerCase()));
			const correct = decodeURIComponent(body.results[0].correct_answer.toLowerCase());
			answers.push(correct);
			const shuffled = shuffle(answers);
			await message.reply(stripIndents`
				**You have 15 seconds to answer this question.**
				${decodeURIComponent(body.results[0].question)}
				${shuffled.map((answer, i) => `**${choices[i]}.** ${answer}`).join('\n')}
			`);
			const filter = res => res.author.id === message.author.id && choices.includes(res.content.toUpperCase());
			const msgs = await message.channel.awaitMessages(filter, {
				max: 1,
				time: 15000
			});

			if (!msgs.size) return message.reply(`Sorry, time is up! It was ${correct}.`);
			const win = shuffled[choices.indexOf(msgs.first().content.toUpperCase())] === correct, amount= 100 ;
			if (!win) return message.reply(`Nope, sorry, it's ${correct}.`);
			return message.reply(`You win ${amount}`);
          db.add(`userBalance_${message.author.id}`, amount);
		} catch (err) {
			return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};