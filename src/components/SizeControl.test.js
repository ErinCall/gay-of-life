import { getByLabelText, render } from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils';
import SizeControl from './SizeControl';

test('renders the provided rows and columns', () => {
  const cells = [
    [false, false],
  ];
  const {container} = render(<SizeControl
    cells={cells}
    updateCols={() => {}}
    updateRows={() => {}}
  />);
  const colInput = getByLabelText(container, 'Width:');
  expect(colInput.value).toEqual('2');
  const rowInput = getByLabelText(container, 'Height:');
  expect(rowInput.value).toEqual('1');
});

test('calls update functions on change', () => {
  const cells = [
    [false, false],
  ];
  let cols = 2;
  let rows = 1;
  const {container} = render(<SizeControl
    cells={cells}
    updateCols={e => cols = e.target.value}
    updateRows={e => rows = e.target.value}
  />);

  const colInput = getByLabelText(container, 'Width:');
  const rowInput = getByLabelText(container, 'Height:');
  colInput.value = '6';
  ReactTestUtils.Simulate.change(colInput);
  rowInput.value = '9';
  ReactTestUtils.Simulate.change(rowInput);
  expect(cols).toEqual('6');
  expect(rows).toEqual('9');
});
