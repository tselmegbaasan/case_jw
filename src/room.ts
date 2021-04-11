export default class Room {
  size: {
    width: number;
    height: number;
  };

  constructor(size: { width: number; height: number }) {
    this.size = size;
  }
}
