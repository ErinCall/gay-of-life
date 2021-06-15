import seedrandom from 'seedrandom';
import {randomized, nextGeneration, livingNeighbors} from './gayOfLife';

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

  describe('matrix expands to accomodate new life', () => {
    test('expand top and bottom', () => {
      const cells = [
        [true, true, true],
      ];

      expect(nextGeneration(cells)).toEqual([
        [false,  true, false],
        [false,  true, false],
        [false,  true, false],
      ]);
    });

    test('expand left and right', () =>{
      const cells = [
        [true],
        [true],
        [true],
      ];

      expect(nextGeneration(cells)).toEqual([
        [false, false, false],
        [ true,  true,  true],
        [false, false, false],
      ]);
    });

    test('expand all four edges', () =>{
      const cells = [
        [true,  true, true],
        [true, false, true],
        [true,  true, true],
      ];

      expect(nextGeneration(cells)).toEqual([
        [false, false,  true, false, false],
        [false,  true, false,  true, false],
        [ true, false, false, false,  true],
        [false,  true, false,  true, false],
        [false, false,  true, false, false],
      ]);
    });
  });

  describe('matrix contracts to focus on existing life', () => {
    test('contract vertically', () => {
      const cells = [
        [false, false],
        [false, false],
        [false, false],
        [ true,  true],
        [ true,  true],
        [false, false],
        [false, false],
        [false, false],
      ];

      expect(nextGeneration(cells)).toEqual([
        [false, false],
        [false, false],
        [ true,  true],
        [ true,  true],
        [false, false],
        [false, false],
      ]);
    });

    test('contract horizontally', () => {
      const cells = [
        [false, false, false,  true,  true, false, false, false],
        [false, false, false,  true,  true, false, false, false],
        [false, false, false, false, false, false, false, false],
      ];

      expect(nextGeneration(cells)).toEqual([
        [false, false,  true,  true, false, false],
        [false, false,  true,  true, false, false],
        [false, false, false, false, false, false],
      ]);
    });
  });
});
