const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "d."

client.on("ready", () => {

client.login("process.env.TOKEN")

client.on("message", message => {
    if(message.content === prefix + "blague 1") {
        message.channel.send(" C’est l’histoire d’un poil avant il était bien maintenant il est pubien ! :joy: ")
        console.log(`[LOGS] ${message.author.username} à fait d.blague dans ${message.guild}`)
    }
});

client.on("message", message => {
    if(message.content === prefix + "ta mère") {
        message.channel.send("EN STRING DE GUERRRE !:stuck_out_tongue_winking_eye: ")
        console.log(`[LOGS] ${message.author.username} à fait d.ta mère dans ${message.guild}`)
    }
});

client.on("message", message => {
    if(message.content === prefix + "ping") {
        message.channel.send("pong!:ping_pong: ")
        console.log(`[LOGS] ${message.author.username} à fait d.ping dans ${message.guild}`)
    }
});

client.on("message", message => {
    if(message.content === prefix + "cookie") {
        message.channel.send(":cookie:")
        console.log(`[LOGS] ${message.author.username} à fait d.cookies dans ${message.guild}`)
    }
});

client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
    .setDescription(':tada: **'+ member.user.username + ' **a rejoint ' + member.guild.name)
    .setFooter('Nous sommes désormais ' +  member.guild.memberCount)
    member.guild.channels.get('563390364992405524').send(embed)
});

client.on('message', message => {
    if (message.content === prefix + 'pikachu'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("PIKACHU")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('TU AS FAIS D.PIKACHU')
 
        embed.setImage('https://i.skyrock.net/8884/91828884/pics/3235905919_1_2_7BZB6sE7.gif')

        message.channel.send({embed: embed});
}});

client.on('message', message => {
    if (message.content === prefix + 'meme'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("VOICI UN MEME")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('TU AS FAIT D.MEME')
 
        embed.setImage('https://media1.tenor.com/images/85c3847a31b2d49cab2b7972960875c9/tenor.gif?itemid=5664141')

        message.channel.send({embed: embed});
}});

client.on('message', message => {
    if (message.content.startsWith('d.avatar')) {
        var mentionned = message.mentions.users.first();
        var autheur;

        if(mentionned){
            var autheur = mentionned;
        } else {
            var autheur = message.author;
        }

        var newAvatar = autheur.avatarURL;

        if(newAvatar.includes('.gifs')){
            message.channel.send("", {
                embed:{
                    image:{
                        url: autheur.avatarURL.slice(0,autheur.avatarURL.lastIndexOf('?size='))
                    },
                    color:0xffffff
                }
            })
        } else {
            message.channel.send("", {
                embed:{
                    title: "Avatar de " + autheur.username,
                    image:{
                        url: autheur.avatarURL
                    },
                    color:0xffffff
                }
            })
        }
        console.log("[LOGS] AVATAR de " + autheur.username + " vient d'être récupérer par " + message.author.username)
    }
});

client.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
    .setDescription(':cry: **'+ member.user.username + ' **est parti ' + member.guild.name)
    .setFooter('Nous sommes maintenant ' +  member.guild.memberCount)
    member.guild.channels.get('563390692693639198').send(embed)
});

client.on('message', message => {
    if (message.content === prefix + 'chungus'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("CHUNGUS")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('TU AS FAIS D.CHUNGUS')
 
        embed.setImage('https://media1.tenor.com/images/6b9d623b18e319e16e65732df54f2bf6/tenor.gif')

        message.channel.send({embed: embed});
}});


client.on("message", message => {
    if(message.content === prefix + "pizza") {
        message.channel.send(":pizza:")
        console.log(`[LOGS] ${message.author.username} à fait d.pizza dans ${message.guild}`)
}});


