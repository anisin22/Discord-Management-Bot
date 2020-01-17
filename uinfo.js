const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();


module.exports = {
	name: 'uinfo',
	description: 'User Info',
	execute(message, args) {
        message.delete(0);
        
        let aut = message.mentions.members.first() || message.guild.members.get(args[0]);   
        if(!aut) return message.reply('You did no specify a user');
      //console.log(client);
        let uEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("User Info")
        .setThumbnail(`${aut.user.displayAvatarURL}`)
        .setAuthor(`${aut.user.tag} `, `${aut.user.displayAvatarURL}`)
        .addField('**Username:**', `${aut.user.username}`, true)
        .addField('**Discriminator:**', `${aut.user.discriminator}`, true)
        .addField('**Status:**', `${aut.user.presence.status}`, true)
        .addField('**Roles**['+ aut.roles.size +']:', aut.roles.map(r => r).join(' ') , true)
        .addField('**Created At:**', aut.user.createdAt,  true)
        .setFooter('Churlish Bot', client.displayAvatarURL, aut.user.id);
        message.channel.send({embed: uEmbed})
        .then(message => {
          message.delete(10000)
        }).catch();
	
        console.log('Someone used uinfo');	
	
	},
};