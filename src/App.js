import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The Game of Life</p>
        <p>GNU John Conway</p>
      </header>
      <div className="Game">
        <div className="Row">
          <div className="Cell">1</div>
          <div className="Cell">2</div>
          <div className="Cell">3</div>
        </div>
        <div className="Row">
          <div className="Cell">4</div>
          <div className="Cell">5</div>
          <div className="Cell">6</div>
        </div>
        <div className="Row">
          <div className="Cell">7</div>
          <div className="Cell">8</div>
          <div className="Cell">9</div>
        </div>
      </div>
    </div>
  );
}

export default App;
