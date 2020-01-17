const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token } = require('./config.json');
const superagent = require('superagent');
const colors = require("./colors.json")
const weather = require('weather-js');
const client = new Discord.Client();
client.commands = new Discord.Collection();



client.on('ready', () => {
	const statuses = [{
		"Type": "PLAYING",
		"Game": "Realm Of the Mad God"
},
{
	"Type": "WATCHING",
	"Game": "Anime with Doc"
},
{
	"Type": "PLAYING",
	"Game": "With Zak's Hello Kitty Bong"
},
{
		"Type": "WATCHING",
		"Game": "Ogre Dying To Dumb Shit"
},
{
	"Type": "WATCHING",
	"Game": "Bean Crying In The Mirror"
},
{
	"Type": "WATCHING",
	"Game": "Nate Grind Sprite Worlds "
},
{
	"Type": "WATCHING",
	"Game": "The ROTMG Anime"
},
{
		"Type": "WATCHING",
		"Game": "!help For Commands",
},
{
		"Type": "LISTENING",
		"Game": "To RJ's Army Stories",
},
{
	"Type": "LISTENING",
	"Game": "To RJ's Sex Life",
},
{
		"Type": "WATCHING",
		"Game": "ROTMG anime with Ogre",
},
{
	"Type": "WATCHING",
	"Game": "Zak Outsmoke Anyone",
},
{
		"Type": "PLAYING",
		"Game": "With Zak's Bong's"
},
{
		"Type": "PLAYING",
		"Game": "With A Cat"
},
{
		"Type": "WATCHING",
		"Game": "CJ Get Swol",
		
}

];

// possible presense for the bot.
/*const presense = [
		"online",
		"idle",
		"dnd"
];*/

// Loading the bot up.
let date = new Date();
console.log('\x1b[36m%s\x1b[0m', `Churlish Bot has started on ${date}.`);


// Choosing a random game every 30 seconds.
setInterval(() => {
	var status = statuses[Math.floor(Math.random()*statuses.length)];
	
		
		client.user.setPresence({
				game: {
						name: status["Game"],
						type: status["Type"]
				},
				
		});
}, 30000);
});
client.login(token);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
client.on('message' , async message => {
 if(message.content.indexOf('Dx') !== -1) {
		
  await message.react("556257313053343754");
	await message.react("556257413041225735");
	console.log('someone used DX');
	} 

})


client.on('message' ,async message => {
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);

	const command = args.shift().toLowerCase();

	 if (message.content === prefix + 'reset') {
		message.delete(10);
		switch(message.content.toUpperCase()) {
			case '!RESET':
				resetBot(message.channel);
				break;		
		}     
	}

	
	
	else if(message.content === prefix + 'gh') {
		message.delete(10);

		let m1 = (`An Lost halls AFK, plz react to be moved into Voice Chat and join the Queue Voice Channel `);
		
		client.channels.get('544692343899422730').send('here')
		.then(message => {
			message.delete()
		}).catch();
		client.channels.get('544692343899422730').send(m1).then(async msg => {
			await msg.react("554867496000290849");
			await msg.react("554867663978102794");
			
			let reactionsummary = {};
	for (let [useless, reaction] of message.reactions) {
		let emojiname = reaction.emoji.name;
		let current = [];
		reactions.users.map(user => {
			if (this.client.user.id !== user.id){
				current.push(user);
			}
		});
		reactionsummary[emojiname] = current;
		console.log(current);
		console.log(user);
	}
		});

	

	}
	else if (command === 'move') {
		const guild = message.guild;
		let ToMove = message.mentions.members.first() || message.guild.members.get(args[0]);
		if(!ToMove) return message.reply('You did no specify a user');

		const guildChannels = guild.channels.find(channel => channel.name === 'Lost Hall'); 
		//console.log(guildChannels);
		//console.log(ToMove);
		ToMove.setVoiceChannel(guildChannels);

	  }
	
	
	
	 
	else if (message.content === prefix + 'cat') {
		message.delete(0);
        
        let {body} = await superagent
		.get('http://aws.random.cat/meow')
		//console.log(body.file)
		if(!{body}) return message.channel.send('Machine broke. Try again')

		let cEmbed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setAuthor('CATS!!', message.guild.iconURL)
		.setImage(body.file)
		.setTimestamp()
		.setFooter('Churlish Bot', client.user.displayAvatarURL)
		
		message.channel.send({embed: cEmbed}); 
		console.log('Someone used cat');
	}
	else if (message.content === prefix + 'ping') {
		message.delete(0);
		const m = await message.channel.send("Ping?");

		const L = `${m.createdTimestamp - message.createdTimestamp}ms`;
		const Al = `${Math.round(client.ping)}ms`;
		let pEmbed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setAuthor('Pong!')
		
		
		.addField("Latency", "```"+ L +" ```")
		.addField(" API Latency", "```"+ Al +" ```", true)
		.setFooter('Churlish Bot', client.user.displayAvatarURL)


		m.edit(pEmbed);
	}

	
	
	else if (message.content === prefix + 'dog') {
		message.delete(10);

		let {body} = await superagent
		.get('https://dog.ceo/api/breeds/image/random')
		
		if(!{body}) return message.channel.send('Machine broke. Try again')

		let dEmbed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setAuthor('DOGS!!', message.guild.iconURL)
		.setImage(body.message)
		.setTimestamp()
		.setFooter('Churlish Bot', client.user.displayAvatarURL)
		
		message.channel.send({embed: dEmbed}); 
		console.log('Someone used dog');
	}
	else if (message.content === prefix + 'meme') {
		message.delete(10);

		let {body} = await superagent
		.get('https://api-to.get-a.life/meme')
	
		if(!{body}) return message.channel.send('Machine broke. Try again')

		let dEmbed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setAuthor('MEMES XD', message.guild.iconURL)
		.setImage(body.url)
		.setTimestamp()
		.setFooter('Churlish Bot', client.user.displayAvatarURL)
		
		message.channel.send({embed: dEmbed}); 
		console.log('Someone used meme');
	}
	
})

client.on('guildMemberAdd', async member => {
	
	const channel = member.guild.channels.find(ch => ch.name === 'churlishness');
	if (!channel) return;
	//console.log(member);
	let jEmbed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setAuthor('Welcome to Churlish Kittens', member.guild.iconURL)
		.setThumbnail(`${member.guild.iconURL}`)
		.addField(`Welcome to the Guild, ${member.user.username}!`, "Remember to read the rules in <#478751244958040084> and be active in discord and in game to be promoted. Also make sure to change your discord name to your in-game name.")
		.setTimestamp()
		.setFooter(`Churlish Bot || Total members: ${member.guild.memberCount}`, client.user.displayAvatarURL)
		
		channel.send({embed: jEmbed}); 

	

	var role = member.guild.roles.find (role => role.name === 'Initiate')
	member.addRole (role);
	console.log('Someone joined');
});

client.on('guildMemberRemove', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'leave');	
	
	if (!channel) return;
	let jEmbed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setAuthor('Someone Left the Discord', member.guild.iconURL)
		.setThumbnail(`${member.guild.iconURL}`)
		.addField(`The Server has been left by, ${member.user.username}`, "Bye Bye, you will be missed")
		.setTimestamp()
		.setFooter(`Churlish Bot || Total members: ${member.guild.memberCount}`, client.user.displayAvatarURL)
		
		channel.send({embed: jEmbed}); 
	
		console.log('Someone left');
});

function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => client.destroy())
	.then(() => client.login(token));
	console.log('Someone used reset');
}