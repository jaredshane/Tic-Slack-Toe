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
    // console.log(event)


    // check if user is logging in to slack
    if(event.type === 'presence_change' && event.presence === 'active') {
        sayHelloOnArrival(event.user)
    }

})


const sayHelloOnArrival = (userId) => {

    console.log("say hello func called")

    let params = {
        icon_emoji: ':robot_face:'
    };

    // use postMessage to send messages using user IDs
    bot.postMessage(userId, 'Hello Bozo!', params);
}
