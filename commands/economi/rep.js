const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms'),
      fs = require("fs");


module.exports = {
  name: "rep",
      alias: [],
    deskripsi: "Show your Reputation",
    run: async (client, message, args) => {

    if (!message.mentions.members.first()) return message.channel.send('`🚫`**Silahkan mentions `user` yang ingin kamu beri Reputasi!**');
let user = message.mentions.members.first(),
        amnt = parseInt(args.join(' ').replace(user, ''));
  if (user.id === message.author.id) return message.reply('**`😭` Yakin kamu ingin cara licik**').then(m => m.delete({ timeout: 5000 }));
    let rep = require("../rep.json");
if(!rep[user.id]){
    rep[user.id] = {
      rep: 0
    };
  }
  fs.writeFile("./rep.json", JSON.stringify(rep), (err) => {
    if (err) console.log(err)
  });
    let cooldown = 3.64e+7, // 24 Часа
        amount = Math.floor(Math.random() * 100) + 500;      

    let lastRep = await db.fetch(`lastRep_${message.author.id}`);
    if (lastRep !== null && cooldown - (Date.now() - lastRep) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastRep));

        const embed1 = new Discord.RichEmbed()
        .setTitle('🔹 Sweet Reputation')
        .setColor('#00d2ff')
        .setDescription(`\`🚫\` **Kamu telah memberi \`Reputasi\` sebelumnya, silahkan tunggu:**  **\`${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s\`**!`)
        message.channel.send(embed1);
        
    } else {
        const embed = new Discord.MessageEmbed()
        .addField('🔹 Sweet Reputation', `${message.author}\`🔰\` **Kamu berhasil memberikan reputasi kepada:**  ${user}`)
        .setColor('#00d2ff')
        message.channel.send(embed);

  let srep = rep[user.id].rep;
      rep[user.id] = {
    rep: srep + parseInt(1)
  };
        fs.writeFile("./rep.json", JSON.stringify(rep), (err) => {
  });
db.set(`lastRep_${message.author.id}`, Date.now());
    }
}

}
