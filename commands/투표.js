const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`<@${message.author.id}> ` + "명령어를 실행할 권한을 가지고 있지 않습니다.");

    if (!args[0]) return message.channel.send('Proper Usage: <prefix>poll question');

    const embed = new Discord.RichEmbed()
    .setColor(`#40e0d0`)
    .setFooter('React to vote.')
    .setDescription(args.join(' '))
    .setTitle(`Poll Created By ${message.author.username}`);

    let msg = await message.channel.send(embed);

    await msg.react('✅');
    await msg.react('❎');

    message.delete({timeout: 1000});

}