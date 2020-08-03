const Discord = require('discord.js'),
      db = require('quick.db');
const fs = require("fs");

module.exports = {
  name: "credit",
    deskripsi: "Cek credit kamu",
    run: async (client, message, args) => {
      try {
   var optionRaw = args.slice(0).join(" ");
var option = optionRaw.toLocaleLowerCase();
    let user = message.mentions.users.first() || message.author;
    let balance = await db.fetch(`userBalance_${user.id}`);
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.guild.name} Bank 💳`)
    .setColor('#00d2ff')
    .addField('Acoount Holder 🗄', user.username, true)
    .addField('Account Credit 💵', `${balance === null ? "0" : balance}`, true)
    .setFooter('Silahkan hubungi Owner untuk mengisi saldo kamu / donasi.')
    return message.channel.send(embed)
      } catch (Er) {
        console.log(Er)
      }
      
            if (option.match("add")) {
              if(message.author.id !== '271576733168173057') {return message.channel.send('Jabingan kau')}
    let amount = args[1]; 
         const embeda = new Discord.MessageEmbed()
        .addField('🏛 A e s t h e t i c Bank', `\`💳\` **Kamu berhasil Menambah credit sebesar:** \`Rp.${amount}\``)
        .setColor('#00d2ff')
        message.channel.send(embeda);
              
                      db.add(`userBalance_${message.author.id}`, amount);
            }                        
      
  }
}