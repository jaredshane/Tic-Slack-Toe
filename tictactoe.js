const { bot } = require('./createBot')

// bot parameters
let params = {
        icon_emoji: ':robot_face:'
    };

let currentPlayer = 'X'

let currentGame = {
                    'a1': '-',
                    'a2': '-',
                    'a3': '-',
                    'b1': '-',
                    'b2': '-',
                    'b3': '-',
                    'c1': '-',
                    'c2': '-',
                    'c3': '-'
                  }


let changePlayer = () => {
  if(currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }

}


let createNewTicTacToeGame = () => {
  console.log("Creating new TTT Game")

  currentGame = {
                    'a1': '-',
                    'a2': '-',
                    'a3': '-',
                    'b1': '-',
                    'b2': '-',
                    'b3': '-',
                    'c1': '-',
                    'c2': '-',
                    'c3': '-'
                  }


  currentPlayer = 'X'

  console.log("currentGame1", currentGame)
}


let showGameBoard = () => {
  console.log("currentGame2", currentGame)

  let gameBoard =
`
${currentGame.a1}  |  ${currentGame.b1}   |  ${currentGame.c1}
--------------
${currentGame.a2}  |  ${currentGame.b2}   |  ${currentGame.c2}
--------------
${currentGame.a3}  |  ${currentGame.b3}   |  ${currentGame.c3}
`

  bot.postTo('general', gameBoard, params);
}


let setLetter = (position) => {
  if(currentGame[position] !== 'X' && currentGame[position] !== 'O') {
    currentGame[position] = currentPlayer

    checkForWinner()
    changePlayer()
    showGameBoard()
  }
}


let checkForWinner = () => {
  console.log("check win func called")

  // check top row
  if(currentGame.a1 === currentPlayer && currentGame.b1 === currentPlayer && currentGame.c1 === currentPlayer) {
    console.log(`The winner is ${currentPlayer}`)
    bot.postMessageToChannel('general', `The winner is ${currentPlayer}`, params);
    createNewTicTacToeGame()
  }

  // check second row
  if(currentGame.a2 === currentPlayer && currentGame.b2 === currentPlayer && currentGame.c2 === currentPlayer) {
    console.log(`The winner is ${currentPlayer}`)
    bot.postMessageToChannel('general', `The winner is ${currentPlayer}`, params);
    createNewTicTacToeGame()
  }


  // check third row
  if(currentGame.a3 === currentPlayer && currentGame.b3 === currentPlayer && currentGame.c3 === currentPlayer) {
    console.log(`The winner is ${currentPlayer}`)
    bot.postMessageToChannel('general', `The winner is ${currentPlayer}`, params);
    createNewTicTacToeGame()
  }


  // check first column
  if(currentGame.a1 === currentPlayer && currentGame.a2 === currentPlayer && currentGame.a3 === currentPlayer) {
    console.log(`The winner is ${currentPlayer}`)
    bot.postMessageToChannel('general', `The winner is ${currentPlayer}`, params);
    createNewTicTacToeGame()
  }

  // check second column
  if(currentGame.b1 === currentPlayer && currentGame.b2 === currentPlayer && currentGame.b3 === currentPlayer) {
    console.log(`The winner is ${currentPlayer}`)
    bot.postMessageToChannel('general', `The winner is ${currentPlayer}`, params);
    createNewTicTacToeGame()
  }

  // check third column
  if(currentGame.c1 === currentPlayer && currentGame.c2 === currentPlayer && currentGame.c3 === currentPlayer) {
    console.log(`The winner is ${currentPlayer}`)
    bot.postMessageToChannel('general', `The winner is ${currentPlayer}`, params);
    createNewTicTacToeGame()
  }

  // check diagonals
  if(currentGame.a1 === currentPlayer && currentGame.b2 === currentPlayer && currentGame.c3 === currentPlayer) {
    console.log(`The winner is ${currentPlayer}`)
    bot.postMessageToChannel('general', `The winner is ${currentPlayer}`, params);
    createNewTicTacToeGame()
  }

  if(currentGame.c1 === currentPlayer && currentGame.b2 === currentPlayer && currentGame.a3 === currentPlayer) {
    console.log(`The winner is ${currentPlayer}`)
    bot.postMessageToChannel('general', `The winner is ${currentPlayer}`, params);
    createNewTicTacToeGame()
  }

  else {
    console.log("No winner yet")
  }
}


module.exports = { createNewTicTacToeGame, showGameBoard, setLetter }
