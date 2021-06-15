import React from 'react';
import './App.css';
import Gameboard from './components/Gameboard';
import TickControl from './components/TickControl';
import RandomControl from './components/RandomControl';
import FlagControl from './components/FlagControl';
import SizeControl from './components/SizeControl';
import {nextGeneration, randomized, setWidth, setHeight} from './internal/gayOfLife';
import {flags} from './flags';

class App extends React.Component {
  static DEFAULT_ROWS = 50;
  static DEFAULT_COLS = 50;
  static DEFAULT_QUEER_CHANCE = 0.25;
  static DEFAULT_TICK_INTERVAL = 250;

  constructor(props) {
    super(props);

    const rows = props.rows || this.constructor.DEFAULT_ROWS;
    const cols = props.cols || this.constructor.DEFAULT_COLS;
    this.state = {
      currentFlag: 'rainbow',
      tickerID: null,
      tickInterval: this.constructor.DEFAULT_TICK_INTERVAL,
      queerChance: this.constructor.DEFAULT_QUEER_CHANCE,
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
      const tickerID = setInterval(() => this.tick(), this.state.tickInterval);
      this.setState({tickerID});
    } else {
      clearInterval(this.state.tickerID);
      this.setState({tickerID: null});
    }
  }

  randomize() {
    this.setState({
      cells: randomized(this.state.cells, this.state.queerChance),
    });
  }

  updateQueerChance(percentChance) {
    this.setState({
      queerChance: percentChance/100,
    });
  }

  updateTickInterval(interval) {
    let tickerID = this.state.tickerID;
    if (tickerID !== null) {
      clearInterval(tickerID);
      tickerID = setInterval(() => this.tick(), interval);
    }
    this.setState({
      tickerID,
      tickInterval: interval,
    });
  }

  updateCols(cols) {
    this.setState({cells: setWidth(this.state.cells, Number(cols))});
  }

  updateRows(rows) {
    this.setState({cells: setHeight(this.state.cells, Number(rows))});
  }

  render() {
    return (
      <div className="App">
        <div id="Head-spacer"></div>
        <div id="Title">Gay of Life</div>
        <RandomControl
          randomize={() => this.randomize()}
          queerChance={this.state.queerChance*100}
          updateQueerChance={e => this.updateQueerChance(e.target.value)}
        />
        <FlagControl
          flags={flags}
          currentFlag={this.state.currentFlag}
          setCurrent={currentFlag => this.setState({currentFlag})}
        />
        <TickControl
          toggle={() => this.toggleTicking()}
          ticking={this.state.tickerID !== null}
          interval={this.state.tickInterval}
          updateInterval={e => this.updateTickInterval(e.target.value)}
        />
        <SizeControl
          cells={this.state.cells}
          updateCols={e => this.updateCols(e.target.value)}
          updateRows={e => this.updateRows(e.target.value)}
        />
        <Gameboard
          cells={this.state.cells}
          toggleCell={(x, y) => this.toggleCell(x, y)}
          flagName={this.state.currentFlag}
          flag={flags[this.state.currentFlag]}
        />
      </div>
    );
  }
}

export default App;
