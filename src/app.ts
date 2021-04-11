import prompts from 'prompts';

let room: {
  width: number;
  height: number;
};

let position: {
  x: number;
  y: number;
  direction: string;
};

const setPosition = (x: number, y: number, direction: string): void => {
  position = {
    x: x,
    y: y,
    direction: direction,
  };
};

const setRoom = (width: number, height: number): void => {
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

const includesForbiddenCharacters = (forbiddenChars: string[], str: string) => {
  return forbiddenChars.some((char: string) => str.includes(char));
};

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
        isNaN(input.split(' ')[2]) &&
        !includesForbiddenCharacters(
          'ABCDFGHIJKLMOPQRTUVXYZ'.split(''),
          input.split(' ')[2],
        ) &&
        input.split(' ')[2].toUpperCase() === input.split(' ')[2],
    },
    {
      type: 'text',
      name: 'directions',
      message:
        'Please enter your directions to the robot in the following format: RLFFL, where R=right turn, L=left turn and F=walk forward',
      validate: (input: string) =>
        !includesForbiddenCharacters(
          'ABCDEGHIJKMNOPQSTUVWXYZ'.split(''),
          input,
        ) && input.toUpperCase() === input,
    },
  ]);
  return input;
};

const run = async () => {
  const input = await io();

  const roomInput: string = input.roomSize;
  const roomSize: string[] = roomInput.split(' ');
  const roomWidth: number = +roomSize[0];
  const roomHeight: number = +roomSize[1];

  setRoom(roomWidth, roomHeight);

  const positionInput: string = input.currentPosition;
  const positionArgs: string[] = positionInput.split(' ');
  const xPosition: number = +positionArgs[0];
  const yPosition: number = +positionArgs[1];
  const direction: string = positionArgs[2].toUpperCase();

  setPosition(xPosition, yPosition, direction);

  console.log(room, position);
};

run();
