const Discord = require('discord.js');
let xp = require('../xp.json');

exports.run = (client, message, args) => {

    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvlXp = curlvl * 300;
    let difference = nxtLvlXp - curxp;

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor('#40e0d0')
    .addField("Level", curlvl, true)
    .addField("XP", curxp, true)
    .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);

    message.channel.send(embed);

}