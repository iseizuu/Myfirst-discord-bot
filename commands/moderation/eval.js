const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
const util = require('util')
const codeBlock = (text) => `\`\`\`js\n${text}\n\`\`\``
const cleanCode = (text) => typeof text === 'string' ? text.replace(/`/g, `\`${String.fromCharCode(8203)}`).replace(/@/g, `@${String.fromCharCode(8203)}`) : text
function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

module.exports = {
  name: "eval",
    deskripsi: "Evaluates a JS string",
    run: (client, message, args) => {
          if (message.author.id !== '271576733168173057') return message.channel.send('You scrub, what made you think you\'d be able to do that??');
 try {
      let evaledCode = eval(args.join(/(^`{3}(\w+)?|`{3}$)/g, ''))
      if (typeof evaledCode !== 'string') evaledCode = util.inspect(evaledCode)
      message.channel.send(
        new MessageEmbed()
          .addField('Input', codeBlock(args))
          .addField('Output', codeBlock(cleanCode(evaledCode).substring(0, 1000)))
      )
    } catch (error) {
      message.channel.send(
        new MessageEmbed()
          .addField('Input', codeBlock(args))
          .addField('Error output', codeBlock(cleanCode(error)))
      )
    }
    }
}