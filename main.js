const Board = () => {
    let playBoard = [];
    let player = [];
    let colorPlayer = 0;
    class Player {
        constructor(name, color) {
            this.name = name;
            this.color = color;
            this.points = 0;
        }
    }

    function play() {

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
        const winInfo = document.createElement('div');
        winInfo.classList.add('winInfonfo', 'hidden');
        board.appendChild(winInfo);
        const p1 = document.createElement('h3');
        p1.id = 'p1';
        const p2 = document.createElement('h3');
        p2.id = 'p2';
        winInfo.appendChild(p1);
        winInfo.appendChild(p2);

        startButton.addEventListener('click', () => {
            playerInfo.classList.remove('visible');
            playerInfo.classList.add('hidden');
            winInfo.classList.remove('hidden');
            winInfo.classList.add('visible');
            const playerOne = new Player(document.getElementById('name1').value, "red");
            const playerTwo = new Player(document.getElementById('name2').value, "yellow");
            p1.innerText = document.getElementById('name1').value + ": 0";
            p1.style.color = 'red';
            p2.innerText = document.getElementById('name2').value + ": 0";
            p2.style.color = 'yellow';
            player.push(playerOne, playerTwo);
            const board = document.querySelector('.board');
            for (let row = 0; row < 6; row++) {
                playBoard[row] = [];
                for (let col = 0; col < 7; col++) {
                    const cell = document.createElement('div');
                    cell.classList.add('cell', 'empty');
                    cell.dataset.column = col;
                    cell.dataset.row = row;
                    playBoard[row][col] = cell;
                    board.appendChild(cell);
                }
            }player
            document.querySelectorAll('.cell').forEach((cell) => {
                cell.addEventListener('click', () => {
                    const column = parseInt(cell.dataset.column);
                    checkWin(column);

                });
            });
        });

        document.getElementById('reset').addEventListener('click', () => {
            const cells = document.querySelectorAll('.cell');
            cells.forEach((cell) => {
                cell.classList.remove('red', 'yellow');
                cell.classList.add('empty');
            });

            playBoard = [];
            player = [];
            const playerInfo = document.querySelector('.playerinfo');
            playerInfo.classList.remove('hidden');
            playerInfo.classList.add('visible');
            const board = document.querySelector('.board');
            board.innerHTML = "";
            winInfo.classList.remove('visible');
            winInfo.classList.add('hidden');
        });
    }

    function y(row, col) {
        function x(dx, dy) {
            let count = 1;
            let r = row + dx;
            let c = col + dy;
            while (r >= 0 && r < 6 && c >= 0 && c < 7 && playBoard[r][c].classList.contains(player[colorPlayer].color)) {
                count++;
                r += dx;
                c += dy;
            }
            return count >= 4;
        }

        return (x(1, 0) || x(0, 1) || x(1, 1) || x(1, -1));
    }

    function checkWin(column) {
        for (let row = 5; row >= 0; row--) {
            const cell = playBoard[row][column];
            if (cell.classList.contains('empty')) {
                cell.classList.remove('empty');
                cell.classList.add(player[colorPlayer].color);
                if (y(row, column)) {
                    setTimeout(() => {
                        alert(`${player[colorPlayer].name} winInfons!`);
                        player[colorPlayer].points++;
                        if(player[colorPlayer].color === 'red') {
                            const w = document.getElementById('p1');
                            w.innerText = player[colorPlayer].name + ": " + player[colorPlayer].points.toString();
                        }
                        else {
                            const w = document.getElementById('p2');
                            w.innerText = player[colorPlayer].name + ": " + player[colorPlayer].points.toString();
                        }
                        const cells = document.querySelectorAll('.cell');
                        cells.forEach((cell) => {
                            cell.classList.remove('red', 'yellow');
                            cell.classList.add('empty');
                        });
                    }, 100);
                } else {
                    colorPlayer = player[colorPlayer].color === 'red' ? 1 : 0;
                }
                return;
            }
        }
    } 

    return {
        play,
    };
};


const game = Board();
game.play();


