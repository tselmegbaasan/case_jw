"use strict";
var room;
var position;
var setPosition = function (x, y, direction) {
    position = {
        x: x,
        y: y,
        direction: direction
    };
    console.log(position);
};
setPosition(10, 4, 'S');
