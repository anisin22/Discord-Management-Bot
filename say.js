const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();


module.exports = {
	name: 'say',
	description: 'Bot says something without embeds',
	execute(message, args) {
        message.delete(0);
        
        if(!message.member.hasPermission('MANAGE_ROLES')) return;
	let sayMessage = args.join(" ");   
	
	message.channel.send(sayMessage);
	console.log('Someone used say');
	
	
	},
};
