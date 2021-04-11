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
// let position: {
//     x: number;
//     y: number;
//     direction: string;
// };
// const setPosition = (x: number, y: number, direction: string): void => {
//     position = {
//         x: x,
//         y: y,
//         direction: direction,
//     };
// };
// const setRoom = (width: number, height: number): void => {
//     room = {
//         width: width,
//         height: height,
//     };
// };
// const leftTurn = (): void => {
// }
// const rightTurn = (): void => {
// }
// const walkForward = (): void => {
// }
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
                isNaN(input.split(' ')[2]),
        },
    ]);
    return input;
});
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const input = yield io();
    const roomInput = input.roomSize;
    const roomSize = roomInput.split(" ");
    const roomWidth = roomSize[0];
    const roomHeight = roomSize[1];
    room = {
        width: roomWidth,
        height: roomHeight
    };
    console.log(room);
});
run();
