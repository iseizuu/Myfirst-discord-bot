const Discord = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "instagram",
    alias: ["insta","ig"],
    category: "info",
     deskripsi: "Mempromosikan akun instagram",
    usage: "<name>",
    run: async (client, message, args) => {
        message.delete();
        const name = args.join(" ");

        if (!name) {
            return message.reply("Hmmm,,, Username ignya mana kak?")
                .then(m => m.delete({ timeout: 4000 }));
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("Hmm, Akunnya ga ada kak :(")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL())
            .setThumbnail(account.profile_pic_url_hd)
            .setDescription(`Difollow ya temen-temen, Dari ** ${message.member.displayName} ** 😊`)
            .addField("Profile information", stripIndents`**- Username:** ${account.username}
            **- Full name:** ${account.full_name}
            **- Biography:** ${account.biography.length == 0 ? "none" : account.biography}
            **- Posts:** ${account.edge_owner_to_timeline_media.count}
            **- Followers:** ${account.edge_followed_by.count}
            **- Following:** ${account.edge_follow.count}
            **- Private account:** ${account.is_private ? "Yes 🔐" : "Nope 🔓"}`);
          
        message.channel.send(embed);
    }
}