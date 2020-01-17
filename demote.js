const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();


module.exports = {
	name: 'demote',
	description: 'Demote a member',
	execute(message, args) {
        message.delete(10);
			if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('You do not have the perms to do this');
			
			
			let Tode = message.mentions.members.first() || message.guild.members.get(args[0]);   
			if(!Tode) return message.reply('You did no specify a user');

			let role = args.join(' ').slice(22);
			if(!role) return message.reply('Specify a Role!');
			let gRole = message.guild.roles.find(r => r.name === role);
			if(!gRole) return message.reply("Couldn't find that role");

			
			Tode.removeRole(gRole).catch(console.error);

			Tode.addRole(gRole).catch(console.error);
			let deEmbed = new Discord.RichEmbed()
						.setColor('RANDOM')
						.setTitle('Someone is getting demoted oof')
						.setThumbnail(`${message.guild.iconURL}`)
						.addField(`Rest In Peace` , `${Tode} lost the role: ${gRole}`)
						message.channel.send({embed: deEmbed});
						console.log('Someone used demote');	
	},
	
};