const SlackBot = require('slackbots');
const { token } = require('./private/token')

let bot = new SlackBot({
    token: token, // Add a bot https://my.slack.com/services/new/bot and put the token
    name: 'Johnny Five'
});

module.exports = { bot }
