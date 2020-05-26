const ascii = require('ascii-art');

exports.run = (client, message, args, ops) => {
    ascii.font(args.join(` `), "Doom", function(err, rendered) {
        rendered = rendered.trimRight();
        if (rendered.length > 2000) return message.channel.send(`<@${message.author.id}> ` + '죄송해요, 글이 너무 길어요!');
        message.channel.send(rendered, {
            code: "md"
        });

    });

}