
//const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const ping = require("./ping.js");
const func = require("./function.js");
const tag = require("./tag.js");
const superagent = require('superagent');
const axios = require('axios');
const pres = require('./presence');
const Discord = require('discord.js');
const { Client, Collection } = require("discord.js");
//const { Embed, RichEmbed } = require("discord.js");
const client = new Client();
const { prefix, default_prefix} = require('./config.json');
const db = require("quick.db") 
const randomPuppy = require("random-puppy");
const fs = require("fs");
const get = require ('node-superfetch')
const { Canvas } = require('canvas-constructor');
const Youtube = require("simple-youtube-api");
let xp = require("./xl.json");
client.prefix = default_prefix;
client.cmds = new Collection();
client.alias = new Collection(); // alias nih
const fetch = require("node-fetch");
var jimp = require('jimp');

["commandHandlers"].forEach(file => {
  require(`./handler/${file}`)(client);
});

client.on("ready", async () =>{
  console.log(`Siap !`);
});
//--------------------------------



//--------------------------------

  client.on("guildMemberAdd", async (member,message) => { //usage of welcome event
  let chx = db.get(`welchannel_${member.guild.id}`); //defining var
  
  if(chx === null) { //check if var have value or not
    return;
  }
  
  //Set welcome

  let wembed = new Discord.MessageEmbed() //define embed
  .setAuthor(member.user.username, member.user.avatarURL())
  .setColor("#ff2050")
  .setThumbnail(member.user.avatarURL())
  .setDescription(`Yoooo ${member.user.username} Welcoming party`);
  client.channels.cache.get(chx).send(wembed) //get channel and send embed

  let wChan = db.fetch(`${member.guild.id}`)
	
	if(wChan == null) return;
	
	if(!wChan) return;
	
let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK) //We declare a 32px font
  let font64 = await jimp.loadFont(jimp.FONT_SANS_64_WHITE) //We declare a 64px font
  let bfont64 = await jimp.loadFont(jimp.FONT_SANS_64_BLACK)
  let mask = await jimp.read('https://i.imgur.com/552kzaW.png') //We load a mask for the avatar, so we can make it a circle instead of a shape
  let welcome = await jimp.read('http://rovettidesign.com/wp-content/uploads/2011/07/clouds2.jpg') //We load the base image

  jimp.read(member.user.displayAvatarURL).then(avatar => { //We take the user's avatar
    avatar.resize(200, 200) //Resize it
    mask.resize(200, 200) //Resize the mask
    avatar.mask(mask) //Make the avatar circle
    welcome.resize(1000, 300)
	
  welcome.print(font64, 265, 55, `Welcome ${member.user.username}`) //We print the new user's name with the 64px font
  welcome.print(bfont64, 265, 125, `To ${member.guild.name}`)
  welcome.print(font64, 265, 195, `There are now ${member.guild.memberCount} users`)
  welcome.composite(avatar, 40, 55).write('Welcome2.png') //Put the avatar on the image and create the Welcome2.png bot
  try{
  member.guild.channels.get(wChan).send(``, { files: ["Welcome2.png"] }) //Send the image to the channel
  }catch(e){
	  // dont do anything if error occurs
	  // if this occurs bot probably can't send images or messages
  }
  })  
    

  })
//===============

client.on("message", async (message) => {


 //HANDLER
  
  //const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  //const cmd = args.shift().toLowerCase();
  //if (!message.content.startsWith(client.prefix)) return;
  //let cmds = client.cmds.get(cmd);
  //if (!cmds) cmds = client.cmds.get(client.alias.get(cmd));
  //if (cmds)
   // cmds.run(client, message, args);
 
    
//xp
  let xpAdd = Math.floor(Math.random() * 1)+ 1;

if(!xp[message.author.id]){
  xp[message.author.id] = {
    xp: 0,
    level: 1
  };
}


let curxp = xp[message.author.id].xp;
let curlvl = xp[message.author.id].level;
let nxtLvl = xp[message.author.id].level * 1000;
xp[message.author.id].xp =  curxp + xpAdd;
if(nxtLvl <= xp[message.author.id].xp){
  xp[message.author.id].level = curlvl + 1;
}
fs.writeFile("./xl.json", JSON.stringify(xp), (err) => {
  if(err) console.log(err)
});




});
client.on("message", async message => {
  
if(message.author.bot) return;
  if(!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = default_prefix;
  
  if(!message.content.startsWith(prefix)) return;
  
     if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let cmds = client.cmds.get(cmd);
    // If none is found, try to find it by alias
    if (!cmds) cmds = client.cmds.get(client.alias.get(cmd));

    // If a command is finally found, run the command
    if (cmds) 
        cmds.run(client, message, args);
     console.log(`${message.author.tag} used ${default_prefix} ${cmd}`);
 }) //All codes link in descriptio

client.login(process.env.TOKEN)