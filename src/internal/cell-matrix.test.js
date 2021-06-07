import CellMatrix from './cell-matrix';

describe('constructor', () => {
  test('initializes with the given number rows and cols', () => {
    const matrix = new CellMatrix(3, 3);
    expect(matrix.cells).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]);
  });

  test('initializes with a default number of rows and cols', () => {
    const matrix = new CellMatrix();
    // this test is sorta crummy (and probably unnecessary). If the constructor's params don't have
    // a default, it will call Array(undefined), which gives [undefined] rather than []. So an array
    // of length 1 indicates that the defaulting has failed...unless we change the default size to
    // 1, in which case this test will fail on correct behavior :(
    expect(matrix.cells.length).toBeGreaterThan(1);
    expect(matrix.cells).not.toEqual(expect.arrayContaining([[]]));
    expect(matrix.cells).not.toEqual(expect.arrayContaining([[false]]));
  });
});

describe('randomize', () => {
  test('sets at least one live and one dead cell', () => {
    // There's always a chance of a false failure when using random, but with
    // RANDOM_ALIVE_CHANCE=1/50, the odds are only about 1 in 8e21, i.e. negligible. They get even
    // negligibler as RANDOM_ALIVE_CHANCE approaches 1/2.
    const matrix = new CellMatrix(50, 50);
    matrix.randomize();

    // the assertion here is "at least one live cell and at least one dead cell"
    expect(matrix.cells).toEqual(expect.arrayContaining([
      expect.arrayContaining([true]),
      expect.arrayContaining([false]),
    ]));
  });
});

describe('neighbors', () => {
  let matrix;
  beforeEach(() => {
    matrix = new CellMatrix(4, 4);
    matrix.cells = [
      [ true, false, false, false],
      [false, false, false, false],
      [false, false,  true,  true],
      [false, false, false,  true],
    ];
  });

  test('livingNeighbors', () => {
    expect(matrix.livingNeighbors(0,0)).toBe(0);
    expect(matrix.livingNeighbors(1,0)).toBe(1);
    expect(matrix.livingNeighbors(0,1)).toBe(1);
    expect(matrix.livingNeighbors(2,1)).toBe(2);
    expect(matrix.livingNeighbors(2,3)).toBe(3);
  });

  test('up-left', () => {
    expect(matrix.neighborUL(1, 0)).toBe(false); // neighbor would be out of bounds
    expect(matrix.neighborUL(0, 1)).toBe(false); // neighbor would be out of bounds
    expect(matrix.neighborUL(1, 1)).toBe(true);
    expect(matrix.neighborUL(1, 2)).toBe(false); // neighbor is dead
  });

  test('up', () => {
    expect(matrix.neighborU(1, 0)).toBe(false); // neighbor would be out of bounds
    expect(matrix.neighborU(0, 1)).toBe(true);
    expect(matrix.neighborU(1, 1)).toBe(false); // neighbor is dead
  });

  test('up-right', () => {
    expect(matrix.neighborUR(2, 0)).toBe(false); // neighbor would be out of bounds
    expect(matrix.neighborUR(3, 1)).toBe(false); // neighbor would be out of bounds
    expect(matrix.neighborUR(1, 3)).toBe(true);
    expect(matrix.neighborUR(0, 3)).toBe(false); // neighbor is dead
  });

  test('right', () => {
    expect(matrix.neighborR(3, 1)).toBe(false); // neighbor would be out of bounds
    expect(matrix.neighborR(1, 2)).toBe(true);
    expect(matrix.neighborR(1, 1)).toBe(false); // neighbor is dead
  });

  test('down-right', () => {
    expect(matrix.neighborDR(3, 2)).toBe(false); // neighbor would be out of bounds
    expect(matrix.neighborDR(2, 3)).toBe(false); // neighbor would be out of bounds
    expect(matrix.neighborDR(2, 2)).toBe(true);
    expect(matrix.neighborDR(0, 2)).toBe(false); // neighbor is dead
  });

  test('down', () => {
    expect(matrix.neighborD(1, 3)).toBe(false); // neighbor would be out of bounds
    expect(matrix.neighborD(2, 1)).toBe(true);
    expect(matrix.neighborD(0, 2)).toBe(false); // neighbor is dead
  });

  test('down-left', () => {
    expect(matrix.neighborDL(0, 1)).toBe(false); // neighbor would be out of bounds
    expect(matrix.neighborDL(1, 3)).toBe(false); // neighbor would be out of bounds
    expect(matrix.neighborDL(3, 1)).toBe(true);
    expect(matrix.neighborDL(2, 1)).toBe(false); // neighbor is dead
  });

  test('left', () => {
    expect(matrix.neighborL(0, 1)).toBe(false); // neighbor would be out of bounds
    expect(matrix.neighborL(3, 2)).toBe(true);
    expect(matrix.neighborL(1, 1)).toBe(false); // neighbor is dead
  });
});
