class Player {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.wins = 0;
    }
}
class Game{
    constructor(){
        this.playBoard = [];
        this.player = [];
        this.colorPlayer = 0;
    }
    setPlayer(playerOne, playerTwo){
        this.player.push(playerOne, playerTwo)
    }
    setPlayBoard(board){
        this.playBoard = board;
    }
    resetPlayBoard(){
        this.board = [];
    }
}

function createPlayerInputNamesDiv(game){ // erstellt Eingabebereich und Punktezähler
    const board = document.querySelector('.game');
    const playerInfo = document.createElement('div');
    const playerOneName = document.createElement('laboardl');
    const playerOneInfo = document.createElement('input');
    playerOneName.innerHTML = "Player 1: ";
    playerOneInfo.setAttribute('type', 'text');
    playerInfo.classList.add('playerinfo', 'visible');
    playerOneInfo.id = 'name1';
    board.appendChild(playerInfo);
    playerInfo.appendChild(playerOneName);
    playerInfo.appendChild(playerOneInfo);
    const playerTwoName = document.createElement('laboardl');
    playerTwoName.innerHTML = "Player 2: ";
    const playerTwoInfo = document.createElement('input');
    playerTwoInfo.setAttribute('type', 'text');
    playerTwoInfo.id = 'name2';
    playerInfo.appendChild(playerTwoName);
    playerInfo.appendChild(playerTwoInfo);
    const startButton = document.createElement('button');
    startButton.textContent = 'Submit';
    startButton.id = 'pbtn';
    playerInfo.appendChild(startButton);
    const resetButton = document.createElement('button');
    resetButton.innerHTML = "Reset";
    resetButton.id = 'reset';
    resetButton.classList.add('hidden');
    board.appendChild(resetButton);


// Punktezählerbereich-----------------------------------------------------
    const winInfo = document.createElement('div');
    winInfo.classList.add('wininfo', 'hidden');
    board.appendChild(winInfo);
    const p1 = document.createElement('h3');
    p1.id = 'p1';
    const p2 = document.createElement('h3');
    p2.id = 'p2';
    winInfo.appendChild(p1);
    winInfo.appendChild(p2);
    p1.innerText = document.getElementById('name1').value + ": 0";
    p1.style.color = 'red';
    p2.innerText = document.getElementById('name2').value + ": 0";
    p2.style.color = 'yellow';
}

function createGameBoard(game){ // erstellt html und backend Board
    const playBoardDisplay = document.querySelector('.board');

    let playBoard = [];
    for (let row = 0; row < 6; row++) {
        playBoard[row] = [];
        for (let col = 0; col < 7; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell', 'empty');
            cell.dataset.column = col;
            cell.dataset.row = row;
            playBoard[row][col] = cell;
            playBoardDisplay.appendChild(cell);
        }
    }

}

function getPlayerNames(game){
    const subButton = document.getElementById('pbtn');
    subButton.addEventListener('click', () => {
        const playerOne = new Player(document.getElementById('name1').value, "red");
        const playerTwo = new Player(document.getElementById('name2').value, "yellow");
        game.setPlayer(playerOne, playerTwo)
        changeDisplayPlayerInfo()

    });
}
function changeDisplayPlayerInfo(){
    const playerInfo = document.querySelector('.playerinfo');
    const winInfo = document.querySelector('.wininfo');
    const resetButton = document.getElementById('reset')
    playerInfo.classList.toggle('visible');
    playerInfo.classList.toggle('hidden');
    winInfo.classList.toggle('visible');
    winInfo.classList.toggle('hidden')
    resetButton.classList.toggle('visible');
    resetButton.classList.toggle('hidden');
}

function reset(game){
    document.getElementById('reset').addEventListener('click', () => {
        const cells = document.querySelectorAll('.cell');
        const board = document.querySelectorAll('.board');
        board.innerHTML = "";
            cells.forEach((cell) => {
                cell.classList.remove('red', 'yellow');
                cell.classList.add('empty');
                
            });
        game.resetPlayBoard();
        changeDisplayPlayerInfo();
    })
}

function init() {
    const game = new Game();
    createPlayerInputNamesDiv(game);
    getPlayerNames(game);
    createGameBoard(game);
    reset(game);
}


init();