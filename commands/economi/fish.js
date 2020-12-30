/* eslint-disable no-magic-numbers */
/* eslint-disable sort-vars */
/* eslint-disable require-atomic-updates */
const fs = require('fs');
const db = require('quick.db');
const Discord = require('discord.js');
const fish = require('../../json/fish.json');
const ms = require('parse-ms');

module.exports = {
    name: 'fish',
    alias: ['memancing'],
    deskripsi: 'Memancing',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const cooldown = 0.004e+7;
        const lastDailyfish = await db.fetch(`lastDailyfish_${message.author.id}`);
        if (lastDailyfish !== null && cooldown - (Date.now() - lastDailyfish) > 0) {
            const timeObj = ms(cooldown - (Date.now() - lastDailyfish));

            message.channel.send(`\`${message.author.username}\` **You must wait \`${timeObj.seconds}\` seconds to re-fish. 🎣**!`);
        } else {
            const pusat = Math.floor(Number(Math.random())) + 1;
            if (!fish[message.author.id]) {
                fish[message.author.id] = {
                    cupang: 0,
                    gabus: 0,
                    mati: 0

                };
            }

            const { cupang } = fish[message.author.id];
            const { gabus } = fish[message.author.id];
            const { mati } = fish[message.author.id];
            const amount = Number(10);
            const balance = await db.fetch(`userBalance_${message.author.id}`);
            if (balance < amount) return message.reply('**Aaduh, kamu ga punya uang cukup \n **aes daily** untuk ambil daily check in**');

            const resultflip = Math.floor((Math.random() * 12));
            if (resultflip === 1) {
                const postMsg = await message.channel.send(`**\`${message.author.username}: \`Tunggu 5 detik yaaa >//<  🎣**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedheads = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`** Fish Fishing:** \n\n🐡 Kamu mendapatkan ikan gabus 🐡 \n\n💵 cost: $10 \n\n ${message.author}`)
                    .setThumbnail('http://pngimage.net/wp-content/uploads/2018/06/ikan-gabus-png-4.png');
                setTimeout(() => {
                    postMsg.edit(embedheads);
                }, 5000);
                message.channel.stopTyping(true);
                fish[message.author.id].cupang = gabus + pusat;
                fs.writeFile('./json/fish.json', JSON.stringify(fish), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 2) {
                const postMsg = await message.channel.send(`**\`${message.author.username}: \`Tunggu 5 detik yaaa >//<  🎣**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`**Fishing:**\n\n🐠  Kamu mendapatkan ikan cupang 🐠\n\n💵 cost: $10\n\n${message.author}`)
                    .setThumbnail('http://www.cosmopublic.eu/wp-content/uploads/2018/06/guppy-right.png');
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);
                message.channel.stopTyping(true);
                fish[message.author.id].gabus = cupang + pusat;
                fs.writeFile('./json/fish.json', JSON.stringify(fish), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 3) {
                const postMsg = await message.channel.send(`**\`${message.author.username}: \`Tunggu 5 detik yaaa >//<  🎣**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedheads = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`**Fishing:**\n\n🐡 Kamu mendapatkan ikan gabus 🐡\n\n💵 cost: $10\n\n${message.author}`)
                    .setThumbnail('http://pngimage.net/wp-content/uploads/2018/06/ikan-gabus-png-4.png');
                setTimeout(() => {
                    postMsg.edit(embedheads);
                }, 5000);
                message.channel.stopTyping(true);
                fish[message.author.id].cupang = gabus + pusat;
                fs.writeFile('./json/fish.json', JSON.stringify(fish), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 4) {
                const postMsg = await message.channel.send(`**\`${message.author.username} \`Tunggu 5 detik yaaa >//<  🎣**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`**Fishing:**\n\n🐟 Kamu mendapatkan ikan bangkai 🐟\n\n💵 cost: $10\n\n${message.author}`)
                    .setThumbnail('http://pngimg.com/uploads/fish/fish_PNG25175.png');
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);
                fish[message.author.id].mati = mati + pusat;
                fs.writeFile('./json/fish.json', JSON.stringify(fish), err => {
                    if (err) console.log(err);
                });

                message.channel.stopTyping(true);
            } else if (resultflip === 5) {
                const postMsg = await message.channel.send(`**\`${message.author.username} \`Tunggu 5 detik yaaa >//<  🎣**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`**Fishing:**\n\n🐟 Kamu mendapatkan ikan bangkai 🐟\n\n💵 cost: $10\n\n${message.author}`)
                    .setThumbnail('http://pngimg.com/uploads/fish/fish_PNG25175.png');
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);
                fish[message.author.id].mati = mati + pusat;
                fs.writeFile('./json/fish.json', JSON.stringify(fish), err => {
                    if (err) console.log(err);
                });

                message.channel.stopTyping(true);
            } else if (resultflip === 6) {
                const postMsg = await message.channel.send(`**\`${message.author.username}: \` Tunggu 5 detik yaaa >//<  🎣**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`**Fishing:**\n\n🐟 Kamu mendapatkan ikan bangkai 🐟\n\n💵 cost: $10\n\n${message.author}`)
                    .setThumbnail('http://pngimg.com/uploads/fish/fish_PNG25175.png');
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);
                message.channel.stopTyping(true);
                fish[message.author.id].mati = mati + pusat;
                fs.writeFile('./json/fish.json', JSON.stringify(fish), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 7) {
                const postMsg = await message.channel.send(`**\`${message.author.username}: \` Tunggu 5 detik yaaa >//<  🎣**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`**Fishing:**\n\n🐟 Kamu mendapatkan ikan bangkai 🐟\n\n💵 cost: $10\n\n${message.author}`)
                    .setThumbnail('http://pngimg.com/uploads/fish/fish_PNG25175.png');
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);

                message.channel.stopTyping(true);
                fish[message.author.id].mati = mati + pusat;
                fs.writeFile('./json/fish.json', JSON.stringify(fish), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 8) {
                const postMsg = await message.channel.send(`**\`${message.author.username}: \` Tunggu 5 detik yaaa >//<  🎣**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`**Fishing:**\n\n🐠 Kamu mendapatkan ikan cupang 🐠\n\n💵 cost: $10\n\n${message.author}`)
                    .setThumbnail('http://www.cosmopublic.eu/wp-content/uploads/2018/06/guppy-right.png');
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);
                message.channel.stopTyping(true);
                fish[message.author.id].gabus = cupang + pusat;
                fs.writeFile('./json/fish.json', JSON.stringify(fish), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 9) {
                const postMsg = await message.channel.send(`**\`${message.author.username}: \` Tunggu 5 detik yaaa >//<  🎣**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`**Fishing:**\n\n🐟 Kamu mendapatkan ikan bangkai 🐟\n\n💵 cost: $10\n\n${message.author}`)
                    .setThumbnail('http://pngimg.com/uploads/fish/fish_PNG25175.png');
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);
                message.channel.stopTyping(true);
                fish[message.author.id].mati = mati + pusat;
                fs.writeFile('./json/fish.json', JSON.stringify(fish), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 10) {
                const postMsg = await message.channel.send(`**\`${message.author.username}: \`Tunggu 5 detik yaaa >//<  🎣**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`**Fishing:**\n\n🐟 Kamu mendapatkan ikan bangkai 🐟\n\n💵 cost: $10\n\n${message.author}`)
                    .setThumbnail('http://pngimg.com/uploads/fish/fish_PNG25175.png');
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);

                message.channel.stopTyping(true);
                fish[message.author.id].mati = mati + pusat;
                fs.writeFile('./json/fish.json', JSON.stringify(fish), err => {
                    if (err) console.log(err);
                });
            }
            db.set(`lastDailyfish_${message.author.id}`, Date.now());
        }
        return null;
    }
};
