import prompts from 'prompts';

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

const io = async () => {
  const response = await prompts({
    type: 'text',
    name: 'roomSize',
    message:
      'Please specify the size of the room in the following format: width height, for example 10 4',
    validate: (input: any) =>
      input.split(' ').length === 2 &&
      !isNaN(input.split(' ')[0]) &&
      !isNaN(input.split(' ')[1]),
  });

  console.log(response);
};

io();

// const run = (): void => {
//   setPosition(x, y, direction);
//   setRoom(width, height);

//   console.log(position, room);
// };
