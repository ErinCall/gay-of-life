import React from 'react';
import './App.css';
import Gameboard from './components/Gameboard';
import TickControl from './components/TickControl';
import RandomControl from './components/RandomControl';
import {nextGeneration, randomized} from './internal/gayOfLife';

class App extends React.Component {
  static DEFAULT_ROWS = 75;
  static DEFAULT_COLS = 75;
  static DEFAULT_LIFE_CHANCE = 0.25;
  static DEFAULT_TICK_INTERVAL = 250;

  constructor(props) {
    super(props);

    const rows = props.rows || this.constructor.DEFAULT_ROWS;
    const cols = props.cols || this.constructor.DEFAULT_COLS;
    this.state = {
      tickerID: null,
      tickInterval: this.constructor.DEFAULT_TICK_INTERVAL,
      lifeChance: this.constructor.DEFAULT_LIFE_CHANCE,
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
      cells: randomized(this.state.cells, this.state.lifeChance),
    });
  }

  updateLifeChance(percentChance) {
    this.setState({
      lifeChance: percentChance/100,
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Gay of Life</p>
          <div className="Control-bar">
            <RandomControl
              randomize={() => this.randomize()}
              lifeChance={this.state.lifeChance*100}
              updateLifeChance={e => this.updateLifeChance(e.target.value)}
            />
            <TickControl
              toggle={() => this.toggleTicking()}
              ticking={this.state.tickerID !== null}
              interval={this.state.tickInterval}
              updateInterval={e => this.updateTickInterval(e.target.value)}
            />
          </div>
        </header>
        <Gameboard cells={this.state.cells} toggleCell={(x, y) => this.toggleCell(x, y)} />
      </div>
    );
  }
}

export default App;
