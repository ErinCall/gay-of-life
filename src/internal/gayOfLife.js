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

