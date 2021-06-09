import React from 'react';


export default class Gameboard extends React.Component {
  Cell(alive, x, y) {
    if (alive) {
      return (<img
        className="Cell alive"
        key={x}
        onClick={() => this.props.toggleCell(x, y)}
        src={this.props.flag}
        alt={`${this.props.flagName} pride flag`}
      />);
    } else {
      return (<div
        className="Cell dead"
        key={x}
        onClick={() => this.props.toggleCell(x, y)}
      > </div> );
    }
  }
  render() {
    return (
      <div className="Gameboard">
        {this.props.cells.map((row, y) =>
          <div className="Row" key={y}>
            {row.map((alive, x) =>
              this.Cell(alive, x, y)
            )}
          </div>
        )}
      </div>
    );
  }
}
