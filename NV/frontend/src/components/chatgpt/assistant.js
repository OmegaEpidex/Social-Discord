require('dotenv').config();
const { Client, Intents } = require('discord.js');
const openai = require('openai');
const express = require('express');

// Set up OpenAI
openai.apiKey = process.env.OPENAI_API_KEY;
const organization = process.env.My_Organization;

// Set up Discord bot
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

async function fetchGptResponse(promptText) {
    try {
        const response = await openai.createCompletion({
            engine: "gpt-3.5-turbo",
            prompt: promptText,
            role: "assistant",
            temperature: 0.7,
            max_tokens: 100
        });
        return response.choices[0].text.trim();
    } catch (e) {
        console.error(`Error fetching GPT response: ${e}`);
        return "I'm sorry, I couldn't find an answer to that.";
    }
}

bot.on('messageCreate', async message => {
    if (!message.content.startsWith('? ') || message.author.bot) return;

    const args = message.content.slice(2).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ai') {
        const prompt = args.join(' ');
        const botResponse = await fetchGptResponse(prompt);
        message.reply(`${message.author}, ${botResponse}`);
    } else if (command === 'secret') {
        if (message.member.roles.cache.some(role => role.name === 'Admin')) {
            message.reply('This is a secret command only for Admins!');
        } else {
            message.reply('You do not have the correct role for this command.');
        }
    } else if (command === 'delete' && message.member.permissions.has('MANAGE_MESSAGES')) {
        const num = parseInt(args[0], 10);
        if (!isNaN(num)) {
            await message.channel.bulkDelete(num + 1);
            message.reply(`${num} messages deleted.`, { timeout: 5000 });
        }
    }
});

// Set up Flask-like Express app
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Run servers
bot.login(process.env.DISCORD_TOKEN);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});