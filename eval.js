const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { ownerID } = require('../config.json');


module.exports = {
	name: 'eval',
	description: 'Evaluates Code',
	execute(message, args) {
        message.delete();
        
        if(message.author.id !== ownerID) return message.reply('You do not have the perms to do this');
            
        const code = args.join(" ");

      //  const codeEmbed = new RichEmbed()
       //     .setAuthor(message.author.tag, message.author.avatarURL)
         //   .setTitle('Eval Command Results')
         //   .setColor("RANDOM")
         //   .addField('📥 Input', `\`\`\`\n${code}\n\`\`\``);
          //  message.channel.send({embed: codeEmbed}); 
        try {
            let evaled = eval(code);
            if (typeof evaled !== "string") evaled = require("util").inspect(evaled);	
            message.channel.send((evaled), {code:"xl"});
        } catch (err) {
          message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
        }
	},
};
