import { Message, MessageAttachment } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: "meme",
    description: "Sends an image of Kat",
    
    //slash : both means it responds to both /example and !example
    slash: 'both',

    callback: ({message, interaction}) => {

        const katArray = [
            './katscreenies/kat1.jpg',
            './katscreenies/kat2.jpg',
            './katscreenies/kat3.jpg',
            './katscreenies/kat4.jpg',
            './katscreenies/kat5.jpg',
            './katscreenies/kat6.jpg',
            './katscreenies/kat7.jpg',
            './katscreenies/kat8.jpg',
        ];

        const attachment = new MessageAttachment(katArray[Math.floor(Math.random() * katArray.length)]);
        if(!message){
            interaction.reply({files: [attachment]});
        }
        else{
            message.channel.send({files: [attachment]});
        }
    }
} as ICommand