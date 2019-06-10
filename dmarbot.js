const Discord = require('discord.js');
const bot = new Discord.Client();
const dateFormat = require('dateformat');//npm i dateformat
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const moment = require('moment');
const request = require('request');
const fs = require("fs");
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const discord_token = "NTc2Nzg5NDIxODU3MTc3Njc3.XNbnkw.hb6SSwvlhMpiH1E9CX3lYFsnFG0";
var table = require('table').table
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', function(){
    var ms = 60000 ;
    var setGame = [`${client.guilds.size} Server`,'Dmar Bot™ by Dmar','Type -help |-support |-invite ',`${client.users.size} Members`,'-invite','By: n3k4a & Hosam | BaronTube'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/Dmar`);
    }, ms);
    console.log(` ????????? |> Name: ${client.user.username}`);
 console.log(` ????????? |> Servers: ${client.guilds.size}`);
 console.log(` ???????????????????? |> Members: ${client.users.size}`);
 console.log(` ????????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Id: ${client.user.id}`);
 console.log(` ???????????????????`);
 console.log(` ???????????????????`);



 client.on('message', message => {
     if (message.content === "bot") {
     let embed = new Discord.RichEmbed()

  .setColor("#51cde6")
  .addField("Playing on" , client.guilds.size)


  message.channel.sendEmbed(embed);

    }
});


console.log('Dmar is one ');
client.on('ready', () => {
  console.log(`im redey`);
});
const x5bz4 = [
   '*** ÇäÇ ÇÓãí ãÑíã ***',
   '*** ãÑÍÈÇó ãÇåæ ÇÓãß ¿ ***',
   `*** ÇåáÇ Èß ! ÇäÇ ÊÇÆåå İí åĞÇ ÇáãßÇä  ***`,
   '*** åá ÊæÏ ãÓÇÚÏÊí ¿ ***',
   '*** áãÇĞÇ åá ÇäÊ ŞÇÓí ÇáŞáÈ ¿ ***',
   '*** Çääí ÇÔİŞ Úáíß Úáíß íÌÈ Çä ÊØåÑ ÑæÍß æÊÍÈ ÇáÎíÑ ááÌãíÚ ***',
   '*** ÇÈÊÚÏ Úäí Şáíá Çääí ãÊÚÈÉ ***',
   '*** åá ÇäÊ äÇÏã Úáì ãÇŞáÊ ¿ ***',
   '*** ÇÈÊÚÏ Úäí Şáíá Çääí ãÊÚÈÉ ***',
   '*** åá ÇäÊ äÇÏã Úáì ãÇŞáÊ ¿ ***',
   '*** åá ÊæÏ ãÓÇÚÏÊí ¿ ***',
   '*** æÇæ ÇÔß??ß Çäß ÔÎÕÇó ÑÇÆÚ ! ***',
   '*** ÇÈÍË ãÚí Úä ãäÒáí áŞÏ ßÇä ŞÑíÈÇó ãä åäÇ ***',
   '*** æáÇßä ÚäÏãÇ Íá Çááíá áã ÇÚÏ ÇÑì Çí ÔíÁ ***',
   '*** ãĞÇ ÊÙä Çíä íæÌÏ ¿ íãíä Çæ íÓÇÑ ***',
   '*** åíÇ ÇĞÇó ***',
   '*** ÇæÏ Çä ÇÓÆáß ÓÄÇá æäÍä İí ÇáØÑíŞ ***',
   '*** åá ÊÑÇäí İÊÇÉ áØíİÉ Çã ãÎíİÉ ***',
   '*** ÇÔßÑß !  ***',
   '*** áŞÏ æÕáäÇ Çáì ÇáãäÒá ÔßÑÇó ÌÒíáó ÇäÊØÑäí ËæÇäí æÓæİ ÇÚæÏ ***',
   '*** åá ÇäÊ ÌÇåÒ ¿ ***',
   '*** áŞÏ ÇÎÈÑÊ æÇáÏí Úäß æåã ãÊÍãÓíä áÑÄíÊß ***',
   '*** åá ÊæÏ Çä ÊÑÇåã ÇáÇä ***',
   '*** ÇäÇ áÓÊ ÇáÍæÊ ÇáÇÒÑŞ ßãÇ íÏÚæä ***',
   '*** ÇäÇ áÓÊ ßÇĞÈÉ ÕÏŞäí***',
   '*** áãÇĞÇ ÇÑì İí Úíäíß ÇáÎæİ ¿ ***',
   '*** ÇäÇ ãÌÑÏ İÊÇÉ áØíİÉ ÊÍÈ ÇááÚÈ ãÚ ÇáÌãíÚ ***',
   '*** ÇÚÑİ ßá ÔíÁ íÍÏË ÇÓãÚ ĞÇáß ÈÇáÑÇÏíæ ***',
   '*** ÓãÚÊ Çä ÇáÈÔÑ íŞÊáæä ãä ÇÌá ÇáãÇá İŞØ ***',
   '*** áãÇĞÇ áã ÊÏÎá ÇáÛÑİÉ ¿ ***',
   '*** ååååååååååååååååååå ÇäÊ ÇáÇä ãÓÌæä İí åĞå ÇáÛÑİÉ ***',
   '*** áä ÊÎÑÌ ÍÊì ÇÚæÏ áß ÈÚÏ Şáíá ***',
   '*** ÇáãİÊ????Í ãÚß ! ÇßÊÈ .ãÑíã  ***',
   '*** ãİÊÇÍ ÇÍãÑ , åá ÍÕáÊ Úáíå ¿ ***',
   '*** Çä áã ÊÍÕá Úáíå , ÇßÊÈ .ãÑíã ãÑÉ ÇÎÑì ***',
   '*** ãİÊÇÍ ÇÓæÏ . åá ÍÕáÊ Úáíå ¿ ***',
   '*** Çíä ÊÑíÏ Çä ÊÎÊÈÆ ÈÓÑÚÉ ŞÈá Çä ÊÚæÏ ***',
   '*** áŞÏ ÚÇÏÊ ãä ÌÏíÏ Çáì ÇáãäÒá ***',
   '*** áÇ ÊÕÏÑ Çí ÕæÊ ! ***',
   '*** ãÑíã : áŞÏ ÚÏÊ ***',
   '*** ãÑíã : íÇ ÇíåÇ Ç??ãÎÇÏÚ Çíä ÇäÊ ***',
   '*** ãÑíã : ÇÚáã Çäß åäÇ İí ÇáãäÒá ***',
   '*** ãÑíã : ãÇĞÇ ÊÑíÏ Çä ÊÓãÚ ***',
   '*** ãÑíã : ÇÖÛØ Úáì ÇáÑÇÈØ ÇåÏÇÁ ãäí áß | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** ÇÍÏ ãÇ ÎÑÌ ãä ÇáãäÒá ***',
   '*** ÇäÊÙÑ ÇáÌÒÁ ÇáËÇäí ÚäÏãÇ íæÕá ÇáÈæÊ 100 ÓíÑİÑ , ÓÇÚÏäÇ İí äÔÑ ÇáÈæÊ æÇÏÎá åĞÇ ÇáÓíÑİÑ https://discord.gg/ZnPDHaA ***'
]
 client.on('message', message => {
 if (message.content.startsWith('-ãÑíã')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("áÚÈÉ ãÑíã ..")
  .setColor('RANDOM')
  .setDescription(`${x5bz4[Math.floor(Math.random() * x5bz4.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});




var prefix = "-";

client.on('message', message => {
if (message.content === "-help") {
    let pages = [`
***__æÕİ Úä ÇáÈæÊ__***
**
:gem:  ÇáÈæÊ İíå ßËíÑ ãíÒÇÊ ÍáæÉ æ ÌãíáÉ
 Ç:rocket: ÇáÈæÊ íÚãá 24 ÓÇÚå 
**
        ***__General orders__***
**
?-server/íÚÑÖ áß ãÚáæãÇÊ Úä ÇáÓíÑİÑ?
?-allbots/ áãÚÑİå ÚÏÏ ÇáÈæÊÇÊ İí ÇáÓíÑİÑ?
?-botin/íÚÑÖ áß  ßá ãÚáæãÇÊ ÇáÈæÊ?
?-support /ááÊæÇÕá ãÚ ÕÇÍÈ ÇáÈæÊ?
?-id/ãÚáæãÇÊ  Úäß?
?-invite/áÏÚæå ÇáÈæÊ Çáí ÓíÑİÑß ?
?-avatar /ááÚÑÖ ÕæÑÊß Çæ ÕæÑÉ ÔÎÕ İŞØ Şã ÈÚãá ãäÔä áå ?
?-embed /ÇáÈæÊ íßÑÑ ÇáßáÇã Çáí ŞáÊå È ÇãÈÏ
?-members/??ÚÑÖ áß ÚÏÏ ßá ÍÇáÇÊ ÇáÇÔÎÇÕ æÚÏÏ ÇáÈæÊÇÊ æÚÏÏ ÇáÇÔÎÇÕ?
?-avatar/ÕæÑÊß Çæ ÕæÑÉ Çáí ÊãäÔäæ?
?-ask/íÈÍË Úä Çáßáãå Çáí ÊßÊÈåÇ ÈÇÇáÇäÌáíÒí?
?-invites /áãÚÑİå ßã ÔÎÕ ÏÚæÊ Çáí ÇáÓíÑİÑ?
?-uptime / áãÚÑÇáÈæÊ Çæä áÇíä ãäĞ ãÊí?  
????ÇæãÑ ããíÒå äÇÏÑå????
?-daily /ÚáÔÇä ÊÎÏ ÇáßÑÏíÊ Çáíæãí ?
?-credit / áßí ÊÑí ÇáßÑÏíÊ ÇáÎÇÕ ÈÇß?
?-trans <@someone> <number / ááÊÈÑÚ áÍÏ ÈáßÑíÏÊ?
?-boom /  íØíÑ ÌÈå Çáí ÊÈí Úä ØÑíŞ ÇáãäÔä?
?-sad / íŞæá ááÔÎÕ Çäß ÎÒíä ÈÓÈÈå  Çæ ÒÚáÇä ãäå Úä ØÑíŞ ÇáãäÔä?
?-kiss/íÚØí ŞÈáå áãä ÊÎÊÇÑ İí ÇáÓíÑİÑ Úä ØÑíŞ ÇáãäÔä?
?-love / íÚÈÑ ÈÔÚæÑß ÈáÍÈ  áãä ÊÎÊÇÑ İí ÇáÓíÑİÑ Úä ØÑíŞ ÇáãäÔä?
?-miss / íÑÓáå ÇÔÊŞÊ áß áãä ÊÎÊÇÑ İí ÇáÓíÑİÑ Úä ØÑíŞ ÇáãäÔä?
?-slap / íÚØí ßİ áãä ÊÎÊÇÑå İí ÇáÓíÑİÑÚä ØÑíŞ ÇáãäÔä?
?-hug /  íÚØí æÍÖä Çæ Öãå áãä ÊÎÊÇÑå İí ÇáÓíÑİÑ Úä ØÑíŞ ÇáãäÔä?
?-cat/ÕæÑ ŞØØ ÕÛíÑå?
?-paint/íÌÈáß ÇáßáÇã Çáí ÊßÊÈå İí ÕæÑå?
?-trans/íÊÑÌã Çáßáãå Çáí ÊßÊÈå Çá Çí áÛå ãÚ ÊÍÏíÏ?
=====ÇæÇãÑ ÇÖÇİíå====
?ÊÑÍíÈ?
?ÈÇß?
?ÇáÓáÇã Úáíßã?
?ÍÔíÔ?
**
  `,`
        ***__Administrative Orders__***
**
?-clear <numbr> / ÇáÈæÊ íãÓÍ ÇáÑÓÇá ÈÑŞã ÍÏ ÇŞÕí 100 ÑÓÇáå?
?-say / ÇáÈæÊ íßÑÑ ÇáßáÇã Çáí ÇäÊ ÊŞæáå?
?-kick @user <reason> / ØÑÏ ÇáÔÎÕ ãä ÇáÓíÑİÑ?
?-ban @user <reason> / ÍÖÑ ÇáÔÎÕ ãä ÇáÓíÑİÑ?
?-setstats/ íÚãá Ñæã áß ÈáæŞÊ æÇáÊÇÑíÎ æÇáÇÔÎÇÕ ÇáãÊÕáíİ İí ÇáÑæãÇÊ?
?-banlist / ÚÏÏ ÇáÇÔÎÇÕ ÇáãÈäÏÉ ?
?-mute / íÚØí ãíæÊ ááÔÛÕ Çáí ÈÊãäÔä?
?-unmute /  íİß ÇáãíæÊ Úä ÇáÚÖæ ?
?-giveaway / íÓæíáß Şİ Çæí Úáí ÇáÔí Çáí ÊÈíå?
?-setwelcomer /  <welcome> íÌÈ Çä íßæä ÇÓã Ñæã ÇáÊÑÍíÈ ?
?-nick/ áÊÛíÑÇÓãÇÁ ÌãíÚ ÇáÇÚÖÇÁ?
   `,`
        ***__Music orders__***
**
?-{prefix}play / áÊÔÛíá ÃÛäíÉ ÈÑÂÈØ Ãæ ÈÃÓã?
?-{prefix}skip / áÊÌÂæÒ ÇáÃÛäíÉ ÇáÍÂáíÉ?
?-{prefix}pause / ÅíŞÂİ ÇáÃÛäíÉ ãÄŞÊÇ?
?-{prefix}unpause / áãæÂÕáÉ ÇáÅÛäíÉ ÈÚÏ ÅíŞÂİåÂ ãÄŞÊÇ?
?-{prefix}vol / áÊÛííÑ ÏÑÌÉ ÇáÕæÊ 100 - 0?
?-{prefix}stop/ áÅÎÑÂÌ ÇáÈæÊ ãä ÇáÑæã?
**
        ***__Games orders__***
 **       
?-slots / ['??''??' '??' '??' '??' '??' '??' '??'] ÌãÚ 3 ãä äİÓ ÇáÔí ÊİæÒ?
?áÚÈå ÇáÊåßíÑ Çáæåãí /ÊåßíÑ ãäÔä ÇáÔÎÕ ?
?-áÚÈÉ ßÊ ÊæíÊ / ßÊ ÊæíÊ?
?-áÚÈÉ ãÑíã / ãÑíã?
?ÊÛÑíÏ  ááÔÎÕ Úä ØÑíŞ ÇáãäÔä /-ÛÑÏ?
?-marry/áÚÈå ÇáÒæÇÌ áÇ Êİåã ÛáØ?
?äßÊ ãÖÍßå/ -äßÊ?
?-rps/áÚÈå ÍÌÑ æÑŞå ãŞÕ?
**
   
`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('?').then( r => {
            msg.react('?')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
      
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});

            client.on("message", (message) => {
                        if (message.channel.type === "dm") {
                    if (message.author.id === client.user.id) return;
                    let yumz = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle("Direct Message To The Bot")
                                .addField(`Sent By:`, `<@${message.author.id}>`)
                                .setColor("RANDOM")
                                .setThumbnail(message.author.displayAvatarURL)
                                .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                                .setFooter(`DM Bot Messages | DM Logs`)
                            client.users.get("462006869834203159").send(yumz)
                        }
            });

client.on('message',message => {
         if (!message.content.startsWith(prefix)) return;
var cont = message.content.slice(prefix.length).split(" ");

  var args = cont.slice(1);
       if (message.content.startsWith("-nick")) {
   let nickmention = message.mentions.users.first()
    if (message.mentions.users.size === 0) {
        if (message.member.permissions.has("CHANGE_NICKNAME")) {
            let nickchange = args.slice(0).join(" ");
            if (args[0] === undefined) {
                message.channel.send("**ÖÚ ÇáÇÓã ÇáĞí ÊÑíÏå**")
                return;
            }
            message.guild.members.get(message.author.id).setNickname(nickchange).catch(err => {
                message.channel.send("Error: " + err)
                return;
            });
            message.channel.send("? **Changed your nickname to:** `" + nickchange + "`")
            return;
        } else {
            message.channel.send("You don't have permission to change your username. ??")
            return;
        }
        return; 
    }
    if (message.member.permissions.has("MANAGE_NICKNAMES", "ADMINISTRATOR")) {
        let nickchange = args.slice(1).join(" ");
        if (args[0] === undefined) {
            message.channel.send("**ÖÚ ÇÓã**")
            return;
        }
        message.guild.members.get(nickmention.id).setNickname(nickchange).catch(err => {
            message.channel.send("Error: " + err);
            return;
        });
        message.channel.send("Nick of " + nickmention + " (" + nickmention.username + "#" + nickmention.discriminator + ") changed to: `" + nickchange + "`")
  
     }
    } 
});

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" what do you need ?");
    }
});


const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
	var prefix = "-";
if (message.content.startsWith(prefix + 'trans')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
    
        const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setDescription("**ÊÑÌãÉ ÇáßÊÇÈÉ.**\ÇÓÊÚãá: `-translate <ÇáßáãÉ áÊÈí> <ÇÇáÛÉ>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send("**ÊÑÌãÉ ÇáßÊÇÈÉ.**\ÇÓÊÚãá: `-translate <ÇáßáãÉ áÊÈí> <ÇÇáÛÉ>`");

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", client.user.displayAvatarURL)
                    .addField(`Input`, `\`\`\`${args}\`\`\``)
                    .setColor("#42f4c8")
                    .addField(`Output`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});

const sWlc = {}
client.on('message', message => {
var prefix = "-";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});

client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': ÊÇÑíÎ ÏÎæáß ÇáÏÓßæÑÏ',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': ÊÇÑíÎ ÏÎæáß ÇáÓíÑİÑ',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
     const w = ['swlc.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 245, 150);
                              
                              //NAMEğ
                              ctx.font = '30px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To Server`, 245, 80);
    
                              //AVATARğ
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });



client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "-";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("ÇäÊ áÇ Êãáß ÕáÇÍíÇÊ !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("ÇáÈæÊ áÇíãáß ÕáÇÍíÇÊ ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** áÇ íæÌÏ ÑÊÈÉ ÇáãíæÊ 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ÇáãäÔä ÇæáÇğ **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  ÇáãÓÊÎÏã**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  Êã ÈæÇÓØÉ **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  ÇáÓÈÈ**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} ÇäÊ ãÚÇŞÈ ÈãíæÊ ßÊÇÈí ÈÓÈÈ ãÎÇáİÉ ÇáŞæÇäíä
${message.author.tag} ÊãÊ ãÚÇŞÈÊß ÈæÇÓØÉ
[ ${reason} ] : ÇáÓÈÈ
ÇĞÇ ßÇäÊ ÇáÚŞæÈÉ Úä ØÑíŞ ÇáÎØÃ Êßáã ãÚ ÇáãÓÄáíä
`)
		.setFooter(`İí ÓíÑİÑ : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**áíÓ áÏíß ÕáÇÍíÉ áİß Úä ÇáÔÎÕ ãíæÊ**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ãÇ ÚäÏí ÈÑãÔä**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**Úáíß ÇáãäÔä ÃæáÇø**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**áã íÊã ÇÚØÇÁ åĞå ÔÎÕ ãíæÊ ãä ÇáÃÓÇÓ**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**áŞÏ Êã İß ÇáãíæÊ Úä ÔÎÕ ÈäÌÇÍ**:white_check_mark:");

  return;

  }

});
 

