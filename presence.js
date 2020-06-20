const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const moment = require("moment"); //dah ada packagenya keknya // KAGET BANGSAD :v
const client = new Client();
// dah gw cek ada koq :v  :v Kalem :v
let JemBud = moment()
  .locale("id" /* indonesia */)
  .utcOffset("+0700" /* wib */)
  .format("HH:mm [Wib]");
/*
P
*/
//Listener Event: Bot Launched
client.on("ready", async () => {
  setInterval(async () => {
    let ran = [
      `${client.users.cache.size} Member`,
      "aes || Customizable",
      "Happy EID Al'Fitri"
    ];
    let dom = ran[Math.floor(Math.random() * ran.length)];
    client.user.setPresence({
      activity: {
        name: dom,
        type: "STREAMING",
        url: "https://www.twitch.tv/a"
      },
      status: "online"
    });
  }, 8000); // millsecond
});

client.login(process.env.TOKEN);
