import { Message, MessageAttachment } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: "meme",
    description: "Sends an image of Taylor",
    
    //slash : both means it responds to both /example and !example
    slash: 'both',

    callback: ({message, interaction}) => {

        const taylorArray = [
            './taylorscreenies/taylor1.png',
            './taylorscreenies/taylor2.png',
            './taylorscreenies/taylor3.png',
            './taylorscreenies/taylor4.jpg',
            './taylorscreenies/taylor5.png',
            './taylorscreenies/taylor6.png',
        ];

        const attachment = new MessageAttachment(taylorArray[Math.floor(Math.random() * taylorArray.length)]);
        if(!message){
            interaction.reply({files: [attachment]});
        }
        else{
            message.channel.send({files: [attachment]});
        }
    }
} as ICommand