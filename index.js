const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
client.on("ready", message => {
    console.log('salut je suis prêt');

});

client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
})

client.login('NzI5ODU0MjQwNzA0NjkyMjU2.XwO_uw.gGVTy2iRlzUESHI_HgpQRNJrDmQ'); //paste your token here