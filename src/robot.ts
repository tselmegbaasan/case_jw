import Room from './room';
import Position from './position';

export default class Robot {
  position: Position;
  room: Room;

  constructor(position: Position, room: Room) {
    this.position = position;
    this.room = room;
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
        currentX < this.room.width - 1 && currentX++;
        break;
      case 'S':
        currentY < this.room.height - 1 && currentY++;
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
