/* eslint-disable complexity */
const fs = require('fs');
const db = require('quick.db');
const inv = require('../../json/inv.json');
const fish = require('../../json/fish.json');
const { stripIndent } = require('common-tags');

module.exports = {
    name: 'ransel',
    alias: [''],
    deskripsi: 'Cek inventory',
    uasge: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        const optionRaw = args.slice('0').join(' ');
        const option = optionRaw.toLocaleLowerCase();

        const { diamond } = inv[message.author.id];
        const { gold } = inv[message.author.id];
        const { coal } = inv[message.author.id];
        const { chip } = inv[message.author.id];
        const { cupang } = fish[message.author.id];
        const { gabus } = fish[message.author.id];
        const { mati } = fish[message.author.id];

        if (option.match('help')) {
            message.channel.send(stripIndent`**\`\`\`ini
              [ untuk melihat hasil penambangan Anda ]
                perintah: >ransel hasil menambang

              ▸ Untuk menjual barang tambang gunakan:
              ▸ ransel jual berlian [jumlah]
              ▸ ransel jual emas [jumlah]
              ▸ ransel jual batubara [jumlah]
              ▸ ransel jual chip [jumlah]

              \`\`\`**`);
        }
        if (option.match('hasil tambang')) {
            message.channel.send(stripIndent`
            💼 |> ${message.author.username} isi ransel hasil tambangan kamu:

            💎 Berlian = ${diamond}
            🔶 Emas = ${gold}
            🌑 Batubara = ${coal}
            💠 Chip = ${chip}
              `);
        }

        if (option.match('jual berlian')) {
            const rok = Number(args[2]);
            const amounts = parseInt(args[2]);
            if (isNaN(amounts)) return message.channel.send('** hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal. **');
            if (rok < '2') return message.reply('**  `💎`: Minimal Anda bisa menjual ` 2` Berlian ** ');
            if (isNaN(amounts)) return message.channel.send('** silakan masukkan nominal yang benar! **');
            if (diamond < args[2]) return message.reply('**  `💎`: berlian Anda tidak cukup! **');
            if (!inv[message.author.id]) return message.reply('** `💎`: Anda tidak memiliki Berlian sebesar itu! **');

            const amount = Number('100' * args[2]);
            const dor = amount;
            inv[message.author.id] = {
                diamond: diamond - parseInt(args[2]),
                gold,
                coal,
                chip
            };
            db.add(`userBalance_${message.author.id}`, dor);
            fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                if (err) console.log(err);
            });
            message.channel.send(`\`${message.author.username}\` **: Kamu menjual \`${args[2]}\` Berlian dengan harga \`$${dor}\`**`);
        }

        if (option.match('jual emas')) {
            const rok = Number(args[2]);
            const amounts = parseInt(args[2]);
            if (isNaN(amounts)) return message.channel.send('** hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal. **');
            if (rok < '2') return message.reply('** 🔶: Minimal Anda bisa menjual ` 2` Emas ** ');
            if (isNaN(amounts)) return message.channel.send('** silakan masukkan nominal yang benar!  **');
            if (gold < args[2]) return message.reply('** 🔶: Emas Anda tidak cukup! **');
            if (!inv[message.author.id]) return message.reply('** 🔶: Anda tidak memiliki Emas sebesar itu! **');

            const amount2 = Number('60' * args[2]);

            const dor = amount2;
            inv[message.author.id] = {
                gold: gold - parseInt(args[2]),
                diamond,
                coal,
                chip
            };
            db.add(`userBalance_${message.author.id}`, dor);
            fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                if (err) console.log(err);
            });
            message.channel.send(`\`${message.author.username}\` **: Kamu menjual \`${args[2]}\` Emas dengan harga \`$${dor}\`**`);
        }
        if (option.match('jual batubara')) {
            const rok = Number(args[2]);
            const amounts = parseInt(args[2]);
            if (isNaN(amounts)) return message.channel.send('** hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal. **');
            if (rok < '2') return message.reply('** ◼: Minimal Anda bisa menjual ` 2` Batubara** ');
            if (isNaN(amounts)) return message.channel.send('** silakan masukkan nominal yang benar! **');
            if (coal < args[2]) return message.reply('** ◼: Batubara Anda tidak cukup!**');
            if (!inv[message.author.id]) return message.reply('** ◼: Anda tidak memiliki Batubara sebesar itu! **');

            const amount2 = Number('10' * args[2]);
            const dor = amount2;
            inv[message.author.id] = {
                gold,
                diamond,
                coal: coal - parseInt(args[2]),
                chip
            };
            db.add(`userBalance_${message.author.id}`, dor);
            fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                if (err) console.log(err);
            });
            message.channel.send(`\`${message.author.username}\` **: Kamu menjual \`${args[2]}\` Batubara dengan harga \`$${dor}\`**`);
        }

        if (option.match('jual chip')) {
            const rok = Number(args[2]);
            const amounts = parseInt(args[2]);
            if (isNaN(amounts)) return message.channel.send('** hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal. **');
            if (rok < '2') return message.reply('** 💠: Minimal Anda bisa menjual ` 2` Chip ** ');
            if (isNaN(amounts)) return message.channel.send('** silakan masukkan nominal yang benar! **');
            if (chip < args[2]) return message.reply('** 💠: Chip Anda tidak cukup! **');
            if (!inv[message.author.id]) return message.reply('** 💠: Anda tidak memiliki Chip sebesar itu! **');

            const amount2 = Number('250' * args[2]);
            const dor = amount2;
            inv[message.author.id] = {
                gold,
                diamond,
                chip: chip - parseInt(args[2]),
                coal
            };
            db.add(`userBalance_${message.author.id}`, dor);
            fs.writeFile('./inv.json', JSON.stringify(inv), err => {
                if (err) console.log(err);
            });
            message.channel.send(`\`${message.author.username}\` **: Kamu menjual \`${args[2]}\` Chip dengan harga \`$${dor}\`**`);
        }

        if (option.match('hasil memancing')) {
            message.channel.send(stripIndent`
              💼 |> ${message.author.username} Fill in your fishing bag:

              🐠 hickey :> ${cupang}
              🐡 cork :> ${gabus}
              🐟 fish carcass :> ${mati}
              `);
        }

        if (option.match('sell hickey')) {
            const rok = Number(args[2]);
            const amounts = parseInt(args[2]);
            if (isNaN(amounts)) return message.channel.send('**hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal.**');
            if (rok < '2') return message.reply('**🐠: At a minimum you can sell a fish carcass of `2`**');
            if (isNaN(amounts)) return message.channel.send('**please input the correct nominal!**');
            if (cupang < args[2]) return message.reply("**🐠 : Your fish isn't enough! **");
            if (!fish[message.author.id]) return message.reply("**🐠 : You don't have a carcass of that size!**");

            const amount = Number('50' * args[2]);
            const dor = amount;
            fish[message.author.id] = {
                cupang: cupang - parseInt(args[2]),
                gabus,
                mati

            };
            db.add(`userBalance_${message.author.id}`, dor);
            fs.writeFile('./fish.json', JSON.stringify(fish), err => {
                if (err) console.log(err);
            });
            message.channel.send(`\`${message.author.username}\` 💸 **: You sell \`${args[2]}\` hickey with prices \`${dor}\`**`);
        }

        if (option.match('sell cork')) {
            const rok = Number(args[2]);
            const amounts = parseInt(args[2]);
            if (isNaN(amounts)) return message.channel.send('**hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal.**');
            if (rok < '2') return message.reply('**🐡 : At a minimum you can sell fish carcasses as big as `2`**');
            if (isNaN(amounts)) return message.channel.send('**Please input the correct nominal!**');
            if (gabus < args[2]) return message.reply('**🐡 : Your fish is not enough!**');
            if (!fish[message.author.id]) return message.reply("**🐡 : You don't have a carcass of that size!**");

            const amount2 = Number('30' * args[2]);

            const dor = amount2;
            fish[message.author.id] = {
                gabus: gabus - parseInt(args[2]),
                cupang,
                mati

            };
            db.add(`userBalance_${message.author.id}`, dor);
            fs.writeFile('./fish.json', JSON.stringify(fish), err => {
                if (err) console.log(err);
            });
            message.channel.send(`\`${message.author.username}\` 💸 **: You sell \`${args[2]}\` cork with prices \`${dor}\`**`);
        }
        if (option.match('sell carcass')) {
            const rok = Number(args[2]);
            const amounts = parseInt(args[2]);
            if (isNaN(amounts)) return message.channel.send('**hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal.**');
            if (rok < '2') return message.reply('**🐟 : At a minimum you can sell fish carcasses as big as `2`**');
            if (isNaN(amounts)) return message.channel.send('**mohon masukan nominal yang benar!**');
            if (mati < args[2]) return message.reply('**🐟 : Your fish is not enough!**');
            if (!fish[message.author.id]) return message.reply("**🐟 : You don't have a carcass of that size!**");

            const amount2 = Number('5' * args[2]);
            const dor = amount2;
            fish[message.author.id] = {
                gabus,
                cupang,
                mati: mati - parseInt(args[2])

            };
            db.add(`userBalance_${message.author.id}`, dor);
            fs.writeFile('./fish.json', JSON.stringify(fish), err => {
                if (err) console.log(err);
            });
            message.channel.send(`\`${message.author.username}\` 💸 **: You sell \`${args[2]}\` fish carcass with prices \`${dor}\`**`);
        }

        if (option.match('test')) {
            const test = ('100' * `${args[1]}`);
            message.channel.send(`${test}`);
        }
        return null;
    }
};
