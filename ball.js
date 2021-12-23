const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let ball = ['Yes', 'No', 'Definitely', 'Certainly Not', 'Maybe', 'Of Course', 'Magically No', 'Why you asking me that?', 'Secretly yes!']
let random = ball[Math.floor(Math.random() * ball.length)]

if (context.params.event.content.startsWith(`${process.env.PREFIX}8ball`)) {
  await lib.discord.channels['@0.2.2'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Here is what the Magical Ball says: **${random}**`,
  });
}
