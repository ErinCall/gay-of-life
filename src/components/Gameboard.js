import React from 'react';

const STARTING_ROWS = 50;
const STARTING_COLUMNS = 50;

function initialCellState() {
  return Math.random() < 1/50;
}

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);

    const cells = Array(STARTING_ROWS).fill(null).map(() =>
        Array(STARTING_COLUMNS).fill(null).map(initialCellState))

    this.state = {
      cells,
    };
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
