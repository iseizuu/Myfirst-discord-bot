/* eslint-disable require-atomic-updates */
/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
/* eslint-disable complexity */
const fs = require('fs');
const db = require('quick.db');
const Discord = require('discord.js');
const inv = require('../../json/inv.json');
const ms = require('parse-ms');


module.exports = {
    name: 'mine',
    alias: ['menambang', 'nambang'],
    deskripsi: 'Set timer',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const cooldown = 0.004e+7;
        const lastDailyinv = await db.fetch(`lastDailyinv_${message.author.id}`);
        if (lastDailyinv !== null && cooldown - (Date.now() - lastDailyinv) > 0) {
            const timeObj = ms(cooldown - (Date.now() - lastDailyinv));

            message.channel.send(`\`${message.author.username}\` **Kamu harus menunggu \`${timeObj.seconds}\` detik untuk menambang kembali ⛏**!`);
        } else {
            const pusat = Math.floor(Number(Math.random())) + 1;
            if (!inv[message.author.id]) {
                inv[message.author.id] = {
                    diamond: 0,
                    gold: 0,
                    coal: 0,
                    chip: 0

                };
            }

            const { diamond } = inv[message.author.id];
            const { gold } = inv[message.author.id];
            const { coal } = inv[message.author.id];
            const { chip } = inv[message.author.id];


            const amount = Number(30);
            const balance = await db.fetch(`userBalance_${message.author.id}`);
            if (balance < amount) return message.reply('**`🙏` **maaf Anda tidak punya `Credits` untuk melakukan penambangan** ⛏**');

            const resultflip = Math.floor((Math.random() * 12));
            if (resultflip === 1) {
                const postMsg = await message.channel.send(`**\`${message.author.username}:\` Tunggu 5 detik, sedang proses penggalian \`⛏\`**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedheads = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`\`⛏\` **Hasil Menambang:**\n \`Kamu mendapatkan Berlian 💎\`\n\`💵\` **Biaya Menambang:**\n \`Kamu di potong pajak sebesar $30\`\n\n**\`⛑\`Penambang:**${message.author}`);
                setTimeout(() => {
                    postMsg.edit(embedheads);
                }, 5000);
                message.channel.stopTyping(true);
                inv[message.author.id].diamond = diamond + pusat;
                fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 2) {
                const postMsg = await message.channel.send(`**\`${message.author.username}:\` Tunggu 5 detik, sedang proses penggalian \`⛏\`**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`\`⛏\` **Hasil Menambang:**\n \`Kamu mendapatkan Emas 🔶\`\n\`💵\` **Biaya Menambang:**\n \`Kamu di potong pajak sebesar $30\`\n\n**\`⛑\`Penambang:**${message.author}`);
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);
                message.channel.stopTyping(true);
                inv[message.author.id].gold = gold + pusat;
                fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 3) {
                const postMsg = await message.channel.send(`**\`${message.author.username}:\` Tunggu 5 detik, sedang proses penggalian \`⛏\`**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`\`⛏\` **Hasil Menambang:**\n \`Kamu mendapatkan Chip 💠\`\n\`💵\` **Biaya Menambang:**\n \`Kamu di potong pajak sebesar $30\`\n\n**\`⛑\`Penambang:**${message.author}`);
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);
                message.channel.stopTyping(true);
                inv[message.author.id].chip = chip + pusat;
                fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 4) {
                const postMsg = await message.channel.send(`**\`${message.author.username}:\` Tunggu 5 detik, sedang proses penggalian \`⛏\`**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedheads = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`\`⛏\` **Hasil Menambang:**\n \`Kamu mendapatkan Berilan💎\`\n\`💵\` **Biaya Menambang:**\n \`Kamu di potong pajak sebesar $30\`\n\n**\`⛑\`Penambang:**${message.author}`);
                setTimeout(() => {
                    postMsg.edit(embedheads);
                }, 5000);
                message.channel.stopTyping(true);
                inv[message.author.id].diamond = diamond + pusat;
                fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 6) {
                const postMsg = await message.channel.send(`**\`${message.author.username}\`Tunggu 5 detik, sedang proses penggalian \`⛏\`**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`\`⛏\` **Hasil Menambang:**\n \`Kamu mendapatkan Batubara ◾\`\n\`💵\` **Biaya Menambang:**\n \`Kamu di potong pajak sebesar $30\`\n\n**\`⛑\`Penambang:**${message.author}`);
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);
                inv[message.author.id].coal = coal + pusat;
                fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                    if (err) console.log(err);
                });

                message.channel.stopTyping(true);
            } else if (resultflip === 7) {
                const postMsg = await message.channel.send(`**\`${message.author.username}\`Tunggu 5 detik, sedang proses penggalian \`⛏\`**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`\`⛏\` **Hasil Menambang:**\n \`Kamu mendapatkan Batubara ◾\`\n\`💵\` **Biaya Menambang:**\n \`Kamu di potong pajak sebesar $30\`\n\n**\`⛑\`Penambang:**${message.author}`);
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);
                inv[message.author.id].coal = coal + pusat;
                fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                    if (err) console.log(err);
                });

                message.channel.stopTyping(true);
            } else if (resultflip === 8) {
                const postMsg = await message.channel.send(`**\`${message.author.username}:\` Tunggu 5 detik, sedang proses penggalian \`⛏\`**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`\`⛏\` **Hasil Menambang:**\n \`Kamu mendapatkan Batubara ◾\`\n\`💵\` **Biaya Menambang:**\n \`Kamu di potong pajak sebesar $30\`\n\n**\`⛑\`Penambang:**${message.author}`);
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);
                message.channel.stopTyping(true);
                inv[message.author.id].coal = coal + pusat;
                fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 9) {
                const postMsg = await message.channel.send(`**\`${message.author.username}:\` Tunggu 5 detik, sedang proses penggalian \`⛏\`**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`\`⛏\` **Hasil Menambang:**\n \`Kamu mendapatkan Batubara ◾\`\n\`💵\` **Biaya Menambang:**\n \`Kamu di potong pajak sebesar $30\`\n\n**\`⛑\`Penambang:**${message.author}`);
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);

                message.channel.stopTyping(true);
                inv[message.author.id].coal = coal + pusat;
                fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 10) {
                const postMsg = await message.channel.send(`**\`${message.author.username}:\` Tunggu 5 detik, sedang proses penggalian \`⛏\`**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`\`⛏\` **Hasil Menambang:**\n \`Kamu mendapatkan Emas 🔶\`\n\`💵\` **Biaya Menambang:**\n \`Kamu di potong pajak sebesar $30\`\n\n**\`⛑\`Penambang:**${message.author}`);
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);
                message.channel.stopTyping(true);
                inv[message.author.id].gold = gold + pusat;
                fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 11) {
                const postMsg = await message.channel.send(`**\`${message.author.username}:\` Tunggu 5 detik, sedang proses penggalian \`⛏\`**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`\`⛏\` **Hasil Menambang:**\n \`Kamu mendapatkan Batubara ◾\`\n\`💵\` **Biaya Menambang:**\n \`Kamu di potong pajak sebesar $30\`\n\n**\`⛑\`Penambang:**${message.author}`);
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);
                message.channel.stopTyping(true);
                inv[message.author.id].coal = coal + pusat;
                fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                    if (err) console.log(err);
                });
            } else if (resultflip === 12) {
                const postMsg = await message.channel.send(`**\`${message.author.username}:\` Tunggu 5 detik, sedang proses penggalian \`⛏\`**`);
                db.subtract(`userBalance_${message.author.id}`, amount);
                message.channel.startTyping();
                const embedtails = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`\`⛏\` **Hasil Menambang:**\n \`Kamu mendapatkan Batubara ◾\`\n\`💵\` **Biaya Menambang:**\n \`Kamu di potong pajak sebesar $30\`\n\n**\`⛑\`Penambang:**${message.author}`);
                setTimeout(() => {
                    postMsg.edit(embedtails);
                }, 5000);

                message.channel.stopTyping(true);
                inv[message.author.id].coal = coal + pusat;
                fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                    if (err) console.log(err);
                });
            }
            db.set(`lastDailyinv_${message.author.id}`, Date.now());
        }
        return null;
    }
};
