const Discord = require('discord.js');
const express = require('express');
const { server } = require('http');
const { Completion } = require('openai');
const { axios } = require('axios');
require('dotenv').config();

const app = express();
const client = new Discord.Client();

const openai = new Completion({
  apiKey: process.env.OPENAI_API_KEY,
  organizationId: process.env.MY_ORGANIZATION,
});

async function fetchGptResponse(promptText) {
  try {
    const response = await openai.create({
      engine: "gpt-3.5-turbo",
      prompt: promptText,
      role: "assistant",
      temperature: 0.7,
      maxTokens: 100
    });
    return response.choices[0].text.trim();
  } catch (error) {
    console.error("Error fetching GPT response:", error);
    return "I'm sorry, I couldn't find an answer to that.";
  }
}

async function createPost(userId, authToken, postContent) {
    try {
        const response = await axios.post('../api/posts', {
            userId: userId,
            authToken: authToken,
            content: postContent
        });
        if (response.status === 201) {
            console.log('Post created successfully:', response.data);
            return response.data;
        } else {
            console.error('Failed to create post:', response.statusText);
            return null;
        }
    } catch (error) {
        console.error('Error creating post:', error);
        return null;
    }
}

// Example usage:
const userId = 'bot_ID';
const authToken = 'bot_auth_token';
const postContent = 'Hello, world!';
createPost(userId, authToken, postContent);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('?ai')) {
    const prompt = message.content.slice(4).trim();
    const botResponse = await fetchGptResponse(prompt);
    message.channel.send(`${message.author}, ${botResponse}`);
  }

  if (message.content.startsWith('?secret')) {
    if (message.member.roles.cache.some(role => role.name === 'Admin')) {
      message.channel.send('This is a secret command only for Admins!');
    } else {
      message.channel.send('You do not have the correct role for this command.');
    }
  }

  if (message.content.startsWith('?delete')) {
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
      const num = parseInt(message.content.split(' ')[1]);
      message.channel.bulkDelete(num + 1);
      message.channel.send(`${num} messages deleted.`).then(msg => msg.delete({ timeout: 5000 }));
    } else {
      message.channel.send('You don\'t have the necessary permissions to use this command.');
    }
  }
});

export default = bot;