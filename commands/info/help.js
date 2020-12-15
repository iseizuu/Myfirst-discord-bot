/* eslint-disable no-magic-numbers */
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const categories = fs.readdirSync('./commands/');
module.exports = {
    name: 'help',
    alias: ['h', 'command'],
    deskripsi: 'Bantuan penggunaan bot',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.avatarURL())
            .setAuthor(client.user.tag, client.user.avatarURL())
            .setDescription(`[Invite me](https://discordapp.com/oauth2/authorize?client_id=685842242912780360&permissions=8&scope=bot)`)
            .setTimestamp()
            .setColor('RANDOM')
            .setFooter('Usage : help [Command]');

        if (!args.length) {
            categories.forEach(category => {
                if (category === '⏩') return;

                const helpCommands = [];
                let categoryCommands = '';
                const commandsFile = fs.readdirSync(`./commands/${category}`).filter(file => file.endsWith('.js'));

                for (let int = 0; int < commandsFile.length; int++) {
                    // eslint-disable-next-line prefer-destructuring
                    const commandName = commandsFile[int].split('.')[0];
                    helpCommands.push(`\`${commandName}\`,  `);
                }

                for (let int = 0; int < helpCommands.length; int++) categoryCommands += helpCommands[int];
                const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
                embed.addField(`➡ **${categoryName} (${commandsFile.length})**`, categoryCommands);
            });

            return message.channel.send(embed);
        }

        const CmdName = args.join(' ');
        const Cmd = client.cmds.get(CmdName) || client.alias.get(CmdName);
        if (!Cmd) await message.channel.send(`Command tidak ditemukan`);
        try {
            const mbed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`
                  **Command Name** : ${Cmd.name}
                  **Aliases** : ${(Array.isArray(Cmd.alias)) ? Cmd.alias.join(', ') : 'Alias tidak ada'}
                  **Description** : ${Cmd.deskripsi ? Cmd.deskripsi : 'Tidak ada deskripsi'}
                  **Usage** : ${Cmd.usage ? Cmd.usage : 'Tidak ada cara penggunaan'}`)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.displayAvatarURL());

            return message.channel.send(mbed);
        } catch (er) {
            return message.channel.send(`Oh noo!! \`${er}\``);
        }
    }
};
