// note that the rng argument is intended for testing, to ensure reproducible tests. It shouldn't be
// necessary in production code.
export function randomized(cells, lifeChance, rng=Math.random) {
  return cells.map(row =>
    row.map(() => rng() < lifeChance)
  );
}

export function nextGeneration(cells) {
  cells = expand(cells);
  return cells.map((row, y) =>
    row.map((alive, x) => {
      const living = livingNeighbors(cells, x, y);
      return living === 3 || (alive && living === 2)
    })
  );
}

export function livingNeighbors(cells, x, y) {
  const neighborCoordinates = [
    [x-1, y-1], [x, y-1], [x+1, y-1],
    [x-1,   y],           [x+1,   y],
    [x-1, y+1], [x, y+1], [x+1, y+1],
  ].filter(([x, y]) =>
    y >= 0 &&
    y < cells.length &&
    x >= 0 &&
    x < cells[y].length
  );

  return neighborCoordinates.map(([x, y]) => cells[y][x])
    .filter(alive => alive)
    .length;
}

// If any of the outermost rows/cols have three adjacent live cells, we'll need to expand the matrix
// so life can grow out into the space beyond what's currently computed.
function expand(cells) {
  let needTop = false;
  let needBottom = false;
  let needLeft = false;
  let needRight = false;
  const lastRow = cells.length - 1;
  const lastCol = cells[0].length - 1;
  for (let x = 1; x < lastCol; x++) {
    if (cells[0][x-1] && cells[0][x] && cells[0][x+1]) {
      needTop = true;
    }
    if (cells[lastRow][x-1] && cells[lastRow][x] && cells[lastRow][x+1]) {
      needBottom = true;
    }
  }
  for (let y = 1; y < lastRow; y++) {
    if (cells[y-1][0] && cells[y][0] && cells[y+1][0]) {
      needLeft = true;
    }
    if (cells[y-1][lastCol] && cells[y][lastCol] && cells[y+1][lastCol]) {
      needRight = true;
    }
  }

  if (needTop) {
    cells = [Array(lastCol + 1).fill(false), ...cells];
  }
  if (needBottom) {
    cells = [...cells, Array(lastCol + 1).fill(false)];
  }
  if (needLeft) {
    cells = cells.map(row => [false, ...row])
  }
  if (needRight) {
    cells = cells.map(row => [...row, false])
  }

  return cells;
}