client.on("message", message => {
 if (message.content === "-invite") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© Dmar Bot :heart: ÌãíÚ ÇáÍŞæŞ ãÍİæÙÉ 2019 áÜÜÈæÊ')
      .addField('ÔßÑÇ áß áÇÓÊÎÏÇãß á ÏãÇÑ ÈæÊ', `https://discordapp.com/api/oauth2/authorize?client_id=576789421857177677&permissions=0&scope=bot`)
  message.author.send({embed});

 }
}); 

client.on('message',message =>{
    var prefix = "-";
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.discordapp.com/attachments/462220624656334849/487684860442443787/ce5fb05919818916b5f598f3ee18afaa.png")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

client.on("message", message => {
 if (message.content === "-support") {
  const embed = new Discord.RichEmbed()
      .setTitle('Click here')
      .setURL(' https://discord.gg/pXEVszJ ')
      .setColor("RANDOM")
      .setFooter('© Dmar Bot :heart: ÌãíÚ ÇáÍŞæŞ ãÍİæÙÉ 2019 áÜÜÈæÊ')  
  message.author.send({embed});

 }
});
  

var fs = require("fs");
let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'HypeLC User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith(prefix + "daily")) {


  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310
    message.channel.send(`:atm: |**${message.author.username} you collect your \`310\` :yen: daily credits!**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
if (!args[0]) {message.channel.send(`**Usage: ${prefix}trans @someone amount**`); 
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone number**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone number**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : ÇáãáÈÛ**  \n \`${x[x3]}\` ** : ÇßÊÈ ÇáÑŞã ÇáÊÇáí ÍÊí ÊÊã ÚãáíÉ ÇáÊÍæíá **`).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            msg.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(`:credit_card: | Transfer Receipt \`\`\`\`You have received ${args[0]} from user ${message.author.username} (ID: ${message.author.id})\`\`\`\``);
               message.channel.sendEmbed(embed)
        })
        })
}
});

  

