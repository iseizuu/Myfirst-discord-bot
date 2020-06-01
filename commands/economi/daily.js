const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');

module.exports = {
  name: "daily",
    deskripsi: "Login Harian",
    run: async (client, message, args) => {
    let cooldown = 2.64e+7, // 24 Часа
        amount = Math.floor(Math.random() * 100) + 500;      

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));

        const embed = new Discord.MessageEmbed()
        .setTitle('🏛 A e s t h e t i c Bank')
        .setColor('#00d2ff')
        .setDescription(`🚫Lu udah ngambil \`daily\` hariannya bambang, Mau gua tampol lu? \n Daily bisa diambil lagi pada : **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s**!`)
        message.channel.send(embed);
        
    } else {
        const embed = new Discord.MessageEmbed()
        .addField('🏛 A e s t h e t i c Bank', `\`💳\` **Kamu berhasil Check \`Daily\` harian sebesar:** \`Rp.${amount}\``)
        .setColor('#00d2ff')
        message.channel.send(embed);

        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.author.id}`, amount);
    }
  }
}