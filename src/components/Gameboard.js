import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  Gameboard: props => ({
    gridColumnStart: 1,
    gridColumnEnd: 7,
    display: 'grid',
    gridTemplateColumns: `1fr repeat(${props.cells[0].length}, 2ex) 1fr`,
    gridTemplateRows: `repeat(${props.cells.length}, 2ex)`,
    background: 'var(--straight)',
  }),
  Queer: props => ({
    backgroundImage: `url(${props.flag})`,
    backgroundSize: ['100%', '100%'],
    borderRadius: '2px',
  }),
});

export default function Gameboard(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.Gameboard}>
      {props.cells.map((row, y) => [
        <div key={`${y}-pad-left`}></div>,
        ...row.map((queer, x) =>
            <div
              className={queer ? 'queer ' + classes.Queer : 'straight'}
              key={x}
              onClick={() => props.toggleCell(x, y)}
            ></div>
        ),
        <div key={`${y}-pad-right`}></div>
      ])}
    </div>
  );
}
