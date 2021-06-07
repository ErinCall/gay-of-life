import { screen, render } from '@testing-library/react';
import Gameboard, {countLive} from './Gameboard';

test('renders a gameboard', () => {
  const {container} = render(<Gameboard rows={50} cols={50} />);
  const cells = container.querySelectorAll('.Cell');
  expect(cells.length).toBe(2500);
});

test('randomizes the gameboard', () => {
  const {container} = render(<Gameboard rows={50} cols={50} />);
  const alive = container.querySelectorAll('.alive');
  const dead = container.querySelectorAll('.dead');
  expect(alive.length).toBeGreaterThan(0);
  expect(dead.length).toBeGreaterThan(0);
});
