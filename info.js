const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();


module.exports = {
	name: 'info',
	description: 'Server Info',
	execute(message, args) {
        message.delete(10);

		let sEmbed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setTitle("Server Info")
		.setThumbnail(`${message.guild.iconURL}`)
		.setAuthor(`${message.guild.name} Info`, `${message.guild.iconURL}`)
		.addField('**Server Name:**', `${message.guild.name}`, true)
		.addField('**Server Owner:**', `${message.guild.owner}`, true)
		.addField('**Member Count:**', `${message.guild.memberCount}`, true)
		.addField('**Role Count:**', `${message.guild.roles.size}`, true)
		.addField('**Roles:**', message.guild.roles.map(r => r).join(' ') , true)
		.setFooter('Churlish Bot', client.defaultAvatarURL);
		message.channel.send({embed: sEmbed})
		.then(message => {
			message.delete(10000)
		}).catch();
	
		console.log('Someone used info');	
	
	},
};