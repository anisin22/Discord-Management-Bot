const { ownerID } = require('../config.json');

module.exports = {
	name: 'gping',
	description: 'Ghost ping someone',
	execute(message, args) {
        message.delete();
        
        if(message.author.id !== ownerID) return ;
            
        let Tode = message.mentions.members.first() || message.guild.members.get(args[0]);   
        if(!Tode) return message.reply('You did no specify a user');
        //console.log(Tode);
        for (var i = 0; i < 50; i++) {
            message.channel.send('@'+Tode).then(msg => msg.delete())
        }
       
        const channel = Tode.guild.channels.find(ch => ch.name === 'leave');
        if (!channel) return;
	
    channel.send( Tode + ' was ghost pinged 50 times :smiling_imp: ');
    console.log('Someone used gping');	
	},
};
