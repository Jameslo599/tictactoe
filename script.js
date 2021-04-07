const gameObject = (() => {
    const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const topLeft = () => {
        let marker = document.getElementById('topLeft');
        marker.addEventListener('click', function check() {
            console.log('hi');
            marker.removeEventListener('click', check, true);
        }, true);
    };
    const topCenter = () => {
        let marker = document.getElementById('topCenter');
        marker.addEventListener('click', function check() {
            console.log('hi');
            marker.removeEventListener('click', check, true);
        }, true);
    };
    const topRight = () => {
        let marker = document.getElementById('topRight');
        marker.addEventListener('click', function check() {
            console.log('hi');
            marker.removeEventListener('click', check, true);
        }, true);
    };
    const centerLeft = () => {
        let marker = document.getElementById('centerLeft');
        marker.addEventListener('click', function check() {
            console.log('hi');
            marker.removeEventListener('click', check, true);
        }, true);
    };
    const center = () => {
        let marker = document.getElementById('center');
        marker.addEventListener('click', function check() {
            console.log('hi');
            marker.removeEventListener('click', check, true);
        }, true);
    };
    const centerRight = () => {
        let marker = document.getElementById('centerRight');
        marker.addEventListener('click', function check() {
            console.log('hi');
            marker.removeEventListener('click', check, true);
        }, true);
    };
    const bottomLeft = () => {
        let marker = document.getElementById('bottomLeft');
        marker.addEventListener('click', function check() {
            console.log('hi');
            marker.removeEventListener('click', check, true);
        }, true);
    };
    const bottomCenter = () => {
        let marker = document.getElementById('bottomCenter');
        marker.addEventListener('click', function check() {
            console.log('hi');
            marker.removeEventListener('click', check, true);
        }, true);
    };
    const bottomRight = () => {
        let marker = document.getElementById('bottomRight');
        marker.addEventListener('click', function check() {
            console.log('hi');
            marker.removeEventListener('click', check, true);
        }, true);
    };
    return {topLeft, topCenter, topRight,
        centerLeft, center, centerRight,
    bottomLeft, bottomCenter, bottomRight};
})();
const Player = (name, marker) => {
    let getName = () => name;
    let getMarker = () => {
    if (marker == 'X') {
        console.log('X')
    } else if (marker == 'O') {
        console.log('O')
        };
    };
    return {getName, getMarker};
};

let hi = () => {
    console.log('hi');
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
}