client.on('message', message => {
    if (message.content.startsWith("-bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``this Premium Bot`` ')
            .addField('``ÓÑÚÉ ÇáÈæÊ ??``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``ÇáÑÇãÇÊ ÇáãÓÊÎÏãÉ ??``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('`` ÇáÓíÑİÑÇÊ??``', [client.guilds.size], true)
            .addField('``ÇáÔäáÇÊ??``' , `[ ${client.channels.size} ]` , true)
            .addField('``ÇÚÖÇÁ ÇáÓíÑİÑ ????????``' ,`[ ${client.users.size} ]` , true)
            .addField('``Premium Bot ÇÓãí åæÇ??``' , `[ ${client.user.tag} ]` , true)
            .addField('``ÇáÇíÏí ÊÈÚí ??``' , `[ ${client.user.id} ]` , true)
			      .addField('``ÇãÑ ÊÔÛíáí ??``' , `[ - ]` , true)
			      .addField('``ÇáÛå ÇáÊí  ÊÈÑãÌÊ ÈåÇ ??``' , `[ Java Script ]` , true)
			      .setFooter('By | ??n3k4a & baron?? ')
    })
}
});

client.on('message',async message => {
    var p = "-"
  function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400)
  let hours = Math.floor(time % 31536000 % 86400 / 3600)
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
  };
  if(message.content.startsWith( p + "botin")) {
    const millis = new Date().getTime() - client.user.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const createdAT = millis / 1000 / 60 / 60 / 24;
    var star = new Discord.RichEmbed() 
    .setTitle(`${client.user.username} ãÚáæãÇÊ Úä ÈæÊ`)
    .setColor('#36393e')
    .addField('?? ÇãÑ ÇáÈæÊ', prefix, true)
    .addField('??? ÇáÑÇãÇÊ ÇáãÓÊÎÏãÉ', `${(process.memoryUsage().rss / 1048576).toFixed()} ãíÌÇ ÈÇíÊ`,true)
    .addField('??? ÓÑÚÉ ÇáÈæÊ', `${Math.round(client.ping)} ãáí ÓßäÏ`,true)
    .addField('?? Êã ÊÔÛíá ÇáÈæÊ ãäĞ', `${timeCon(process.uptime())}`, true)
    .addField('?? ÇáÓíÑİÑÇÊ', client.guilds.size,true)
    .addField('?? ÇáãÓÊÎÏãíä', client.users.size,true)
    message.channel.send(star);
  }
});

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-members')
      var kayan = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('??| ãÚáæãÇÊ ÇáÃÚÖÇÁ')
      .addBlankField(true)
      .addField('??| ãÊÕá ÈÇáÇäÊÑäÊ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('??| ãÔÛæá',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('??| æÖÚ ÇáÎãæá',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('??|ÛíÑ ãÊÕá Úáì ÇáÇäÊÑäÊ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('????????| ÇÚÖÇÁ ÇáÓíÑİÑ',`${message.guild.memberCount}`)
      message.channel.send(kayan);
    
    });


var prefix = "-";

client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **åĞÇ ÇáÇãÑ ãÚØá ÍÇáíÇ.. ``ÍÇæá İí æŞÊ áÇÍŞ``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **íÌÈ Ãä íßæä áÏíß ÎÇÕíÉ ÇáÊÚÏíá Úáì ÇáÓíÑİÑ**');
    message.channel.send(`:eight_pointed_black_star:| **ãä İÖáß ÇßÊÈ ÇÓã ÇáÑæã**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **áã ÇŞÏÑ Úáì ÇíÌÇÏ ÇáÑæã ÇáãØáæÈ**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **ÇßÊÈ ãÏÉ ÇáŞíİ ÇæÇí ÈÇáÏŞÇÆŞ , ãËÇá : 60**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **íÌÈ Úáíß Çä ÊÍÏÏ æŞÊ Òãäí ÕÍíÍ.. ``íÌÈ Úáíß ÇÚÇÏÉ ßÊÇÈÉ ÇáÇãÑ``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **æÇÎíÑÇ ÇßÊÈ Úáì ãÇĞÇ ÊÑíÏ ÇáŞíİ ÇæÇí**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`ÇáãÏÉ : ${duration / 60000} ÏŞÇÆŞ`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('??');
                     setTimeout(() => {
                       let users = m.reactions.get("??").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**áã íÊã ÇáÊÍÏíÏ**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('ÇäÊåì ÇáŞíİ ÇæÇí !',`ÇáİÇÆÒ åæ : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **Êã ÇÚÏÇÏ ÇáŞíİ ÇæÇí**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **áã ÇŞÏÑ Úáì ÇÚÏÇÏ ÇáŞíİ ÇæÇí ÈÓÈÈ äŞÕ ÇáÎÕÇÆÕ**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

client.on("guildCreate", guild => {
console.log(` Dmar Bot  Added To Server ${guild.name} , The Owner Is ${guild.owner.user.username} , Members In Server : **[${guild.memberCount}]**            `)
client.channels.get("489944931868082177").send('** :purple_heart: Dmar Bot ** ``Added``:white_check_mark:  To Server '+`** [ ${guild.name} ] **`+''+'  The Owner Is  ' +`**[ ${guild.owner.user.username} ]** , Members In Server : **[${guild.memberCount}]**` +'')
});

client.on("guildDelete", guild => {
  console.log(`  Dmar Bot  Leave From Server ${guild.name}, The Server Owner Is ${guild.owner.user.username}`)
  client.channels.get("489944931868082177").send('** :purple_heart: Dmar Bot  **``Kicked``:x:  From Server '+`** [ ${guild.name} ] **`+''+' The Owner Is ' +`**[ ${guild.owner.user.username} ]**` +'')
  });

var prefix = "-";

client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`**?? **");

}
});

var prefix = "-";

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

client.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``ÓÑÚÉ ÃÊÕÇá ÇáÜÜÈæÊ`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` Dmar Bot
 .`, 'https://aladdintravel.com/wp-content/uploads/2014/11/pinterest-logo-2-1074x1067.png')

  message.channel.sendEmbed(embed);
    }
});

client.on('guildMemberRemove', async function(member) {
  try {
    await member.ban({
      days: 7,
      reason: 'Automatic Softban to Remove Messages'
    });
    await member.guild.unban(member, 'Automatic Softban to Remove Messages');
  } catch (e) {
    console.log(e);
  }
})

