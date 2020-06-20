const fs = require("fs");
const db = require('quick.db');
const Discord = require("discord.js");
const fish = require("../../fish.json");
const ms = require('parse-ms');

module.exports = {
  name: "fish",
      deskripsi: "Memancing",
  run: async (client, message, args) => {
    let cooldown = 0.004e+7, // 24 Часа
        amount = Math.floor(Math.random() * 100) + 500;  
let lastDailyfish = await db.fetch(`lastDailyfish_${message.author.id}`);
    if (lastDailyfish !== null && cooldown - (Date.now() - lastDailyfish) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDailyfish));

message.channel.send(`\`${message.author.username}\` **You must wait \`${timeObj.seconds}\` seconds to re-fish. 🎣**!`)

    } else {

var optionRaw = args.slice(0).join(" ");
var option = optionRaw.toLocaleLowerCase();


let pusat = Math.floor(Math.random()* 1)+ 1;
if(!fish[message.author.id]){
  fish[message.author.id] = {
    /*cupang*/cupang: 0,
    /*gabus*/gabus: 0,
    /*mati*/mati: 0,
    
  };
}

let cupang = fish[message.author.id].cupang;
let gabus = fish[message.author.id].gabus;
let mati = fish[message.author.id].mati;


  let amount = Number(10);
let balance = await db.fetch(`userBalance_${message.author.id}`);
	if (balance < amount) return message.reply('**Aaduh, kamu ga punya uang cukup \n **aes daily** untuk ambil daily check in**');

var resultflip = Math.floor((Math.random() * 12));
	if (resultflip == 1) {
  let postMsg = await message.channel.send(`**\`${message.author.username}: \`Tunggu 5 detik yaaa >//<  🎣**`);
	db.subtract(`userBalance_${message.author.id}`, amount)
  message.channel.startTyping();
	const embedheads = new Discord.Messagembed()
	.setColor("#00d2ff")
.setDescription (`** Fish Fishing:** \n\n🐡 You get cork fish 🐡 \n\n💵 cost: $10 \n\n ${message.author}`)
  .setThumbnail('http://pngimage.net/wp-content/uploads/2018/06/ikan-gabus-png-4.png');
	setTimeout(() => {
        postMsg.edit(embedheads)
        }, 5000);
  message.channel.stopTyping(true);
fish[message.author.id].cupang =  gabus + pusat;
fs.writeFile("./fish.json", JSON.stringify(fish), (err) => {
  if(err) console.log(err)
});

	} else if (resultflip == 2) {
  let postMsg = await message.channel.send(`**\`${message.author.username}: \`Tunggu 5 detik yaaa >//<  🎣**`);
	db.subtract(`userBalance_${message.author.id}`, amount)
  message.channel.startTyping();
	const embedtails = new Discord.MessageEmbed()
	.setColor("#00d2ff")
	.setDescription(`**Fishing:**\n\n🐠 You get betta fish 🐠\n\n💵 cost: $10\n\n${message.author}`)
  .setThumbnail('http://www.cosmopublic.eu/wp-content/uploads/2018/06/guppy-right.png');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 5000);
  message.channel.stopTyping(true);
fish[message.author.id].gabus =  cupang + pusat;
fs.writeFile("./fish.json", JSON.stringify(fish), (err) => {
  if(err) console.log(err)
});
	} else if (resultflip == 3) {
  let postMsg = await message.channel.send(`**\`${message.author.username}: \`Tunggu 5 detik yaaa >//<  🎣**`);
	db.subtract(`userBalance_${message.author.id}`, amount)
  message.channel.startTyping();
	const embedheads = new Discord.MessageEmbed()
	.setColor("#00d2ff")
	.setDescription(`**Fishing:**\n\n🐡 You get cork fish 🐡\n\n💵 cost: $10\n\n${message.author}`)
  .setThumbnail('http://pngimage.net/wp-content/uploads/2018/06/ikan-gabus-png-4.png');
	setTimeout(() => {
        postMsg.edit(embedheads)
        }, 5000);
  message.channel.stopTyping(true);
fish[message.author.id].cupang =  gabus + pusat;
fs.writeFile("./fish.json", JSON.stringify(fish), (err) => {
  if(err) console.log(err)
});

	} else if (resultflip == 4) {
  let postMsg = await message.channel.send(`**\`${message.author.username} \`Tunggu 5 detik yaaa >//<  🎣**`);
	db.subtract(`userBalance_${message.author.id}`, amount)
  message.channel.startTyping();
	const embedtails = new Discord.MessageEmbed()
	.setColor("#00d2ff")
	.setDescription(`**Fishing:**\n\n🐟 You get a fish carcass 🐟\n\n💵 cost: $10\n\n${message.author}`)
  .setThumbnail('http://pngimg.com/uploads/fish/fish_PNG25175.png');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 5000);
