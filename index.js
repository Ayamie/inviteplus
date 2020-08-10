const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";
client.on("ready", message => {
    console.log('bot => ok')
});


client.on("message", message => {
    if(message.content === `${prefix}ping`){
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
        
    if(message.content === `salut`){
        message.channel.send('<a:mc:736946454228369503> salut');
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
    
   if(message.content === `.support`){
      message.channel.send('voici le lien du serveur support: https://discord.gg/fFUDPuZ');
    }
    
if (message.content === `.help`){
let embed = new Discord.MessageEmbed()
.setTitle('voici mes commands .help') 
.setDescription('<===Invitation==>')
.setThumbnail('https://cdn.discordapp.com/attachments/737388526848442459/742203444919533668/images_14.png')
.addFields(
		{ name: 'invitation', value: 'invité le bot dans votre serveur' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'serveur support', value: 'support', inline: true },
		{ name: 'moderation', value: 'ban', inline: true },
        )
.setTimestamp()
.addFields(
                { name: 'serveur support', value: 'support', inline: true },
		{ name: '\u200B', value: '\u200B' },
                { name:  'info', value: "permet d'avoir les informations de protection du serveur ", inline: true },
		{ name: 'staff', value: 'permet de parler au staff', inline: true },
	
        )
.setImage('https://cdn.discordapp.com/attachments/737388526848442459/742203445062271027/Discord_Infos-2.png')
.setFooter('create by jordan');
message.channel.send(embed);
    
    }
if(message.content === `.invite`){
let embed = new Discord.MessageEmbed()
.setTitle('ajouter le bot dans votre serveur')
.setURL('https://discord.com/oauth2/authorize?client_id=739208885897920614&scope=bot&permissions=8')
.setFooter('InviteMaster', 'https://cdn.discordapp.com/attachments/737388526848442459/742203444919533668/images_14.png')
message.channel.send(embed);
    }		
// commande de stats
if (commande === "stats") {
let onlines = message.guild.members.cache.filter(({
presence}) => presence.status !== 'offline').size;
let totalmembers = message.guild.members.cache.size;
let totalservers = bot.guilds.cache.size;
let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;
let total_news = message.guild.roles.cache.get('ID_ROLE_DES_NOUVEAUX_MEMBRES').members.size;
   }
})
client.login(process.env.TOKEN);
