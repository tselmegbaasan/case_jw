"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
let room;
let position;
const setPosition = (x, y, direction) => {
    position = {
        x: x,
        y: y,
        direction: direction,
    };
};
const setRoom = (width, height) => {
    room = {
        width: width,
        height: height,
    };
};
const turnLeft = () => {
    let newDirection = '';
    switch (position.direction) {
        case 'N':
            newDirection = 'W';
            break;
        case 'E':
            newDirection = 'N';
            break;
        case 'S':
            newDirection = 'E';
            break;
        case 'W':
            newDirection = 'S';
            break;
        default:
            break;
    }
    position = Object.assign(Object.assign({}, position), { direction: newDirection });
};
const turnRight = () => {
    let newDirection = '';
    switch (position.direction) {
        case 'N':
            newDirection = 'E';
            break;
        case 'E':
            newDirection = 'S';
            break;
        case 'S':
            newDirection = 'W';
            break;
        case 'W':
            newDirection = 'N';
            break;
        default:
            break;
    }
    position = Object.assign(Object.assign({}, position), { direction: newDirection });
};
const walkForward = () => {
    let currentX = position.x;
    let currentY = position.y;
    switch (position.direction) {
        case 'N':
            currentY < room.height && currentY++;
            break;
        case 'E':
            currentX < room.width && currentX++;
            break;
        case 'S':
            currentY >= 1 && currentY--;
            break;
        case 'W':
            currentX >= 1 && currentX--;
            break;
        default: break;
    }
    position = Object.assign(Object.assign({}, position), { x: currentX, y: currentY });
};
const directionsMapping = {
    L: turnLeft,
    R: turnRight,
    F: walkForward,
};
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const input = yield utils_1.io();
    const roomInput = input.roomSize;
    const roomSize = roomInput.split(' ');
    const roomWidth = +roomSize[0];
    const roomHeight = +roomSize[1];
    setRoom(roomWidth, roomHeight);
    const positionInput = input.currentPosition;
    const positionArgs = positionInput.split(' ');
    const xPosition = +positionArgs[0];
    const yPosition = +positionArgs[1];
    const direction = positionArgs[2];
    setPosition(xPosition, yPosition, direction);
    const directionsInput = input.directions.split('');
    directionsInput.forEach((direction) => directionsMapping[direction]());
    console.log(position);
});
run();
