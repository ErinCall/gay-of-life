import React from 'react';

const STARTING_ROWS = 50;
const STARTING_COLUMNS = 50;

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(STARTING_ROWS).fill(null).map(() =>
        Array(STARTING_COLUMNS).fill(false)
      ),
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
