import prompts from 'prompts';
import { io } from './utils';

export class Room {
  size: {
    width: number;
    height: number;
  };

  constructor(size: { width: number; height: number }) {
    this.size = size;
  }
}

export class Robot {
  position: {
    x: number;
    y: number;
    direction: string;
  };

  location: Room;

  constructor(
    position: { x: number; y: number; direction: string },
    location: Room,
  ) {
    this.position = position;
    this.location = location;
  }

  turnLeft = (): void => {
    let newDirection = '';
    switch (this.position.direction) {
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

    this.position = {
      ...this.position,
      direction: newDirection,
    };
  };

  turnRight = (): void => {
    let newDirection = '';
    switch (this.position.direction) {
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

    this.position = {
      ...this.position,
      direction: newDirection,
    };
  };

  walkForward = (): void => {
    let currentX: number = this.position.x;
    let currentY: number = this.position.y;
    switch (this.position.direction) {
      case 'N':
        currentY >= 1 && currentY--;
        break;
      case 'E':
        currentX < this.location.size.width && currentX++;
        break;
      case 'S':
        currentY < this.location.size.height && currentY++;
        break;
      case 'W':
        currentX >= 1 && currentX--;
        break;
      default:
        break;
    }

    this.position = {
      ...this.position,
      x: currentX,
      y: currentY,
    };
  };
}

const run = async () => {
  const input: prompts.Answers<
    'roomSize' | 'currentPosition' | 'directions'
  > = await io();

  const roomInput: string = input.roomSize;
  const roomSize: string[] = roomInput.split(' ');
  const roomWidth: number = +roomSize[0];
  const roomHeight: number = +roomSize[1];

  const room = new Room({ width: roomWidth, height: roomHeight });

  const positionInput: string = input.currentPosition;
  const positionArgs: string[] = positionInput.split(' ');
  const xPosition: number = +positionArgs[0];
  const yPosition: number = +positionArgs[1];
  const direction: string = positionArgs[2];

  const robot = new Robot(
    { x: xPosition, y: yPosition, direction: direction },
    room,
  );

  const commandoMapping: { [key: string]: () => void } = {
    L: robot.turnLeft,
    R: robot.turnRight,
    F: robot.walkForward,
  };

  const directionsInput: string[] = input.directions.split('');
  directionsInput.forEach((direction) => commandoMapping[direction]());

  console.log(
    `Report: ${robot.position.x} ${robot.position.y} ${robot.position.direction}`,
  );
};

run();
