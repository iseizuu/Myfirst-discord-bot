const Discord = require("discord.js");

module.exports = {
  name: "test",
  deskripsi: "Show emoji list",
  kategori:"Ultility",
  run: async (client, message, args) => {
    let pages = ['aku', 'sayang', 'kamu']; 
    let page = 1; 
    
    let embed = new Discord.MessageEmbed()
      .setColor("#15f153")
      .setFooter(`Page ${page} of ${pages.length}`)
      .setDescription(pages[page-1])

      message.channel.send(embed).then(msg => {

      msg.react('⬅').then( r => {
      msg.react('➡')
      
 
// Filters
    const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
    const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

    const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000});
    const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000});
 
      backwards.on('collect', r => {
    if (page === 1) return;
      page--;
      embed.setDescription(pages[page-1]);
      embed.setFooter(`Page ${page} of ${pages.length}`);
      msg.edit(embed)

      })

      forwards.on('collect', r => {
    if (page === pages.length) return;
      page++;
      embed.setDescription(pages[page-1]);
      embed.setFooter(`Page ${page} of ${pages.length}`);
      msg.edit(embed);
        })
      })
    })
  }
}