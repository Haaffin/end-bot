import DiscordJS from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const talkedRecently = new Set();

const client = new DiscordJS.Client({
    intents: [
        DiscordJS.Intents.FLAGS.GUILDS,
        DiscordJS.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.on('ready', async () => {

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript : true,
        testServers : '886511410329309225',
        mongoUri: process.env.MONGO_URI,

        disabledDefaultCommands: [
            'help',
            'command',
            'language',
            'prefix',
            'requiredrole',
            'example'
        ],
    })
    
    console.log('Bot is ready!');

});

client.on('messageCreate', (message) => {

    let mommy = ['mom','mother','mommy']

    if(message.author.bot) return;
    
    if(message.content.toLowerCase().includes('boomer')){
        message.channel.send('okay boomer');
    }
    if(mommy.some(word => message.content.toLowerCase().includes(word))){
        let chance = Math.floor(Math.random() * 10 + 1);
        console.log(chance)
    if(chance == 10 || chance == 1){
        if(message.content.toLowerCase().includes('fucker')){
            message.reply('ok Freud')
        }
        else{
            message.reply('we get it, you have mommy issues')
        }
    }
    else return
    }

    let karl = ['karl', 'jacobs']

    if(karl.some(word => message.content.toLowerCase().includes(word))){
        message.reply('your simp is showing')
    }

    if(message.content.toLowerCase().includes('genshin')){
        if(message.content.toLowerCase().includes('sucks')){
            message.reply('u suck')
        }
        else{
            message.reply('ok weeb')
        }
    }

    let owo = ['owo', 'uwu', 'rawr', 'xD']

    let responseArray = [
        'rawr x3 nuzzles! pounces on u, uwu u so warm. couldn’t help but ur bulge from across the floor, nuzzlez yo’ necky~ murr~ hehe unzips yo baggy ass pants, oof baby u so musky take me home, pet me, N’ make me yours & dont forget to stuff me! see me wag my widdle baby tail, all for your bolgy-wolgy! kisses n lickies yo neck, i hope daddy likeies nuzzles n wuzzles yo chest, i be gettin thirsty hey i got a lil itch, u think u can help me? only seven inches long uwu PLS ADOPT ME',
        'The UwU FitnessGwam™ Pacer Testi is a multiswage aerowbic capacity testy westy that progwessively gets more harder and harder OwO as it continues. Uwu The big boi 20 meter pacer test will begin in 30 seconds. Line up at the starti warti. The running speed starts slowly, but gets faster and faster every minute after I- a-after I > ~ < [beep]. A single lap should be awwl finished uppies evwy time you hear this sound. [ding] Remembew to run in a straight line, and run as long and fast as possible uwu for me anon. The second time you fail to complete a lappi pu before the sound, your test is OVEW OWO. The testi westi will begin on the word start. On youw mark uwu, get ready uwu, start owo.',
        'UwU This is the LA Powice Depawtment, we awe fowwowing up on a sewies of weports of that youw huge bolgy wolgy has been distuwbing the peace in the neighbowhood, so we will be taking you and youw bolgy wolgy OwO into ouw custody, and it is pawt of the pwoceduwe fow us to nuzzle and wuzzle youw necky wecky ~ murr~ hehe UwU'
    ]

    if(owo.some(word => message.content.toLowerCase().includes(word))){
        if(talkedRecently.has(message.author.id)){
            message.reply('Wait 5 minutes before trying this again pls');
        }
        else{
            message.channel.send(`${responseArray[Math.floor(Math.random() * responseArray.length)]}`)

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 300000);
        }
    }

    // if (talkedRecently.has(message.author.id)) {
    //     message.channel.send("Wait 1 minute before getting typing this again. - " + message.author);
    // } else {
    //     if(owo.some(word => message.content.toLowerCase().includes(word))){
    //         message.channel.send(`${responseArray[Math.floor(Math.random() * responseArray.length)]}`)
    //     }
    // }
})

client.login(process.env.TOKEN);