client.on('message',  (message) => {
        if(message.content.startsWith('-slap')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://media.giphy.com/media/81kHQ5v9zbqzC/giphy.gif',
    'https://media.giphy.com/media/QYT2VEOXVyVmE/giphy.gif',
    'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
    'https://media.giphy.com/media/xXRDuvEcMA2JO/giphy.gif',
    'https://media.giphy.com/media/zRlGxKCCkatIQ/giphy.gif',
    'https://media.giphy.com/media/9U5J7JpaYBr68/giphy.gif',
    'https://media.giphy.com/media/q0uYk5uwJVFug/giphy.gif',
    'https://media.giphy.com/media/iREUC7qrjN4vC/giphy.gif',
    'https://media.giphy.com/media/AkKEOnHxc4IU0/giphy.gif',
    'https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif',
    'https://media.giphy.com/media/prKt29rL7zAbe/giphy.gif',
    'https://media.giphy.com/media/LeTDEozJwatvW/giphy.gif',
    'https://media.giphy.com/media/6UTkJXBd26qiI/giphy.gif',
    'https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif',
    'https://media.giphy.com/media/EtdEOL3MbPbmE/giphy.gif',
    'https://media.giphy.com/media/CIvfqJqBbvliU/giphy.gif',
    'https://media.giphy.com/media/3pSKnxaDzl9Oo/giphy.gif',
    'https://media.giphy.com/media/1iw7RG8JbOmpq/giphy.gif',
    'https://media.giphy.com/media/m0VwgrO5yXxQY/giphy.gif',
    'https://media.giphy.com/media/2o855hr1xVotO/giphy.gif',
    'https://media.giphy.com/media/URBigLkgWoYzS/giphy.gif',
    'https://media.giphy.com/media/pGOdXNi6J7ML6/giphy.gif',
    'https://media.giphy.com/media/HHUd5nOFbSYtG/giphy.gif',
    'https://media.giphy.com/media/TZp6XSDusOnXG/giphy.gif',
    'https://media.giphy.com/media/wqP5TOFnOMwqQ/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} ÇÏÇß ÈÇáŞáã Úáí æÔß ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

client.on('message',  (message) => {
        if(message.content.startsWith('-boom')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let bombs = [
    'https://media.giphy.com/media/Xp98Vi5OBvhXpwA0Zp/giphy.gif',
    'https://media.giphy.com/media/POnwee2RZBWmWWCeiX/giphy.gif',
	'https://media.giphy.com/media/oywQ7OhnYupINQa0L4/giphy.gif',
    'https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif',
	'https://media.giphy.com/media/l1BgS9aNtdCdjgkaQ/giphy.gif',
	'https://media.giphy.com/media/d0NnEG1WnnXqg/giphy.gif',
    'https://media.giphy.com/media/NmrqUdwGXPOog/giphy.gif',
	'https://media.giphy.com/media/dpnfPvaCIHBrW/giphy.gif',
	'https://media.giphy.com/media/mks5DcSGjhQ1a/giphy.gif',
    'https://media.giphy.com/media/8wfoaIjVc0FBaLu5xH/giphy.gif',
	'https://media.giphy.com/media/xThtanBNixj1O1m5oY/giphy.gif',
	'https://media.giphy.com/media/fdGkCOiM0oOqI/giphy.gif',
    'https://media.giphy.com/media/c862b2dAhJXYA/giphy.gif',
	'https://media.giphy.com/media/CepTYjGRbV1ba/giphy.gif',
	'https://media.giphy.com/media/sRGCQ7INgSD0qbTqB5/giphy.gif',
    'https://media.giphy.com/media/ZJYOwl8SbFsic/giphy.gif',
	'https://media.giphy.com/media/3oEhmKspQX9EN48HNm/giphy.gif',
	'https://media.giphy.com/media/l1KVcAP6jvP9r4MaA/giphy.gif',
    'https://media.giphy.com/media/j2mY6orBJqAdG/giphy.gif',
	'https://media.giphy.com/media/3oz8xEqn8AGAQbR0yY/giphy.gif',
	'https://media.giphy.com/media/l4lQW9KfRQscU0ds4/giphy.gif',
    'https://media.giphy.com/media/XathaB5ILqSME/giphy.gif',
	'https://media.giphy.com/media/26AHvF2p5pridaSf6/giphy.gif',
	'https://media.giphy.com/media/Nlur5uO8GkjC0/giphy.gif',
    'https://media.giphy.com/media/l1J3preURPiwjRPvG/giphy.gif',
	'https://media.giphy.com/media/8cdZit2ZcjTri/giphy.gif',
	'https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif',
    'https://media.giphy.com/media/V88pTEefkoOFG/giphy.gif',
    'https://media.giphy.com/media/rfWAomOTPeOo8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} áŞÏ Êã ÊØíÑ ÇáÌÈå ÈäÌÇÍ  ÌÈåÊß ØÇÑÊ ${user.username}!`,
      image: {
        url: bombs[Math.floor(Math.random() * bombs.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('-sad')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let sads = [
    'https://media.giphy.com/media/3oriO4SMR6ThimOQbS/giphy.gif',
    'https://media.giphy.com/media/QhCAwDXZ0BltK/giphy.gif',
	'https://media.giphy.com/media/Q8FaD6GjQ97jO/giphy.gif',
    'https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif',
	'https://media.giphy.com/media/VqcflcXbbud2M/giphy.gif',
	'https://media.giphy.com/media/3UkLhoyi553r2/giphy.gif',
    'https://media.giphy.com/media/3UkLhoyi553r2/giphy.gif',
	'https://media.giphy.com/media/Txh1UzI7d0aqs/giphy.gif',
	'https://media.giphy.com/media/GyNeHf5IrpQNG/giphy.gif',
    'https://media.giphy.com/media/lKWlXRBGltz2g/giphy.gif',
	'https://media.giphy.com/media/NTY1kHmcLsCsg/giphy.gif',
	'https://media.giphy.com/media/vzpy2NjOKdeyk/giphy.gif',
    'https://media.giphy.com/media/jRtGjzkm8JbRC/giphy.gif',
	'https://media.giphy.com/media/iyfeJqd6NLNK0/giphy.gif',
	'https://media.giphy.com/media/z2ug5EHHBuFaM/giphy.gif',
    'https://media.giphy.com/media/wIhfELB4LvDhe/giphy.gif',
	'https://media.giphy.com/media/5bukWFXJ6pn5S/giphy.gif',
	'https://media.giphy.com/media/13RfBpyqVyvIME/giphy.gif',
    'https://media.giphy.com/media/CL2Y9t4YQbp2U/giphy.gif',
	'https://media.giphy.com/media/3ov9ka1OzbTGjQtCXC/giphy.gif',
	'https://media.giphy.com/media/l3vR11Mr4XpqhtSHm/giphy.gif',
    'https://media.giphy.com/media/l2R08A0HfJkV2lwQg/giphy.gif',
	'https://media.giphy.com/media/3o6YghZV15YGZoOtIk/giphy.gif',
	'https://media.giphy.com/media/8LM1P6bkXTyhy/giphy.gif',
    'https://media.giphy.com/media/l4FGooziZSanyKS3u/giphy.gif',
	'https://media.giphy.com/media/4TnZKIJHMhjKh3mIB1/giphy.gif',
	'https://media.giphy.com/media/l0HlyXP3OkdhvO61G/giphy.gif',
    'https://media.giphy.com/media/SXCQWrsob9TGg/giphy.gif',
    'https://media.giphy.com/media/6nYwftjsGdKgOXB5C4/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} ÍÒíä ÈÓÈÈß Çæ ÒÚáÇä ãäß ${user.username}!`,
      image: {
        url: sads[Math.floor(Math.random() * sads.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

client.on('message',  (message) => {
        if(message.content.startsWith('-hug')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let hugs = [
    'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
    'https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif',
    'https://media.giphy.com/media/wnsgren9NtITS/giphy.gif',
    'https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif',
    'https://media.giphy.com/media/hi0VuTUqLrmuc/giphy.gif',
	'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif',
	'https://media.giphy.com/media/7WQQXPg6o3YNa/giphy.gif',
	'https://media.giphy.com/media/LWTxLvp8G6gzm/giphy.gif',
	'https://media.giphy.com/media/xZshtXrSgsRHy/giphy.gif',
	'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
	'https://media.giphy.com/media/10BcGXjbHOctZC/giphy.gif',
	'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
	'https://media.giphy.com/media/xUPGcgtKxm4PADy3Cw/giphy.gif',
	'https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif',
	'https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif',
	'https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif',
	'https://media.giphy.com/media/ddGxYkb7Fp2QRuTTGO/giphy.gif',
	'https://media.giphy.com/media/pXQhWw2oHoPIs/giphy.gif',
	'https://media.giphy.com/media/ZRI1k4BNvKX1S/giphy.gif',
	'https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif',
	'https://media.giphy.com/media/s31WaGPAmTP1e/giphy.gif',
	'https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif',
	'https://media.giphy.com/media/aVmEsdMmCTqSs/giphy.gif',
	'https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif',
	'https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif',
	'https://media.giphy.com/media/kFTKQfjK4ysZq/giphy.gif',
	'https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif',
	'https://media.giphy.com/media/2q2qHJu838EyQ/giphy.gif',
	'https://media.giphy.com/media/q3kYEKHyiU4kU/giphy.gif',
	'https://media.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif',
	'https://media.giphy.com/media/ExQqjagJBoECY/giphy.gif',
    'https://media.giphy.com/media/3o6Yg5fZCGeFArIcbm/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} ÇÏÇß ÍÖä Çæ Öãå ${user.username}!`,
      image: {
        url: hugs[Math.floor(Math.random() * hugs.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('-kiss')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let kiss = [
    'https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif',
    'https://media.giphy.com/media/CzCi6itPr3yBa/giphy.gif',
    'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
    'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
	'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
	'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
    'https://media.giphy.com/media/BaEE3QOfm2rf2/giphy.gif',
	'https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif',
	'https://giphy.com/gifs/kiss-anime-nISHppsUAzosMhttps://media.giphy.com/media/nISHppsUAzosM/giphy.gif',
	'https://media.giphy.com/media/ll5leTSPh4ocE/giphy.gif',
	'https://media.giphy.com/media/10r6oEoT6dk7E4/giphy.gif',
	'https://media.giphy.com/media/YC4QEtFmz64sE/giphy.gif',
	'https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif',
	'https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif',
	'https://media.giphy.com/media/Z21HJj2kz9uBG/giphy.gif',
	'https://media.giphy.com/media/mGAzm47irxEpG/giphy.gif',
	'https://media.giphy.com/media/JynbO9pnGxPrO/giphy.gif',
	'https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif',
	'https://media.giphy.com/media/EP9YxsbmbplIs/giphy.gif',
	'https://media.giphy.com/media/q7MxQyarcDHDW/giphy.gif',
	'https://media.giphy.com/media/uSHX6qYv1M7pC/giphy.gif',
	'https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif',
	'https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif',
	'https://media.giphy.com/media/fHtb1JPbfph72/giphy.gif',
	'https://media.giphy.com/media/pwZ2TLSTouCQw/giphy.gif',
	'https://media.giphy.com/media/DfzHC09hY64Gk/giphy.gif',
	'https://media.giphy.com/media/l0MYB8Ory7Hqefo9a/giphy.gif',
	'https://media.giphy.com/media/Y9iiZdUaNRF2U/giphy.gif',
	'https://media.giphy.com/media/CTo4IKRN4l4SA/giphy.gif',
	'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
    'https://media.giphy.com/media/pFg4Ko6pXqQVy/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username}ÇÏÇß ŞÈáå Ç?? ÈæÓå ${user.username}!`,
      image: {
        url: kiss[Math.floor(Math.random() * kiss.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('-miss')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let misss = [
    'https://media.giphy.com/media/3o6vXUgk6M0h07MnuM/giphy.gif',
    'https://media.giphy.com/media/NfOD0Bv11XnhK/giphy.gif',
    'https://media.giphy.com/media/2Jl7a8ixNlNHa/giphy.gif',
    'https://media.giphy.com/media/WkNXHaiV9HLji/giphy.gif',
    'https://media.giphy.com/media/3DiUM4dGYyali/giphy.gif',
    'https://media.giphy.com/media/17CdXoPQo7Un6/giphy.gif',
    'https://media.giphy.com/media/pjgaGMqsNhjhe/giphy.gif',
    'https://media.giphy.com/media/qdhgMbi5mwS9W/giphy.gif',
    'https://media.giphy.com/media/xTgJVYEHoVzpe/giphy.gif',
    'https://media.giphy.com/media/o1UKv4TutEOUo/giphy.gif',
    'https://media.giphy.com/media/3o6QLcNZgGKvFBluKs/giphy.gif',
    'https://media.giphy.com/media/to8AmZ3lEUhqg/giphy.gif',
    'https://media.giphy.com/media/3o6QKXms0mJznYVkm4/giphy.gif',
    'https://media.giphy.com/media/148LYpgc9AIUdW/giphy.gif',
    'https://media.giphy.com/media/4MDnmxVxCZcYM/giphy.gif',
    'https://media.giphy.com/media/5XHHIFJZpQsXS/giphy.gif',
    'https://media.giphy.com/media/3o7TKzEQfYQ7inapoI/giphy.gif',
    'https://media.giphy.com/media/l2Je61TcDeJ4ZOIyk/giphy.gif',
    'https://media.giphy.com/media/3o6Mb3mYI1yuqEwgFi/giphy.gif',
    'https://media.giphy.com/media/mfAGXwxCd3D8Y/giphy.gif',
    'https://media.giphy.com/media/l0HlFinR4G1JvptjG/giphy.gif',
    'https://media.giphy.com/media/9iVgOohm2SKT6/giphy.gif',
    'https://media.giphy.com/media/26gsj4kyT3LwhPufK/giphy.gif',
    'https://media.giphy.com/media/116mAogyorg84U/giphy.gif',
    'https://media.giphy.com/media/l2ZDOR1uY9yo6MJyM/giphy.gif',
    'https://media.giphy.com/media/l2ZDWLIIZLhLiuMSs/giphy.gif',
    'https://media.giphy.com/media/OT89Nuhy3GAFbW359x/giphy.gif',
    'https://media.giphy.com/media/82AkGaEtqrybM2RFSh/giphy.gif',
    'https://media.giphy.com/media/1o1ouZSWwFVwysKcnm/giphy.gif',
    'https://media.giphy.com/media/8mqyDwYRdzdRof6fzu/giphy.gif',
    'https://media.giphy.com/media/3oriO0bDWiobwAWqGY/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} ÇÔÊÇŞ Çáíß ßËíÑÇ  ${user.username}!`,
      image: {
        url: misss[Math.floor(Math.random() * misss.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('-love')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let loves = [
    'https://media.giphy.com/media/YDB4EF3U6i6IM/giphy.gif',
    'https://media.giphy.com/media/l41JWw65TcBGjPpRK/giphy.gif',
    'https://media.giphy.com/media/3o6gDZ9unSrDk3EuR2/giphy.gif',
    'https://media.giphy.com/media/ymkLJAxVz2la/giphy.gif',
    'https://media.giphy.com/media/ZOln4JxCoZay4/giphy.gif',
    'https://media.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif',
    'https://media.giphy.com/media/X3FmqQ7ehoCBy/giphy.gif',
    'https://media.giphy.com/media/VlzUkJJzvz0UU/giphy.gif',
    'https://media.giphy.com/media/NbPJFUS6Vkx7q/giphy.gif',
    'https://media.giphy.com/media/wDEWXcisSjrQQ/giphy.gif',
    'https://media.giphy.com/media/xT8qBuhwq0OyL7UkdW/giphy.gif',
    'https://media.giphy.com/media/gfvxlwRKH1y5q/giphy.gif',
    'https://media.giphy.com/media/PuTSgeacS3Z7i/giphy.gif',
    'https://media.giphy.com/media/l49JBwneyflgjm5zO/giphy.gif',
    'https://media.giphy.com/media/QKUA2bIAgjFgk/giphy.gif',
    'https://media.giphy.com/media/T3Uzzre7Ap0mk/giphy.gif',
    'https://media.giphy.com/media/3oeSB6pawq6G99xCXS/giphy.gif',
    'https://media.giphy.com/media/iKIgD5j0I3hMQ/giphy.gif',
    'https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif',
    'https://media.giphy.com/media/3o7qDJKIO5rSeyHhvO/giphy.gif',
    'https://media.giphy.com/media/92bGINsmjAuUE/giphy.gif',
    'https://media.giphy.com/media/bErElGdAHUmoE/giphy.gif',
    'https://media.giphy.com/media/jQqU9dCKUOdri/giphy.gif',
    'https://media.giphy.com/media/10uJ0IFxlCA06I/giphy.gif',
    'https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif',
    'https://media.giphy.com/media/3osxYcry2fDfqyhOQ8/giphy.gif',
    'https://media.giphy.com/media/3ohs84a6AyArTscVsk/giphy.gif',
    'https://media.giphy.com/media/3o6Zt6D0wctP0kpuwg/giphy.gif',
    'https://media.giphy.com/media/4zmFt0xpke8AU/giphy.gif',
    'https://media.giphy.com/media/l3vR9O3vpOCDRo8rC/giphy.gif',
    'https://media.giphy.com/media/13sgibUDaaaEU0/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} :heart:  íÚÈÑ áß Úä ÍÈå ÇáÍŞíŞí   ${user.username}!`,
      image: {
        url: loves[Math.floor(Math.random() * loves.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


   var prefix = "-";

var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://images.pexels.com/photos/1022158/pexels-photo-1022158.jpeg?cs=srgb&dl=adorable-animal-animal-photography-1022158.jpg&fm=jpg",
"https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?cs=srgb&dl=adorable-animal-animal-photography-248280.jpg&fm=jpg",
"https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?cs=srgb&dl=adorable-animal-cat-156934.jpg&fm=jpg",
"https://images.pexels.com/photos/385960/pexels-photo-385960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/39255/cat-favorite-relaxation-rest-39255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?cs=srgb&dl=adorable-animal-animal-photography-735423.jpg&fm=jpg",
"https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/225406/pexels-photo-225406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', message => {
if(message.author.bot) return;
if (message.content === 'ÇáÓáÇã Úáíßã') {
message.channel.sendFile("https://cdn.discordapp.com/attachments/462240606513659904/481475996122611712/images.jpg");
 }
});


client.on('message', message => {
if(message.author.bot) return;
if (message.content === 'ÍÔíÔ') {
message.channel.sendFile("https://cdn.discordapp.com/attachments/462240606513659904/481474963925106708/images.jpg");
}
});



client.on('message', message => {
if(message.author.bot) return;
if (message.content === 'ÈÇß') {
 message.channel.sendFile("https://cdn.discordapp.com/attachments/462240606513659904/481473773959381021/download.png");
 }
 });
         
         
         
client.on('message', message => {
if(message.author.bot) return;
if (message.content.startsWith('ÊÑÍíÈ')) {
message.channel.send("https://cdn.discordapp.com/attachments/486250425817890821/487718238839504917/images.jpg")
}
});



client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "-";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `áŞÏ ŞãÊ ÈÏÚæÉ **${nul}** ÔÎÕ`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `áã ÊŞã ÈÏÚæÉ Ãí ÔÎÕ áåĞÉ ÇáÓíÑİÑ`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **áŞÏ ŞãÊ ÈÃÑÓÇá ÌãíÚ ÑæÇÈØ ÇáÏÚæÇÊ ÇáÊí ŞãÊ ÈÃäÔÇÆåÇ İí ÇáÎÇÕ**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "-";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



    if(cmd === `${prefix}kick`){



      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("İíä ÇáÚÖæ ¿");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ãÇ ÚäÏß ÈÑãÔä");
      if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ãÇ ÊŞÏÑ ÊÓæí ßíß ááÃÏãíä")

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with the id ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

      let kickChannel = message.guild.channels.find('name', 'kick-ban');
      if(!kickChannel) return message.channel.send("áã ÇÌÏ Ñæã Çá kick-ban");

      message.guild.member(kUser).kick(kReason)
      kickChannel.send(kickEmbed);
    }
    });




client.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      let prefix = "-";
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);



        if(cmd === `${prefix}ban`){



          let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!kUser) return message.channel.send("İíä ÇáÚÖæ ¿");
          let kReason = args.join(" ").slice(22);
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ãÇ ÚäÏß ÈÑãÔä");
          if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ãÇ ÊŞÏÑ ÊÓæí ÈÇä ááÃÏãíä")

          let banEmbed = new Discord.RichEmbed()
          .setDescription("~Ban~")
          .setColor("#8e0505")
          .addField("Banned User", `${bUser} with ID ${bUser.id}`)
          .addField("Banned By", `<@${message.author.id}> with the id ${message.author.id}`)
          .addField("Banned In", message.channel)
          .addField("Time", message.createdAt)
          .addField("Reason", kReason);

          let banChannel = message.guild.channels.find('name', 'kick-ban');
          if(!banChannel) return message.channel.send("áã ÇÌÏ Ñæã kick-ban");

          message.guild.member(bUser).kick(bReason)
          banChannel.send(banEmbed);
        }
        });

var prefix = "-"

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    if (command === "banlist") {
        message.delete(5000)
         if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Error : \` I Dont Have ADMINISTRATOR Permission\`").then(message => message.delete(5000));
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!message.channel.guild) return;
        message.guild.fetchBans()
        .then(bans => message.channel.send(`\`${bans.size}\` ***: ÚÏÏ ÇáÇÔÎÇÕ ÇáãÍÙæÑíä ãä ÇáÓíÑİÑ ***`)).then(message => message.delete(5000))

  .catch(console.error);
}
});




client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = msg.content.split(" ").slice(1);


if (command == "ÛÑÏ") {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription(args.join(" "))
    .setFooter('© . :AG || Copyright')
    msg.channel.sendEmbed(embed);
    msg.delete();
  }
});






client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix - "clear")) {
				if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | *** ? áÇ íæÌÏ áß ãÇäÌ ãÇÓÌ ***');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | ÊÜÜã",
        color: 0x06DF00,
        description: "Êã ãÓÍ ÇáÑÓÇÆá ÈäÌÇÍ",
        footer: {
          text: "© Premium Bot ™."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});





const cuttweet = [
     'ßÊ ÊæíÊ ş- ÊÎíøá áæ Ãäß ÓÊÑÓã ÔíÁ æÍíÏ İíÕÈÍ ÍŞíŞÉ¡ ãÇĞÇ ÓÊÑÓã¿',
     'ßÊ ÊæíÊ ş- ÃßËÑ ÔíÁ íõÓßöÊ ÇáØİá ÈÑÃíß¿',
     'ßÊ ÊæíÊ ş- ÇáÍÑíÉ áÜ ... ¿',
     'ßÊ ÊæíÊ ş- ŞäÇÉ ÇáßÑÊæä ÇáãİÖáÉ İí ØİæáÊß¿',
     'ßÊ ÊæíÊ ş- ßáãÉ ááÕõÏÇÚ¿',
     'ßÊ ÊæíÊ ş- ãÇ ÇáÔíÁ ÇáĞí íõİÇÑŞß¿',
     'ßÊ ÊæíÊ ş- ãÇ ÇáÔíÁ ÇáĞí íõİÇÑŞß¿',
     'ßÊ ÊæíÊ ş- ãæŞİ ããíÒ İÚáÊå ãÚ ÔÎÕ æáÇ íÒÇá íĞßÑå áß¿',
     'ßÊ ÊæíÊ ş- ÃíåãÇ íäÊÕÑ¡ ÇáßÈÑíÇÁ Ãã ÇáÍÈ¿',
     'ßÊ ??æíÊ| ÈÚÏ 10 Óäíä ÇíÔ ÈÊßæä ¿',

     'ßÊ ÊæíÊ ş- ãöä ÃÛÑÈ æÃÌãá ÇáÃÓãÇÁ ÇáÊí ãÑÊ Úáíß¿',
     'şßÊ ÊæíÊ| ÚãÑß ÔáÊ ãÕíÈÉ Úä ÔÎÕ ÈÑÛÈÊß ¿',
'ßÊ ÊæíÊ ş- ÃßËÑ ÓÄÇá æÌöøå Åáíß ãÄÎÑğÇ¿',
     'şßÊ ÊæíÊ|ãÇ åæ ÇáÔíÁ ÇáĞí íÌÚáß ÊÔÚÑ ÈÇáÎæİ¿',
     'şßÊ ÊæíÊ|æÔ íİÓÏ ÇáÕÏÇŞÉ¿',
     'şßÊ Ê??í????|ÔÎÕ á??ÊÑİÖ áå ØáÈÇ ¿',
     'şßÊ ÊæíÊ|ßã ãÑå ÎÓÑÊ ÔÎÕ ÊÍÈå¿.',
     'şßÊ ÊæíÊ|ßíİ ÊÊÚÇãá ãÚ ÇáÇÔÎÇÕ ÇáÓáÈííä ¿',
     'şßÊ ÊæíÊ|ßáãÉ ÊÔÚÑ ÈÇáÎÌá ÇĞÇ ŞíáÊ áß¿',
     'şßÊ ÊæíÊ|åá ÊõÎİí äÌÇÍß Ãæ ßÊ ßÊ ÊæíÊ | åá ÊÎİí äÌÇÍß Ãæ ÃÔíÇÆß ÇáÌãíáÉ ÎæİÇğ ãä ÇáÚíä æÇáÍÓÏ¿',
     'şßÊ ÊæíÊ|ÌÓãß ÇßÈÑ ãä Úñ??Ñß Çæ ??áÚßÓø ¿!',
     'şßÊ ÊæíÊ|ÃŞæì ßĞÈÉ ãÔÊ Úáíß ¿',
     'şßÊ ÊæíÊ|ÊÊÃËÑ ÈÏãæÚ ÔÎÕ íÈßí ŞÏÇãß ŞÈá ÊÚÑİ ÇáÓÈÈ ¿',
     'ßÊ ÊæíÊ|åá ÍÏË æÖÍíÊ ãä ÃÌá ÔÎÕò ÃÍÈÈÊ¿',
     'şßÊ ÊæíÊ|ÃßËÑ ÊØÈíŞ ÊÓÊÎÏãå ãÄÎÑğÇ¿',
     'şßÊ ÊæíÊ|şÇßËÑ Ôí íÑÖíß ÇĞÇ ÒÚáÊ ÈÏæä ÊİßíÑ ¿',
     'şßÊ ÊæíÊ|æÔ ãÍÊÇÌ ÚÔÇä Êßæä ãÈÓæØ ¿',
     'şßÊ ÊæíÊ|ãØáÈß ÇáæÍíÏ ÇáÍíä ¿',
     'şßÊ ÊæíÊ|- å?? ÍÏË æÔÚÑÊ ÈÃäß ÇÑÊßÈÊ ÃÍÏ ÇáĞäæÈ ÃËäÇÁ ÇáÕíÇã¿',
]

client.on('message', message => {
  if (message.content === `-ßÊ ÊæíÊ`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
};
});

 client.on('message', message => { //jackeo ÌÇßíæ
    if (message.content.startsWith("ÊåßíÑ")) {
  if(!message.channel.guild) return message.reply(' ');//jackeo ÌÇßíæ
      if (message.author.bot) return//jackeo ÌÇßíæ
           message.delete();//jackeo ÌÇßíæ
             let args = message.content.split(' ').slice(1);//jackeo ÌÇßíæ
                   let virusname = args.join(' ');//jackeo ÌÇßíæ
                 if (virusname < 1) {//jackeo ÌÇßíæ//jackeo ÌÇßíæ
                     return message.channel.send("** ÑÌÇÆÇóó ãäÔä ãä ÊÑíÏ ÊåßíÑÉ ** ");//jackeo ÌÇßíæ
                                     }//jackeo ÌÇßíæ
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading  [?] 1%**`).setColor(0xFF0000)})
             }, 5500)//jackeo ÌÇßíæ
             setTimeout(function() {
                m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [????] 25%**`).setColor(0xFF0000)})
              }, 10500)//jackeo ÌÇßíæ
              setTimeout(function() {
                 m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [????????] 50%**`).setColor(0xFF0000)})
               }, 15500)//jackeo ÌÇßíæ
               setTimeout(function() {
                  m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [??????????????] 75%**`).setColor(0xFF0000)})
                }, 25500)//jackeo ÌÇßíæ
           setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Hacking Done [??????????????????] 100%**`).setColor(0xFF0000)})
             }, 30500)//jackeo ÌÇßíæ
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..íÊã ÇáÏÎæá ááÍÓÇÈ** `).setColor(0xFF0000)})
             }, 40500)//jackeo ÌÇßíæ
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..íÊã ÍİÖ ÈíäÇÊ ÇáÍÓÇÈ** `).setColor(0xFF0000)})
             }, 45500)//jackeo ÌÇßíæ
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..íÊã ÑİÚ ÇáÈíäÇÊ** `).setColor(0xFF0000)})
             }, 50500)//jackeo ÌÇßíæ
              setTimeout(function() {
               m.delete()//jackeo ÌÇßíæ
           }, 55000)//jackeo ÌÇßíæ
             setTimeout(function() {
               message.channel.send('** Êã ÇáÇÎÊÑÇŞ  __Done Hacking__ **').then(msg => msg.delete(25000));
           }, 60500)//jackeo ÌÇßíæ
           });//jackeo ÌÇßíæ
         }//jackeo ÌÇßíæ
 });//jackeo ÌÇßíæ

  client.on('message', message => {
var prefix = "-";
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'äßÊ')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', async msg => {
     client.snek = require('snekfetch');
    var p = "-"
  if(msg.content.startsWith(p + "paint")) {
   let args = msg.content.split(' ').slice(1).join(' ');

 if(args.length < 1) return args.missing(msg, 'No text added', this.help);
  msg.channel.startTyping();
  const searchMessage = await msg.channel.send('???Painting...');
  const { body } = await client.snek.get(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${encodeURIComponent(args)}`);
  msg.channel.send({file: { attachment:body.message, name: 'changemymind.png'}}).then(()=> { searchMessage.delete(); msg.channel.stopTyping(); });
};
});

 const fetch = require('snekfetch');
 client.on('message', message => {
if (message.content.startsWith('-ask')) {
      let args = message.content.split(' ').slice(1).join(' ');
    const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20B046, 0xF2E807, 0xF207D1, 0xEE8419];
    if (!args) {
        return message.reply('add a urban search, u pleb!');
    }
    fetch.get('http://api.urbandictionary.com/v0/define?term=' + args).then(res => {
        if (res.body.list[0] === undefined) {
            return message.channel.send('**»Error**: Couldnt find the word');
        }
        const definition = res.body.list[0].definition;
        const word = res.body.list[0].word;
        const Author = res.body.list[0].author;
        const exam = res.body.list[0].example;
        const thumup = res.body.list[0].thumbs_up;
        const thumdown = res.body.list[0].thumbs_down;
        const embed = new Discord.RichEmbed()
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .setTitle(`This is the info for the word: **${word}**`)
    .addField('definition:', `${definition}`)
    .addField('Author:', `${Author}`)
    .addField('Example:', `${exam}`)
    .addField('Rating', `?? ${thumup} ?? ${thumdown}`, true)
    .setThumbnail('https://cdn.discordapp.com/attachments/486250425817890821/486526624112705617/ce5fb05919818916b5f598f3ee18afaa.png');
        message.channel.send({embed}).catch(e => console.log(e));
    }).catch(err => {
        if (err) {
            console.log(err);
        }

    });
};
  });



client.on('message', ra3d => {
var prefix = "-";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`íÑÌí ÇÎÊíÇÑ ßã áæä `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**? | `[MANAGE_ROLES]` áÇ íæÌÏ áÏíß ÕáÇÍíÉ**'); 
              ra3d.channel.send(`**? |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

client.on("message", function(message) {
	var prefix = "-";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","??",true)
    .addField("Paper","??",true)
    .addField("Scissors","??",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' ??')
        msg.react("??")
        msg.react("??")
.then(() => msg.react('??'))
.then(() =>msg.react('??'))
.then(() => msg.react('??'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});


  client.on('message', message => {
      if(message.content.startsWith ("-marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' ?? **áÇÒã ÊØáÈ ÇíÏ æÍÏÉ**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' ?? **æáÏ ãÇ íÕÍáß ÇáÇ ÍÑãÉ æÍÏÉ ßá ãÑÉ**').catch(console.error);
       if(proposed === message.author) return message.reply(`**ÎäËì ¿ **`);
        if(proposed === client.user) return message.reply(`** ÊÈí ÊÊÒæÌäí¿ **`);
              message.channel.send(`**${proposed} 
 ÈÏß ÊŞÈáí ÚÑÖ ÇáÒæÇÌ ãä ${message.author} 
 ÇáÚÑÖ áãÏÉ 15 ËÇäíÉ  
 ÇßÊÈí ãæÇİŞÉ Çæ áÇ**`)

const filter = m => m.content.startsWith("ãæÇİŞÉ");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} æ ${proposed} Çáİ Çáİ ãÈÑæß Çááå , íÑÒŞßã ÇáĞÑíÉ ÇáÕÇáÍÉ** `);
})

   const filte = m => m.content.startsWith("áÇ");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} Êã ÑİÖ ÚÑÖß** `);
})
        
  }
});
  



  client.on('message', message => {
if(message.content.startsWith("-slots")) {
  let slot1 = ['??', '??', '??', '??', '??', '??', '??', '??'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});


var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

client.on('message',async msg => {
     if(msg.channel.type === "old") return;
  if(msg.author.bot) return;
  var p = "-";
  if(msg.content.startsWith(p + "setstats")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('? **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('? **ÇáÈæÊ áÇ íãÊáß ÕáÇÍíÉ**');
  var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
           var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
                var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                   var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
       al.setParent(kk);
       alp.setParent(kk);
       alph.setParent(kk);
       
     al.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alp.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alph.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });

  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
     al.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
      alp.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
        alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
 },1000);
                   })
    
                })
           })
  })
           
  }
 
});

