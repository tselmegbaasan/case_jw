import { io } from './utils';

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

const turnLeft = (): void => {
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

  position = {
    ...position,
    direction: newDirection,
  };
};

const turnRight = (): void => {
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

  position = {
    ...position,
    direction: newDirection,
  };
};

const walkForward = (): void => {
  let currentX: number = position.x;
  let currentY: number = position.y;
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
    default:
      break;
  }

  position = {
    ...position,
    x: currentX,
    y: currentY,
  };
};

const directionsMapping: { [key: string]: () => void } = {
  L: turnLeft,
  R: turnRight,
  F: walkForward,
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
  const direction: string = positionArgs[2];

  setPosition(xPosition, yPosition, direction);

  const directionsInput: string[] = input.directions.split('');
  directionsInput.forEach((direction) => directionsMapping[direction]());

  console.log(position);
};

run();
