import { screen, render } from '@testing-library/react';
import Gameboard from './Gameboard';

test('renders the provided cells', () => {
  const {container} = render(<Gameboard cells={[
    [false, false,  true],
    [ true, false,  true],
    [false, false, false],
  ]} />);
  const rows = container.querySelectorAll('.Row');
  expect(rows.length).toBe(3);
  const cells = container.querySelectorAll('.Cell');
  expect(cells.length).toBe(9);
  const alive = container.querySelectorAll('.alive');
  expect(alive.length).toBe(3);
  const dead = container.querySelectorAll('.dead');
  expect(dead.length).toBe(6);
});
