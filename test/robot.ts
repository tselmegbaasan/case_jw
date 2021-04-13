import Robot from '../src/robot';
import { expect } from 'chai';
import Room from '../src/room';
import Position from '../src/position';

describe('Robot', () => {
  const room: Room = { width: 3, height: 3 };
  const northExample: Position = { x: 1, y: 1, direction: 'N' };
  const eastExample: Position = { x: 1, y: 1, direction: 'E' };
  const southExample: Position = { x: 1, y: 1, direction: 'S' };
  const westExample: Position = { x: 1, y: 1, direction: 'W' };

  //Testing turnRight() and turnLeft()
  it('should have direction east when turning right from north.', () => {
    const robot = new Robot(northExample, room);
    robot.turnRight();
    expect(robot.position.direction).to.equal('E');
  });
  it('should have direction west when turning left from north.', () => {
    const robot = new Robot(northExample, room);
    robot.turnLeft();
    expect(robot.position.direction).to.equal('W');
  });

  it('should have direction south when turning right from east.', () => {
    const robot = new Robot(eastExample, room);
    robot.turnRight();
    expect(robot.position.direction).to.equal('S');
  });
  it('should have direction north when turning left from east.', () => {
    const robot = new Robot(eastExample, room);
    robot.turnLeft();
    expect(robot.position.direction).to.equal('N');
  });

  it('should have direction west when turning right from south.', () => {
    const robot = new Robot(southExample, room);
    robot.turnRight();
    expect(robot.position.direction).to.equal('W');
  });
  it('should have direction east when turning left from south.', () => {
    const robot = new Robot(southExample, room);
    robot.turnLeft();
    expect(robot.position.direction).to.equal('E');
  });

  it('should have direction north when turning right from west.', () => {
    const robot = new Robot(westExample, room);
    robot.turnRight();
    expect(robot.position.direction).to.equal('N');
  });
  it('should have direction south when turning left from west.', () => {
    const robot = new Robot(westExample, room);
    robot.turnLeft();
    expect(robot.position.direction).to.equal('S');
  });

  //Testing walkForward()
  it('should walk forward 1 step in north direction', () => {
    const robot = new Robot(northExample, room);
    robot.walkForward();
    expect(robot.position.direction).to.equal('N');
    expect(robot.position.x).to.equal(1);
    expect(robot.position.y).to.equal(0);
  });

  it('should walk forward 1 step in south direction', () => {
    const robot = new Robot(southExample, room);
    robot.walkForward();
    expect(robot.position.direction).to.equal('S');
    expect(robot.position.x).to.equal(1);
    expect(robot.position.y).to.equal(2);
  });

  it('should walk forward 1 step in east direction', () => {
    const robot = new Robot(eastExample, room);
    robot.walkForward();
    expect(robot.position.direction).to.equal('E');
    expect(robot.position.x).to.equal(2);
    expect(robot.position.y).to.equal(1);
  });

  it('should walk forward 1 step in west direction', () => {
    const robot = new Robot(westExample, room);
    robot.walkForward();
    expect(robot.position.direction).to.equal('W');
    expect(robot.position.x).to.equal(0);
    expect(robot.position.y).to.equal(1);
  });

  it('should stay still when reaching the rooms northern limits', () => {
    const robot = new Robot(northExample, room);
    robot.walkForward();
    robot.walkForward();
    expect(robot.position.direction).to.equal('N');
    expect(robot.position.x).to.equal(1);
    expect(robot.position.y).to.equal(0);
  });

  it('should stay still when reaching the rooms southern limits', () => {
    const robot = new Robot(southExample, room);
    robot.walkForward();
    robot.walkForward();
    expect(robot.position.direction).to.equal('S');
    expect(robot.position.x).to.equal(1);
    expect(robot.position.y).to.equal(2);
  });

  it('should stay still when reaching the rooms eastern limits', () => {
    const robot = new Robot(eastExample, room);
    robot.walkForward();
    robot.walkForward();
    expect(robot.position.direction).to.equal('E');
    expect(robot.position.x).to.equal(2);
    expect(robot.position.y).to.equal(1);
  });

  it('should stay still when reaching the rooms western limits', () => {
    const robot = new Robot(westExample, room);
    robot.walkForward();
    robot.walkForward();
    expect(robot.position.direction).to.equal('W');
    expect(robot.position.x).to.equal(0);
    expect(robot.position.y).to.equal(1);
  });

  //testing followCommands()
  it('should end up at position 1 3 N when the commands are RFRFFRFRF and the starting position is 1 2 N in a 5 5 room.', () => {
    const testRoom: Room = { width: 5, height: 5 };
    const testPosition: Position = { x: 1, y: 2, direction: 'N' };
    const robot = new Robot(testPosition, testRoom);
    const commands = 'RFRFFRFRF'.split('');
    robot.followCommands(commands);
    expect(robot.position.direction).to.equal('N');
    expect(robot.position.x).to.equal(1);
    expect(robot.position.y).to.equal(3);
  });

  it('should end up at position 3 1 E when the commands are RFLFFLRF and the starting position is 0 0 E in a 5 5 room.', () => {
    const testRoom: Room = { width: 5, height: 5 };
    const testPosition: Position = { x: 0, y: 0, direction: 'E' };
    const robot = new Robot(testPosition, testRoom);
    const commands = 'RFLFFLRF'.split('');
    robot.followCommands(commands);
    expect(robot.position.direction).to.equal('E');
    expect(robot.position.x).to.equal(3);
    expect(robot.position.y).to.equal(1);
  });
});
