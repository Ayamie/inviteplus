const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "%";
client.on("ready", message => {
    console.log('salut je suis prêt')
})


client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
    
    if(message.content ===`!setwelcome $message`){
        message.channel.send('welcome channels is $message');
    }   
if (message.content === "%help") {
let embed = new Discord.MessageEmbed()
.setTitle('Hello! :)')
.setDescription('stats du serveur 23 member')
.setColor('#020202')
.setFooter('Good Footer here');

message.channel.send(embed);
    
   }
        
if (message.content === "%embed") {
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
    
if(message.content === `%wl`){
    message.reply("vient d'avoir accès à inviteManager");
      
   }
      
if (message.content === `%ticket`) {
let embed = new Discord.MessageEmbed()
.setTitle('') 
.setDescription('username hello welcome in the team!')
.setImage('https://cdn.discordapp.com/attachments/714924113713561660/717739024478896198/8881444f23794650da1fe33c1bed39e0.gif');
message.channel.send(embed);

   }   
})
client.login(process.env.TOKEN); 
