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

  nextGeneration() {
    return this.state.cells.map((row, y) =>
      row.map((alive, x) => {
        const livingNeighbors = this.livingNeighbors(this.state.cells, x, y);
        return livingNeighbors === 3 || (alive && livingNeighbors === 2)
      })
    );
  }

  tick() {
    this.setState({
      ...this.state,
      cells: this.nextGeneration(),
    });
  }

  livingNeighbors(cells, x, y) {
    const neighborCoordinates = [
      [x-1, y-1], [x, y-1], [x+1, y-1],
      [x-1,   y],           [x+1,   y],
      [x-1, y+1], [x, y+1], [x+1, y+1],
    ].filter(([x, y]) =>
      y >= 0 &&
      y < cells.length &&
      x >= 0 &&
      x < cells[y].length
    );

    return neighborCoordinates.map(([x, y]) => cells[y][x])
      .filter(alive => alive)
      .length;
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
