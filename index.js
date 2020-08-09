const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
client.on("ready", message => {
    console.log('bot => ok');
})

client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
        
    if(message.content === `salut`){
        message.channel.send('bonjour<a:valide:731232586411540552>');
    }
        
    if(message.content === `!help`){
         var help = '!ping => pong !'
                     '!hello => bonjour!'
                     
         message.channel.send(help)  
   } 

   if(message.content === `tg`){
        message.channel.send('merci de ne pas insulter ');
    }

   if(message.content === `Fdp`){
        message.channel.send('ta mère la pute tu arrête <a:ban:736946398490001408>');
    }

   if(message.content === `!nitro`){
      message.channel.send('1 invite = nitro classic  <a:emoji_55:739952349937664131>!');
    }
    
   if(message.content === `!support`){
      message.channel.send('voici le lien du serveur support: https://discord.gg/fFUDPuZ');
    }
   if(message.content === `!help`){
       message.channel.send('music')
    }
})

client.login(process.env.TOKEN);
