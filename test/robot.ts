import Room from '../src/room';
import Robot from '../src/robot';
import { expect } from 'chai';

describe('robot', () => {
  const room = new Room({ width: 5, height: 5 });
  const position = { x: 1, y: 2, direction: 'N' };
  it('should have direction east when turning right', () => {
    const robot = new Robot(position, room);
    robot.turnRight();
    expect(robot.position.direction).to.equal('E');
  });
});
