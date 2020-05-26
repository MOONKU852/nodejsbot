const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    message.delete()
    let desc = args.join(" ")
    const embed = new Discord.RichEmbed()
    .setAuthor(`This Message has Been sent By ${message.author.username}`)
    .setColor(`#40e0d0`)
    .setFooter('두둥탁')
    .setTimestamp()
    .setDescription(desc);
    message.channel.send(embed);
}