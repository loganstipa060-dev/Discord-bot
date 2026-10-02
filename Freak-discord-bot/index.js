require('dotenv').config();
const { Client, GatewayIntentBits, Events } = require('discord.js');

const token = process.env.DISCORD_TOKEN;
if (!token) throw new Error('Missing DISCORD_TOKEN in your .env file.');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
  console.log(`Freak is online as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName !== 'crack') return;

  const target = interaction.options.getUser('user', true);
  await interaction.reply({
    content: `${interaction.user} has started cracking ${target}`,
    allowedMentions: { users: [interaction.user.id, target.id] }
  });
});

client.login(token);
