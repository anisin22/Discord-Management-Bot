const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();


module.exports = {
    name: 'esay',
    description: 'Bot says something with embeds',
    execute(message, args) {
        message.delete(0);
        
        if(!message.member.hasPermission('MANAGE_ROLES')) return;
      
        let sayMessage = args.join(" ");   
    
    
    
        message.channel.send(new Discord.RichEmbed().setColor("RANDOM").setDescription(sayMessage));
        console.log('Someone used esay');
    },
};




