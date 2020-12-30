const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');
const fs = require('fs');


module.exports = {
    name: 'rep',
    alias: [],
    deskripsi: 'Show your Reputation',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        if (!message.mentions.members.first()) return message.channel.send('`🚫`**Silahkan mentions `user` yang ingin kamu beri Reputasi!**');
        const user = message.mentions.members.first();
        if (user.id === message.author.id) return message.reply('**`😭` Yakin kamu ingin cara licik**');
        // eslint-disable-next-line global-require
        const rep = require('../../json/rep.json');
        if (!rep[user.id]) rep[user.id] = { rep: 0 };

        fs.writeFile('./rep.json', JSON.stringify(rep), err => {
            if (err) console.log(err);
        });
        const cooldown = 3.64e+7;
        const lastRep = await db.fetch(`lastRep_${message.author.id}`);
        if (lastRep !== null && cooldown - (Date.now() - lastRep) > '0') {
            const timeObj = ms(cooldown - (Date.now() - lastRep));

            const embed1 = new Discord.RichEmbed()
                .setTitle('🔹 Sweet Reputation')
                .setColor('#00d2ff')
                .setDescription(`\`🚫\` **Kamu telah memberi \`Reputasi\` sebelumnya, silahkan tunggu:**  **\`${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s\`**!`);
            message.channel.send(embed1);
        } else {
            const embed = new Discord.MessageEmbed()
                .addField('🔹 Sweet Reputation', `${message.author}\`🔰\` **Kamu berhasil memberikan reputasi kepada:**  ${user}`)
                .setColor('#00d2ff');
            message.channel.send(embed);

            const srep = rep[user.id].rep;
            rep[user.id] = { rep: srep + parseInt('1') };
            fs.writeFile('./json/rep.json', JSON.stringify(rep));
            return db.set(`lastRep_${message.author.id}`, Date.now());
        }
        return null;
    }
};
