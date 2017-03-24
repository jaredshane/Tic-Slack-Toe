const SlackBot = require('slackbots');
const { token } = require('./private/token.js')

// create a bot
var bot = new SlackBot({
    token: token, // Add a bot https://my.slack.com/services/new/bot and put the token
    name: 'Johnny Five'
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':robot_face:'
    };

    // define channel, where bot exist. You can adjust it there https://my.slack.com/services

    bot.postMessageToChannel('general', 'Hey Humans!  I\m back!', params);

    // define existing username instead of 'user_name'
    // bot.postMessageToUser('westley', 'Hello Bozo, testing!', params);
    // bot.postMessageToUser('jaredshane', 'Hello Bozo!', params);

    // If you add a 'slackbot' property,
    // you will post to another user's slackbot channel instead of a direct message
    // bot.postMessageToUser('westley', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' });

    // define private group instead of 'private_group', where bot exist
    // bot.postMessageToGroup('private_group', 'meow!', params);


    // setTimeout(()=>{
    //     console.log(bot.getUser('U4N0F05NV'))
    //     // bot.getUser('westley')
    // }, 4000)
});


bot.on('message', (event) => {
    // console.log('message event fired')
    console.log(event)


    // check if user is logging in to slack
    if(event.type === 'presence_change' && event.presence === 'active') {
        sayHelloOnArrival(event.user)
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


const sayHelloOnArrival = (userId) => {

    // console.log("say hello func called")

    let params = {
        icon_emoji: ':robot_face:'
    };

    // use postMessage to send messages using user IDs
    bot.postMessage(userId, 'Hello Bozo!', params);
}


const checkMessageForBotCommand = (channelText) => {
    // console.log("text", channelText)

    let commandObj = {
        type: null,
        argument: null
    }

    let channelTextArray = channelText.split(' ')

    let command = channelText.split(' ')[0]

    let argument = channelTextArray.slice(1, channelTextArray.length).join(' ');

    // console.log("checkForCommand", channelTextArray[0])
    // console.log("argument", argument)

    if(command[0] === "!") {
        commandObj.type = command.slice(1);
        commandObj.argument = argument;

        // console.log("command", commandObj)

        return commandObj
    } else {
        return false
    }
}


const processBotCommand = (command) => {
    console.log("command", command)

    const commandList = {
        "say": bot.postTo('general', command.argument)
    }

    return commandList[command.type]
}
