const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();


module.exports = {
	name: 'vote',
	description: 'Makes a yes or no vote',
	execute(message, args) {
        message.delete(0);
        message.channel.send("Yes or No Vote has Started").then(async msg => {
            await msg.react("554852607609536523");
            await msg.react("554852756490289153");
            
        });
        
        
        
        
           


       
	
	console.log('Someone used vote');
	
	
	},
};