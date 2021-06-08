import React from 'react';
import './App.css';
import Gameboard from './components/Gameboard';
import TickButton from './components/TickButton';
import {nextGeneration, randomized} from './internal/gayOfLife';

class App extends React.Component {
  static DEFAULT_ROWS = 50;
  static DEFAULT_COLS = 50;

  constructor(props) {
    super(props);

    const rows = props.rows || this.constructor.DEFAULT_ROWS;
    const cols = props.cols || this.constructor.DEFAULT_COLS;
    this.state = {
      tickerID: null,
      cells: Array(rows).fill(null).map(() => Array(cols).fill(false)),
    };
  }

  tick() {
    this.setState({
      cells: nextGeneration(this.state.cells),
    });
  }

  toggleCell(x, y) {
    const cells = this.state.cells.slice();
    cells[y][x] = ! cells[y][x];
    this.setState({cells});
  }

  toggleTicking() {
    if (this.state.tickerID === null) {
      const tickerID = setInterval(() => this.tick(), 500);
      this.setState({tickerID});
    } else {
      clearInterval(this.state.tickerID);
      this.setState({tickerID: null});
    }
  }

  randomize() {
    this.setState({
      cells: randomized(this.state.cells),
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Gay of Life</p>
          <div className="GameControls">
            <button onClick={() => this.randomize()}> Randomize </button>
            <TickButton onClick={() => this.toggleTicking()} ticking={this.state.tickerID !== null} />
          </div>
        </header>
        <Gameboard cells={this.state.cells} toggleCell={(x, y) => this.toggleCell(x, y)} />
      </div>
    );
  }
}

export default App;
