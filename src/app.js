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
// let room: {
//     width: number;
//     height: number;
// };
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
    const response = yield prompts_1.default({
        type: 'text',
        name: 'roomSize',
        message: 'Please specify the size of the room in the following format: width height, for example 10 4',
        validate: (input) => input.split(" ").length === 2 && !isNaN(input.split(" ")[0]) && !isNaN(input.split(" ")[1])
    });
    console.log(response);
});
io();
// const run = (): void => {
//   setPosition(x, y, direction);
//   setRoom(width, height);
//   console.log(position, room);
// };
