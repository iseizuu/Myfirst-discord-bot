const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
const { search, streamURL } = require('iheart')
module.exports = {
  name: "play",
      deskripsi: "Playing music",
  run: async (client, message, args) => {
let m = await message.channel.send("\`Jika command play tidak bekerja harap dm admin, karena hosting music berbeda :)\`");

m.delete({ timeout: 3000 }) 


                
    }
}