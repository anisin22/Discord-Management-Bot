module.exports = {
	name: 'invite',
	description: 'Invite the bot to your server',
	execute(message, args) {
        message.delete(10);
			if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You do not have the perms to do this');
			message.channel.send("https://discordapp.com/oauth2/authorize?client_id=528041349203755008&scope=bot&permissions=8");
			console.log('Someone used invite');	
	},
	
};