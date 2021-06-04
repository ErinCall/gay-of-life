import './App.css';
import Gameboard from './components/Gameboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The Game of Life</p>
        <p>GNU John Conway</p>
      </header>
      <Gameboard />
    </div>
  );
}

export default App;
