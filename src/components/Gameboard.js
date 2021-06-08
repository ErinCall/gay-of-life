import React from 'react';

export default class Gameboard extends React.Component {
  render() {
    return (
      <div className="Gameboard">
        {this.props.cells.map((row, rowNum) =>
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
