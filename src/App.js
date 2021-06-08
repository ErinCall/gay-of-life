import React from 'react';
import './App.css';
import Gameboard from './components/Gameboard';

class App extends React.Component {
  static DEFAULT_ROWS = 50;
  static DEFAULT_COLS = 50;

  constructor(props) {
    super(props);

    const rows = props.rows || this.constructor.DEFAULT_ROWS;
    const cols = props.cols || this.constructor.DEFAULT_COLS;
    this.state = {
      cells: Array(rows).fill(null).map(() => Array(cols).fill(false)),
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Gay of Life</p>
        </header>
        <Gameboard cells={this.state.cells} />
      </div>
    );
  }
}

export default App;
