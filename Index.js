const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";
client.on("ready", message => {
    console.log('bot => ok')
          
})


client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
        
    if(message.content === `hello`){
        message.channel.send('bonjour<a:valide:731232586411540552>');
    }
        
    if(message.content === `.help`){
         var help = '!ping => pong !'
                     '!hello => bonjour!'
                      'studio => la music'
                     
         message.channel.send(help)  
   } 

   if(message.content === `tg`){
        message.channel.send('merci de ne pas insulter ');
    }

   if(message.content === `Fdp`){
        message.channel.send('ta mère la pute tu arrête <a:ban:736946398490001408>');
    }

   if(message.content === `.nitro`){
        message.channel.send('1 invite = nitro classic  <a:emoji_55:739952349937664131>!');
                             
    }
    
if (message.content === ".embed"){
let embed = new Discord.MessageEmbed()
.setTitle('Hello! :)')
.setDescription("**moderations**")
.addField( 'ban,kick,bantemporaire')       
.setThumbnail('https://i.imgur.com/wSTFkRM.png')
.setImage('https://i.imgur.com/wSTFkRM.png')
.setColor('#020202')
.setFooter('jordan_offshl', 'https://cdn.discordapp.com/attachments/737388526848442459/742075728358539355/4713_ubot-1.png');

message.channel.send(embed);
 
    }
if(message.content === `.wl`){
    message.reply("vient d'avoir accès à inviteManager");
      
   }
      
if (message.content === `.ticket`){
let embed = new Discord.MessageEmbed()
.setTitle('') 
.setDescription('username hello welcome in the team!')
.setImage('https://cdn.discordapp.com/attachments/714924113713561660/717739024478896198/8881444f23794650da1fe33c1bed39e0.gif');
message.channel.send(embed);

   } 
if (message.content === `.mod`){
let embed = new Discord.MessageEmbed()
.setTitle('voici mes commands !help') 
.setDescription('<===Invitation==>')
.addField('!help')
.addField('**<===moderation==>**');
.setImage('https://cdn.discordapp.com/attachments/719369502105665599/742136383329665044/c16009efd53f10bba79f19c683d53c3e.gif');
.setTimestamp()
.setFooter('create by jordan');

message.channel.send(embed);

   }
   
if(message.content === `.info`){
let embed = new Discord.MessageEmbed()
.setTitle('🔧inviteMaster info🔧')
.addField(
	{ name: 'ANTI BOT', value: '`on`', inline: true },
	{ name: 'ANTI RÔLE', value: '`on`', inline: true },
	{ name: 'ANTI MESSAGE BAN', value: '`on`', inline: true },
	{ name: 'ANTI MESSAGE KICK', value: '`on`', inline: true },
)
.setImage('')
.setFooter('inviteMaster', 'https://cdn.discordapp.com/attachments/737388526848442459/742203444919533668/images_14.png'); 
	
 message.channel.send(embed);
   }	
})
client.login(process.env.TOKEN);
