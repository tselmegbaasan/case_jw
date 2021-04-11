import prompts from 'prompts';

const includesForbiddenCharacters = (forbiddenChars: string[], str: string) => {
  return forbiddenChars.some((char: string) => str.includes(char));
};

export const io = async (): Promise<
  prompts.Answers<'roomSize' | 'currentPosition' | 'directions'>
> => {
  const input: prompts.Answers<string> = await prompts([
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
