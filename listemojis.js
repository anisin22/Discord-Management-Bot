const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();


module.exports = {
	name: 'listemojis',
	description: 'Lists all of the emojis in the server',
	execute(message, args) {
        message.delete(0);
        
        
		const emojiList = message.guild.emojis.map((e, x) => (x + ' = ' + e) + ' | ' +e.name).join('\n');

		if (emojiList.length > 2048) {
		  // split it back up
		  const emojiParts = emojiList.split('\n');
		
		  // cut it in half.
		  const halfway = Math.floor(emojiParts.length / 2);
		
		  // send both halves.
		
		  const firstHalf = emojiParts.slice(0, halfway).join('\n');
		  const secondHalf = emojiParts.slice(halfway).join('\n');
		  
		  message.channel.send(new Discord.RichEmbed().setColor("RANDOM").setDescription(firstHalf));
		  message.channel.send(new Discord.RichEmbed().setColor("RANDOM").setDescription(secondHalf));
		}
		else if (emojiList.length < 2048) {
			message.channel.send(new Discord.RichEmbed().setColor("RANDOM").setDescription(emojiList));
		}

       
	
	console.log('Someone used list emoji');
	
	
	},
};