const Discord = require("discord.js");

module.exports = {
    name: "clear",
    alias: ["purge", "clearchat"],
    category: "moderation",
      deskripsi: "Mengahpus chat",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Kamu tidak bisa, tanpa seizin admin").then(m => m.delete({ timeout: 4000 }));
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Hmmm, setidaknya hapus 1 chat gitu").then(m => m.delete({ timeout: 4000 }));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Sorryy... I can't delete messages.").then(m => m.delete({ timeout: 4000 }));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Berhasil Menghapus \`${deleted.size}\` Cinta mu.`))
            .catch(err => message.reply(`Something went wrong... ${err}`));
    }
}
