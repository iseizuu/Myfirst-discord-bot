module.exports = class Util {

    static trimArray(arr, maxLen = '10') {
        if (arr.length > maxLen) {
            const len = arr.length - maxLen;
            arr.slice('0', maxLen);
            arr.push(`${len} more...`);
        }
        return arr;
    }

    static embedURL(title, url, display = url) {
        return `[${title}](${url.replace(/\)/gu, '%27')}${display ? ` "${display}"` : ''})`;
    }

    static getMember(message, toFind = '') {
        toFind.toLowerCase();

        let target = message.guild.members.cache.get();
        if (!target && message.mentions.members) target = message.mentions.members.first();

        if (!target && toFind) {
            target = message.guild.members.find(member => member.displayName.toLowerCase().includes(toFind)
					|| member.user.tag.toLowerCase().includes(toFind));
        }

        if (!target) target = message.member;

        return target;
    }

    static formatDate(date) {
        return new Intl.DateTimeFormat('en-US').format(date);
    }

};
