const Discord = require('discord.js');
const db = require('quick.db');


module.exports = {
    name: 'credit',
    alias: ['bal'],
    deskripsi: 'Mengecek balance user',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const optionRaw = args.slice('0').join(' ');
        const option = optionRaw.toLocaleLowerCase();


        if (option.match('add')) {
            if (message.author.id !== '271576733168173057') return message.channel.send('Hanya developer');
            db.add(`userBalance_${message.author.id}`, args[1]);
            const embeda = new Discord.MessageEmbed()
                .addField(`🏛 ${message.guild.name} Bank`, `\`💳\` **Kamu berhasil Menambah credit sebesar:** \`Rp.${args[1]}\``)
                .setColor('#00d2ff');
            return message.channel.send(embeda);
        }
        try {
            const user = message.mentions.users.first() || message.author;
            const balance = await db.fetch(`userBalance_${user.id}`);
            const embed = new Discord.MessageEmbed()
                .setTitle(`${message.guild.name} Bank 💳`)
                .setColor('#00d2ff')
                .addField('Acoount Holder 🗄', user.username, true)
                .addField('Account Credit 💵', `${balance === null ? '0' : balance}`, true)
                .setFooter('Silahkan hubungi Owner untuk mengisi saldo kamu / donasi.');
            return message.channel.send(embed);
        } catch (Er) {
            return console.log(Er);
        }
    }
};
