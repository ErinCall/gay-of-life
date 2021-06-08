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
  const cells = [
    [ true, false, false, false],
    [false, false, false, false],
    [false, false,  true,  true],
    [false, false, false,  true],
  ];
  const neighborCounts = cells.map((row, y) =>
    row.map((_, x) => Gameboard.livingNeighbors(cells, x, y)));

  expect(neighborCounts).toEqual([
    [0, 1, 0, 0],
    [1, 2, 2, 2],
    [0, 1, 2, 2],
    [0, 1, 3, 2],
  ]);

  expect(Gameboard.livingNeighbors(cells, 0,0)).toBe(0);
  expect(Gameboard.livingNeighbors(cells, 1,0)).toBe(1);
  expect(Gameboard.livingNeighbors(cells, 0,1)).toBe(1);
  expect(Gameboard.livingNeighbors(cells, 2,1)).toBe(2);
  expect(Gameboard.livingNeighbors(cells, 2,3)).toBe(3);
});

describe('nextGeneration', () => {
  test('life cannot thrive in a barren field', () => {
    const cells = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ];

    const nextGen = Gameboard.nextGeneration(cells);
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

    const nextGen = Gameboard.nextGeneration(cells);
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

    let nextGen = Gameboard.nextGeneration(cells);
    expect(nextGen).toEqual([
      [false, false, false],
      [ true,  true,  true],
      [false, false, false],
    ]);

    nextGen = Gameboard.nextGeneration(nextGen);
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

    const nextGen = Gameboard.nextGeneration(cells);
    expect(nextGen).toEqual([
      [false,  true,  true],
      [false,  true,  true],
      [false, false, false],
    ]);
  });
});