client.on('message', async message => {
    if(message.content.includes('discord.gg')){ 
        if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
  var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "Muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
  name: "Muted",
  color: "#000000",
  permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
  await channel.overwritePermissions(muterole, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
  });
});
}catch(e){
console.log(e.stack);
}
}
   if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.RichEmbed()
.setTitle("Muted Ads")
    .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
    .setColor("c91616")
    .setThumbnail(`${message.author.avatarURL}`)
    .setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)


}
})

var prefix = "-"

client.on('message',async message => {
  if(message.content.startsWith(prefix + "id")) {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
      message.guild.fetchInvites().then(invs => {
    let user = message.author;
    let personalInvites = invs.filter(i => i.inviter.id === user.id);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    const millis = new Date().getTime() - message.author.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const created = millis / 1000 / 60 / 60 / 24;
    const milliss = new Date().getTime() - message.guild.member(message.author).joinedAt.getTime();
    const nows = new Date();
    dateFormat(nows, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const joined = milliss / 1000 / 60 / 60 / 24;
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('#36393e')
    .setThumbnail(message.author.avatarURL)
    .addField('» ãÖì Úáì ÏÎæáß ÇáÏÓßæÑÏ', `${created.toFixed(0)} íæãøÇ`,true)
    .addField('» ãÖì Úáì ÏÎæáß ÇáÓíÑİÑ', `${joined.toFixed(0)} íæãøÇ`,true)
    .addField('» ÏÚæÇÊ',inviteCount,true)
    .setFooter(' Dmar Bot™ © | 2018.');

    message.channel.send(embed);
  });
  }
});
  

var prefix = "-"

client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " ÊÜÜÜÜã ÇÑÓÜÜÇáß İí ÇáÎÜÜÇÕ")
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
	var prefix = "-";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('?')
