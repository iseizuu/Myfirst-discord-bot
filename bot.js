require('dotenv').config();
const fs = require('util').promisify(require('fs').readdir);
const { Client, Collection } = require('discord.js');
const client = new Client();


client.cmds = new Collection();
client.alias = new Collection();
client.config = require('./config.json');

require('./handler/commandHandlers')(client);


async function eventinit() {
    const Event = await fs('./events');
    for (const file of Event) {
        const eventName = file.split('.');
        // eslint-disable-next-line global-require
        const event = require(`./events/${file}`);
        console.log(`[INFO] Event ${eventName[0]} Loaded`);
        client.on(eventName[0], event.bind(null, client));
    }
}
eventinit();
client.login(process.env.Token);
