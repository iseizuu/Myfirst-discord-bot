const Discord = require('discord.js');
const axios = require('axios');
module.exports = {
    name: 'catfact',
    alias: [''],
    deskripsi: 'Wanna Hearing my jokes?',
    usage: '',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: async(client, message, args) => {
        const getFact = async() => {
            const response = await axios.get('https://catfact.ninja/fact?max_length=140');
            const res = response.data;
            return res;
        };
        const ress = await getFact();
        const Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`Cats fact today for ${message.member.displayName} \n\n  ** ▬▬▬▬▬▬▬▬▬▬▬▬\n ${ress.fact} \n▬▬▬▬▬▬▬▬▬▬▬▬ **`);
        return message.channel.send(Embed);
    }
};
