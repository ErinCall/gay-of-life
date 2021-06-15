import { screen, render } from '@testing-library/react';
import Gameboard from './Gameboard';

test('renders the provided cells', () => {
  const {container} = render(<Gameboard cells={[
    [false, false,  true],
    [ true, false,  true],
    [false, false, false],
  ]} />);
  const queer = container.querySelectorAll('.queer');
  expect(queer.length).toBe(3);
  const straight = container.querySelectorAll('.straight');
  expect(straight.length).toBe(6);
});
