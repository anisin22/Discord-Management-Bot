module.exports = {
	name: 'stop',
	description: 'Stop an LH AFK',
	execute(message, args) {
        client.channels.get('544704018606325762').message.delete(10).send('The AFK has ended');
	},
};