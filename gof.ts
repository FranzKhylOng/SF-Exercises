//function to check if gameover (if none of the cells have alive cells) async await?
//function to print the board
//cell parent?
//is alive method to check conditions 1-3?
//will revive method only if false and condition 4?
//loop every second
//literal types for the marker x or o
//start game function?
//i could set each item in the array as new cell

//literal type
import PromptSync from 'prompt-sync';
type Marker = 'X' | 'O';
//let isGameRunning: boolean; //baka di na need to if the function itself returns a boolean

class Cell{
    isAlive: boolean;
    marker: Marker;

    constructor(isAlive:boolean, marker:Marker){ //review mosh why need ulit ng constructor
        this.isAlive = isAlive;
        this.marker = marker;
    }

    setAlive(status: boolean):void{
        this.isAlive = status;
    }
}

function makeGrid(row: number, column: number): Cell[][] {
    let myarr: Cell[][] = [];
  
    for (let i = 0; i < row; i++) {
      myarr[i] = new Array(column);
      for (let j = 0; j < column; j++) {
        let marker: Marker = Math.random() < 0.2 ? 'X' : 'O';  //80% chance to randomly spawn dead cells in the first generation
        let isAlive: boolean = marker === 'X';
        myarr[i][j] = new Cell(isAlive, marker); // maybe just have a single array pero each row is just a concatination of a bunch of cells not arrays
        console.log(myarr[i][j].marker)
      }
      console.log('\n');
    }

    return myarr;
}
//fix inconsistent array or variable names?
// function printGrid(grid:Cell[][]):void{ //is there a way to print grid without a separate function?
//     for (let i = 0; i < grid.length; i++) {
//         const row = grid[i].map((cell) => cell.marker).join(' '); //study map 
//         console.log(row);
//     }
// }

function startGame():void{
    //get row and column input from user
    const prompt = PromptSync();
    let row: number = parseInt(prompt('Enter how many rows to use: '));
    let column: number = parseInt(prompt('Enter how many columns to use: '));
    makeGrid(row, column); 
    //const myGrid = makeGrid(row, column); 
    //printGrid(myGrid);
}
//run game function makegrid once and use while loop to check gameover? to loop printing grid and checking if lose and alive
//check all dead as the function for gameover 


startGame();