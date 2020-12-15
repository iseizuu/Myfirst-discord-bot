/* eslint-disable no-magic-numbers */
/* eslint-disable complexity */
const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'redem',
    category: 'fun',
    alias: ['lucky', 'gacha'],
    deskripsi: 'Buktikan kalau kamu hoki',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const amount = Number(args[0]);
        if (!amount) return message.channel.send('**Please specify an amount!**');
        if (isNaN(amount)) return message.channel.send('**Please specify a valid number.**');
        if (amount < 0) return message.channel.send("**You can't gamble negative money!**");
        if (amount < 50) return message.channel.send('**minimum to do redem for $50**');
        const balance = await db.fetch(`userBalance_${message.author.id}`);
        if (amount > 500) return message.channel.send("**You can't gamble money more than $500**");
        if (balance < amount) return message.reply('**You dont have that much money!**');

        const resultflip = Math.floor((Math.random() * 51));
        if (resultflip === 1) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.add(`userBalance_${message.author.id}`, amount);
            const embedheads = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author} 🎉 **Selamat anda memenangkan** $${amount}`);
            setTimeout(() => {
                postMsg.edit(embedheads);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 2) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 3) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 4) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else 	if (resultflip === 5) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.add(`userBalance_${message.author.id}`, amount);
            const embedheads = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author} 🎉 **Selamat anda memenangkan** $${amount}`);
            setTimeout(() => {
                postMsg.edit(embedheads);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 6) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 7) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 8) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else	if (resultflip === 9) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.add(`userBalance_${message.author.id}`, amount);
            const embedheads = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author} 🎉 **Selamat anda memenangkan** $${amount}`);
            setTimeout(() => {
                postMsg.edit(embedheads);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 10) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 11) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 12) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 13) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 14) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 15) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 16) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else	if (resultflip === 17) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.add(`userBalance_${message.author.id}`, amount);
            const embedheads = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author} 🎉 **Selamat anda memenangkan** $${amount}`);
            setTimeout(() => {
                postMsg.edit(embedheads);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 18) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 19) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 20) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 21) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else 	if (resultflip === 22) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.add(`userBalance_${message.author.id}`, amount);
            const embedheads = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author} 🎉 **Selamat anda memenangkan** $${amount}`);
            setTimeout(() => {
                postMsg.edit(embedheads);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 23) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 24) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 25) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 26) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            const amountse = Math.floor(Math.random() * 5000) + 200;
            message.channel.startTyping();
            db.add(`userBalance_${message.author.id}`, amountse);
            const embedheads = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('#F8A61C')
                .setDescription(`${message.author} 🎉 **WINER !!** 🎊 $${amountse}`);
            setTimeout(() => {
                postMsg.edit(embedheads);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 27) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 28) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 29) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else 	if (resultflip === 30) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.add(`userBalance_${message.author.id}`, amount);
            const embedheads = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author} 🎉 **Selamat anda memenangkan** $${amount}`);
            setTimeout(() => {
                postMsg.edit(embedheads);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 31) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 32) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 34) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else	if (resultflip === 35) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.add(`userBalance_${message.author.id}`, amount);
            const embedheads = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author} 🎉 **Selamat anda memenangkan** $${amount}`);
            setTimeout(() => {
                postMsg.edit(embedheads);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 36) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 37) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 38) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 39) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 40) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 41) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 42) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else	if (resultflip === 43) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.add(`userBalance_${message.author.id}`, amount);
            const embedheads = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author} 🎉 **Selamat anda memenangkan** $${amount}`);
            setTimeout(() => {
                postMsg.edit(embedheads);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 44) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 45) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 46) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 47) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else 	if (resultflip === 48) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.add(`userBalance_${message.author.id}`, amount);
            const embedheads = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author} 🎉 **Selamat anda memenangkan** $${amount}`);
            setTimeout(() => {
                postMsg.edit(embedheads);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 49) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 50) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        } else if (resultflip === 51) {
            const postMsg = await message.channel.send('**🎁Tuggu sebentar...**');
            message.channel.startTyping();
            db.subtract(`userBalance_${message.author.id}`, amount);
            const embedtails = new Discord.MessageEmbed()
                .setTitle('Redem Credit ✨')
                .setColor('RANDOM')
                .setDescription(`${message.author}\n\n 🏳 **Semoga beruntung lain kali**😭\n 💵**Kamu kehilangan:** $${amount}`)
                .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
            setTimeout(() => {
                postMsg.edit(embedtails);
            }, 3000);
            return message.channel.stopTyping(true);
        }
        return null;
    }
};
