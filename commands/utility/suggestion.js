const Discord = require("discord.js");

module.exports = {
  name: "saran",
  alias: ["suggestion", "sr"],
  category: "main",
  usage: "<message>",
        deskripsi: "Kirim saran yang membangun untuk server kedepannya",
    run: async (bot, message, args) => {
    message.delete()

    let suggestion = args.join(" ");
    if (!suggestion)
      return message.channel
        .send(`Silahkan Tulis Saran Untuk Server!`)
        .then(m => m.delete({ timeout: 15000 }));

          let msg = message.guild.channels.cache.find(ch => ch.name === 'general');
      if(!msg) return message.channel.send("You dident have channel with name `suggestions`")

    message.channel 
      .send("Saran anda sudah dikirim, tunggu sampai admin menanggapi! :v ")
      .then(m => m.delete({ timeout: 15000 }));
        let Embed = new Discord.MessageEmbed()
      .setFooter(bot.user.username, bot.user.displayAvatarURL)
      .setTimestamp()
      .addField(`Saran Baru dari :`, `**${message.author.tag}**`)
      .addField(`Suggestion:`, `${suggestion}\n**Silahkan Admin Untuk Menanggapi!**`)
      .setColor('#ff2052');
       return message.channel.send(Embed).then(async msg => {
      await msg.react("✅");
      await msg.react("❌");
    });
  }
};