const Discord = require("discord.js");
const client = new Discord.Client();
 
 
 
 
 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(` -help | -inv `,'https://www.twitch.tv/zya2d_')
    client.user.setStatus('ldle');
});

 
 
client.on('ready', () => {
         client.on('message', message => {
            if (message.content === 'السلام عليكم') {
              message.channel.send('**وعليكم السلام ورحمة الله وبركاته**');
              message.channel.sendFile("https://cdn.discordapp.com/attachments/339361862997114890/398376746333896705/3dlat.com_14032686841.gif");
               
 
            }
});
});
 
//=======================================================================================



//=======================================================================================


	client.on('message', message => {
    if(message.content.includes('discord.gg/')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تمت معاقبتك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر روابط اضافة الى سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الاسكات عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة**`)
        .addField(`by`,`Man || BOT. `)
        .setColor('RED')
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`, message.guild.iconURL)
        
        message.channel.send(embedP);
    }
});

//============================================================================================

  client.on('message', msg => {
    if(msg.content === '-help')
    msg.reply('** [ تـــــم الارســـال بالخــاص ] **')
  });
 

  client.on("message", message => {
    if (message.content === "-help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Man | BoT
....................................
-inv | أضافة البوت الي سيرفرك
....................................

-welcome | لتفعيل الترحيب والمغادره
....................................
-Rainbow | لصنع رتبه رينبو
....................................
-bc | لأرسال برود كاست للأونلاين
....................................
-obc | لأرسال برود كاست للكل
....................................
-link | يعطيك الرابط السيرفر الي انت في
....................................
-server | لعرض معلومات السيرفر
....................................
-avatar | لعرض الصورة حقك
....................................
-id | لعرض معلومات حسابك
....................................
-bot | لعرض معلومات البوت
....................................
-clear | لمسح الشات
....................................
-mcskin | يظهر سكنك بماينكراف
....................................
-mc | يقفل لك الشات
....................................
-uc | يفتح لك الشات 
....................................
-new | يفتح لك تكت  
....................................
-close | يقفل لك التكت 

       ** `)
   message.author.sendEmbed(embed)
   
   }
   });
 

 
 
//==============================================================================
 
client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});

 
 //=================================================================================
client.on('message', message => {
var prefix = "-";
       if(message.content === prefix + "mc") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "uc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }
       
});



 
//================================================================================
client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("``My Prefix is : -``");
    }
});

 
//===================================================================================
client.on("message", message => {
    var prefix = "-"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("**اكتب اسم السكن الي تبيه**");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
	
  
 //====================================================================
//command = clear

client.on("message",async message => {
var args = message.content.substring(prefix.length).split(" ");
 if (message.content.startsWith(prefix+"clear")) {
   if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {

}
}}).then(msg => {msg.delete(3000)});
             }

});


 //====================================================================
//command = Rainbow Rank

client.on('message',async message => {//new msg event
if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'Rainbow')) {//to create the rainbow role
   let role = message.guild.roles.find('name', 'Rainbow Rank')
   if(role) return message.channel.send(`هاي الرتبة موجودة !`)//if the role already created return with this msg
 //start of create role 
 if(!role){
   rainbow =  message.guild.createRole({
  name: "Rainbow Rank",//the role will create name
  color: "#000000",//the default color
  permissions:[]//the permissions
//end of create role
})

}
message.channel.send('تم صنع رتبة بنجاح ')//if the step completed
}})

client.on('ready', () => {//new ready event
 setInterval(function(){
     client.guilds.forEach(g => {
                 var role = g.roles.find('name', 'Rainbow Rank');//rainbow role name
                 if (role) {
                     role.edit({color : "RANDOM"});
                 };
     });
 }, 2500);//the rainbow time
})

//====================================================================



//bot
client.on('message',async message => {
  if (message.content.startsWith(prefix+"bot")) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .setTitle('``INFO '+client.user.username+'``')
          .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
          .addField('``servers``', [client.guilds.size], true)
          .addField('``channels``' , `[ ${client.channels.size} ]` , true)
          .addField('``Users``' ,`[ ${client.users.size} ]` , true)
          .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
          .addField('``My ID``' , `[ ${client.user.id} ]` , true)
          .addField('``My Prefix``' , `[ ${prefix} ]` , true)
          .addField('``My Language``' , `[ Java Script ]` , true)
          .setFooter('By: Man-bot Support ')
  })
}
});

//.....................................
   

  var prefix = "-";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });




//bc all Members

client.on("message", message => {
    if (message.content.startsWith("-obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
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



 client.on('message', message => {
    if (message.content.startsWith("-link")) {
 
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("Done  ðŸ”—|ðŸ”—  on DM")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("This link will stay with you 24 hours ðŸ”—")
      message.author.sendEmbed(Embed11)
    }
});
 
 
client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('**..**');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete(3000)
    return message.reply(`**No links are allowed**`)
    }
}
});



 
client.on('message', function(msg) {
         var prefix = "-"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** Server Type **',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** Roles**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':pencil:**Text Channel**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**Voice Channel **',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**owner**',`**${msg.guild.owner}**`,true)
      .addField(':id:**Server ID**',`**${msg.guild.id}**`,true)
      msg.channel.send({embed:embed});
    }
  });
 
 
 
 
      client.on('message', message => {
        if (message.content === "-inv") {
    if(!message.channel.guild) return message.reply('This Command is Only For Servers');
   const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL)
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle('Click Here To Invite bot')
.setURL(`https://discordapp.com/oauth2/authorize?client_id=551760518050742285&scope=bot&permissions=2146958588585`)
message.channel.sendEmbed(embed);
 }
});

 
 client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  let memberavatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('**Welcome**',`**[${member}]**`)
    .addField('**u r member number**',`**[${member.guild.memberCount}]**`)
 
    channel.send({embed:embed});
}
);

 
 
 
 client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  let memberavatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('**? |Good bye| ?**',`**[${member}]**`)
    .addField('**?? |Number of members now| ??**',`**[${member.guild.memberCount}]**`)
 
    channel.send({embed:embed});
}
);




	
 



 
client.on('message', message => {
    if(message.content == '-server') {
    const embed = new Discord.RichEmbed()
    .setDescription(`
**     online:  **__${message.guild.members.filter(m=>m.presence.status == 'online').size}__
 
**     dnd:      **__${message.guild.members.filter(m=>m.presence.status == 'dnd').size}__
 
**     idle:     **__${message.guild.members.filter(m=>m.presence.status == 'idle').size} __  
 
**      offline:  **__${message.guild.members.filter(m=>m.presence.status == 'offline').size}__
 
**     all: **__${message.guild.memberCount}__`)      
 
         message.channel.send({embed});
 
    }
  });
  
  
  
