const Discord = require("discord.js");

module.exports = {
  name: "emojilist",
  deskripsi: "Show emoji list",
  kategori:"Ultility",
  run: async (client, message, args) => {
    const emojis = message.guild.emojis.cache.filter(emoji => client === 'animated' ? emoji.animated : !emoji.animated);
		if (!emojis.size) return message.channel.send(`This server has no Animated custom emoji.`);
		return message.channel.send(emojis.map(emoji => emoji.toString()).sort().join(' '), { split: { char: ' ' } });
  }
}