client.on("message", message => {
    if(message.content === prefix + "sushi") {
        message.channel.send(":sushi:")
        console.log(`[LOGS] ${message.author.username} à fait d.sushi dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "frites") {
        message.channel.send(":fries:")
        console.log(`[LOGS] ${message.author.username} à fait d.frites dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "taco") {
        message.channel.send(":taco:")
        console.log(`[LOGS] ${message.author.username} à fait d.taco dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "hotdog") {
        message.channel.send(":hotdog:")
        console.log(`[LOGS] ${message.author.username} à fait d.hotdog dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "hamburger") {
        message.channel.send(":hamburger:")
        console.log(`[LOGS] ${message.author.username} à fait d.hamburger dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "donut") {
        message.channel.send(":doughnut:")
        console.log(`[LOGS] ${message.author.username} à fait d.donut dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "pancakes") {
        message.channel.send(":pancakes:")
        console.log(`[LOGS] ${message.author.username} à fait d.pancakes dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "bonbons") {
        message.channel.send(":candy:")
        console.log(`[LOGS] ${message.author.username} à fait d.bonbons dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "popcorn") {
        message.channel.send(":popcorn:")
        console.log(`[LOGS] ${message.author.username} à fait d.popcorn dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "spaghetti") {
        message.channel.send(":spaghetti:")
        console.log(`[LOGS] ${message.author.username} à fait d.spaghetti dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "ramen") {
        message.channel.send(":ramen:")
        console.log(`[LOGS] ${message.author.username} à fait d.ramen dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "chocolat") {
        message.channel.send(":chocolate_bar:")
        console.log(`[LOGS] ${message.author.username} à fait d.chocolat dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "bière") {
        message.channel.send(":beer:")
        console.log(`[LOGS] ${message.author.username} à fait d.bière dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "glace") {
        message.channel.send(":ice_cream:")
        console.log(`[LOGS] ${message.author.username} à fait d.glace dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "bacon/oeufs") {
        message.channel.send(":bacon::cooking:")
        console.log(`[LOGS] ${message.author.username} à fait d.bacon/oeufs dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "café") {
        message.channel.send(":coffe:")
        console.log(`[LOGS] ${message.author.username} à fait d.café dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "vin") {
        message.channel.send(":wine_glass:")
        console.log(`[LOGS] ${message.author.username} à fait d.vin dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "poulet") {
        message.channel.send(":poultry_leg:")
        console.log(`[LOGS] ${message.author.username} à fait d.poulet dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "croissant") {
        message.channel.send(":croissant:")
        console.log(`[LOGS] ${message.author.username} à fait d.croissant dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "lait") {
        message.channel.send(":milk:")
        console.log(`[LOGS] ${message.author.username} à fait d.lait dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "poisson") {
        message.channel.send(":fish:")
        console.log(`[LOGS] ${message.author.username} à fait d.poisson dans ${message.guild}`)
}});


client.on("message", message => {
    if(message.content === prefix + "connect") {
        message.channel.send(`:satellite:connecté sur ${client.guilds.size} serveurs`)
        console.log(`[LOGS] ${message.author.username} à fait d.connect dans ${message.guild}`)
}});

client.on("message", message => {
    if(message.content === prefix + "site") {
        message.channel.send("https://kawaii-room-site-web.webnode.be/")
        console.log(`[LOGS] ${message.author.username} à fait d.site dans ${message.guild}`)
}});


client.on('message', message => {
    if (message.content === prefix + 'help'){
       const embed = new Discord.RichEmbed();
       embed.setTitle("**Les catégories d'aides :**")
       .setAuthor(client.user.username, client.user.avatarURL)
       .setColor(3447003)
       .setDescription('')
       .setThumbnail('')
       .setTimestamp()
       .setFooter('Par {DES 65}')

       embed.addField(':joy: d.divertissement','permet de choisir des commandes de divertissement')
       .addField(':desktop: d.bot','permet de voir des liens pour rajouter le bot et ses infos')
       .addField(':earth_africa: d.site',"permet d'obtenir le lien du site officiel")
       .addField(':man: d.avatar',"permet d'obtenir l'image de son compte Discord")
       

       message.channel.send({embed: embed});
       console.log("d.help" + "utilisé par " + message.author.username);
    }
});

client.on('message', message => {
    if (message.content === prefix + 'market'){
       const embed = new Discord.RichEmbed();
       embed.setTitle("**Voici la liste des aliments**")
       .setAuthor(client.user.username, client.user.avatarURL)
       .setColor(3447003)
       .setDescription('')
       .setThumbnail('')
       .setTimestamp()
       .setFooter('Par {DES 65}')

       embed.addField('1 d.cookies','2.99$')
       .addField('2 d.pizza','1.25$')
       .addField('3 d.sushi','250g / 2.25$')
       .addField('4 d.frites','1kg / 5.00$')
       .addField('5 d.taco','2.99$')
       .addField('6 d.hotdog','1.50$')
       .addField('7 d.hamburger','2.00$')
       .addField('8 d.donut','6 / 2.99$')
       .addField('9 d.pancakes','2 / 2.99$')
       .addField('10 d.bonbons','1.00$')
       .addField('11 d.popcorn','2.50$')
       .addField('12 d.spaghetti','4.00$')
       .addField('13 d.ramen','4.00$')
       .addField('14 d.chocolat','100g / 2.00g')
       .addField('15 d.bière','0.99$')
       .addField('16 d.glace','0.75$')
       .addField('17 d.bacon/oeufs','1.25$')
       .addField('18 d.café','1.00$')
       .addField('19 d.vin','1.00$')
       .addField('20 d.poulet','2.50$')
       .addField('21 d.croissant','2.00$')
       .addField('22 d.lait','0.75$')
       .addField('23 d.poisson','500g / 2.00$')
      
       message.channel.send({embed: embed});
       console.log("d.help" + "utilisé par " + message.author.username);
    }
});


client.on('message', message => {
    if (message.content === prefix + 'divertissement'){
       const embed = new Discord.RichEmbed();
       embed.setTitle("**LA CATEGORIE DIVERTISSEMENT :**")
       .setAuthor(client.user.username, client.user.avatarURL)
       .setColor(3447003)
       .setDescription('')
       .setThumbnail('https://media.giphy.com/media/CaiVJuZGvR8HK/giphy.gif')
       .setTimestamp()
       .setFooter('Par {DES 65}')

       embed.addField('1 d.animal 1 ou 2','Le bot repondra par une image.')
       .addField('2 d.bruh','Le bot repondra par un GIF.')
       .addField('3 d.punch','Le bot repondra par un GIF.')
       .addField('4 d.blague 1 ou 2','Le bot repondra par une blague.')
       .addField('5 d.aurevoir','Le bot repondra aurevoir.')
       .addField('6 d.meme 1,2 ou 3','Le bot repondra par un meme.')
       .addField('7 d.chungus','Le bot repondra par un GIF.')
       .addField('8 d.ta mère','Le bot repondra à ta mère.')
       .addField('9 d.what','Le bot repondra par un GIF.')
       .addField('10 d.toz','Le bot repondra par une image.')
       .addField('11 d.pikachu','Le bot repondra par un GIF.')
       .addField('12 d.salut','Le bot repondra.')
       .addField('13 d.cava?','Le bot repondra.')
       .addField('14 d.je vais bien','Le bot repondra GIF.')
       .addField('15 d.ping','Le bot repondra.')
       .addField('16 d.you','Le bot repondra parun GIF.')
       .addField('17 d.tu veux etre mon ami','Le bot repondra par GIF.')
       .addField('18 d.coucou','Le bot repondra par un GIF.')
       .addField('19 d.nani?','Le bot repondra par un GIF.')
       .addField('20 d.wouff wouff','Le bot repondra par une image.')
       .addField('21 d.baka!','Le bot repondra par un GIF.')
       .addField('22 d.market','Le bot mettra la liste des aliments en vente.')
       .addField('23 d.dab','Le bot repondra par un GIF.')
       .addField('24 d.mdr','Le bot repondra par un GIF.')
       .addField('25 d.connect','Le bot repondra par le nombre de serveur au quel il est connecté.')

       message.channel.send({embed: embed});
       console.log("d.divertissement" +  "utilisé par "  + message.author.username);
    }
});

client.on("message", message => {
    if(message.content === prefix + "discord") {
        message.channel.send("https://discord.gg/K6SpMFa")
        console.log(`[LOGS] ${message.author.username} à fait d.discord dans ${message.guild}`)
}});

client.on('message', message => {
    if (message.content === prefix + 'animal 1'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("OwO")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('TU AS FAIS D.ANIMAL 1')
 
        embed.setImage('https://i.pinimg.com/564x/3d/97/f5/3d97f535ea5ee363d7ef69a5698b22ad.jpg?b=t')

        message.channel.send({embed: embed});
}});

client.on('message', message => {
    if (message.content === prefix + 'animal 2'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("OwO")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('TU AS FAIS D.ANIMAL 2')
 
        embed.setImage('http://funtastique.fr/wp-content/uploads/2013/03/Panda-Roux-qui-baille.jpg')

        message.channel.send({embed: embed});
}});

client.on('message', message => {
    if (message.content === prefix + 'bruh'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("OwO")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('TU AS FAIS D.BRUH')
 
        embed.setImage('https://thumbs.gfycat.com/BlissfulIncredibleBushbaby-size_restricted.gif')

        message.channel.send({embed: embed});
}});

client.on('message', message => {
    if (message.content === prefix + 'punch'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("OwO")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('TU AS FAIS D.PUNCH')
 
        embed.setImage('https://66.media.tumblr.com/tumblr_lx3a4ck5rG1r4ghkoo1_500.gif')

        message.channel.send({embed: embed});
}});

client.on('message', message => {
    if (message.content === prefix + 'blague 2'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("BLAGUE")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('Comment appelle-t-on une cigogne pas intelligente ? – Une si conne!')
 
        embed.setImage('https://66.media.tumblr.com/77c61500a401087eadd78811af808063/tumblr_nyhpi5oTnG1uyi7eto1_250.gif')

        message.channel.send({embed: embed});
}});

client.on('message', message => {
    if (message.content === prefix + 'aurevoir'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('TU AS FAIT D.AUREVOIR')
 
        embed.setImage('https://media1.tenor.com/images/a74d6d215842f8df61f5980e8a5116d7/tenor.gif?itemid=4745347')

        message.channel.send({embed: embed});
}});

client.on('message', message => {
    if (message.content === prefix + 'meme 2'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://media.giphy.com/media/34Du6omCm0X84/giphy.gif')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'meme 3'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://mtntopforge.files.wordpress.com/2017/03/maga-pepe-gif.gif?w=500')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'what'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("WHAT ???")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://www.snopes.com/tachyon/2017/09/barack_obama_tw.jpg?resize=865,452&quality=65')

        message.channel.send({embed: embed});  
}});

client.on("message", message => {
    if(message.content === prefix + "bot") {
        message.channel.send("Link : https://discordapp.com/api/oauth2/authorize?client_id=564515087537274910&permissions=8&scope=bot")
        console.log(`[LOGS] ${message.author.username} à fait d.bot dans ${message.guild}`)
}});

client.on('message', message => {
    if (message.content === prefix + 'toz'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://i.skyrock.net/1466/60871466/pics/2485512423_1.jpg')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'mdr'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('http://www.mypokecard.com/my/galery/LR0PTy3HMH10.jpg')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'dab'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://media3.giphy.com/media/3o6Zt2AGDYG9d0SsUg/source.gif')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'salut'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("salut !")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://media1.tenor.com/images/48b4d7025d2cbf9940b2c85d6604bf92/tenor.gif?itemid=5692178')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'cava?'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("ouais cava...")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://media.tenor.com/images/f611df806ea6a1aa08b9a0ff8e43859a/tenor.gif')

        message.channel.send({embed: embed});  
}})

client.on('message', message => {
    if (message.content === prefix + 'je vais bien'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("ok, aurevoir")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://media1.tenor.com/images/e5ccab5a5a640715c4e8b0e23edf0526/tenor.gif?itemid=9743739')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'you'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://media.tenor.com/images/5b56d7421bc96c41c693fc5f95c6987e/tenor.gif')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'tu veux etre mon ami'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://media1.tenor.com/images/af743ef15dc8cfaaec30641084f18ebe/tenor.gif?itemid=11829778')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'coucou'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("coucou !")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://media.tenor.com/images/e6afa2be25c23e4c6f82f6e2faeb3400/tenor.gif')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'nani?'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://media.tenor.com/images/95a823f907afe17f6a1a6cb12a8cf341/tenor.gif')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'wouff wouff'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://media.discordapp.net/attachments/555468079480569859/565275462100844555/SPOILER_image.JPG?width=299&height=531')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'baka!'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://media.discordapp.net/attachments/555468079480569859/565276927758303243/HJO9YX-q7.gif')

        message.channel.send({embed: embed});  
}});


client.on("message", message => {
    if(message.content === prefix + "annonce") {
        message.channel.send('salut')
        console.log(`[LOGS] ${message.author.username} à fait d.discord dans ${message.guild}`)
}});

client.on('message', message => {
    if (message.content === prefix + 'karim'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://thumbs.gfycat.com/AbandonedImaginaryCottontail-size_restricted.gif')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'gaetan'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('http://media.giphy.com/media/MsSdnGyP7lmA8/giphy.gif')

        message.channel.send({embed: embed});  
}});


client.on('message', message => {
    if (message.content === prefix + 'roberto'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://media.giphy.com/media/GkxMdniUq2n0k/giphy.gif')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (message.content === prefix + 'dark'){
        const embed = new Discord.RichEmbed();
        embed.setTitle("")
        .setAuthor('{ DES 65 }')
        .setColor(3447003)
        .setDescription('')
 
        embed.setImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9c20927-611f-4388-bcf8-847b15674061/dagh4y1-505b2504-3342-4c15-80ec-6c957e21a3c0.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q5YzIwOTI3LTYxMWYtNDM4OC1iY2Y4LTg0N2IxNTY3NDA2MVwvZGFnaDR5MS01MDViMjUwNC0zMzQyLTRjMTUtODBlYy02Yzk1N2UyMWEzYzAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GhJ5o-mTo11V5IJsNCXp3rsBRc6gW5E3r1vKDmFyNR0')

        message.channel.send({embed: embed});  
}});

client.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith(prefix + 'ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.ban({
            reason: 'Non respect des règles du Serveur!',
          }).then(() => {
            message.reply(`BAN réussi: ${user.tag}`);
          }).catch(err => {
            message.reply('Je ne suis pas capable de ban cet utilisateur');
            console.error(err);
          });
        } else {
          message.reply("Cet utilisateur n'est pas dans le serveur!");
        }
      } else {
        message.reply("Tu n'as pas le role suffisant pour BAN un utilisateur!");
      }
    }
});
client.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith(prefix + 'kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Non respect des règles du serveur!').then(() => {
            message.reply(`KICK réussi: ${user.tag}`);
          }).catch(err => {
            message.reply('Je ne suis pas capable de kick cette personne!');
            console.error(err);
          });
        } else {
          message.reply("Cet utilisateur n'est pas dans le serveur!");
        }
      } else {
        message.reply("Tu n'as pas le role suffisant pour KICK un utilisateur!");
      }
    }
});
client.on('message', message => {
    if(message.content.startsWith( prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
    
        let args = message.content.split(" ").slice(1);
    
        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés !`);
            console.log("d.Clear " + "utilisé par " + message.author.username);
    })
}
});
