const { bot } = require('./createBot.js')
const { sayHelloOnUserArrival, sayHelloOnBotLogIn } = require('./greetings')


bot.on('start', function() {
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services

    // sayHelloOnBotLogIn()  // comment out during testing - its annoying
});


bot.on('message', (event) => {
    console.log(event)


    // check if user is logging in to slack
    if(event.type === 'presence_change' && event.presence === 'active') {
        sayHelloOnUserArrival(event.user)
    }


    // check if event is a message and is in general chat
    if(event.type === "message" && event.channel === "C4N0D2CBB") {
        console.log("general channel message fired")

        // check messages to see if it is a bot command
        let commandObj = checkMessageForBotCommand(event.text)

        if(commandObj) {
            processBotCommand(commandObj)
        }
    }

})


const checkMessageForBotCommand = (channelText) => {
    // console.log("text", channelText)

    // "!say whatever"

    let commandObj = {
        type: null,
        argument: null
    }

    let channelTextArray = channelText.split(' ')

    let command = channelText.split(' ')[0] // ['!say', 'whatever']

    let argument = channelTextArray.slice(1, channelTextArray.length).join(' ');

    // console.log("checkForCommand", channelTextArray[0])
    // console.log("argument", argument)

    if(command[0] === "!") {
        commandObj.type = command.slice(1);
        console.log("type", commandObj.type)
        commandObj.argument = argument;

        // console.log("command", commandObj)

        return commandObj
    } else {
        return false
    }
}


const processBotCommand = (command) => {
    console.log("process command test", command)

    let params = {
        icon_emoji: ':robot_face:'
    };

    // SWITCH STATEMENT WAY THAT WORKS

    switch(command.type){

        case 'say':
            bot.postTo('general', command.argument, params);
            break;

        case 'killbot':
            process.exit()
            break;

        default:
            console.log("Improper command entered");

    }
}
