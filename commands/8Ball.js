const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(!args[2]) return message.reply("Please ask a full question!");
    let replies = ["네.", "아니.", "몰라.", "나중에 다시 질문"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(`#40e0d0`)
    .addField("Question", question)
    .addField("Answer", replies[result])
    .setFooter('두둥탁')
    .setTimestamp();
    message.channel.send(embed);

}