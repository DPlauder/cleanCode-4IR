export default function View(){
    function createPlayerInputNames(){
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
    }

    function createPlayBoard(){

    }

    return {createPlayerInputNames}
}