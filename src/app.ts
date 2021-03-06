import prompts from 'prompts';
import { io } from './utils';
import Room from './room';
import Robot from './robot';
import Position from './position';

const run = async () => {
  const input: prompts.Answers<
    'roomSize' | 'currentPosition' | 'commands'
  > = await io();

  const room = createRoom(input.roomSize);
  const positon = createPosition(input.currentPosition);

  const robot = new Robot(positon, room);

  const commands: string[] = input.commands.split('');
  robot.followCommands(commands);

  console.log(
    `Report: ${robot.position.x} ${robot.position.y} ${robot.position.direction}`,
  );
};

const createRoom = (str: string): Room => {
  const roomSize: string[] = str.split(' ');
  const roomWidth: number = +roomSize[0];
  const roomHeight: number = +roomSize[1];
  return {
    width: roomWidth,
    height: roomHeight,
  };
};

const createPosition = (str: string): Position => {
  const positionArgs: string[] = str.split(' ');
  return {
    x: +positionArgs[0],
    y: +positionArgs[1],
    direction: positionArgs[2],
  };
};

run();
