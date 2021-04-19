const gameObject = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let victoryState = 0;
    let turnNumber = 0;
    let resultModal = document.getElementById('resultModal');
    //Registers a victory for three 'X's in a row
    const _crossVictory = () => {
        if (gameBoard[0] == 'X' && gameBoard[1] == 'X' && gameBoard[2] == 'X') {
            document.getElementById("xWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[0] == 'X' && gameBoard[3] == 'X' && gameBoard[6] == 'X') {
            document.getElementById("xWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[0] == 'X' && gameBoard[4] == 'X' && gameBoard[8] == 'X') {
            document.getElementById("xWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[1] == 'X' && gameBoard[4] == 'X' && gameBoard[7] == 'X') {
            document.getElementById("xWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[2] == 'X' && gameBoard[4] == 'X' && gameBoard[6] == 'X') {
            document.getElementById("xWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[2] == 'X' && gameBoard[5] == 'X' && gameBoard[8] == 'X') {
            document.getElementById("xWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[3] == 'X' && gameBoard[4] == 'X' && gameBoard[5] == 'X') {
            document.getElementById("xWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[6] == 'X' && gameBoard[7] == 'X' && gameBoard[8] == 'X') {
            document.getElementById("xWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        };
    };
    //Registers a victory for three 'O's in a row
    const _circleVictory = () => {
        if (gameBoard[0] == 'O' && gameBoard[1] == 'O' && gameBoard[2] == 'O') {
            document.getElementById("oWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[0] == 'O' && gameBoard[3] == 'O' && gameBoard[6] == 'O') {
            document.getElementById("oWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[0] == 'O' && gameBoard[4] == 'O' && gameBoard[8] == 'O') {
            document.getElementById("oWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[1] == 'O' && gameBoard[4] == 'O' && gameBoard[7] == 'O') {
            document.getElementById("oWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[2] == 'O' && gameBoard[4] == 'O' && gameBoard[6] == 'O') {
            document.getElementById("oWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[2] == 'O' && gameBoard[5] == 'O' && gameBoard[8] == 'O') {
            document.getElementById("oWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[3] == 'O' && gameBoard[4] == 'O' && gameBoard[5] == 'O') {
            document.getElementById("oWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        } else if (gameBoard[6] == 'O' && gameBoard[7] == 'O' && gameBoard[8] == 'O') {
            document.getElementById("oWin").removeAttribute("hidden");
            resultModal.style.display = "block";
            victoryState = 1;
        };
    };
    //Registers a tie if nobody can get three in a row
    const _tieGame = () => {
        if (victoryState == 0 && turnNumber == 9) {
            document.getElementById("tieGame").removeAttribute("hidden");
            resultModal.style.display = "block";
        } else {};
    };
    //Populates a 'X'
    const _insertX = (location) => {
        let cross = document.createElement("i");
        cross.id = "cross";
        cross.className = "fal fa-times puff-in-center";
        document.getElementById(`${location}`).appendChild(cross);
    };
    //Populates a 'O'
    const _insertO = (location) => {
        let circle = document.createElement("i");
        circle.id = "circle";
        circle.className = "far fa-circle puff-in-center";
        document.getElementById(`${location}`).appendChild(circle);
    };
    //Starts the game
    const startGame = () => {
        gameObject.topLeft();
        gameObject.topCenter();
        gameObject.topRight();
        gameObject.centerLeft();
        gameObject.center();
        gameObject.centerRight();
        gameObject.bottomLeft();
        gameObject.bottomCenter();
        gameObject.bottomRight();
        };
    //Restarts the Game
    const restartGame = () => {
        gameBoard.splice(0, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8);
        victoryState = 0;
        turnNumber = 0;
        let old_element = document.getElementsByClassName('boardButton');
        for (let i=0; i<old_element.length; i++) {
           while (old_element[i].firstChild) {
               old_element[i].removeChild(old_element[i].firstChild);
           }
            let new_element = old_element[i].cloneNode(true);
            old_element[i].parentNode.replaceChild(new_element, old_element[i]);
        };
    };
    //Allows top left block to spawn either 'X' or 'O'
    const topLeft = () => {
        let marker = document.getElementById('topLeft');
        marker.addEventListener('click', function check() {
            turnNumber++;
            if (player.getMarker() == 'X') {
                _insertX('topLeft');
                gameBoard.splice(0, 1, 'X');
                _crossVictory();
                _tieGame();
            } else {
                _insertO('topLeft');
                gameBoard.splice(0, 1, 'O');
                _circleVictory();
                _tieGame();};
            gameFlow.swapPlayers();
            marker.removeEventListener('click', check);
        });
    };
    //Allows top center block to spawn either 'X' or 'O'
    const topCenter = () => {
        let marker = document.getElementById('topCenter');
        marker.addEventListener('click', function check() {
            turnNumber++;
            if (player.getMarker() == 'X') {
                _insertX('topCenter');
                gameBoard.splice(1, 1, 'X');
                _crossVictory();
                _tieGame();
            } else {
                _insertO('topCenter');
                gameBoard.splice(1, 1, 'O');
                _circleVictory();
                _tieGame();};
            gameFlow.swapPlayers();
            marker.removeEventListener('click', check);
        });
    };
    //Allows top right block to spawn either 'X' or 'O'
    const topRight = () => {
        let marker = document.getElementById('topRight');
        marker.addEventListener('click', function check() {
            turnNumber++;
            if (player.getMarker() == 'X') {
                _insertX('topRight');
                gameBoard.splice(2, 1, 'X');
                _crossVictory();
                _tieGame();
            } else {
                _insertO('topRight');
                gameBoard.splice(2, 1, 'O');
                _circleVictory();
                _tieGame();};
            gameFlow.swapPlayers();
            marker.removeEventListener('click', check);
        });
    };
    //Allows center left block to spawn either 'X' or 'O'
    const centerLeft = () => {
        let marker = document.getElementById('centerLeft');
        marker.addEventListener('click', function check() {
            turnNumber++;
            if (player.getMarker() == 'X') {
                _insertX('centerLeft')
                gameBoard.splice(3, 1, 'X');
                _crossVictory();
                _tieGame();
            } else {
                _insertO('centerLeft');
                gameBoard.splice(3, 1, 'O');
                _circleVictory();
                _tieGame();};
            gameFlow.swapPlayers();
            marker.removeEventListener('click', check);
        });
    };
    //Allows center block to spawn either 'X' or 'O'
    const center = () => {
        let marker = document.getElementById('center');
        marker.addEventListener('click', function check() {
            turnNumber++;
            if (player.getMarker() == 'X') {
                _insertX('center');
                gameBoard.splice(4, 1, 'X');
                _crossVictory();
                _tieGame();
            } else {
                _insertO('center');
                gameBoard.splice(4, 1, 'O');
                _circleVictory();
                _tieGame();};
            gameFlow.swapPlayers();
            marker.removeEventListener('click', check);
        });
    };
    //Allows center right block to spawn either 'X' or 'O'
    const centerRight = () => {
        let marker = document.getElementById('centerRight');
        marker.addEventListener('click', function check() {
            turnNumber++;
            if (player.getMarker() == 'X') {
                _insertX('centerRight');
                gameBoard.splice(5, 1, 'X');
                _crossVictory();
                _tieGame();
            } else {
                _insertO('centerRight');
                gameBoard.splice(5, 1, 'O');
                _circleVictory();
                _tieGame();};
            gameFlow.swapPlayers();
            marker.removeEventListener('click', check);
        });
    };
    //Allows bottom left block to spawn either 'X' or 'O'
    const bottomLeft = () => {
        let marker = document.getElementById('bottomLeft');
        marker.addEventListener('click', function check() {
            turnNumber++;
            if (player.getMarker() == 'X') {
                _insertX('bottomLeft');
                gameBoard.splice(6, 1, 'X');
                _crossVictory();
                _tieGame();
            } else {
                _insertO('bottomLeft');
                gameBoard.splice(6, 1, 'O');
                _circleVictory();
                _tieGame();};
            gameFlow.swapPlayers();
            marker.removeEventListener('click', check);
        });
    };
    //Allows bottom center block to spawn either 'X' or 'O'
    const bottomCenter = () => {
        let marker = document.getElementById('bottomCenter');
        marker.addEventListener('click', function check() {
            turnNumber++;
            if (player.getMarker() == 'X') {
                _insertX('bottomCenter');
                gameBoard.splice(7, 1, 'X');
                _crossVictory();
                _tieGame();
            } else {
                _insertO('bottomCenter');
                gameBoard.splice(7, 1, 'O');
                _circleVictory();
                _tieGame();};
            gameFlow.swapPlayers();
            marker.removeEventListener('click', check);
        });
    };
    //Allows bottom right block to spawn either 'X' or 'O'
    const bottomRight = () => {
        let marker = document.getElementById('bottomRight');
        marker.addEventListener('click', function check() {
            turnNumber++;
            if (player.getMarker() == 'X') {
                _insertX('bottomRight');
                gameBoard.splice(8, 1, 'X');
                _crossVictory();
                _tieGame();
            } else {
                _insertO('bottomRight');
                gameBoard.splice(8, 1, 'O');
                _circleVictory();
                _tieGame();};
            gameFlow.swapPlayers();
            marker.removeEventListener('click', check);
        });
    };
    return {topLeft, topCenter, topRight,
        centerLeft, center, centerRight,
    bottomLeft, bottomCenter, bottomRight, startGame, restartGame};
})();

//Generates a player that is used for the game
const Player = (name, marker) => {
    let getName = () => name;
    let getMarker = () => marker;
    return {getName, getMarker};
};

let player = Player('james', 'O');
originalMarker = 'O';
let currentPlayer = 1;

//Allows regular alternation between players during the game
const gameFlow = (() => {
    const swapPlayers = () => {
        if (currentPlayer == 1) {
            player = Player('sivanna', 'X');
            currentPlayer = 2;
            } else if (currentPlayer == 2) {
                player = Player('james', 'O');
                currentPlayer = 1;
                }; 
    };
    return {swapPlayers};
})();

//Click button to start the game
let start = document.getElementById('start');
start.addEventListener('click', function check() {
    gameObject.startGame();
    start.removeEventListener('click', check)});

//Restarts all game values and clears the board
let restart = document.getElementById('restart');
let restartRound = () => {
    //start = "";
    gameObject.restartGame();
    gameObject.startGame();
    player = Player('james', originalMarker);
    if (originalMarker == 'O') {
        currentPlayer = 1;
    } else { currentPlayer = 2;}
    };
restart.addEventListener('click', restartRound)

//Info Modal
let playerName = document.getElementById('editButton');
let modal = document.getElementById('modalContainer');
let span = document.getElementById('close');
//Populates the modal
playerName.onclick = () => {
    modal.style.display = 'block';
}
//Closes modal
span.onclick = () => {
    modal.style.display = "none";
};

//Closes results modal when clicking outside of the text
window.onclick = (event) => {
    if (event.target == resultModal) {
        resultModal.style.display = "none";
        restartRound();
        document.getElementById("xWin").setAttribute("hidden", true);
        document.getElementById("oWin").setAttribute("hidden", true);
        document.getElementById("tieGame").setAttribute("hidden", true)
    };
};

//Sends custom names and markers to the display and restarts the round
let form = document.getElementById('form');
let submitForm = (event) => {
    event.preventDefault();
    modal.style.display = "none";
    let player1Display = document.getElementById('player1Display');
    let customPlayer1 = document.getElementById('player1').value;
    player1Display.textContent = customPlayer1;
    let player2Display = document.getElementById('player2Display');
    let customPlayer2 = document.getElementById('player2').value;
    player2Display.textContent = customPlayer2;
    let checkBox = document.getElementById('mainBox');
    if (checkBox.checked == true) {
        player = Player(customPlayer1, 'X');
        originalMarker = 'X';
        currentPlayer = 2;
        restartRound();
    } else {
        player = Player(customPlayer1, 'O');
        originalMarker = 'O';
        restartRound();
    };
};
form.addEventListener('submit', submitForm);





