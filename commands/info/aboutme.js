const Discord = require("discord.js");
const moment = require('moment');

module.exports = {
    name: "aboutme",
  alias: ["stat" , "botinfo"],
    category: "moderation",
       deskripsi: "Show bot Information",
    usage: "<mention, id>",
    run: async (client, message, args) => {
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    // const usage = process.memoryUsage().rss / 1024 / 1024;
    const totalSeconds = process.uptime();
    const realTotalSecs = Math.floor(totalSeconds % 60);
    const days = Math.floor((totalSeconds % 31536000) / 86400);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const mins = Math.floor((totalSeconds / 60) % 60);


        const embed = new Discord.MessageEmbed()
          .setAuthor("A e s t h e t i c", client.user.displayAvatarURL())
          .setColor('RANDOM')
          .setThumbnail(client.user.avatarURL())
          .addField("Prefix",'aes')
          .addField("Born On", `${moment.utc(client.user.createdAt).format('MM/DD/YYYY h:mm A')}`)
          .addField("Current Version",'1.0.1 INDEV')
          .addField("Servers", `${client.guilds.cache.size} servers`, true)
          .addField("Members", `${client.users.cache.size} members`, true)
          .addField("Memory Used", `${Math.round(used * 100) / 100}MB`, true)
          .addField("Cpu Used", `${Math.round(used * 1) / 10}%`, true)
          .addField("Uptime", `${days} Hari, ${hours} Jam, ${mins} Menit, and ${realTotalSecs} Detik`)
          .setFooter(`Latency ${message.createdTimestamp - message.createdTimestamp}ms`)
          .setTimestamp();
    message.channel.send(embed);
message.react('👍').then(() => message.react('👎'));

const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
            message.reply('you reacted with a thumbs up.');
        }
        else {
            message.reply('you reacted with a thumbs down.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
    });
                
    }
};