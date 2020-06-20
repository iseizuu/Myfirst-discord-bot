const fs = require("fs");
const categories = fs.readdirSync("./commands/");

module.exports = bot => {
  try {
    categories.forEach(async (category) => {
      fs.readdir(`./commands/${category}/`, (err) => {
        if (err) return console.error(err);
        const init = async () => {
           let Commands = fs.readdirSync(`./commands/${category}`).filter(file => file.endsWith(".js"));
          
          
          for (let file of Commands) {
            let cmd = require(`../commands/${category}/${file}`);
                 bot.cmds.set(cmd.name, cmd);
             //     console.log(cmd.name, "Succses")
            
                if (cmd.alias && Array.isArray(cmd.alias))
                cmd.alias.forEach(alias => bot.alias.set(alias, cmd.name)) // nah sekarang bisa pake alias tipe alias harus array []
    
          }
          
        };
        init();
      });
    });
  }
  catch (error) {
    console.log(error);
  }
};