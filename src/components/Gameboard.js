import React from 'react';

const DEFAULT_ROWS = 50;
const DEFAULT_COLS = 50;
const RANDOM_ALIVE_CHANCE = 1/50;

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    const rows = props.rows || DEFAULT_ROWS;
    const cols = props.cols || DEFAULT_COLS;

    let cells = Array(rows).fill(null)
        .map(() => Array(cols).fill(false));
    cells = this.randomized(cells);

    this.state = {
      cells,
    };
  }

  randomized(cells) {
    return cells.map(row =>
      row.map(() => Math.random() < RANDOM_ALIVE_CHANCE)
    );
  }

  tick() {
    const newCells = this.state.cells.map(row => Array(row.length).fill(false));
    for (let y = 0; y < this.state.cells.length; y++) {
      for (let x = 0; x < this.state.cells[y].length; x++) {
        const livingNeighbors = this.livingNeighbors(x, y);
        if (livingNeighbors === 3 || (this.state.cells[y][x] && livingNeighbors === 2)) {
          newCells[y][x] = true;
        }
      }
    }

    this.state = {
      ...this.state,
      cells: newCells,
    };
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
    return this.state.cells[y-1][x-1];
  }

  neighborU(x, y) {
    if (y <= 0) {
      return false;
    }
    return this.state.cells[y-1][x];
  }

  neighborUR(x, y) {
    if (y <= 0 || x >= this.state.cells[y].length-1) {
      return false;
    }
    return this.state.cells[y-1][x+1];
  }

  neighborR(x, y) {
    if (x >= this.state.cells[y].length-1) {
      return false;
    }
    return this.state.cells[y][x+1];
  }

  neighborDR(x, y) {
    if (y >= this.state.cells.length-1 || x >= this.state.cells[y].length-1) {
      return false;
    }
    return this.state.cells[y+1][x+1];
  }

  neighborD(x, y) {
    if (y >= this.state.cells.length-1) {
      return false;
    }
    return this.state.cells[y+1][x];
  }

  neighborDL(x, y) {
    if (y >= this.state.cells.length-1 || x <= 0) {
      return false;
    }
    return this.state.cells[y+1][x-1];
  }

  neighborL(x, y) {
    if (x <= 0) {
      return false;
    }
    return this.state.cells[y][x-1];
  }

  render() {
    return (
      <div className="Gameboard">
        {this.state.cells.map((row, rowNum) =>
          <div className="Row" key={rowNum}>
            {row.map((alive, colNum) =>
              <div className={`Cell ${alive ? 'alive' : 'dead'}`} key={colNum}></div>
            )}
          </div>
        )}
      </div>
    );
  }
}
