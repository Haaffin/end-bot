import DiscordJS from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

import testSchema from './test-schema';

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

})

client.login(process.env.TOKEN);