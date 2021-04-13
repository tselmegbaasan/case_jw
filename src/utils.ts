import prompts from 'prompts';

export const isAcceptedCharacter = (
  acceptedCharacters: string[],
  str: string,
) => {
  return acceptedCharacters.some((char: string) => str.includes(char));
};

export const validateRoomSize = (str: string): boolean => {
  const splitStr: string[] = str.split(' ');
  const roomWidth: string = splitStr[0];
  const roomHeight: string = splitStr[1];
  return !isNaN(roomWidth as any) && !isNaN(roomHeight as any);
};

export const isUpperCase = (str: string) => {
  return str.toUpperCase() === str;
};

export const validateCurrentPosition = (str: string): boolean => {
  const splitStr: string[] = str.split(' ');
  const xPositionStr: string = splitStr[0];
  const yPositionStr: string = splitStr[1];
  const directionStr: string = splitStr[2];

  const acceptedCharacters: string[] = ['N', 'E', 'S', 'W'];
  return (
    !isNaN(xPositionStr as any) &&
    !isNaN(yPositionStr as any) &&
    isAcceptedCharacter(acceptedCharacters, directionStr) &&
    isUpperCase(directionStr) &&
    str !== ''
  );
};

export const validateCommands = (str: string): boolean => {
  const acceptedCharacters: string[] = ['R', 'L', 'F'];

  return (
    str
      .split('')
      .every((char: string) => isAcceptedCharacter(acceptedCharacters, char)) &&
    isUpperCase(str)
  );
};

export const io = async (): Promise<
  prompts.Answers<'roomSize' | 'currentPosition' | 'commands'>
> => {
  const input: prompts.Answers<string> = await prompts([
    {
      type: 'text',
      name: 'roomSize',
      message:
        'Please enter the size of the room in the following format: width height, for example 10 4',
      validate: (input: string) => validateRoomSize(input),
    },
    {
      type: 'text',
      name: 'currentPosition',
      message:
        'Please enter the current position of the robot in the following format: X Y DIRECTION, for example 1 2 N',
      validate: (input: string) => validateCurrentPosition(input),
    },
    {
      type: 'text',
      name: 'commands',
      message:
        'Please enter your commands to the robot in the following format: RLFFL, where R=right turn, L=left turn and F=walk forward',
      validate: (input: string) => validateCommands(input),
    },
  ]);
  return input;
};
