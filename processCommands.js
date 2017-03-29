const { bot } = require('./createBot')

const { createNewTicTacToeGame } = require('./tictactoe')

// bot parameters
let params = {
        icon_emoji: ':robot_face:'
    };


const checkMessageForBotCommand = (channelText) => {

    let commandObj = {
        type: null,
        argument: null
    }

    let channelTextArray = channelText.split(' ');

    let command = channelText.split(' ')[0];

    let argument = channelTextArray.slice(1, channelTextArray.length).join(' ');

    if(command[0] === "!") {
        commandObj.type = command.slice(1);

        commandObj.argument = argument;

        return commandObj
    } else {
        return false
    }
}


const processTicTacToe = (commandObj) => {
  console.log("func ran")
  console.log("ttt obj", commandObj)
}


const processBotCommand = (command) => {


    switch(command.type){

        case 'say':
            bot.postTo('general', command.argument, params);
            break;

        case 'toe':
            processTicTacToe(command)
            break;

        case 'killbot':
            process.exit();
            break;

        default:
            console.log("Improper command entered");

    }
}


module.exports = { processBotCommand, checkMessageForBotCommand }
