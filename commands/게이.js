const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    message.channel.send("You are " + Math.floor(Math.random() * 100 + 1) + "% gay");
}