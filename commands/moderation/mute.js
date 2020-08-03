const Discord = require("discord.js");
const ms = require("ms");
const { getMember, formatDate } = require("../../function.js");


module.exports = {
    name: "mute",
        deskripsi: "Mute Member sampai waktu yang ditentukan",
    usage: "[username | id | mention]",
    run: async (client, message, args) => {
      message.channel.send('Ga ada mute, kan ada bot MEE6')

  //!tempmute @user 1s/m/h/d
  const member = getMember(message, args.join(" "));
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';
      
  if(!tomute) return message.reply("akwdokoawkdo");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = (`${roles}`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.roles.crate({
        data : {
        name: "muted",
        color: "#000000",
        permissions:[]
      }}).then(a => {message.channel.send('Eww, u dont have muted role, can i make one? :V')})
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

  await(tomute.roles.add(roles.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.roles.remove("734315616525353005");
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


    }
}