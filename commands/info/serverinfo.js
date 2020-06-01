const Discord = require("discord.js");
const { stripIndents } = require('common-tags');
const moment = require('moment');
const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};
const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};


module.exports = {
    name: "serverinfo",
    alias: ["server"],
    category: "info",
        deskripsi: "Server information",

        run: async (client, message, args) => {
              let sicon = message.guild.iconURL();
    
    
    var emojis;
    if (message.guild.emojis.cache.size === 0) {
        emojis = 'None';
    } else {
        emojis = message.guild.emojis.cache.size;
    }

		if (!message.guild.members.cache.has(message.guild.ownerID)) await message.guild.members.fetch(message.guild.ownerID);
		const embed = new Discord.MessageEmbed()
			.setColor(0x00AE86)
			.setThumbnail(sicon)
			.setAuthor(message.guild.name)
			.setDescription(stripIndents`

				**General Info:**
				• ID: ${message.guild.id}
				• Owner : ${message.guild.owner.user.tag} 👑
				• Region : ${message.guild.region.toUpperCase()}
				• Creation Date : ${moment.utc(message.guild.createdAt).format('MM/DD/YYYY h:mm A')}
				• Explicit Filter : ${filterLevels[message.guild.explicitContentFilter]}
				• Verification Level : ${verificationLevels[message.guild.verificationLevel]}

				**Server Stats:**
				• Members Count : ${message.guild.memberCount}
        • Bot Count : ${message.guild.members.cache.filter(m => m.user.bot).size}
				• Roles : ${message.guild.roles.cache.size}
				• Channels : ${message.guild.channels.cache.filter(channel => channel.type !== 'category').size}
        • Emoji : ${emojis}/100
        • AFK Timeout : ${message.guild.afkTimeout / 60 + ' minute'}
        • You Joined :  ${moment.utc(message.member.joinedAt).format('MM/DD/YYYY h:mm A')}
			`)
      .setTimestamp()
      .setFooter(message.author.tag);
		return message.channel.send(embed);
          
  }
}