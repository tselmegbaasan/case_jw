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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = __importDefault(require("prompts"));
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
    console.log('turning left');
};
const turnRight = () => {
    console.log('turning right');
};
const walkForward = () => {
    console.log('walking forward');
};
const includesForbiddenCharacters = (forbiddenChars, str) => {
    return forbiddenChars.some((char) => str.includes(char));
};
const io = () => __awaiter(void 0, void 0, void 0, function* () {
    const input = yield prompts_1.default([
        {
            type: 'text',
            name: 'roomSize',
            message: 'Please enter the size of the room in the following format: width height, for example 10 4',
            validate: (input) => input.split(' ').length === 2 &&
                !isNaN(input.split(' ')[0]) &&
                !isNaN(input.split(' ')[1]),
        },
        {
            type: 'text',
            name: 'currentPosition',
            message: 'Please enter the current position of the robot in the following format: X Y DIRECTION, for example 1 2 N',
            validate: (input) => input.split(' ').length === 3 &&
                !isNaN(input.split(' ')[0]) &&
                !isNaN(input.split(' ')[1]) &&
                typeof input.split(' ')[2] === 'string' &&
                isNaN(input.split(' ')[2]) &&
                !includesForbiddenCharacters('ABCDFGHIJKLMOPQRTUVXYZ'.split(''), input.split(' ')[2]) &&
                input.split(' ')[2].toUpperCase() === input.split(' ')[2],
        },
        {
            type: 'text',
            name: 'directions',
            message: 'Please enter your directions to the robot in the following format: RLFFL, where R=right turn, L=left turn and F=walk forward',
            validate: (input) => !includesForbiddenCharacters('ABCDEGHIJKMNOPQSTUVWXYZ'.split(''), input) && input.toUpperCase() === input,
        },
    ]);
    return input;
});
const directionsMapping = {
    L: turnLeft,
    R: turnRight,
    F: walkForward
};
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const input = yield io();
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
    directionsInput.forEach(direction => directionsMapping[direction]());
    console.log(room, position);
});
run();
