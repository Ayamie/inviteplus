const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
client.on("ready", message => {
    console.log('salut je suis prêt')

});


client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`pong! - ${client.ws.ping}`)
    }
        
    if(message.content === `salut`)
        message.channel.send('salut');
    }   
})
client.login(process.env.TOKEN);
