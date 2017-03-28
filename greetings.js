const { bot } = require('./createBot')


// set params for robot for all greet messages
// more information about additional params https://api.slack.com/methods/chat.postMessage
let params = {
      icon_emoji: ':robot_face:'
  };


// when someone logs on say hi
const sayHelloOnUserArrival = (userId) => {

  // use postMessage to send messages using user IDs
  bot.postMessage(userId, 'Hello Bozo!', params);
}


const sayHelloOnBotLogIn = () => {

  bot.postMessageToChannel('general', 'Hey Humans!  I\m back!', params);
}


module.exports = { sayHelloOnUserArrival, sayHelloOnBotLogIn }
