const SlackBot = require('slackbots');
const { token } = require('./private/token')

console.log("create bot.js loaded")

let bot = new SlackBot({
    token: token, // Add a bot https://my.slack.com/services/new/bot and put the token
    name: 'Johnny Five'
});


// set params for bot
// more information about additional params https://api.slack.com/methods/chat.postMessage
let params = {
        icon_emoji: ':robot_face:'
    };


module.exports = { bot, params }
