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
exports.io = void 0;
const prompts_1 = __importDefault(require("prompts"));
const includesForbiddenCharacters = (forbiddenChars, str) => {
    return forbiddenChars.some((char) => str.includes(char));
};
const validateRoomSize = (str) => {
    const splitStr = str.split(' ');
    const roomWidth = splitStr[0];
    const roomHeight = splitStr[1];
    return !isNaN(roomWidth) && !isNaN(roomHeight);
};
const isUpperCase = (str) => {
    return str.toUpperCase() === str;
};
const validateCurrentPosition = (str) => {
    const splitStr = str.split(' ');
    const xPositionStr = splitStr[0];
    const yPositionStr = splitStr[1];
    const directionStr = splitStr[2];
    const forbiddenCharacters = 'ABCDFGHIJKLMOPQRTUVXYZ'.split('');
    return (!isNaN(xPositionStr) &&
        !isNaN(yPositionStr) &&
        !includesForbiddenCharacters(forbiddenCharacters, directionStr) &&
        isUpperCase(directionStr));
};
const validateDirections = (str) => {
    const forbiddenCharacters = 'ABCDEGHIJKMNOPQSTUVWXYZ'.split('');
    return (!includesForbiddenCharacters(forbiddenCharacters, str) && isUpperCase(str));
};
const io = () => __awaiter(void 0, void 0, void 0, function* () {
    const input = yield prompts_1.default([
        {
            type: 'text',
            name: 'roomSize',
            message: 'Please enter the size of the room in the following format: width height, for example 10 4',
            validate: (input) => validateRoomSize(input),
        },
        {
            type: 'text',
            name: 'currentPosition',
            message: 'Please enter the current position of the robot in the following format: X Y DIRECTION, for example 1 2 N',
            validate: (input) => validateCurrentPosition(input),
        },
        {
            type: 'text',
            name: 'directions',
            message: 'Please enter your directions to the robot in the following format: RLFFL, where R=right turn, L=left turn and F=walk forward',
            validate: (input) => validateDirections(input),
        },
    ]);
    return input;
});
exports.io = io;
