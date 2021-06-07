import React from 'react';
import CellMatrix from '../internal/cell-matrix';

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    const matrix = new CellMatrix(props.rows, props.cols);
    matrix.randomize();

    this.state = {
      matrix,
    };
  }

  render() {
    return (
      <div className="Gameboard">
        {this.state.matrix.cells.map((row, rowNum) =>
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
