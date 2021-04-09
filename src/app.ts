import prompt from 'prompt';

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

const props = [
  {
    name: 'room',
    validator: /^\d+$/,
    warning: 'Room size can only be numbers',
  },
];

const io = (): void => {
  prompt.start();
  prompt.get(props, (err: Error, res: any) => {
    if (err) throw err;
    console.log(res.room);
  });
};

io();

// const run = (): void => {
//   setPosition(x, y, direction);
//   setRoom(width, height);

//   console.log(position, room);
// };
