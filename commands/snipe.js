const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const msg = client.snipes.get(message.channel.id);
    if (!msg) return message.reply("no recently deleted messages!");

    const embed = new RichEmbed()
    .setAuthor(`삭제한사람: ${msg.author.tag}`, msg.author.displayAvatarURL())
    .setDescription(msg.content)
    .setFooter('두둥탁')
    .setTimestamp();

    if (msg.image) embed.setImage(msg.image);

    message.channel.send(embed);
}