import { screen, render } from '@testing-library/react';
import Gameboard, {countLive} from './Gameboard';

test('renders the provided rows and cols', () => {
  const {container} = render(<Gameboard rows={5} cols={5} />);
  const rows = container.querySelectorAll('.Row');
  expect(rows.length).toBe(5);
  const cells = container.querySelectorAll('.Cell');
  expect(cells.length).toBe(25);
});

test('renders a default number of rows and cols', () => {
  const {container} = render(<Gameboard />);
  const rows = container.querySelectorAll('.Row');
  expect(rows.length).not.toBe(0);
  const cells = container.querySelectorAll('.Cell');
  expect(cells.length).not.toBe(0);
});

test('randomizes the gameboard', () => {
  const {container} = render(<Gameboard rows={50} cols={50} />);
  const alive = container.querySelectorAll('.alive');
  const dead = container.querySelectorAll('.dead');

  expect(alive.length).toBeGreaterThan(0);
  expect(dead.length).toBeGreaterThan(0);
});

test('livingNeighbors', () => {
  const gameboard = new Gameboard({rows: 4, cols: 4});
  const cells = [
    [ true, false, false, false],
    [false, false, false, false],
    [false, false,  true,  true],
    [false, false, false,  true],
  ];
  const neighborCounts = cells.map((row, y) =>
    row.map((_, x) => gameboard.livingNeighbors(cells, x, y)));

  expect(neighborCounts).toEqual([
    [0, 1, 0, 0],
    [1, 2, 2, 2],
    [0, 1, 2, 2],
    [0, 1, 3, 2],
  ]);

  expect(gameboard.livingNeighbors(cells, 0,0)).toBe(0);
  expect(gameboard.livingNeighbors(cells, 1,0)).toBe(1);
  expect(gameboard.livingNeighbors(cells, 0,1)).toBe(1);
  expect(gameboard.livingNeighbors(cells, 2,1)).toBe(2);
  expect(gameboard.livingNeighbors(cells, 2,3)).toBe(3);
});

describe('nextGeneration', () => {
  test('life cannot thrive in a barren field', () => {
    const gameboard = new Gameboard({rows: 3, cols: 3});
    gameboard.state.cells = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ];

    const nextGen = gameboard.nextGeneration();
    expect(gameboard.state.cells).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]);
  });

  test('to stand alone is to fall', () => {
    const gameboard = new Gameboard({rows: 3, cols: 3});
    gameboard.state.cells = [
      [false,  true, false],
      [false, false, false],
      [false,  true, false],
    ];

    const nextGen = gameboard.nextGeneration();
    expect(nextGen).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]);
  });

  test('blinker', () => {
    const gameboard = new Gameboard({rows: 3, cols: 3});
    gameboard.state.cells = [
      [false,  true, false],
      [false,  true, false],
      [false,  true, false],
    ];

    let nextGen = gameboard.nextGeneration();
    expect(nextGen).toEqual([
      [false, false, false],
      [ true,  true,  true],
      [false, false, false],
    ]);
    gameboard.state.cells = nextGen;

    nextGen = gameboard.nextGeneration();
    expect(nextGen).toEqual([
      [false,  true, false],
      [false,  true, false],
      [false,  true, false],
    ]);
  });

  test('block', () => {
    const gameboard = new Gameboard({rows: 3, cols: 3});
    gameboard.state.cells = [
      [false,  true,  true],
      [false,  true,  true],
      [false, false, false],
    ];

    const nextGen = gameboard.nextGeneration();
    expect(nextGen).toEqual([
      [false,  true,  true],
      [false,  true,  true],
      [false, false, false],
    ]);
  });
});
