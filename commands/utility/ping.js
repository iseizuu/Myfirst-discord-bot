const Discord = require("discord.js");
module.exports = {
  name: "ping",
    deskripsi: "Returns latency and API ping",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging....`);

        msg.edit(`🏓 Pong!
        Latency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}`);
    }
}

