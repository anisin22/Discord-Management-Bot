const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();




module.exports = {
	name: 'promote',
	description: 'Promote a member',
	execute(message, args) {
        message.delete(10);
			if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('You do not have the perms to do this');
			
			
			let Topro = message.mentions.members.first() || message.guild.members.get(args[0]);   
			if(!Topro) return message.reply('You did no specify a user');

			const role = args.slice(1).join(" ");
			const roleToAdd = message.guild.roles.find(x => x.name === role);
if (roleToAdd) {
	// do something with role
	Topro.addRole(roleToAdd).catch(console.error);

	let proEmbed = new Discord.RichEmbed()
						.setColor('RANDOM')
						.setTitle('Promotion HYPE!!')
						.setThumbnail(`${message.guild.iconURL}`)
						.addField("New role NANI??", `${Topro} congratz on your new role ${roleToAdd}`)
						message.channel.send({embed: proEmbed});
						console.log('Someone used promote');	
	
} else {
    message.reply("Cannot find that role");
}
			
			
			
			
	},
			
	};
