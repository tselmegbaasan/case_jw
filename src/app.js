"use strict";
var room;
var position;
var setPosition = function (x, y, direction) {
    position = {
        x: x,
        y: y,
        direction: direction,
    };
};
var setRoom = function (width, height) {
    room = {
        width: width,
        height: height,
    };
};
// const leftTurn = (): void => {
// }
// const rightTurn = (): void => {
// }
// const walkForward = (): void => {
// }
var run = function (width, height, x, y, direction) {
    setPosition(x, y, direction);
    setRoom(width, height);
    console.log(position, room);
};
run(10, 10, 10, 10, 'A');
