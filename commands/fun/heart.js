const Discord = require("discord.js");
const { createCanvas, loadImage } = require('canvas');
const GIFEncoder = require('gifencoder');
const request = require('node-superfetch');
const path = require('path');
const { streamToArray } = require('../../util/Util');
const { drawImageWithTint } = require('../../util/Canvas'); //https://cdn.discordapp.com/attachments/688763072864976906/702126861118996480/hearts.png
const coord1 = [-25, -33, -42, -14];
const coord2 = [-25, -13, -34, -10];

module.exports = {
  name: "heart",
      deskripsi: "Edit avatar kamu menjadi lope lope :v",
  run: async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    		const avatarURL = user.displayAvatarURL({ format: 'png', size: 512 });
		try {
      const base = await loadImage('https://cdn.discordapp.com/attachments/688763072864976906/702126861118996480/hearts.png');
			const { body } = await request.get(avatarURL);
			const avatar = await loadImage(body);
			const canvas = createCanvas(avatar.width, avatar.height);
			const ctx = canvas.getContext('2d');
			drawImageWithTint(ctx, avatar, 'deeppink', 0, 0, avatar.width, avatar.height);
			ctx.drawImage(base, 0, 0, avatar.width, avatar.height);
			return message.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'hearts.png' }] });
		} catch (err) {
			return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};