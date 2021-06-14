import {lcm} from 'gcdlcm.js'

// note that the rng argument is intended for testing, to ensure reproducible tests. It shouldn't be
// necessary in production code.
export function randomized(cells, lifeChance, rng=Math.random) {
  return cells.map(row =>
    row.map(() => rng() < lifeChance)
  );
}

export function nextGeneration(cells) {
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

export function setAspectRatio(cells, width, height) {
  const currentRows = cells.length;
  const currentCols = cells[0].length;

  // ARwidth/height are the numerator and denominator of the aspect ratio
  const ARwidth = lcm(width, height) / height;
  const ARheight = lcm(width, height) / width;

  // We may need to multiply the ARwidth/height by some factor `m` in order to ensure
  // desiredRows/cols are >= currentRows/cols
  const m = Math.ceil(Math.max(currentCols / ARwidth, currentRows / ARheight))
  const finalCols = m * ARwidth;
  const finalRows = m * ARheight;

  let result = cells;
  if (finalCols > currentCols) {
    const leftCols = Math.floor((finalCols - currentCols) / 2);
    const rightCols = Math.ceil((finalCols - currentCols) / 2);
    result = result.map(row => emptyRow(leftCols).concat(row, emptyRow(rightCols)));
  }
  if (finalRows > currentRows) {
    const topRows = Math.floor((finalRows - currentRows) / 2);
    const bottomRows = Math.ceil((finalRows - currentRows) / 2);
    result = emptyMatrix(topRows, finalCols).concat(result, emptyMatrix(bottomRows, finalCols));
  }
  return result;
}

function emptyMatrix(rows, cols) {
  return Array(rows).fill(null).map(() => emptyRow(cols));
}

function emptyRow(cols) {
  return Array(cols).fill(false)
}
