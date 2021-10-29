import { ICommand } from "wokcommands";

export default {
    category: "example",
    description: "description",
    
    //slash : both means it responds to both /example and !example
    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        // do something
    }
} as ICommand

