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

// const leftTurn = (): void => {

// }

// const rightTurn = (): void => {

// }

// const walkForward = (): void => {

// }

const run = (width: number, height: number, x: number, y: number, direction: string) => {
    setPosition(x, y, direction);
    setRoom(width, height);

    console.log(position, room);
};

run(10, 10, 10, 10, 'A');
