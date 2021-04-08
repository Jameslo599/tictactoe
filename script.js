const gameObject = (() => {
    const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const checkResults = (currentMarker) => {
        currentMarker = 'X';
    }
    const _crossVictory = () => {
        if (gameBoard[0] == 'X' && gameBoard[1] == 'X' && gameBoard[2] == 'X') {
            console.log('You win!');
        };
    };
    const _insertX = (location) => {
        let cross = document.createElement("i");
        cross.id = "cross";
        cross.className = "fal fa-times";
        document.getElementById(`${location}`).appendChild(cross);
    }  
    const _insertO = (location) => {
        let circle = document.createElement("i");
        circle.id = "circle";
        circle.className = "far fa-circle";
        document.getElementById(`${location}`).appendChild(circle);
    }
    const topLeft = () => {
        let marker = document.getElementById('topLeft');
        marker.addEventListener('click', function check() {
            if (player1.getMarker() == 'X') {
                _insertX('topLeft');
                gameBoard.splice(0, 1, 'X');
                _crossVictory();
            } else {
                _insertO('topLeft');
                gameBoard.splice(0, 1, 'O');};
            marker.removeEventListener('click', check);
        });
    };
    const topCenter = () => {
        let marker = document.getElementById('topCenter');
        marker.addEventListener('click', function check() {
            if (player1.getMarker() == 'X') {
                _insertX('topCenter');
                gameBoard.splice(1, 1, 'X');
                _crossVictory();
            } else {
                _insertO('topCenter');
                gameBoard.splice(1, 1, 'O');};
            marker.removeEventListener('click', check);
        });
    };
    const topRight = () => {
        let marker = document.getElementById('topRight');
        marker.addEventListener('click', function check() {
            if (player1.getMarker() == 'X') {
                _insertX('topRight');
                gameBoard.splice(2, 1, 'X');
                _crossVictory();
            } else {
                _insertO('topRight');
                gameBoard.splice(2, 1, 'O');};
            marker.removeEventListener('click', check);
        });
    };
    const centerLeft = () => {
        let marker = document.getElementById('centerLeft');
        marker.addEventListener('click', function check() {
            if (player1.getMarker() == 'X') {
                _insertX('centerLeft')
                gameBoard.splice(3, 1, 'X');
            } else {
                _insertO('centerLeft');
                gameBoard.splice(3, 1, 'O');};
            marker.removeEventListener('click', check);
        });
    };
    const center = () => {
        let marker = document.getElementById('center');
        marker.addEventListener('click', function check() {
            if (player1.getMarker() == 'X') {
                _insertX('center');
                gameBoard.splice(4, 1, 'X');
            } else {
                _insertO('center');
                gameBoard.splice(4, 1, 'O');};
            marker.removeEventListener('click', check);
        });
    };
    const centerRight = () => {
        let marker = document.getElementById('centerRight');
        marker.addEventListener('click', function check() {
            if (player1.getMarker() == 'X') {
                _insertX('centerRight');
                gameBoard.splice(5, 1, 'X');
            } else {
                _insertO('centerRight');
                gameBoard.splice(5, 1, 'O');};
            marker.removeEventListener('click', check);
        });
    };
    const bottomLeft = () => {
        let marker = document.getElementById('bottomLeft');
        marker.addEventListener('click', function check() {
            if (player1.getMarker() == 'X') {
                _insertX('bottomLeft');
                gameBoard.splice(6, 1, 'X');
            } else {
                _insertO('bottomLeft');
                gameBoard.splice(6, 1, 'O');};
            marker.removeEventListener('click', check);
        });
    };
    const bottomCenter = () => {
        let marker = document.getElementById('bottomCenter');
        marker.addEventListener('click', function check() {
            if (player1.getMarker() == 'X') {
                _insertX('bottomCenter');
                gameBoard.splice(7, 1, 'X');
            } else {
                _insertO('bottomCenter');
                gameBoard.splice(7, 1, 'O');};
            marker.removeEventListener('click', check);
        });
    };
    const bottomRight = () => {
        let marker = document.getElementById('bottomRight');
        marker.addEventListener('click', function check() {
            if (player1.getMarker() == 'X') {
                _insertX('bottomRight');
                gameBoard.splice(8, 1, 'X');
            } else {
                _insertO('bottomRight');
                gameBoard.splice(8, 1, 'O');};
            marker.removeEventListener('click', check);
        });
    };
    return {topLeft, topCenter, topRight,
        centerLeft, center, centerRight,
    bottomLeft, bottomCenter, bottomRight, gameBoard};
})();

const Player = (name, marker) => {
    let getName = () => name;
    let getMarker = () => marker;
    return {getName, getMarker};
};

let player1 = Player('james', 'X');

window.onload = () => {
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