
const Discord = require("discord.js");

module.exports = {
  name: "dice",
  alias: ["roll"],
      deskripsi: "Roll a dice",
  run: async (client, message, args) => {
    let replies = [
      'https://cdn.discordapp.com/attachments/688763072864976906/701821384975712303/dice1.png',
            'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312624_1280.png',
            'https://cdn.pixabay.com/photo/2014/04/03/10/24/dice-310335_960_720.png',
            'https://cdn.discordapp.com/attachments/688763072864976906/701824165145215058/dice5.png',
            'https://img.pngio.com/dice-6-clip-art-at-clkercom-vector-clip-art-online-royalty-6-dice-number-png-600_600.png',
	    'https://cdn.discordapp.com/attachments/688763072864976906/701818445087637664/dice2.png'
    ];
    let result = Math.floor((Math.random() * replies.length));
    let embed = new Discord.MessageEmbed()
    .setTitle("Result")
    .setColor("#AA9900")
    .setImage(replies[result])
    message.channel.send({embed});
  }
}
