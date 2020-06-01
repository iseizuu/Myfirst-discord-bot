const fs = require("fs");
const db = require('quick.db');
const Discord = require("discord.js");
const inv = require("../../inv.json");
const fish = require("../../fish.json");
const ms = require('parse-ms');

module.exports = {
  name: "ransel",
    deskripsi: "Cek inventory",
    run: (client, message, args) => {
var optionRaw = args.slice(0).join(" ");
var option = optionRaw.toLocaleLowerCase();

let pusat = Math.floor(Math.random()* 1)+ 1;
if(!inv[message.author.id]){
  inv[message.author.id] = {
    diamond: 0,
    gold: 0,
    coal: 0,
    chip: 0
    
  };
}

let diamond = inv[message.author.id].diamond;
let gold = inv[message.author.id].gold;
let coal = inv[message.author.id].coal;
let chip = inv[message.author.id].chip;

let sat = Math.floor(Math.random()* 1)+ 1;
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

  if (option.match("help")) {
message.channel.send(`**\`\`\`ini
[ untuk melihat hasil penambangan Anda ]
  perintah: >ransel hasil menambang

▸ Untuk menjual barang tambang gunakan:
▸ ransel jual berlian [jumlah]
▸ ransel jual emas [jumlah]
▸ ransel jual batubara [jumlah]
▸ ransel jual chip [jumlah]

\`\`\`**`)
    
}
  
//   untuk melihat hasil ikan Anda.
// perintah: >ransel hasil ikan

// Untuk menjual barang tambang gunakan:
// ransel jual cupang [jumlah]
// ransel jual gabus [jumlah]
// ransel jual karkas [jumlah]
  
  if (option.match("hasil menambang")) {
message.channel.send(`\`\`\`css
💼 |> ${message.author.username} isi ransel hasil tambangan kamu:

💎 Berlian = ${diamond}
🔶 Emas = ${gold}
🌑 Batubara = ${coal}
💠 Chip = ${chip}\`\`\`
`)
  }

/*

INI ADALAH INVENTORY sell DIAMOND

*/

  if (option.match("jual berlian")) {
let rok = Number(args[2]);
let amounts = parseInt(args[2]);
if (isNaN (amounts)) return message.channel.send ('** hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal. **');
if (rok <2) return message.reply ("**  `💎`: Minimal Anda bisa menjual ` 2` Berlian ** ");
if (isNaN (amounts)) return message.channel.send ('** silakan masukkan nominal yang benar! **');
let diamond = inv [message.author.id]. diamond;
if (diamond <args [2]) return message.reply ("**  `💎`: berlian Anda tidak cukup! **");
  if (! inv [message.author.id]) {
    return message.reply ("** `💎`: Anda tidak memiliki Berlian sebesar itu! **")
  }
let amount = Number(100 * args[2]);
let dor = amount;
let not = args[2];
  inv[message.author.id] = {
    diamond: diamond - parseInt(args[2]),
    gold: gold,
    coal: coal,
    chip: chip
  };
	db.add(`userBalance_${message.author.id}`, dor);
fs.writeFile("./inv.json", JSON.stringify(inv), (err) => {
  if(err) console.log(err)
});
message.channel.send(`\`${message.author.username}\` **: Kamu menjual \`${not}\` Berlian dengan harga \`$${dor}\`**`)
  }

if (option.match("jual emas")) {
let rok = Number(args[2]);
let amounts = parseInt(args[2]);
if (isNaN (amounts)) return message.channel.send ('** hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal. **');
if (rok <2) return message.reply ("** 🔶: Minimal Anda bisa menjual ` 2` Emas ** ");
if (isNaN (amounts)) return message.channel.send ('** silakan masukkan nominal yang benar!  **');
let gold = inv [message.author.id] .gold;
if (gold <args [2]) return message.reply ("** 🔶: Emas Anda tidak cukup! **");
  if (! inv [message.author.id]) {
    return message.reply ("** 🔶: Anda tidak memiliki Emas sebesar itu! **")
  }
let amount2 = Number(60 * args[2]);

let dor = amount2;
let not = args[2];
  inv[message.author.id] = {
    gold: gold - parseInt(args[2]),
    diamond: diamond,
    coal: coal,
    chip: chip
  };
	db.add(`userBalance_${message.author.id}`, dor);
fs.writeFile("./inv.json", JSON.stringify(inv), (err) => {
  if(err) console.log(err)
});
message.channel.send(`\`${message.author.username}\` **: Kamu menjual \`${not}\` Emas dengan harga \`$${dor}\`**`)
  }
if (option.match ("jual batubara")) {
let rok = Number (args [2]);
let amounts = parseInt (args [2]);
if (isNaN (amounts)) return message.channel.send ('** hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal. **');
if (rok <2) return message.reply ("** ◼: Minimal Anda bisa menjual ` 2` Batubara** ");
if (isNaN (amounts)) return message.channel.send ('** silakan masukkan nominal yang benar! **');
let coal = inv [message.author.id]. coal;
if (coal <args [2]) return message.reply ("** ◼: Batubara Anda tidak cukup!**");
  if (! inv [message.author.id]) {
    return message.reply ("** ◼: Anda tidak memiliki Batubara sebesar itu! **")
  }
let amount2 = Number(10 * args[2]);
let dor = amount2;
let not = args[2];
  inv[message.author.id] = {
    gold: gold,
    diamond: diamond,
    coal: coal - parseInt(args[2]),
    chip: chip
  };
	db.add(`userBalance_${message.author.id}`, dor);
fs.writeFile("./inv.json", JSON.stringify(inv), (err) => {
  if(err) console.log(err)
});
message.channel.send(`\`${message.author.username}\` **: Kamu menjual \`${not}\` Batubara dengan harga \`$${dor}\`**`)
  }

if (option.match("jual chip")) {
let rok = Number(args[2]);
let amounts = parseInt(args[2]);
if (isNaN (amounts)) return message.channel.send ('** hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal. **');
if (rok <2) return message.reply ("** 💠: Minimal Anda bisa menjual ` 2` Chip ** ");
if (isNaN (amounts)) return message.channel.send ('** silakan masukkan nominal yang benar! **');
let chip = inv [message.author.id]. chip;
if (chip <args [2]) return message.reply ("** 💠: Chip Anda tidak cukup! **");
  if (! inv [message.author.id]) {
    return message.reply ("** 💠: Anda tidak memiliki Chip sebesar itu! **")
  }
let amount2 = Number(250 * args[2]);
let dor = amount2;
let not = args[2];
  inv[message.author.id] = {
    gold: gold,
    diamond: diamond,
    chip: chip - parseInt(args[2]),
    coal: coal
  };
	db.add(`userBalance_${message.author.id}`, dor);
fs.writeFile("./inv.json", JSON.stringify(inv), (err) => {
  if(err) console.log(err)
});
message.channel.send(`\`${message.author.username}\` **: Kamu menjual \`${not}\` Chip dengan harga \`$${dor}\`**`)
  }

  if (option.match("hasil memancing")) {
message.channel.send(`\`\`\`css
💼 |> ${message.author.username} Fill in your fishing bag:

🐠 hickey :> ${cupang}
🐡 cork :> ${gabus}
🐟 fish carcass :> ${mati}\`\`\`
`)
  }

/*

INI ADALAH fishENTORY JUAL DIAMOND

*/

  if (option.match("sell hickey")) {
let rok = Number(args[2]);
let amounts = parseInt(args[2]);
if (isNaN(amounts)) return message.channel.send('**hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal.**');
if (rok < 2) return message.reply("**🐠: At a minimum you can sell a fish carcass of `2`**");
if (isNaN(amounts)) return message.channel.send('**please input the correct nominal!**');
let cupang = fish[message.author.id].cupang;
if(cupang < args[2]) return message.reply("**🐠 : Your fish isn't enough! **");
  if(!fish[message.author.id]){
    return message.reply("**🐠 : You don't have a carcass of that size!**");
  }
let amount = Number(50 * args[2]);
let dor = amount;
let not = args[2];
  fish[message.author.id] = {
    cupang: cupang - parseInt(args[2]),
    gabus: gabus,
    mati: mati,
  
  };
	db.add(`userBalance_${message.author.id}`, dor);
fs.writeFile("./fish.json", JSON.stringify(fish), (err) => {
  if(err) console.log(err)
});
message.channel.send(`\`${message.author.username}\` 💸 **: You sell \`${not}\` hickey with prices \`${dor}\`**`)
  }

if (option.match("sell cork")) {
let rok = Number(args[2]);
let amounts = parseInt(args[2]);
if (isNaN(amounts)) return message.channel.send('**hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal.**');
if (rok < 2) return message.reply("**🐡 : At a minimum you can sell fish carcasses as big as `2`**");
if (isNaN(amounts)) return message.channel.send('**Please input the correct nominal!**');
let gabus = fish[message.author.id].gabus;
if(gabus < args[2]) return message.reply("**🐡 : Your fish is not enough!**");
  if(!fish[message.author.id]){
    return message.reply("**🐡 : You don't have a carcass of that size!**")
  }
let amount2 = Number(30 * args[2]);

let dor = amount2;
let not = args[2];
  fish[message.author.id] = {
    gabus: gabus - parseInt(args[2]),
    cupang: cupang,
    mati: mati,
    
  };
	db.add(`userBalance_${message.author.id}`, dor);
fs.writeFile("./fish.json", JSON.stringify(fish), (err) => {
  if(err) console.log(err)
});
message.channel.send(`\`${message.author.username}\` 💸 **: You sell \`${not}\` cork with prices \`${dor}\`**`)
  }
if (option.match("sell carcass")) {
let rok = Number(args[2]);
let amounts = parseInt(args[2]);
if (isNaN(amounts)) return message.channel.send('**hai .. tidak niat jual? berapa banyak yang ingin dijual, gunakan nominal.**');
if (rok < 2) return message.reply("**🐟 : At a minimum you can sell fish carcasses as big as `2`**");
if (isNaN(amounts)) return message.channel.send('**mohon masukan nominal yang benar!**');
let mati = fish[message.author.id].mati;
if(mati < args[2]) return message.reply("**🐟 : Your fish is not enough!**");
  if(!fish[message.author.id]){
    return message.reply("**🐟 : You don't have a carcass of that size!**")
  }
let amount2 = Number(5 * args[2]);
let dor = amount2;
let not = args[2];
  fish[message.author.id] = {
    gabus: gabus,
    cupang: cupang,
    mati: mati - parseInt(args[2]),
    
  };
	db.add(`userBalance_${message.author.id}`, dor);
fs.writeFile("./fish.json", JSON.stringify(fish), (err) => {
  if(err) console.log(err)
});
message.channel.send(`\`${message.author.username}\` 💸 **: You sell \`${not}\` fish carcass with prices \`${dor}\`**`)

}

  if (option.match("test")) {
    
    let test = (100 * `${args[1]}`);
    message.channel.send(`${test}`)
  }

}


}