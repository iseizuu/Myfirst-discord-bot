const Discord = require("discord.js");
const imdb = require("imdb-api");

module.exports = {
  name: "film",
  alias: ["imdb"],
  deskripsi: "Menampilkan Informasi film",
  kategori:"Ultility",
  run: async (client, message, args) => {
  
  if(!args.length) {
      return message.channel.send("Masukan judul filmnya")
    }
const imob = new imdb.Client({apiKey: "5e36f0db"}) //You need to paste you imdb api
 let movie = await imob.get({'name': args.join(" ")})
 let embed = new Discord.MessageEmbed()
    .setTitle(movie.title)
    .setColor('RANDOM')
    .setThumbnail(movie.poster)
    .setDescription(movie.plot)
    .setFooter(`Rating: ${movie.rating}`)
    .addField("Negara", movie.country, true)
    .addField("Bahasa", movie.languages, true)
    .addField("Tipe", movie.type, true);
    
    
    message.channel.send(embed)
  
}
}