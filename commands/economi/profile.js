/* eslint-disable global-require */
/* eslint-disable no-magic-numbers */
/* eslint-disable complexity */
const { Canvas } = require('canvas-constructor');
const { loadImage } = require('canvas');
const superagent = require('node-superfetch');
const fs = require('fs');
const db = require('quick.db');
const Discord = require('discord.js');
const { stripIndent } = require('common-tags');
module.exports = {
    name: 'profile',
    alias: ['p'],
    deskripsi: 'Menampilkan profil',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        console.log('woe');
        const optionRaw = args.slice(0).join(' ');
        const option = optionRaw.toLocaleLowerCase();

        let targetBalance = await db.fetch(`userBalance_${message.author.id}`);
        const startBalance = 0;

        if (!option) {
            const user = message.mentions.users.first() || message.author;
            const namam = user.username;
            const jadim = namam.length > 12 ? `${namam.substring(0, 20) }.` : namam;
            // eslint-disable-next-line no-inner-declarations
            async function createCanvas() {
                const backgrounds = JSON.parse(fs.readFileSync('./json/background.json', 'utf8'));

                if (!backgrounds[user.id]) backgrounds[user.id] = { backgrounds: 'https://cdn.discordapp.com/attachments/703962457240240138/788438449580802078/wallpaper.png' };

                const bk = backgrounds[user.id].backgrounds;

                const { body: background } = await superagent.get(`https://cdn.discordapp.com/attachments/703962457240240138/788438449580802078/wallpaper.png`);
                const { body: mark } = await superagent.get(`https://ak8.picdn.net/shutterstock/videos/23164888/thumb/1.jpg`);
                const { body: profile } = await superagent.get(`${bk}`);
                const avatar = user.displayAvatarURL({ format: 'png', size: 512 });
                const _avatar = await loadImage(avatar);
                let balance = await db.fetch(`userBalance_${user.id}`);
                if (balance === null) balance = '0';

                const xp = JSON.parse(fs.readFileSync('./json/xp.json', 'utf8'));
                if (!xp[message.author.id]) {
                    xp[message.author.id] = {
                        xp: 0,
                        level: 1
                    };
                }
                const curxp = xp[message.author.id].xp;
                const curlvl = xp[message.author.id].level;


                const garena = JSON.parse(fs.readFileSync('./json/garena.json', 'utf8'));
                if (!garena[user.id]) garena[user.id] = { garena: 'https://cdn.discordapp.com/attachments/473819811701456907/480485440634224650/2323.png' };

                const osu = JSON.parse(fs.readFileSync('./json/osu.json', 'utf8'));
                if (!osu[user.id]) osu[user.id] = { osu: 'https://cdn.discordapp.com/attachments/473819811701456907/480485440634224650/2323.png' };

                const ml = JSON.parse(fs.readFileSync('./json/ml.json', 'utf8'));
                if (!ml[user.id]) ml[user.id] = { ml: 'https://cdn.discordapp.com/attachments/473819811701456907/480485440634224650/2323.png' };

                const pubg = JSON.parse(fs.readFileSync('./json/pubg.json', 'utf8'));
                if (!pubg[user.id]) pubg[user.id] = { pubg: 'https://cdn.discordapp.com/attachments/473819811701456907/480485440634224650/2323.png' };


                const ml1 = ml[user.id].ml;
                const osu1 = osu[user.id].osu;
                const pb1 = garena[user.id].garena;
                const pubg1 = pubg[user.id].pubg;


                const { body: moblielegend } = await superagent.get(`${ml1}`);
                const { body: osus } = await superagent.get(`${osu1}`);
                const { body: pbs } = await superagent.get(`${pb1}`);
                const { body: pubgs } = await superagent.get(`${pubg1}`);


                const rep = JSON.parse(fs.readFileSync('./json/rep.json', 'utf8'));
                if (!rep[user.id]) rep[user.id] = { rep: '0' };

                const reps = rep[user.id].rep;


                const status = JSON.parse(fs.readFileSync('./json/status.json', 'utf8'));
                if (!status[user.id]) status[user.id] = { status: 'I love u' };

                const sts = status[user.id].status;

                const stet = sts.length > 35 ? `${sts.substring(0, 28) } ` : sts;
                return new Canvas(300, 300)
                    .setColor('#00d9ff')
                    .setTextFont('bold 20px Courier New')
                    .addImage(profile, 0, 0, 300, 300)
                    .addImage(background, 0, 0, 300, 300)
                    .setColor('#000000')
                    .setTextFont('bold 12px Courier New')
                    .setTextAlign('right')
                    .addText(`$${balance}`, 285, 198)
                    .addText(`${curxp}`, 285, 185)
                    .setTextFont('bold 40px Courier New')
                    .setTextAlign('center')
                    .addText(`${curlvl}`, 130, 220)
                    .setColor('white')
                    .setTextAlign('center')
                    .setTextFont('bold 15px Courier New')
                    .addText(`+${reps}rep`, 55, 160)
                    .setColor('black')
                    .setTextAlign('left')
                    .setTextFont('bold 10px Courier new')
                    .addText(`${jadim}`, 130, 128)
                    .addText(`${user.id}`, 262, 380)
                    .setColor('#000000')
                    .setTextFont('bold 10px Courier New')
                    .addText(`${stet}`, 111, 260)
                    .addImage(_avatar, 19, 68, 74, 75)
                    .addImage(mark, 10, 435, 75, 75)
                    .addImage(moblielegend, 10, 168, 32, 36)
                    .addImage(pubgs, 45, 172, 28, 30)
                    .addImage(osus, 15, 508, 65, 65)
                    .addImage(pbs, 85, 508, 60, 60)

                // .addImage(_avatar, 100, 50, 256, 256, 128) // apaan sih ini bgsd
                    .toBufferAsync();
            }
            message.channel.send(`📰 **Kartu profil Kamu: ** \`${user.username}\`\n**Butuh bantuan **❓\`${message.prefix}card\`\n`, {
                files: [ {
                    attachment: await createCanvas(),
                    name: 'Sweet Profile.jpg'
                } ]
            });
        } else {
            if (option.match('check')) {
                const user = message.mentions.users.first();
                const namam = user.username;
                const jadim = namam.length > 12 ? `${namam.substring(0, 20) }.` : namam;
                // eslint-disable-next-line no-inner-declarations
                async function createCanvas() {
                    const backgrounds = JSON.parse(fs.readFileSync('./json/background.json', 'utf8'));

                    if (!backgrounds[user.id]) backgrounds[user.id] = { backgrounds: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHSxX9MEExxb-ySIvvatiSutJJP1jAIzoNB7OCPjnlIVOHSo1rQ' };

                    const bk = backgrounds[user.id].backgrounds;

                    const { body: background } = await superagent.get(`https://cdn.discordapp.com/attachments/703962457240240138/788438449580802078/wallpaper.png`);
                    const { body: mark } = await superagent.get(`https://ak8.picdn.net/shutterstock/videos/23164888/thumb/1.jpg`);
                    const { body: profile } = await superagent.get(`${bk}`);
                    // eslint-disable-next-line max-len
                    const avatar = message.mentions.users.size ? message.mentions.users.first().displayAvatarURL({ format: 'png', size: 512 }) : message.author.displayAvatarURL({ format: 'png', size: 512 });
                    const _avatar = await loadImage(avatar);
                    let balance = await db.fetch(`userBalance_${user.id}`);
                    if (balance === null) balance = '0';

                    const xp = JSON.parse(fs.readFileSync('./json/xp.json', 'utf8'));
                    if (!xp[message.author.id]) {
                        xp[message.author.id] = {
                            xp: 0,
                            level: 1
                        };
                    }
                    const curxp = xp[message.author.id].xp;
                    const curlvl = xp[message.author.id].level;


                    const garena = JSON.parse(fs.readFileSync('./json/garena.json', 'utf8'));
                    if (!garena[user.id]) garena[user.id] = { garena: 'https://cdn.discordapp.com/attachments/473819811701456907/480485440634224650/2323.png' };

                    const osu = JSON.parse(fs.readFileSync('./json/osu.json', 'utf8'));
                    if (!osu[user.id]) osu[user.id] = { osu: 'https://cdn.discordapp.com/attachments/473819811701456907/480485440634224650/2323.png' };

                    const ml = JSON.parse(fs.readFileSync('./json/ml.json', 'utf8'));
                    if (!ml[user.id]) ml[user.id] = { ml: 'https://cdn.discordapp.com/attachments/473819811701456907/480485440634224650/2323.png' };

                    const pubg = JSON.parse(fs.readFileSync('./json/pubg.json', 'utf8'));
                    if (!pubg[user.id]) pubg[user.id] = { pubg: 'https://cdn.discordapp.com/attachments/473819811701456907/480485440634224650/2323.png' };


                    const ml1 = ml[user.id].ml;
                    const osu1 = osu[user.id].osu;
                    const pb1 = garena[user.id].garena;
                    const pubg1 = pubg[user.id].pubg;


                    const { body: moblielegend } = await superagent.get(`${ml1}`);
                    const { body: osus } = await superagent.get(`${osu1}`);
                    const { body: pbs } = await superagent.get(`${pb1}`);
                    const { body: pubgs } = await superagent.get(`${pubg1}`);


                    const rep = JSON.parse(fs.readFileSync('./json/rep.json', 'utf8'));
                    if (!rep[user.id]) rep[user.id] = { rep: '0' };

                    const reps = rep[user.id].rep;


                    const status = JSON.parse(fs.readFileSync('./json/status.json', 'utf8'));
                    if (!status[user.id]) status[user.id] = { status: 'Status belum di set 😥' };

                    const sts = status[user.id].status;

                    const stet = sts.length > 35 ? `${sts.substring(0, 28) } ` : sts;
                    return new Canvas(300, 300)
                        .setColor('#00d9ff')
                        .setTextFont('bold 20px Courier New')
                        .addImage(profile, 0, 0, 300, 300)
                        .addImage(background, 0, 0, 300, 300)
                        .setColor('#000000')
                        .setTextFont('bold 12px Courier New')
                        .setTextAlign('right')
                        .addText(`$${balance}`, 285, 198)
                        .addText(`${curxp}`, 285, 185)
                        .setTextFont('bold 40px Courier New')
                        .setTextAlign('center')
                        .addText(`${curlvl}`, 130, 220)
                        .setColor('white')
                        .setTextAlign('center')
                        .setTextFont('bold 15px Courier New')
                        .addText(`+${reps}rep`, 55, 160)
                        .setColor('black')
                        .setTextAlign('left')
                        .setTextFont('bold 10px Courier new')
                        .addText(`${jadim}`, 130, 128)
                        .addText(`${user.id}`, 262, 380)
                        .setColor('#000000')
                        .setTextFont('bold 10px Courier New')
                        .addText(`${stet}`, 111, 260)
                        .addImage(_avatar, 19, 68, 74, 75)
                        .addImage(mark, 10, 435, 75, 75)
                        .addImage(moblielegend, 10, 168, 32, 36)
                        .addImage(pubgs, 45, 172, 28, 30)
                        .addImage(osus, 15, 508, 65, 65)
                        .addImage(pbs, 85, 508, 60, 60)

                    // .addImage(_avatar, 100, 50, 256, 256, 128) // apaan sih ini bgsd
                        .toBufferAsync();
                }
                message.channel.send(`📰 **Kartu profil milik: ** \`${user.username}\`\n**Butuh bantuan **❓\`${message.prefix}card\`\n`, {
                    files: [ {
                        attachment: await createCanvas(),
                        name: 'Sweet Profile.jpg'
                    } ]
                });
            }

            if (option.match('atur ulang')) {
                const embed = new Discord.MessageEmbed()
                    .setColor('#47037sca')
                    .setDescription(`**Profile kamu telah direset ulang..**`);


                message.channel.send({ embed });
                const background = JSON.parse(fs.readFileSync('./json/background.json', 'utf8'));
                background[message.author.id] = { backgrounds: 'https://cdn6.aptoide.com/imgs/0/9/d/09dde68d62e04fe3802a15cfdc801471_screen.jpg' };
                fs.writeFile('./json/background.json', JSON.stringify(background), err => {
                    if (err) console.log(err);
                });
                const status = JSON.parse(fs.readFileSync('./json/status.json', 'utf8'));
                status[message.author.id] = { status: 'User status not setting' };
                fs.writeFile('./json/status.json', JSON.stringify(status), err => {
                    if (err) console.log(err);
                });
            }
            if (option.match('status')) {
                const status = JSON.parse(fs.readFileSync('./json/status.json', 'utf8'));
                const inputmessage = args.slice(1).join(' ');
                if (args[1]) {
                    status[message.author.id] = { status: inputmessage };
                    fs.writeFile('./json/status.json', JSON.stringify(status), err => {
                        if (err) console.log(err);
                    });

                    const embed = new Discord.MessageEmbed()
                        .setColor('#00d2ff')
                        .setDescription(`\`📜\`**Status baru telah di terapkan menjadi:** \n\`\`\`
${inputmessage}\`\`\``);


                    message.channel.send({ embed });
                }
            }


            if (option.match('beli badges mobile legend')) {
                // eslint-disable-next-line global-require
                const xl = require('../../json/xp.json');
                const curlvls = xl[message.author.id].level;
                if (curlvls < 2) return message.reply('`🏆` **anda harus level 2 untuk membuka toko**');
                const ml12 = parseInt(5500);
                message.deconste();
                if (targetBalance === null) targetBalance = startBalance;
                if (ml12 > targetBalance) return message.channel.send(`${message.author} **:owl:  >> kamu membutuhkan $5500 credit untuk membeli** \`Mobile Legend\``);
                db.subtract(`userBalance_${message.author.id}`, ml12);
                const embed = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`${message.author} \n :owl:  >>\n 💵 **You have badges a MOBILE LEGEND badge for $5500.**`)
                    .setThumbnail(`https://i.pinimg.com/originals/ab/a1/fd/aba1fd8d914fd3455b0c24437645ff95.png`);


                message.channel.send({ embed });
                const mlb = JSON.parse(fs.readFileSync('./ml.json', 'utf8'));
                if (args[1]) {
                    mlb[message.author.id] = { ml: 'https://cdn.discordapp.com/attachments/479273766984089610/481036867320545280/ml.png' };
                    fs.writeFile('./ml.json', JSON.stringify(mlb), err => {
                        if (err) console.log(err);
                    });
                }
            }
            if (option.match('beli badges pubg')) {
                // eslint-disable-next-line global-require
                const xl = require('../../json/xp.json');
                const curlvls = xl[message.author.id].level;
                if (curlvls < 2) return message.reply('`🏆` **anda harus level 2 untuk membuka toko**');
                const pubg12 = parseInt(3500);
                message.deconste();
                if (targetBalance === null) targetBalance = startBalance;
                if (pubg12 > targetBalance) return message.channel.send(`${message.author}:owl:  >> kamu membutuhkan $3500 credit untuk membeli** \`PUBG\``);
                db.subtract(`userBalance_${message.author.id}`, pubg12);
                const embed = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`${message.author} \n :owl:  >>\n 💵 **You have badges a PUBG badge for $3500.**`)
                    .setThumbnail(`https://pbs.twimg.com/media/DLZ7osMUIAAvIkJ.png`);


                message.channel.send({ embed });
                const pubgs = JSON.parse(fs.readFileSync('./pubg.json', 'utf8'));
                if (args[1]) {
                    pubgs[message.author.id] = { pubg: 'https://media.discordapp.net/attachments/479273766984089610/481039339816615956/dIAgiEkR.png' };
                    fs.writeFile('./pubg.json', JSON.stringify(pubgs), err => {
                        if (err) console.log(err);
                    });
                }
            }
            if (option.match('beli badges osu')) {
                // eslint-disable-next-line global-require
                const xl = require('../../json/xp.json');
                const curlvls = xl[message.author.id].level;
                if (curlvls < 2) return message.reply('`🏆` **setidaknya level 2 untuk membuka toko**');
                const osu12 = parseInt(4500);
                message.deconste();
                if (targetBalance === null) targetBalance = startBalance;
                if (osu12 > targetBalance) return message.channel.send(`${message.author} :owl:  >> kamu membutuhkan $4500 credit untuk membeli** \`OSU\``);
                db.subtract(`userBalance_${message.author.id}`, osu12);
                const embed = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`${message.author} \n :owl:  >>\n 💵 **You have badges a OSU badge for $4500.**`)
                    .setThumbnail(`https://vignette.wikia.nocookie.net/osugame/images/c/c9/Logo.png/revision/latest?cb=20151219073209`);


                message.channel.send({ embed });
                const osub = JSON.parse(fs.readFileSync('./osu.json', 'utf8'));
                if (args[1]) {
                    osub[message.author.id] = { osu: 'https://vignette.wikia.nocookie.net/osugame/images/c/c9/Logo.png/revision/latest?cb=20151219073209' };
                    fs.writeFile('./osu.json', JSON.stringify(osub), err => {
                        if (err) console.log(err);
                    });
                }
            }
            if (option.match('beli badges garena')) {
                // eslint-disable-next-line global-require
                const xl = require('../../json/xp.json');
                const curlvls = xl[message.author.id].level;
                if (curlvls < 2) return message.reply('`🏆` **anda harus level 2 untuk membuka toko**');
                const pb12 = parseInt(6000);
                message.deconste();
                if (targetBalance === null) targetBalance = startBalance;
                if (pb12 > targetBalance) return message.channel.send(`${message.author} :owl:  >> kamu membutuhkan $6000 credit untuk membeli** \`Garena\``);
                db.subtract(`userBalance_${message.author.id}`, pb12);
                const embed = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`${message.author} \n :owl:  >>\n 💵 *You have badges a Garena badge forr $6000.**`)
                    .setThumbnail(`http://www.indogamers.com/system/upload/media/pictures/56bd9e927a23f1455267474logo-pbgc-fin2016.png`);


                message.channel.send({ embed });
                const pbg = JSON.parse(fs.readFileSync('./garena.json', 'utf8'));
                if (args[1]) {
                    pbg[message.author.id] = { garena: 'http://www.indogamers.com/system/upload/media/pictures/56bd9e927a23f1455267474logo-pbgc-fin2016.png' };
                    fs.writeFile('./garena.json', JSON.stringify(pbg), err => {
                        if (err) console.log(err);
                    });
                }
            }

            if (option.match('toko')) {
                const embed = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(stripIndent`
                      **Background Shop**
                      \`🔮\` **Naruto**
                      \`🚍\` **tayo**
                      \`🏔\` **alam**
                      \`🎀\` **hello kity**
                      \`🔫\` **point blank**
                      \`☄\` **premium1**
                      \`🔥\` **premium2**

                      **Badges Shop**
                      \`⚔\` **mobile legend = $5500**
                      \`🔫\` **PUBG = $3500**
                      \`🎯\` **OSU = $4500**
                      \`🛡\` **Garena = $6000**

                      \`Example buy Background: >profile beli background <nama>\`
                      \`Example buy Badges: >profile beli badges <nama>\``)
                    .setImage('https://cdn.discordapp.com/attachments/473819811701456907/480320723475365898/saw_copy.png');

                return message.channel.send({ embed });
            }

            if (option.match('buybg_naruto')) {
                // eslint-disable-next-line global-require
                const xl = require('../../json/xp.json');
                const curlvls = xl[message.author.id].level;
                if (curlvls < 2) return message.reply('`🏆` **anda harus level 2 untuk membuka toko**');
                const amount = parseInt(2500);
                if (targetBalance === null) targetBalance = startBalance;
                if (amount > targetBalance) return message.channel.send(`${message.author} **You must need 5000 credits to get the background** \`Naruto\``);
                db.subtract(`userBalance_${message.author.id}`, amount);
                const embed = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`${message.author} \n 💵 **You managed to buy at a price of $5000 \nchange the background profile to**`)
                    .setImage(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPtbk6ZBPxutwLUxntTR7sEHrK8b6JySSj9IePX5yf1rcjQH2WQ`);


                message.channel.send({ embed });
                const background = JSON.parse(fs.readFileSync('./json/background.json', 'utf8'));
                if (args[1]) {
                    background[message.author.id] = { backgrounds: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPtbk6ZBPxutwLUxntTR7sEHrK8b6JySSj9IePX5yf1rcjQH2WQ' };
                    fs.writeFile('./json/background.json', JSON.stringify(background), err => {
                        if (err) console.log(err);
                    });
                }
            }
            if (option.match('beli background point blank')) {
                const xl = require('../../json/xp.json');
                const curlvls = xl[message.author.id].level;
                if (curlvls < 2) return message.reply('`🏆` **anda harus level 2 untuk membuka toko**');
                const amount = parseInt(5000);
                if (targetBalance === null) targetBalance = startBalance;
                if (amount > targetBalance) return message.channel.send(`${message.author} **You must need 5000 credits to get the background** \`pointblank\``);
                db.subtract(`userBalance_${message.author.id}`, amount);
                const embed = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`${message.author} \n 💵 **You managed to buy at a price of $5000 \nchange the background profile to**`)
                    .setImage(`https://cdn.discordapp.com/attachments/492675744636600340/493232579227549717/Screenshot_27.png`);


                message.channel.send({ embed });
                const background = JSON.parse(fs.readFileSync('./json/background.json', 'utf8'));
                if (args[1]) {
                    background[message.author.id] = { backgrounds: 'https://cdn.discordapp.com/attachments/492675744636600340/493232579227549717/Screenshot_27.png' };
                    fs.writeFile('./json/background.json', JSON.stringify(background), err => {
                        if (err) console.log(err);
                    });
                }
            }
            if (option.match('beli background hello kity')) {
                const xl = require('../../json/xp.json');
                const curlvls = xl[message.author.id].level;
                if (curlvls < 2) return message.reply('`🏆` **anda harus level 2 untuk membuka toko**');
                const amount = parseInt(5000);
                if (targetBalance === null) targetBalance = startBalance;
                if (amount > targetBalance) return message.channel.send(`${message.author} **You must need 5000 credits to get the background** \`hellokity\``);
                db.subtract(`userBalance_${message.author.id}`, amount);
                const embed = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`${message.author} \n 💵 **You managed to buy at a price of $5000 \nchange the background profile to**`)
                    .setImage(`https://cal.patch.com/sites/default/files/styles/t600x450/public/users/22511888/20180707180409/1.jpg`);


                message.channel.send({ embed });
                const background = JSON.parse(fs.readFileSync('./json/background.json', 'utf8'));
                if (args[1]) {
                    background[message.author.id] = { backgrounds: 'https://cal.patch.com/sites/default/files/styles/t600x450/public/users/22511888/20180707180409/1.jpg' };
                    fs.writeFile('./json/background.json', JSON.stringify(background), err => {
                        if (err) console.log(err);
                    });
                }
            }
            if (option.match('beli background tayo')) {
                const xl = require('../json/xp.json');
                const curlvls = xl[message.author.id].level;
                if (curlvls < 2) return message.reply('`🏆` **anda harus level 2 untuk membuka toko**');
                const amount = parseInt(5000);
                if (targetBalance === null) targetBalance = startBalance;
                if (amount > targetBalance) return message.channel.send(`${message.author} **You must need 5000 credits to get the background** \`tayo\``);
                db.subtract(`userBalance_${message.author.id}`, amount);
                const embed = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`${message.author} \n 💵 **You managed to buy at a price of $5000 \nchange the background profile to**`)
                    .setImage(`https://i.ytimg.com/vi/yR8W0MrpUgA/maxresdefault.jpg`);


                message.channel.send({ embed });
                const background = JSON.parse(fs.readFileSync('./json/background.json', 'utf8'));
                if (args[1]) {
                    background[message.author.id] = { backgrounds: 'https://i.ytimg.com/vi/yR8W0MrpUgA/maxresdefault.jpg' };
                    fs.writeFile('./json/background.json', JSON.stringify(background), err => {
                        if (err) console.log(err);
                    });
                }
            }
            if (option.match('beli background alam')) {
                const xl = require('../../json/xp.json');
                const curlvls = xl[message.author.id].level;
                if (curlvls < 2) return message.reply('`🏆` **anda harus level 2 untuk membuka toko**');
                const amount = parseInt(5000);
                if (targetBalance === null) targetBalance = startBalance;
                if (amount > targetBalance) return message.channel.send(`${message.author} **You must need 5000 credits to get the background** \`alam\``);
                db.subtract(`userBalance_${message.author.id}`, amount);
                const embed = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`${message.author} \n 💵 **You managed to buy at a price of $5000 \nchange the background profile to**`)
                    .setImage(`https://static.tripzilla.com/thumb/d/9/73689_700x.jpg`);


                message.channel.send({ embed });
                const background = JSON.parse(fs.readFileSync('./json/background.json', 'utf8'));
                if (args[1]) {
                    background[message.author.id] = { backgrounds: 'https://static.tripzilla.com/thumb/d/9/73689_700x.jpg' };
                    fs.writeFile('./json/background.json', JSON.stringify(background), err => {
                        if (err) console.log(err);
                    });
                }
            }
            if (option.match('beli background premium')) {
                const xl = require('../../json/xp.json');
                const curlvls = xl[message.author.id].level;
                if (curlvls < 2) return message.reply('`🏆` **anda harus level 2 untuk membuka toko**');
                const amount = parseInt(5000);
                if (targetBalance === null) targetBalance = startBalance;
                if (amount > targetBalance) return message.channel.send(`${message.author} **You must need 5000 credits to get the background** \`premium\``);
                db.subtract(`userBalance_${message.author.id}`, amount);
                const embed = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`${message.author} \n 💵 **You managed to buy at a price of $ 5000 \nchange the background profile to**`)
                    .setImage(`https://cdn.discordapp.com/attachments/473819811701456907/480022209298038785/2a5y2aru_copy.png`);


                message.channel.send({ embed });
                const background = JSON.parse(fs.readFileSync('./json/background.json', 'utf8'));
                if (args[1]) {
                    background[message.author.id] = { backgrounds: 'https://cdn.discordapp.com/attachments/473819811701456907/480022209298038785/2a5y2aru_copy.png' };
                    fs.writeFile('./json/background.json', JSON.stringify(background), err => {
                        if (err) console.log(err);
                    });
                }
            }
            if (option.match('beli background premium 2')) {
                const xl = require('../json/xp.json');
                const curlvls = xl[message.author.id].level;
                if (curlvls < 2) return message.reply('`🏆` **anda harus level 2 untuk membuka toko**');
                const amount = parseInt(5000);
                if (targetBalance === null) targetBalance = startBalance;
                if (amount > targetBalance) return message.channel.send(`${message.author} **You must need 5000 credits to get the background** \`premium 2\``);
                db.subtract(`userBalance_${message.author.id}`, amount);
                const embed = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`${message.author} \n 💵 **You managed to buy at a price of $ 5000 \nchange the background profile to**`)
                    .setImage(`https://wallpaper-house.com/data/out/1/wallpaper2you_12697.jpg`);


                message.channel.send({ embed });
                const background = JSON.parse(fs.readFileSync('./json/background.json', 'utf8'));
                if (args[1]) {
                    background[message.author.id] = { backgrounds: 'https://wallpaper-house.com/data/out/1/wallpaper2you_12697.jpg' };
                    fs.writeFile('./json/background.json', JSON.stringify(background), err => {
                        if (err) console.log(err);
                    });
                }
            }
            if (option.match('beli background exelent')) {
                const xl = require('../../json/xp.json');
                const curlvls = xl[message.author.id].level;
                if (curlvls < 2) return message.reply('`🏆` **anda harus level 2 untuk membuka toko**');
                const amount = parseInt(5000);
                if (targetBalance === null) targetBalance = startBalance;
                if (amount > targetBalance) return message.channel.send(`${message.author} **You must need 10000 credits to get the background** \`premium\``);
                db.subtract(`userBalance_${message.author.id}`, amount);
                const embed = new Discord.MessageEmbed()
                    .setColor('#00d2ff')
                    .setDescription(`${message.author} \n 💵 **You managed to buy at a price of $ 10000 \nchange the background profile to**`)
                    .setImage(`https://orig00.deviantart.net/7892/f/2013/360/a/9/magical_forest___night_by_kokoszkaa-d6zgjxn.jpg`);


                message.channel.send({ embed });
                const background = JSON.parse(fs.readFileSync('./json/background.json', 'utf8'));
                if (args[1]) {
                    background[message.author.id] = { backgrounds: 'https://orig00.deviantart.net/7892/f/2013/360/a/9/magical_forest___night_by_kokoszkaa-d6zgjxn.jpg' };
                    fs.writeFile('./json/background.json', JSON.stringify(background), err => {
                        if (err) console.log(err);
                    });
                }
            }
        }
        return null;
    }
};
