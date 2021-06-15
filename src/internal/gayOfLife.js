const CONTRACTION_MARGIN = 3;

// note that the rng argument is intended for testing, to ensure reproducible tests. It shouldn't be
// necessary in production code.
export function randomized(cells, lifeChance, rng=Math.random) {
  return cells.map(row =>
    row.map(() => rng() < lifeChance)
  );
}

export function nextGeneration(cells) {
  cells = contract(cells);
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

// If there are no live cells for several rows/cols from the edge, prune that edge by one row/col.
// The threshold for pruning is larger than the amount pruned in an attempt to prevent bouncing.
// Look, this is absolutely over-micro-optimized. NO RAGRETS. In short, the needSIDE variables
// indicate whether we need to prune that side. We'll never prune a matrix to less than twice the
// margin, both to prevent pruning it down to 0 and so we don't have to do extra bounds checking.
// The for-loops include the relevant needSIDE flags in their continue condition so they can break
// out early.
function contract(cells) {
  let needTop = cells.length > 2*CONTRACTION_MARGIN;
  let needBottom = needTop;
  let needLeft = cells[0].length > 2*CONTRACTION_MARGIN;
  let needRight = needLeft;

  for (let y = 0; needTop && y < CONTRACTION_MARGIN; y++) {
    for (let x = 0; needTop && x < cells[y].length; x++) {
      needTop = !cells[y][x];
    }
  }
  for (let y = cells.length-CONTRACTION_MARGIN; needBottom && y < cells.length; y++) {
    for (let x = 0; needBottom && x < cells[y].length; x++) {
      needBottom = !cells[y][x];
    }
  }
  for (let y = 0; needLeft && y < cells.length; y++) {
    for (let x = 0; needLeft && x < CONTRACTION_MARGIN; x++) {
      needLeft = !cells[y][x];
    }
  }
  for (let y = 0; needRight && y < cells.length; y++) {
    for (let x = cells[y].length-CONTRACTION_MARGIN; needRight && x < cells[y].length; x++) {
      needRight = !cells[y][x];
    }
  }

  if (needTop) {
    cells = cells.slice(1);
  }
  if (needBottom) {
    cells = cells.slice(0, -1);
  }
  if (needLeft) {
    cells = cells.map(row => row.slice(1));
  }
  if (needRight) {
    cells = cells.map(row => row.slice(0, -1));
  }

  return cells;
}
