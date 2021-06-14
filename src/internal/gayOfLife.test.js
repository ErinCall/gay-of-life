import seedrandom from 'seedrandom';
import {randomized, nextGeneration, livingNeighbors, setAspectRatio} from './gayOfLife';

test('randomized', () => {
  const rng = new seedrandom('lol monkey cheese XD');
  const cells = Array(4).fill(null).map(() => Array(4).fill(false));
  const randCells = randomized(cells, 0.5, rng);
  expect(randCells).toEqual([
    [ false, false,  true,  true ],
    [ false, false,  true,  true ],
    [  true,  true, false,  true ],
    [ false,  true,  true,  true ]
  ]);
});

test('livingNeighbors', () => {
  const cells = [
    [ true, false, false, false],
    [false, false, false, false],
    [false, false,  true,  true],
    [false, false, false,  true],
  ];
  const neighborCounts = cells.map((row, y) =>
    row.map((_, x) => livingNeighbors(cells, x, y)));

  expect(neighborCounts).toEqual([
    [0, 1, 0, 0],
    [1, 2, 2, 2],
    [0, 1, 2, 2],
    [0, 1, 3, 2],
  ]);

  expect(livingNeighbors(cells, 0,0)).toBe(0);
  expect(livingNeighbors(cells, 1,0)).toBe(1);
  expect(livingNeighbors(cells, 0,1)).toBe(1);
  expect(livingNeighbors(cells, 2,1)).toBe(2);
  expect(livingNeighbors(cells, 2,3)).toBe(3);
});

describe('nextGeneration', () => {
  test('life cannot thrive in a barren field', () => {
    const cells = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ];

    const nextGen = nextGeneration(cells);
    expect(nextGen).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]);
  });

  test('to stand alone is to fall', () => {
    const cells = [
      [false,  true, false],
      [false, false, false],
      [false,  true, false],
    ];

    const nextGen = nextGeneration(cells);
    expect(nextGen).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]);
  });

  test('blinker', () => {
    const cells = [
      [false,  true, false],
      [false,  true, false],
      [false,  true, false],
    ];

    let nextGen = nextGeneration(cells);
    expect(nextGen).toEqual([
      [false, false, false],
      [ true,  true,  true],
      [false, false, false],
    ]);

    nextGen = nextGeneration(nextGen);
    expect(nextGen).toEqual([
      [false,  true, false],
      [false,  true, false],
      [false,  true, false],
    ]);
  });

  test('block', () => {
    const cells = [
      [false,  true,  true],
      [false,  true,  true],
      [false, false, false],
    ];

    const nextGen = nextGeneration(cells);
    expect(nextGen).toEqual([
      [false,  true,  true],
      [false,  true,  true],
      [false, false, false],
    ]);
  });
});

describe('setAspectRatio', () => {
  test('no-op returns the same object', () => {
    // This test may well be unnecessary, but I'm vaguely concerned about triggering an unnecessary
    // re-render because this function caused the app's state to "change," and of course idempotence
    // is always a nice thing to be able to assert about a function.
    const cells = [
      [false, false],
      [false, false],
    ];
    expect(setAspectRatio(cells, 1, 1)).toBe(cells);
  });

  test('increase vertical dimension', () => {
    const cells = [
      [false, false],
    ];

    expect(setAspectRatio(cells, 1, 1)).toEqual([
      [false, false],
      [false, false],
    ]);
  });

  test('increase horizontal dimension', () => {
    const cells = [
      [false],
      [false],
    ];

    expect(setAspectRatio(cells, 1, 1)).toEqual([
      [false, false],
      [false, false],
    ]);
  });

  test('increase horizontal and vertical dimensions', () => {
    const cells = [
      [false],
      [false],
    ];

    expect(setAspectRatio(cells, 4, 3)).toEqual([
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
    ]);
  });

  test('centers existing data between new rows/columns', () => {
    const cells = [
      [true, true, true],
      [true, true, true],
    ];
    expect(setAspectRatio(cells, 5, 4)).toEqual([
      [false, false, false, false, false],
      [false,  true,  true,  true, false],
      [false,  true,  true,  true, false],
      [false, false, false, false, false],
    ]);
  });
});
