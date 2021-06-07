const DEFAULT_ROWS = 50;
const DEFAULT_COLS = 50;
const RANDOM_ALIVE_CHANCE = 1/50;

export default class CellMatrix {
  constructor(rows=DEFAULT_ROWS, cols=DEFAULT_COLS) {
    this.cells = Array(rows).fill(null)
      .map(() => Array(cols).fill(false));
  }

  randomize() {
    this.cells.forEach((_, y) => {
      this.cells.forEach((_, x) => {
        this.cells[y][x] = Math.random() < RANDOM_ALIVE_CHANCE;
      });
    });
  }

  tick() {
    const newCells = this.cells.map(row => Array(row.length).fill(false));
    for (let y = 0; y < this.cells.length; y++) {
      for (let x = 0; x < this.cells[y].length; x++) {
        const livingNeighbors = this.livingNeighbors(x, y);
        if (livingNeighbors === 3 || (this.cells[y][x] && livingNeighbors === 2)) {
          newCells[y][x] = true;
        }
      }
    }

    this.cells = newCells;
  }

  livingNeighbors(x, y) {
    return [
      this.neighborUL(x,y), this.neighborU(x,y), this.neighborUR(x,y),
      this.neighborL(x,y),                       this.neighborR(x,y),
      this.neighborDL(x,y), this.neighborD(x,y), this.neighborDR(x,y),
    ].reduce((count, alive) => alive ? count + 1 : count, 0);
  }

  neighborUL(x, y) {
    if (x <= 0 || y <= 0) {
      return false;
    }
    return this.cells[y-1][x-1];
  }

  neighborU(x, y) {
    if (y <= 0) {
      return false;
    }
    return this.cells[y-1][x];
  }

  neighborUR(x, y) {
    if (y <= 0 || x >= this.cells[y].length-1) {
      return false;
    }
    return this.cells[y-1][x+1];
  }

  neighborR(x, y) {
    if (x >= this.cells[y].length-1) {
      return false;
    }
    return this.cells[y][x+1];
  }

  neighborDR(x, y) {
    if (y >= this.cells.length-1 || x >= this.cells[y].length-1) {
      return false;
    }
    return this.cells[y+1][x+1];
  }

  neighborD(x, y) {
    if (y >= this.cells.length-1) {
      return false;
    }
    return this.cells[y+1][x];
  }

  neighborDL(x, y) {
    if (y >= this.cells.length-1 || x <= 0) {
      return false;
    }
    return this.cells[y+1][x-1];
  }

  neighborL(x, y) {
    if (x <= 0) {
      return false;
    }
    return this.cells[y][x-1];
  }
}
