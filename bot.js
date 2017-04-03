const { bot } = require('./createBot.js')
const { sayHelloOnUserArrival, sayHelloOnBotLogIn } = require('./greetings')
const { processBotCommand, checkMessageForBotCommand } = require('./processCommands')


bot.on('start', function() {
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services

    // sayHelloOnBotLogIn()  // comment out during testing - its annoying
});


bot.on('message', (event) => {
    console.log(event)


    // check if user is logging in to slack and send them a hello message
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
