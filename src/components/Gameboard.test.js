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

describe('neighbors', () => {
  let gameboard;
  beforeEach(() => {
    gameboard = new Gameboard({rows: 4, cols: 4});
    gameboard.state.cells = [
      [ true, false, false, false],
      [false, false, false, false],
      [false, false,  true,  true],
      [false, false, false,  true],
    ];
  });

  test('livingNeighbors', () => {
    expect(gameboard.livingNeighbors(0,0)).toBe(0);
    expect(gameboard.livingNeighbors(1,0)).toBe(1);
    expect(gameboard.livingNeighbors(0,1)).toBe(1);
    expect(gameboard.livingNeighbors(2,1)).toBe(2);
    expect(gameboard.livingNeighbors(2,3)).toBe(3);
  });

  test('up-left', () => {
    expect(gameboard.neighborUL(1, 0)).toBe(false); // neighbor would be out of bounds
    expect(gameboard.neighborUL(0, 1)).toBe(false); // neighbor would be out of bounds
    expect(gameboard.neighborUL(1, 1)).toBe(true);
    expect(gameboard.neighborUL(1, 2)).toBe(false); // neighbor is dead
  });

  test('up', () => {
    expect(gameboard.neighborU(1, 0)).toBe(false); // neighbor would be out of bounds
    expect(gameboard.neighborU(0, 1)).toBe(true);
    expect(gameboard.neighborU(1, 1)).toBe(false); // neighbor is dead
  });

  test('up-right', () => {
    expect(gameboard.neighborUR(2, 0)).toBe(false); // neighbor would be out of bounds
    expect(gameboard.neighborUR(3, 1)).toBe(false); // neighbor would be out of bounds
    expect(gameboard.neighborUR(1, 3)).toBe(true);
    expect(gameboard.neighborUR(0, 3)).toBe(false); // neighbor is dead
  });

  test('right', () => {
    expect(gameboard.neighborR(3, 1)).toBe(false); // neighbor would be out of bounds
    expect(gameboard.neighborR(1, 2)).toBe(true);
    expect(gameboard.neighborR(1, 1)).toBe(false); // neighbor is dead
  });

  test('down-right', () => {
    expect(gameboard.neighborDR(3, 2)).toBe(false); // neighbor would be out of bounds
    expect(gameboard.neighborDR(2, 3)).toBe(false); // neighbor would be out of bounds
    expect(gameboard.neighborDR(2, 2)).toBe(true);
    expect(gameboard.neighborDR(0, 2)).toBe(false); // neighbor is dead
  });

  test('down', () => {
    expect(gameboard.neighborD(1, 3)).toBe(false); // neighbor would be out of bounds
    expect(gameboard.neighborD(2, 1)).toBe(true);
    expect(gameboard.neighborD(0, 2)).toBe(false); // neighbor is dead
  });

  test('down-left', () => {
    expect(gameboard.neighborDL(0, 1)).toBe(false); // neighbor would be out of bounds
    expect(gameboard.neighborDL(1, 3)).toBe(false); // neighbor would be out of bounds
    expect(gameboard.neighborDL(3, 1)).toBe(true);
    expect(gameboard.neighborDL(2, 1)).toBe(false); // neighbor is dead
  });

  test('left', () => {
    expect(gameboard.neighborL(0, 1)).toBe(false); // neighbor would be out of bounds
    expect(gameboard.neighborL(3, 2)).toBe(true);
    expect(gameboard.neighborL(1, 1)).toBe(false); // neighbor is dead
  });
});

describe('tick', () => {
  test('life cannot thrive in a barren field', () => {
    const gameboard = new Gameboard({rows: 3, cols: 3});
    gameboard.state.cells = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ];

    gameboard.tick();
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

    gameboard.tick();
    expect(gameboard.state.cells).toEqual([
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

    gameboard.tick();
    expect(gameboard.state.cells).toEqual([
      [false, false, false],
      [ true,  true,  true],
      [false, false, false],
    ]);

    gameboard.tick();
    expect(gameboard.state.cells).toEqual([
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

    gameboard.tick();
    expect(gameboard.state.cells).toEqual([
      [false,  true,  true],
      [false,  true,  true],
      [false, false, false],
    ]);
  });
});
