const discord =require('discord.js');
const commands = require('./commands');

const client = new discord.Client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('with breeding patterns of pokemon')
})

client.on('message', msg => {
  const prefix = ','
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  if (commands[command]) {
    commands[command](msg, args)
  }
})

client.login('NTc5OTQ1MjEwMTY0MDE5MjEy.XOJiFQ.-Oq_9_ya7UuRz7FQoQG9-5SlbJE')
