const Discord = require("discord.js");
const fs = require("fs");
const categories = fs.readdirSync("./commands/");
const emojis = require('../../emojis');
module.exports = {
  name: "help",
  deskripsi: "Bantuan penggunaan bot",
  kategori:"Ultility",
  run: async (client, message, args) => {
        const msg = await message.channel.send(`${emojis.whitelist} Sending a list of my commands...`);

        const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `- \`${cmd.name}\``)
            .join("\n");
    }

    const data = [];

    const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setAuthor(`A e s t h e t i c`, client.user.avatarURL())
      .setDescription(`[Invite me](https://discordapp.com/oauth2/authorize?client_id=685842242912780360&permissions=8&scope=bot)`)
      .setTimestamp()
      .setColor('RANDOM')
      .setFooter('Usage : aes help [Command]')

    if (!args.length) {

      categories.forEach(async (category) => {
        if (category == "⏩") return;

        const helpCommands = [ ];
        let categoryCommands = "";
        const commandsFile = fs.readdirSync(`./commands/${category}`).filter(file => file.endsWith(".js"));
        
        for (let i = 0; i < commandsFile.length; i++) {
          const commandName = commandsFile[i].split(".")[0];
          helpCommands.push(`\`${commandName}\`,  `);
        }

        for (let i = 0; i < helpCommands.length; i++) categoryCommands += helpCommands[i];
        const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
        embed.addField(`➡ **${categoryName} (${commandsFile.length})**`, categoryCommands );
      });

      await msg.edit("",embed);

    }
    
    if (!args[0]) return message.channel.send(data);
    
    let CmdName = args.join(' ');
    let Cmd = client.cmds.get(CmdName);
    if (!Cmd)
      await msg.edit(`Command tidak ditemukan`);
    
    let zA = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("Name", Cmd.name)
    .addField("Alias", Cmd.alias ? (Array.isArray(Cmd.alias) ? Cmd.alias.join(", ") : Cmd.alias) : "•")
    .addField("Deskripsi", Cmd.deskripsi ? Cmd.deskripsi : "•》")

    await msg.edit("",(zA));
    
  }
}