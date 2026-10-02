# Freak Discord bot

A starter Discord bot named **Freak** with the `/crack user:<member>` slash command. It replies publicly with:

`@UserWhoUsedCommand has started cracking @example`

The wording is playful; the command only posts that message and does not access accounts or perform any cracking.

## Setup

1. Create an application in the [Discord Developer Portal](https://discord.com/developers/applications), name it **Freak**, then add a bot under **Bot** and copy its token.
2. In **OAuth2 → General**, copy the Application ID. Under **OAuth2 → URL Generator**, select the `bot` and `applications.commands` scopes, then invite the bot to your server with permission to send messages.
3. Copy `.env.example` to `.env` and fill in `DISCORD_TOKEN` and `CLIENT_ID`. For quick testing, also set `GUILD_ID` to your server ID. Keep `.env` private; never share the bot token.
4. Install Node.js 18 or newer, then from this folder run:

   ```sh
   npm install
   npm run deploy
   npm start
   ```

With `GUILD_ID` set, `/crack` should appear in that server shortly. Remove `GUILD_ID` to register the command globally; global updates can take longer to appear. Keep `npm start` running for the bot to stay online.
