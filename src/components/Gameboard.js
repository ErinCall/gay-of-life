import React from 'react';

const STARTING_ROWS = 50;
const STARTING_COLUMNS = 50;

function initialCellState() {
  return Math.random() < 1/50;
}

// TODO: get the identity function from an FP library
const id = x => x;

// MUTATE the given matrix of cells to ensure all the cells on the edges are dead
function padEdges(cells) {
  const topRow = cells[0];
  if (topRow.some(id)) {
    cells.unshift(Array(cells[0].length).fill(false));
  }

  const rightCol = cells.map(row => row[0]);
  if (rightCol.some(id)) {
    cells.forEach(row => row.push(false));
  }

  const bottomRow = cells[cells.length - 1];
  if (bottomRow.some(id)) {
    cells.push(Array(cells[0].length).fill(false));
  }

  const leftCol = cells.map(row => row[0]);
  if (leftCol.some(id)) {
    cells.forEach(row => row.unshift(false));
  }
}

export function countLive(cells) {
  return cells.reduce((count, alive) => alive ? count + 1 : count, 0);
}

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);

    const cells = Array(STARTING_ROWS).fill(null).map(() =>
        Array(STARTING_COLUMNS).fill(null).map(initialCellState))
    padEdges(cells);

    this.state = {
      cells,
    };
  }

// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  generation() {
    const currentCells = this.state.cells;
    const newCells = currentCells.map(row => row.map(() => false));
    // maxCol and maxRow are the outermost row/column *that might have a live cell.*
    const maxCol = currentCells[0].length - 2;
    const maxRow = currentCells.length - 2;

    // padEdges ensures we don't have to think about the special case of the corners, since they can
    // have at most one neighbor.

    // special case: top and bottom rows. We only have to inspect the cells above (for the bottom
    // row) or below (for the top row) the one whose fate we're considering, since the ones to the
    // side are guaranteed to be dead.
    for (let x = 1; x <= maxCol; x++) {
      let neighbors = countLive([currentCells[1][x-1], currentCells[1][x], currentCells[1][x+1]]);
      if (neighbors === 3) {
        newCells[0][x] = true;
      }

      neighbors = countLive(
        [currentCells[maxRow][x-1], currentCells[maxRow][x], currentCells[maxRow][x+1]]);
      if (neighbors === 3) {
        newCells[maxRow+1][x] = true;
      }
    }

    // special case: left and right columns. As with the top and bottom rows, we only have to
    // inspect the cells to one side of the one whose fate we're considering.
    for (let y = 1; y <= maxRow; y++) {
      let neighbors = countLive([currentCells[y-1][1], currentCells[y][1], currentCells[y+1][1]]);
      if (neighbors === 3) {
        newCells[y][0] = true;
      }

      neighbors = countLive(
        [currentCells[y-1][maxCol], currentCells[y][maxCol], currentCells[y+1][maxCol]]);
      if (neighbors === 3) {
        newCells[y][maxCol+1] = true;
      }
    }

    for (let y = 1; y <= maxRow; y++) {
      for (let x = 1; x <= maxCol; x++) {
        const neighorIndices = [
          [y-1, x-1], [y-1, x], [y-1, x+1],
          [y  , x-1],           [y  , x+1],
          [y+1, x-1], [y+1, x], [y+1, x+1]
        ];

        const neighbors = countLive(neighorIndices.map(indices =>
          currentCells[indices[0]][indices[1]]
        ));
        if (neighbors === 3 || (currentCells[y][x] && neighbors === 2)) {
          newCells[y][x] = true;
        }
      }
    }

    padEdges(newCells);
    this.setState({cells: newCells});
  }

  render() {
    return (
      <div className="Gameboard">
        {this.state.cells.map((row, rowNum) =>
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
