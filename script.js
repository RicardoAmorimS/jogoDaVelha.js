let board = document.querySelector('.board');
let divPlayerRound = document.querySelector('.divPlayerRound');
let playerRound = document.querySelector('#playerRound');
let divWinningMessage = document.querySelector('.divWinningMessage');
let pWinningMessage = document.querySelector('.pWinningMessage');
let tiesEmpty = 0;
let cellCombinate = [];

let namePlayer1 = '';
let sectionFormPlayer1 = document.querySelector('.sectionFormPlayer1');

let namePlayer2 = '';
let sectionFormPlayer2 = document.querySelector('.sectionFormPlayer2');

let cells = document.querySelectorAll('[data-cell]');

document.getElementById('btnReset').addEventListener('click', (ev) => {
    cells.forEach((cell) => {
        cell.classList.remove('x', 'o', 'victory');
        cell.classList.add('empty');
    });
    board.style.display = 'none';
    divWinningMessage.style.display = 'none';
    namePlayer1.value = '';
    namePlayer2.value = '';
    sectionFormPlayer1.style.display = 'flex';
    namePlayer1.focus();
    playerRound.innerText = '';
    board.classList.remove('xPlayer', 'oPlayer');
    tiesEmpty = 0;
})

const cellMark = (cell, classAdd) => {
    cell.classList.add(classAdd);
    cell.classList.remove('empty');
}

const switchPlayer = (currentPlayer, newPlayer, nameNewPlayer, move) => {
    board.classList.remove(currentPlayer);
    board.classList.add(newPlayer);
    playerRound.innerText = "Rodada: " + nameNewPlayer + " - " + move;
}

cells.forEach((event) => {
    event.addEventListener('click', (ev) => {
        let cell = ev.currentTarget;
        if (board.classList.contains("xPlayer") && cell.classList.contains("empty")) {
            cellMark(cell, 'x');
            verifyChampion('x');
            switchPlayer('xPlayer', 'oPlayer', namePlayer2.value, 'O');

        } else if (board.classList.contains("oPlayer") && cell.classList.contains("empty")) {
            cellMark(cell, 'o');
            verifyChampion('o')
            switchPlayer('oPlayer', 'xPlayer', namePlayer1.value, 'X');

        }
    })
});

function verifyChampion(currentPlayer) {
    let victoryCombination = 0;
    if (victoryCombination !== 3) {
        for (let i = 0; i <= 2; i++) {
            if (cells[i].classList.contains(currentPlayer)) {
                victoryCombination++;
                cellCombinate.push(i);
            } else {
                victoryCombination = 0;
                cellCombinate = [];
            }
        }
    }

    if (victoryCombination !== 3) {
        for (let i = 3; i <= 5; i++) {
            if (cells[i].classList.contains(currentPlayer)) {
                victoryCombination++;
                cellCombinate.push(i);
            } else {
                victoryCombination = 0;
                cellCombinate = [];
            }

        }
    }

    if (victoryCombination !== 3) {
        for (let i = 6; i <= 8; i++) {
            if (cells[i].classList.contains(currentPlayer)) {
                victoryCombination++;
                cellCombinate.push(i);
            } else {
                victoryCombination = 0;
                cellCombinate = [];
            }

        }
    }

    if (victoryCombination !== 3) {
        for (let i = 0; i <= 6; i += 3) {
            if (cells[i].classList.contains(currentPlayer)) {
                victoryCombination++;
                cellCombinate.push(i);
            } else {
                victoryCombination = 0;
                cellCombinate = [];
            }

        }
    }

    if (victoryCombination !== 3) {
        for (let i = 1; i <= 7; i += 3) {
            if (cells[i].classList.contains(currentPlayer)) {
                victoryCombination++;
                cellCombinate.push(i);
            } else {
                victoryCombination = 0;
                cellCombinate = [];
            }

        }
    }

    if (victoryCombination !== 3) {
        for (let i = 2; i <= 8; i += 3) {
            if (cells[i].classList.contains(currentPlayer)) {
                victoryCombination++;
                cellCombinate.push(i);
            } else {
                victoryCombination = 0;
                cellCombinate = [];
            }

        }
    }

    if (victoryCombination !== 3) {
        for (let i = 2; i <= 6; i += 2) {
            if (cells[i].classList.contains(currentPlayer)) {
                victoryCombination++;
                cellCombinate.push(i);
            } else {
                victoryCombination = 0;
                cellCombinate = [];
            }

        }
    }

    if (victoryCombination !== 3) {
        for (let i = 0; i <= 8; i += 4) {
            if (cells[i].classList.contains(currentPlayer)) {
                victoryCombination++;
                cellCombinate.push(i);
            } else {
                victoryCombination = 0;
                cellCombinate = [];
            }
        }
    }

    tiesEmpty += 1;
    if (victoryCombination === 3 || victoryCombination === 4) {
        cellCombinate.forEach((value) => {
            cells[value].classList.add('victory');
        });

        divWinningMessage.style.display = 'flex'
        if (currentPlayer === 'x') {
            pWinningMessage.innerText = "Vitória de " + namePlayer1.value;
        } else {
            pWinningMessage.innerText = "Vitória de " + namePlayer2.value;

        }
    } else if (tiesEmpty === 9) {
        board.style.display = 'none';
        divWinningMessage.style.display = 'flex';
        pWinningMessage.innerText = "Empate!";
    }




}

document.getElementById('buttonRegisterPlayer1').addEventListener('click', (ev) => {
    ev.preventDefault();
    namePlayer1 = document.getElementById('namePlayer1');
    if (namePlayer1.value !== '') {
        sectionFormPlayer1.style.display = 'none';
        document.querySelector('.sectionFormPlayer2').style.display = 'flex';
    } else {
        namePlayer1.style.borderColor = "#cc1a03"
        namePlayer1.focus();
    }
})

document.getElementById('buttonRegisterPlayer2').addEventListener('click', (ev) => {
    ev.preventDefault();
    namePlayer2 = document.getElementById('namePlayer2');
    if (namePlayer2.value !== '') {
        sectionFormPlayer2.style.display = 'none';
        board.style.display = 'grid';
        board.classList.add('xPlayer');
        divPlayerRound.style.display = "flex";
        playerRound.innerText = "Rodada: " + namePlayer1.value + " - X"
    } else {
        namePlayer2.style.borderColor = "#cc1a03"
        namePlayer2.focus();
    }
})