client.on('message', message => {
         if (message.content === "-welcome") {
             if(!message.channel.guild) return;
                  if(!message.channel.guild) return message.reply('**sorry, This Command For Server **');        
     if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You do not have premisson    **');
                              if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.reply('**im Dont have premisson **');
                                            message.channel.send('__**Done ?**__')            
message.guild.createChannel('welcome', 'text');
 
 
}
 
});
 
 
 
client.on('guildMemberAdd', msg => { 
    var embed = new Discord.RichEmbed()
    .setAuthor(msg.user.username, msg.user.avatarURL)
    .setThumbnail(msg.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/496581723048378388/534334241236975616/4932c9c75499ee75.png')     
    .setTitle('Member Join!')
    .setDescription('مرحبا بك بالسيرفر')
    .addField('``ايدي العضو``',"" +  msg.user.id, true)
    .addField('``تاق العضو``', msg.user.discriminator, true)
    .addField('``تم الانشاء في``', msg.user.createdAt, true)
    .addField(' :bust_in_silhouette:  العضو رقم',`**[ ${msg.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter(msg.guild.name, msg.guild.iconURL, true)
    var channel = msg.guild.channels.find('name', 'welcome')         
    if (!channel) return;
    channel.send({embed : embed});
    });
	

  
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})



 
 
   client.on("message", msg => {
           var prefix = "-";
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: This command for servers **');        
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  name", `__**[ ${msg.author.username}#${msg.author.discriminator} ]**__`, true)
          .addField(":id:  id", `__**[ ${msg.author.id} ]**__`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  status', `__**[ ${msg.author.presence.status.toUpperCase()} ]**__`, true)
          .addField(':satellite_orbital:   playing', `__**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**__`, true)
          .addField(':military_medal:  role', `__**[ ${msg.member.roles.filter(r => r.name).size} ]**__`, true)
          .addField(':robot:  bot?  ', `__**[ ${msg.author.bot.toString().toUpperCase()} ]**__`, true);
      msg.channel.send({embed: embed})
  }
});
 
 //===================================================================
 
client.on("message", (message) => {
   if (message.content.startsWith("-new")) {     
        const reason = message.content.split(" ").slice(1).join(" ");     
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("-close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`-close\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '-close', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })   
                    .then((collected) => {
                        message.channel.delete();
                    })    
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});


//====================================================================================
 

 


client.on('message', message => {
var prefix = "-";
 
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == '539541145835929623' ) return;
  if (message.author.id == '550455195704885258' ) return;
  
if (message.content.startsWith(prefix + 'm1')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : Done`)
} else
 
if (message.content.startsWith(prefix + 'm2')) {
  client.user.setGame(argresult, "Tm");
    message.channel.sendMessage(`**${argresult}** : Done`)
} else
 
if (message.content.startsWith(prefix + 'name bot')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done`)
  return message.reply("**Tm**");
} else
if (message.content.startsWith(prefix + 'skin')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : Done`);
}
});



 

 
client.login("process.env.BOT_TOKEN"); 