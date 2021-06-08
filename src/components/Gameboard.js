import React from 'react';

export default class Gameboard extends React.Component {
  static DEFAULT_ROWS = 50;
  static DEFAULT_COLS = 50;
  static RANDOM_ALIVE_CHANCE = 1/50;

  static randomized(cells) {
    return cells.map(row =>
      row.map(() => Math.random() < this.RANDOM_ALIVE_CHANCE)
    );
  }

  static nextGeneration(cells) {
    return cells.map((row, y) =>
      row.map((alive, x) => {
        const livingNeighbors = this.livingNeighbors(cells, x, y);
        return livingNeighbors === 3 || (alive && livingNeighbors === 2)
      })
    );
  }

  static livingNeighbors(cells, x, y) {
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

  constructor(props) {
    super(props);
    const rows = props.rows || this.DEFAULT_ROWS;
    const cols = props.cols || this.DEFAULT_COLS;

    let cells = Array(rows).fill(null)
        .map(() => Array(cols).fill(false));
    cells = this.constructor.randomized(cells);

    this.state = {
      cells,
    };
  }

  tick() {
    this.setState({
      ...this.state,
      cells: this.constructor.nextGeneration(this.state.cells),
    });
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
