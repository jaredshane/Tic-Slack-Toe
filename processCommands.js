const { bot } = require('./createBot')

const { createNewTicTacToeGame, showGameBoard, setLetter } = require('./tictactoe')

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


const createTicTacToeCommand = (commandObj) => {

    let ticTacToeObj = {
        type: null,
        argument: null
    }

    let parseTicTacToe = commandObj.argument

    let ticTacToeArray = parseTicTacToe.split(' ');

    let command = ticTacToeArray[0]

    let argument = ticTacToeArray.slice(1, ticTacToeArray.length).join(' ');

    ticTacToeObj.type = command

    ticTacToeObj.argument = argument

    return ticTacToeObj
}



const processTicTacToe = (commandObj) => {
  // console.log("func ran")
  console.log("cmd obj", commandObj)

  let ticTacToeObj = createTicTacToeCommand(commandObj)

  console.log("ttt obj", ticTacToeObj)


  switch(ticTacToeObj.type){

        case 'newGame':
            createNewTicTacToeGame()
            break;

        case 'showGame':
            showGameBoard()
            break;

        case 'set':
            setLetter(ticTacToeObj.argument)
            break;

        case 'help':
            break;

        default:
            console.log("Improper tic tac toe command entered");

    }
}


const processBotCommand = (command) => {
    // console.log("command", command)

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
