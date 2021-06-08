import React from 'react';

export default class Gameboard extends React.Component {
  render() {
    return (
      <div className="Gameboard">
        {this.props.cells.map((row, y) =>
          <div className="Row" key={y}>
            {row.map((alive, x) =>
              <div className={`Cell ${alive ? 'alive' : 'dead'}`}
                   key={x}
                   onClick={() => this.props.toggleCell(x, y)}>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
