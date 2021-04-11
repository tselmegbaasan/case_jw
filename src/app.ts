import prompts from 'prompts';

let room: {
  width: number;
  height: number;
};

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

const io = async () => {
  const input = await prompts([
    {
      type: 'text',
      name: 'roomSize',
      message:
        'Please enter the size of the room in the following format: width height, for example 10 4',
      validate: (input) =>
        input.split(' ').length === 2 &&
        !isNaN(input.split(' ')[0]) &&
        !isNaN(input.split(' ')[1]),
    },
    {
      type: 'text',
      name: 'currentPosition',
      message:
        'Please enter the current position of the robot in the following format: X Y DIRECTION, for example 1 2 N',
      validate: (input) =>
        input.split(' ').length === 3 &&
        !isNaN(input.split(' ')[0]) &&
        !isNaN(input.split(' ')[1]) &&
        typeof input.split(' ')[2] === 'string' &&
        isNaN(input.split(' ')[2]),
    },
  ]);
  return input;
};

const run = async () => {
  const input = await io();
  const roomInput = input.roomSize;
  const roomSize = roomInput.split(' ');
  const roomWidth = roomSize[0];
  const roomHeight = roomSize[1];

  room = {
    width: roomWidth,
    height: roomHeight,
  };

  console.log(room);
};

run();
