const Discord = require('discord.js');
const promptMessage = require('../../functions.js');

const chooseArr = ["✌", "✊", "🖐"];

exports.run = async (client, message, args) => {
    const embed = new RichEmbed()
    .setColor(`#40e0d0`)
    .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
    .setTimestamp()
    .setDescription("Add a reaction to one of these emojis to play the game!");

    const msg = await message.channel.send(embed);
    const reacted = await promptMessage(msg, message.author, 30, chooseArr);

    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

    const result = await getResult(reacted, botChoice);
    await msg.clearReactions();

    embed
    .setDescription("")
    .addField(result, `${reacted} vs ${botChoice}`);

    msg.edit(embed);

    function getResult(me, clientChosen) {
        if ((me === "✌" && clientChosen === "🖐") ||
            (me === "✊" && clientChosen === "✌") ||
            (me === "🖐" && clientChosen === "✊")) {
                return "You won!";
            } else if (me === clientChosen) {
                return "It's a tie!";
            } else {
                return "You lost!";
            }
        }
}
