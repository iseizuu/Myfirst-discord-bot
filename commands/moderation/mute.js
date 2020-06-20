const Discord = require("discord.js");
const ms = require("ms");
const { getMember, formatDate } = require("../../function.js");


module.exports = {
    name: "mute",
        deskripsi: "Mute Member sampai waktu yang ditentukan",
    usage: "[username | id | mention]",
    run: async (client, message, args) => {

  //!tempmute @user 1s/m/h/d
  const member = getMember(message, args.join(" "));
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';
      
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = (`${roles}`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.roles.add("688547906948694057"));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.roles.remove("688547906948694057");
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


    }
}