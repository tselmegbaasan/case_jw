import { expect } from 'chai';
import {
  isUpperCase,
  isAcceptedCharacter,
  validateCommands,
  validateCurrentPosition,
  validateRoomSize,
} from '../src/utils';

describe('Validation', () => {
  //isUppercase()
  it('for upper case should return true when all characters are upper case', () => {
    expect(isUpperCase('HELLO')).to.equal(true);
  });
  it('for upper case should return false when one or more characters is lower case', () => {
    expect(isUpperCase('Hello')).to.equal(false);
  });
  it('for upper case should return false when all characters are lower case', () => {
    expect(isUpperCase('Hello')).to.equal(false);
  });

  //isAcceptedCharacter()
  it('for accepted characters should return true if a character is accepted', () => {
    const acceptedCharacters = ['A', 'B', 'C'];
    expect(isAcceptedCharacter(acceptedCharacters, 'A')).to.equal(true);
  });
  it('for accepted characters should return false if a character is not accepted', () => {
    const acceptedCharacters = ['A', 'B', 'C'];
    expect(isAcceptedCharacter(acceptedCharacters, 'D')).to.equal(false);
  });

  //validateRoomSize()
  it('for room size input should return false if the input is empty', () => {
    expect(validateRoomSize('')).to.equal(false);
  });
  it('for room size input should return false if the input is incomplete, i.e lacks one or more argument', () => {
    expect(validateRoomSize('10')).to.equal(false);
  });
  it('for room size input should return false if the input is of wrong type, e.g character instead of a digit', () => {
    expect(validateRoomSize('A B')).to.equal(false);
  });
  it('for room size input should return true if the input is complete and correct, i.e consists of digits', () => {
    expect(validateRoomSize('10 10')).to.equal(true);
  });

  //validateCurrentPosition()
  it('for position input should return false if the input is empty', () => {
    expect(validateCurrentPosition('')).to.equal(false);
  });
  it('for position input should return false if the input is incomplete, i.e lacks one or more arguments', () => {
    expect(validateCurrentPosition('5 4')).to.equal(false);
  });
  it('for position input should return false if the input is of wrong type', () => {
    expect(validateCurrentPosition('A B C')).to.equal(false);
  });
  it('for position input should return false if the input consists of invalid characters', () => {
    expect(validateCurrentPosition('2 2 G')).to.equal(false);
  });
  it('for position input should return true if the input is complete and correct, i.e first two args are digits and last arg is E/W/S/N', () => {
    expect(validateCurrentPosition('2 2 W')).to.equal(true);
  });

  //validateCommands()
  it('for commands input should return false if input consists of one or more invalid characters', () => {
    expect(validateCommands('RFLRT')).to.equal(false);
  });
  it('for commands input should return true if input consists of only valid characters', () => {
    expect(validateCommands('RFLR')).to.equal(true);
  });
});
