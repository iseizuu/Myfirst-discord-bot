const xp = require('../json/xp.json');
const fs = require('fs');
const db = require('quick.db');
const { default_prefix } = require('../config.json');
const { MessageEmbed } = require('discord.js');

/**
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports = (client, message) => {
    const poin = 1;
    const xpAdd = Math.floor(Number(Math.random())) + poin;

    if (!xp[message.author.id]) {
        xp[message.author.id] = {
            level: 1,
            xp: 0
        };
    }

    const points = 1000;
    const curxp = xp[message.author.id].xp;
    const curlvl = xp[message.author.id].level;
    const nxtLvl = xp[message.author.id].level * points;
    xp[message.author.id].xp = curxp + xpAdd;
    if (nxtLvl <= xp[message.author.id].xp) xp[message.author.id].level = curlvl + poin;

    fs.writeFile('./json/xp.json', JSON.stringify(xp), err => {
        if (err) console.log(err);
    });
    let prefix = db.get(`prefix_${message.guild.id}`);
    const embed = new MessageEmbed()
        .setColor('2F3136')
        .setDescription(`Hai **${message.author.tag}**, prefixku adalah **${prefix || default_prefix}**   🎉🥳`);
    if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) return message.channel.send(embed);
    if (message.author.bot) return;
    if (!message.guild) return;

    if (prefix === null) prefix = default_prefix;
    if (!message.content.startsWith(prefix)) return;


    const args = message.content.slice(prefix.length).trim()
        .split(/ +/gu);
    const cmd = args.shift().toLowerCase();
    if (!cmd.length) return;

    let cmds = client.cmds.get(cmd);

    if (!cmds) cmds = client.cmds.get(client.alias.get(cmd));
    if (cmds) cmds.run(client, message, args);
    console.log(`${message.author.tag} used ${default_prefix} ${cmd}`);
};
