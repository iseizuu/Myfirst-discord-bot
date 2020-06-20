const Discord = require("discord.js");
const moment = require('moment');
const { stripIndents } = require("common-tags");
const { trimArray } = require('../../util/Util');
const { getMember, formatDate } = require("../../function.js");


module.exports = {
    name: "userinfo",
    alias: ["who", "user", "info"],
        deskripsi: "Melihat informasi anda sendiri atau member lain",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
    const member = getMember(message, args.join(" "));
    const rolestag = member.roles.cache             //ROLES DENGAN @ TAG COK
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';
    const created = formatDate(member.user.createdAt);  
		const embed = new Discord.MessageEmbed()
			.setAuthor(`**==== ${member.user.tag} ====**`)
			.setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true }));
		let description = stripIndents`
			**General User Info:**
			• ID: ${member.id}
			• Discord Join Date: ${moment.utc(member.user.createdAt).format('MM/DD/YYYY h:mm A')}
			• Verification : ${member.user.bot ? 'Bot' : 'Manusia'}
		`;
		if (message.guild) {
			try {
				const defaultRole = message.guild.roles.cache.get(message.guild.id);
				const roles = member.roles.cache
					.filter(role => role.id !== defaultRole.id)
					.sort((a, b) => b.position - a.position)
					.map(role => role.name);
				description += '\n\n';
				description += stripIndents`
					**Server Member Info:**
					• Nickname: ${member.nickname || 'Not set'}
					• Server Join Date: ${moment.utc(member.joinedAt).format('MM/DD/YYYY h:mm A')}
					• Highest Role: ${member.roles.highest.id === defaultRole.id ? 'None' : member.roles.highest.name}
					• Hoist Role: ${member.roles.hoist ? member.roles.hoist.name : 'None'}
					**Roles (${roles.length})**
					• ${roles.length ? trimArray(roles, 6).join(', ') : 'None'}
				`;
				embed.setColor('RANDOM');
			} catch {
				embed.setFooter('Failed to resolve member, showing basic user information instead.');
			}
		}
		embed.setDescription(description);
		return message.channel.send(embed);
	}
}