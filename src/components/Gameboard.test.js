import { render } from '@testing-library/react';
import Gameboard, {countLive} from './Gameboard';

describe('countLive', () => {
  test('returns 0 for empty array', () => {
    const cells = [];
    const count = countLive(cells);
    expect(count).toBe(0);
  });

  test('returns 0 for array of falses', () => {
    const cells = [false, false, false];
    const count = countLive(cells);
    expect(count).toBe(0);
  });

  test('returns a count of trues', () => {
    const cells = [false, true, false, true, false];
    const count = countLive(cells);
    expect(count).toBe(2);
  });
});