fish[message.author.id].mati =  mati + pusat;
fs.writeFile("./fish.json", JSON.stringify(fish), (err) => {
  if(err) console.log(err)
});

  message.channel.stopTyping(true);
	} else if (resultflip == 5) {
  let postMsg = await message.channel.send(`**\`${message.author.username} \`Tunggu 5 detik yaaa >//<  🎣**`);
	db.subtract(`userBalance_${message.author.id}`, amount)
  message.channel.startTyping();
	const embedtails = new Discord.MessageEmbed()
	.setColor("#00d2ff")
	.setDescription(`**Fishing:**\n\n🐟 You get a fish carcass 🐟\n\n💵 cost: $10\n\n${message.author}`)
  .setThumbnail('http://pngimg.com/uploads/fish/fish_PNG25175.png');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 5000);
fish[message.author.id].mati =  mati + pusat;
fs.writeFile("./fish.json", JSON.stringify(fish), (err) => {
  if(err) console.log(err)
});

  message.channel.stopTyping(true);
	} else if (resultflip == 6) {
  let postMsg = await message.channel.send(`**\`${message.author.username}: \` Tunggu 5 detik yaaa >//<  🎣**`);
	db.subtract(`userBalance_${message.author.id}`, amount)
  message.channel.startTyping();
	const embedtails = new Discord.MessageEmbed()
	.setColor("#00d2ff")
	.setDescription(`**Fishing:**\n\n🐟 You get a fish carcass 🐟\n\n💵 cost: $10\n\n${message.author}`)
  .setThumbnail('http://pngimg.com/uploads/fish/fish_PNG25175.png');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 5000);
  message.channel.stopTyping(true);
fish[message.author.id].mati =  mati + pusat;
fs.writeFile("./fish.json", JSON.stringify(fish), (err) => {
  if(err) console.log(err)
});
	} else if (resultflip == 7) {
  let postMsg = await message.channel.send(`**\`${message.author.username}: \` Tunggu 5 detik yaaa >//<  🎣**`);
	db.subtract(`userBalance_${message.author.id}`, amount)
  message.channel.startTyping();
	const embedtails = new Discord.MessageEmbed()
	.setColor("#00d2ff")
	.setDescription(`**Fishing:**\n\n🐟 You get a fish carcass 🐟\n\n💵 cost: $10\n\n${message.author}`)
  .setThumbnail('http://pngimg.com/uploads/fish/fish_PNG25175.png');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 5000);

  message.channel.stopTyping(true);
fish[message.author.id].mati =  mati + pusat;
fs.writeFile("./fish.json", JSON.stringify(fish), (err) => {
  if(err) console.log(err)
});
	} else if (resultflip == 8) {
  let postMsg = await message.channel.send(`**\`${message.author.username}: \` Tunggu 5 detik yaaa >//<  🎣**`);
	db.subtract(`userBalance_${message.author.id}`, amount)
  message.channel.startTyping();
	const embedtails = new Discord.MessageEmbed()
	.setColor("#00d2ff")
	.setDescription(`**Fishing:**\n\n🐠You get betta fish 🐠\n\n💵 cost: $10\n\n${message.author}`)
  .setThumbnail('http://www.cosmopublic.eu/wp-content/uploads/2018/06/guppy-right.png');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 5000);
  message.channel.stopTyping(true);
fish[message.author.id].gabus =  cupang + pusat;
fs.writeFile("./fish.json", JSON.stringify(fish), (err) => {
  if(err) console.log(err)
});
	} else if (resultflip == 9) {
  let postMsg = await message.channel.send(`**\`${message.author.username}: \` Tunggu 5 detik yaaa >//<  🎣**`);
	db.subtract(`userBalance_${message.author.id}`, amount)
  message.channel.startTyping();
	const embedtails = new Discord.MessageEmbed()
	.setColor("#00d2ff")
	.setDescription(`**Fishing:**\n\n🐟 You get a fish carcass 🐟\n\n💵 cost: $10\n\n${message.author}`)
  .setThumbnail('http://pngimg.com/uploads/fish/fish_PNG25175.png');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 5000);
  message.channel.stopTyping(true);
fish[message.author.id].mati =  mati + pusat;
fs.writeFile("./fish.json", JSON.stringify(fish), (err) => {
  if(err) console.log(err)
});
	} else if (resultflip == 10) {
  let postMsg = await message.channel.send(`**\`${message.author.username}: \`Tunggu 5 detik yaaa >//<  🎣**`);
	db.subtract(`userBalance_${message.author.id}`, amount)
  message.channel.startTyping();
	const embedtails = new Discord.MessageEmbed()
	.setColor("#00d2ff")
	.setDescription(`**Fishing:**\n\n🐟 You get a fish carcass 🐟\n\n💵 cost: $10\n\n${message.author}`)
  .setThumbnail('http://pngimg.com/uploads/fish/fish_PNG25175.png');
	setTimeout(() => {
        postMsg.edit(embedtails)
        }, 5000);

  message.channel.stopTyping(true);
fish[message.author.id].mati =  mati + pusat;
fs.writeFile("./fish.json", JSON.stringify(fish), (err) => {
  if(err) console.log(err)
});
  }
db.set(`lastDailyfish_${message.author.id}`, Date.now());

    }

/*

INI ADALAH fishENTORY MEMBER

*/

}

}