.then(() => msg.react('?'))
.then(() =>msg.react('?'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on("message", message => {
    var prefix = "-";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("-clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});

client.on('message', message => {
if (message.content.startsWith('-server')) {
 message.channel.send(`Here is the different information of **${message.guild.name}**`, {
        embed: {
            color: 0xDF9C9D,
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL
            },
            thumbnail: {
                url: message.guild.iconURL
            },
            fields: [{
                    name: "• name:",
                    value: `${message.guild.name}`,
                    inline: true
                }, {
                    name: "• ID:",
                    value: `${message.guild.id}`,
                    inline: true
                }, {
                    name: "• Crated at:",
                    value: moment(message.guild.createdAt).format("LL"),
                    inline: true
                }, {
                    name: "• Owner:",
                    value: message.guild.owner.user.tag,
                    inline: true
                }, {
                    name: "• Members:",
                    value: `${message.guild.memberCount}`,
                    inline: true
                }, {
                    name: "• Last members:",
                    value: `${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1)}`,
                    inline: true
                }, {
                    name: "• Channel",
                    value: `**${message.guild.channels.filter(channel => channel.type === 'text').size}** text - **${message.guild.channels.filter(channel => channel.type === 'voice').size}** audio`,
                    inline: true
                }, {
                    name: "• AFK channel",
                    value: `${message.guild.afkChannel}`,
                    inline: true
                }, {
                    name: `• Roles - **${message.channel.guild.roles.size}**:`,
                    value: message.guild.roles.array().map(g=> g).join(', '),
                    inline: true
                }, {
                    name: `• Emojies - **${message.channel.guild.emojis.size}**:`,
                    value: `${message.guild.emojis.map(e => e).join(', ')}`,
                    inline: true
                }
            ]
        }
    })





}
})




  var prefix = "-";
    client.on('message', message => {
    if(message.content.startsWith(prefix + '2avatar')) {
         var men = message.mentions.users.first();
   var heg;
      if(men) {
          heg = men
      } else {
          heg = message.author
      }
  var avatar = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(heg.username)
.setImage(heg.avatarURL)

message.channel.sendEmbed(avatar)
    }
});
/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
/*
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
*/
client.on('ready', () => {});
console.log("Logged")
var download = function(uri, filename, callback) {
	request.head(uri, function(err, res, body) {
		console.log('content-type:', res.headers['content-type']);
		console.log('content-length:', res.headers['content-length']);

		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
}

client.on('message', function(message) {
	const member = message.member;
	const mess = message.content.toLowerCase();
	const args = message.content.split(' ').slice(1).join(' ');

	if (mess.startsWith('-play')) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		// if user is not insert the URL or song title
		if (args.length == 0) {
			let play_info = new Discord.RichEmbed()
				.setAuthor(client.user.username, client.user.avatarURL)
				.setDescription('**Şã ÈæÖÚ ÇáÑÇÈØ , Çæ  ÇáÇÓã**')
			message.channel.sendEmbed(play_info)
			return;
		}
		if (queue.length > 0 || isPlaying) {
			getID(args, function(id) {
				add_to_queue(id);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor("ÃÖíİ Åáì ŞÇÆãÉ ÇáÇäÊÙÇÑ", message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("RANDOM")
						.setFooter('Requested By:' + message.author.tag)
						.setImage(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
					queueNames.push(videoInfo.title);
					// let now_playing = videoInfo.title;
					now_playing.push(videoInfo.title);

				});
			});
		}
		else {

			isPlaying = true;
			getID(args, function(id) {
				queue.push('placeholder');
				playMusic(id, message);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor(`Added To Queue`, message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("BLACK")
						.setFooter('ÈØáÈ ãä: ' + message.author.tag)
						.setThumbnail(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
				});
			});
		}
	}
		if (mess.startsWith('ÓíÈíÔÓÈíÓÈ')) {
		if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		// if user is not insert the URL or song title
		if (args.length == 0) {
			let play_info = new Discord.RichEmbed()
				.setAuthor(client.user.username, client.user.avatarURL)
				.setDescription('**Şã ÈæÖÚ ÇáÑÇÈØ , Çæ  ÇáÇÓã**')
			message.channel.sendEmbed(play_info)
			return;
		}
		if (queue.length > 0 || isPlaying) {
			getID(args, function(id) {
				add_to_queue(id);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor("ÃÖíİ Åáì ŞÇÆãÉ ÇáÇäÊÙÇÑ", message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("RANDOM")
						.setFooter('Requested By:' + message.author.tag)
						.setImage(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
					queueNames.push(videoInfo.title);
					// let now_playing = videoInfo.title;
					now_playing.push(videoInfo.title);

				});
			});
		}
		else {

			isPlaying = true;
			getID(args, function(id) {
				queue.push('placeholder');
				playMusic(id, message);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor(`Added To Queue`, message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("BLACK")
						.setFooter('ÈØáÈ ãä: ' + message.author.tag)
						.setThumbnail(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
				});
			});
		}
	}
	else if (mess.startsWith('-skip')) {
		message.reply(':gear: **Êã ÇáÊÎØí**').then(() => {
			skip_song(message);
			var server = server = servers[message.guild.id];
			if (message.guild.voiceConnection) message.guild.voiceConnection.end();
		});
	}
	else if (message.content.startsWith('-vol')) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		// console.log(args)
		if (args > 100) return message.reply(':x: **100**');
		if (args < 1) return message.reply(":x: **1**");
		dispatcher.setVolume(1 * args / 50);
		message.channel.sendMessage(`Volume Updated To: **${dispatcher.volume*50}**`);
	}
			else if (mess.startsWith('áÈíáíÈáíÈ')) {
		if (!message.member.voiceChannel) return message.channel.send(':x: **You have to be in a voice channel to use this command.**');
		message.channel.send(':gear: **Êã ÇáÊÎØí**').then(() => {
			skip_song(message);
			var server = server = servers[message.guild.id];
			if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		});
	}
			else if (message.content.startsWith('ÈÓíÈíÓÈÓíÈv')) {
		if (!message.member.voiceChannel) return message.channel.send(':x: **You have to be in a voice channel to use this command.**');
		// console.log(args)
		if (args > 100) return message.channel.send('**1 - 100 | áÇ ÃßËÑ æáÇ ÃŞá **')
		if (args < 1) return message.channel.send('**1 - 100 | Ç ÃßËÑ æáÇ ÃŞá**')
			dispatcher.setVolume(1 * args / 100);
		message.channel.sendMessage(`**__ ${dispatcher.volume*50}% ãÓÊæì ÇáÕæÊ __**`);
	}
			else if (mess.startsWith('ÈíÓÈíÓÈÔ')) {
		if (!message.member.voiceChannel) return message.channel.send(':x: **You have to be in a voice channel to use this command.**');
		message.channel.send('**Done...:white_check_mark: **')
		var server = server = servers[message.guild.id];
		if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	}
	else if (mess.startsWith('-pause')) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		message.reply(':gear: **Êã ÇáÇíŞÇİ ãÄŞÊ**').then(() => {
			dispatcher.pause();
		});
	}
	else if (mess.startsWith('-unpause')) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		message.reply(':gear: **Êã ÇÚÇÏå ÇáÊÔÛíá**').then(() => {
			dispatcher.resume();
		});
	}
	else if (mess.startsWith('-stop')) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		message.reply(':name_badge: **Êã ÇáÇíŞÇİ**');
		var server = server = servers[message.guild.id];
		if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	}
	else if (mess.startsWith('-join')) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		message.member.voiceChannel.join().then(message.react('?'));
	}
		else if (mess.startsWith(prefix - 'j')) {
		if (!message.member.voiceChannel) return message.channel.send(':x: **You have to be in a voice channel to use this command.**');
		message.member.voiceChannel.join().then(message.channel.send('**Done...:white_check_mark: **'));
	}
	else if (mess.startsWith('ÈíÓÈíÓÔÈ')) {
		getID(args, function(id) {
			add_to_queue(id);
			fetchVideoInfo(id, function(err, videoInfo) {
				if (err) throw new Error(err);
				if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
				if (isPlaying == false) return message.reply(':x:');
				let playing_now_info = new Discord.RichEmbed()
					.setAuthor(client.user.username, client.user.avatarURL)
					.setDescription(`**${videoInfo.title}**`)
					.setColor("RANDOM")
					.setFooter('Requested By:' + message.author.tag)
					.setImage(videoInfo.thumbnailUrl)
				message.channel.sendEmbed(playing_now_info);
				queueNames.push(videoInfo.title);
				// let now_playing = videoInfo.title;
				now_playing.push(videoInfo.title);

			});

		});
	}

	function skip_song(message) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		dispatcher.end();
	}

	function playMusic(id, message) {
		voiceChannel = message.member.voiceChannel;


		voiceChannel.join().then(function(connectoin) {
			let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
				filter: 'audioonly'
			});
			skipReq = 0;
			skippers = [];

			dispatcher = connectoin.playStream(stream);
			dispatcher.on('end', function() {
				skipReq = 0;
				skippers = [];
				queue.shift();
				queueNames.shift();
				if (queue.length === 0) {
					queue = [];
					queueNames = [];
					isPlaying = false;
				}
				else {
					setTimeout(function() {
						playMusic(queue[0], message);
					}, 500);
				}
			});
		});
	}

	function getID(str, cb) {
		if (isYoutube(str)) {
			cb(getYoutubeID(str));
		}
		else {
			search_video(str, function(id) {
				cb(id);
			});
		}
	}

	function add_to_queue(strID) {
		if (isYoutube(strID)) {
			queue.push(getYoutubeID(strID));
		}
		else {
			queue.push(strID);
	}
	}

	function search_video(query, cb) {
		request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
			var json = JSON.parse(body);
			cb(json.items[0].id.videoId);
		});
	}


	function isYoutube(str) {
		return str.toLowerCase().indexOf('youtube.com') > -1;
	}
});
})
client.login(process.env.BOT_TOKEN);
