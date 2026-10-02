require('dotenv').config();
const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const { DISCORD_TOKEN, CLIENT_ID, GUILD_ID } = process.env;
if (!DISCORD_TOKEN || !CLIENT_ID) {
  throw new Error('Set DISCORD_TOKEN and CLIENT_ID in your .env file.');
}

const commands = [
  new SlashCommandBuilder()
    .setName('crack')
    .setDescription('Start cracking another user')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to crack')
        .setRequired(true)
    )
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);
const route = GUILD_ID
  ? Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID)
  : Routes.applicationCommands(CLIENT_ID);

rest.put(route, { body: commands })
  .then(() => console.log(`Registered /crack ${GUILD_ID ? 'for the test server' : 'globally'}.`))
  .catch(error => {
    console.error('Could not register slash commands:', error);
    process.exitCode = 1;
  });
