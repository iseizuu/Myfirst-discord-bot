const Discord = require("discord.js");
const Kitsu = require("kitsu.js");
const kitsu = new Kitsu();

const fetch = require("node-fetch");

module.exports = {
    name: "anime",
    category: "fun",
    deskripsi: "Cari anime favoritmu",
    run: async (client, message, args) => {
   if (!args[0]) {
     return message.channel.send("Masukan nama anime");
   }
      let search = message.content.split(/\s+/g).slice(1).join(" ");
      kitsu.searchAnime(search).then(async result => {
        if(result.length === 0) {
          return message.channel.send("Maaf tidak ada hasil tersedia");
        }
        
        let anime = result[0];
        let embed = new Discord.MessageEmbed()
        .setTitle(anime.titles.english ? anime.titles.english : search)
        .setColor("RANDOM")
        .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
        .setThumbnail(anime.posterImage.original, 100, 200);
        
        return message.channel.send(embed);
      }).catch(err => {
        message.channel.send("Tidak Ada Hasil!");
      })

    }
}