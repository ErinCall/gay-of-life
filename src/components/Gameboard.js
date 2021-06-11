import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  Gameboard: {
    gridColumnStart: 1,
    gridColumnEnd: 5,
  },
  Row: props => ({
    display: 'flex',
    height: `${100/props.cells.length}%`,
  }),
  Alive: props => ({
    backgroundImage: `url(${props.flag})`,
    backgroundSize: ['100%', '100%'],
  }),
  Dead: {
    background: 'var(--dead)',
  },
  Cell: props => ({
    display: 'inline-block',
    width: `${100/props.cells[0].length}%`,
  }),
});

export default function Gameboard(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.Gameboard}>
      {props.cells.map((row, y) =>
        <div className={classes.Row} key={y}>
          {row.map((alive, x) =>
            <div
              className={`${classes.Cell} ${alive ? classes.Alive : classes.Dead}`}
              key={x}
              onClick={() => props.toggleCell(x, y)}
            ></div>
          )}
        </div>
      )}
    </div>
  );
}
