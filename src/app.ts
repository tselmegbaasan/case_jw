import prompts from 'prompts';
import { io } from './utils';
import Room from './room';
import Robot from './robot';

async () => {
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
