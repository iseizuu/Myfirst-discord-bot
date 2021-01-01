/**
 * @param {import('discord.js').Client} client
 */
module.exports = client => {
    const dur = 1e4;
    console.log(`[INFO] ${client.user.tag} Ready!`);
    setInterval(() => {
        const ran = [
            `${client.users.cache.size} Member`,
            `${client.config.default_prefix} || Customizable`,
            'Useless bot'
        ];
        const dom = ran[Math.floor(Math.random() * ran.length)];
        client.user.setPresence({
            activity: {
                name: dom,
                type: 'STREAMING',
                url: 'https://www.twitch.tv/a'
            },
            status: 'online'
        });
    }, dur);
};
