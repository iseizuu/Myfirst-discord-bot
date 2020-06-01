const Discord = require("discord.js");
const { promptMessage } = require("../../function.js");

const chooseArr = ["🌑", "📄", "✂"];

module.exports = {
    name: "suit",
    alias: ["kbg","rps"],
    category: "fun",
      deskripsi: "Permainan kertas batu gunting",
    usage: "rps",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor("#ffffff")
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setTitle("Pilih > BATU  > KERTAS  > GUNTING ")
            .setTimestamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.reactions.removeAll()

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🌑" && clientChosen === "✂") ||
                (me === "📄" && clientChosen === "🌑") ||
                (me === "✂" && clientChosen === "📄")) {
                    return "Selamat Kamu menang";
            } else if (me === clientChosen) {
                return "Yah, Seri!";
            } else {
                return "Yah, Kamu kalah!";
            }
        }
    }
}