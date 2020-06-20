	const Discord = require("discord.js");
	const db = require('quick.db');

module.exports = {
    name: "redem",
    category: "fun",
    alias: ["lucky", "gacha"],
    deskripsi: "Buktikan kalau kamu hoki",
    run: async (client, message, args) => {
  let amount = Number(args[0]);
	if(!amount) return message.channel.send("**Please specify an amount!**")
	if(isNaN(amount)) return message.channel.send("**Please specify a valid number.**")
	if (amount < 0) return message.channel.send("**You can\'t gamble negative money!**");
  if (amount < 50) return message.channel.send("**minimum to do redem for $50**");
	let balance = await db.fetch(`userBalance_${message.author.id}`);
	if(amount > 500) return message.channel.send("**You can't gamble money more than $500**")
	if (balance < amount) return message.reply('**You dont have that much money!**');

	var resultflip = Math.floor((Math.random() * 51));
	if (resultflip == 1) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.add(`userBalance_${message.author.id}`, amount)
	const embedheads = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author} 🎉 **The coin landed on heads and you won** $${amount}`);
	setTimeout(() => {
        postMsg.edit(embedheads)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 2) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 3) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	}  else if (resultflip == 4) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else 	if (resultflip == 5) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.add(`userBalance_${message.author.id}`, amount)
	const embedheads = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author} 🎉 **The coin landed on heads and you won** $${amount}`);
	setTimeout(() => {
        postMsg.edit(embedheads)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 6) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 7) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 8) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else	if (resultflip == 9) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.add(`userBalance_${message.author.id}`, amount)
	const embedheads = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author} 🎉 **The coin landed on heads and you won** $${amount}`);
	setTimeout(() => {
        postMsg.edit(embedheads)
        }, 3000);
  message.channel.stopTyping(true);
	}  else if (resultflip == 10) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 11) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 12) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 13) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 14) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 15) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 16) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else	if (resultflip == 17) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.add(`userBalance_${message.author.id}`, amount)
	const embedheads = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author} 🎉 **The coin landed on heads and you won** $${amount}`);
	setTimeout(() => {
        postMsg.edit(embedheads)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 18) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 19) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 20) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	}  else if (resultflip == 21) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else 	if (resultflip == 22) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.add(`userBalance_${message.author.id}`, amount)
	const embedheads = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author} 🎉 **The coin landed on heads and you won** $${amount}`);
	setTimeout(() => {
        postMsg.edit(embedheads)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 23) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 24) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 25) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	}  else if (resultflip == 26) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  let amountse = Math.floor(Math.random() * 5000) + 200;
  message.channel.startTyping();
	db.add(`userBalance_${message.author.id}`, amountse)
	const embedheads = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("#F8A61C")
	.setDescription(`${message.author} 🎉 **WINER !!** 🎊 $${amountse}`);
	setTimeout(() => {
        postMsg.edit(embedheads)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 27) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 28) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	}  else if (resultflip == 29) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else 	if (resultflip == 30) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.add(`userBalance_${message.author.id}`, amount)
	const embedheads = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author} 🎉 **The coin landed on heads and you won** $${amount}`);
	setTimeout(() => {
        postMsg.edit(embedheads)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 31) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 32) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 34) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else	if (resultflip == 35) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.add(`userBalance_${message.author.id}`, amount)
	const embedheads = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author} 🎉 **The coin landed on heads and you won** $${amount}`);
	setTimeout(() => {
        postMsg.edit(embedheads)
        }, 3000);
  message.channel.stopTyping(true);
	}  else if (resultflip == 36) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 37) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 38) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 39) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 40) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 41) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 42) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else	if (resultflip == 43) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.add(`userBalance_${message.author.id}`, amount)
	const embedheads = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author} 🎉 **The coin landed on heads and you won** $${amount}`);
	setTimeout(() => {
        postMsg.edit(embedheads)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 44) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 45) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 46) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	}  else if (resultflip == 47) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else 	if (resultflip == 48) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.add(`userBalance_${message.author.id}`, amount)
	const embedheads = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author} 🎉 **The coin landed on heads and you won** $${amount}`);
	setTimeout(() => {
        postMsg.edit(embedheads)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 49) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 50) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	} else if (resultflip == 51) {
  let postMsg = await message.channel.send('**🎁Please Wait...**');
  message.channel.startTyping();
	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.MessageEmbed()
	.setTitle("Redem Credit ✨")
	.setColor("RANDOM")
	.setDescription(`${message.author}\n\n 🏳 **hope you're lucky next time**😭\n 💵**the money you spend:** $${amount}`)
  .setThumbnail('https://4.bp.blogspot.com/-bw5oepKFEkA/WPIoSIR6sMI/AAAAAAAABsM/YP3XzLsOLjoJHhi9Fn1nauJwSiF8vnYvwCLcB/s1600/Nangis%2Bbanget.jpg');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 3000);
  message.channel.stopTyping(true);
	}
	}
  
  }