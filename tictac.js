let currentPlayer = 1;
let marker = 'X';
let playerBoard = [["-","-","-"],
                   ["-","-","-"],
                   ["-","-","-"]];

const printBoard = () => {
    for (let i = 0; i < 3; i++){
        console.log(playerBoard[i]);
    }
}

const playerWin = () => {
    //checking for rows
    for (let i = 0; i < 3; i++){
        if (playerBoard[i][0] !== '-' && playerBoard[i][0] === playerBoard[i][1] && playerBoard[i][0] === playerBoard[i][2])
            return true;
    }

    //checking for columns
    for (let j = 0; j < 3; j++){
        if (playerBoard[0][j] !== '-' && playerBoard[0][j] === playerBoard[1][j] && playerBoard[1][j] === playerBoard[2][j])
            return true;
    }

    //diagonals
    if (playerBoard[0][0] !== '-' && playerBoard[0][0] === playerBoard[1][1] && playerBoard[0][0] === playerBoard[2][2])
        return true;

    if (playerBoard[0][2] !== '-' && playerBoard[0][2] === playerBoard[1][1] && playerBoard[0][2] === playerBoard[2][0])
        return true;

    //if none of the conditions are met
    return false;
}

const placeLocation = (loc) => {
    let marker = currentPlayer === 1 ? 'X' : 'O';
    var row = Math.floor(loc / 3); // divide by number of columns
    var col = loc % 3; //modulo by number of rows

    if (loc >= 0 && loc < 9 && playerBoard[row][col] === "-"){
        playerBoard[row][col] = marker;
        printBoard(); 
        if (playerWin()){
            console.log("Player " + currentPlayer + " wins!")
        }
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    }
    else {
        console.log("Invalid location, please try again.");
    }
}

const startGame = () => {
    console.log("Welcome to Tic Tac Toe!");
    const prompt = require('prompt-sync')();
  
    while (!playerWin()){
        let input = prompt("Player " + currentPlayer + " Input: " + marker + ' Location:');
        placeLocation(input);
    }
}   
    

startGame()
