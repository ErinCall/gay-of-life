import React from 'react';
import './App.css';
import Gameboard from './components/Gameboard';
import TickControl from './components/TickControl';
import RandomControl from './components/RandomControl';
import FlagControl from './components/FlagControl';
import {nextGeneration, randomized, setAspectRatio} from './internal/gayOfLife';
import {flags} from './flags';

class App extends React.Component {
  static DEFAULT_ROWS = 75;
  static DEFAULT_COLS = 75;
  static DEFAULT_LIFE_CHANCE = 0.25;
  static DEFAULT_TICK_INTERVAL = 250;

  constructor(props) {
    super(props);

    const rows = props.rows || this.constructor.DEFAULT_ROWS;
    const cols = 0;
    this.state = {
      currentFlag: 'rainbow',
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

  componentDidMount() {
    window.addEventListener('resize', () => this.adjustAspectRatio());
    this.adjustAspectRatio();
  }

  adjustAspectRatio() {
    const gameboard = document.querySelector('#Gameboard');
    const width = Math.round(gameboard.clientWidth);
    const height = Math.round(gameboard.clientHeight);
    const adjusted = setAspectRatio(this.state.cells, width, height);
    if (adjusted !== this.cells) {
      this.setState({
        cells: adjusted,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div id="Head-spacer"></div>
        <div id="Title">Gay of Life</div>
        <RandomControl
          randomize={() => this.randomize()}
          lifeChance={this.state.lifeChance*100}
          updateLifeChance={e => this.updateLifeChance(e.target.value)}
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
