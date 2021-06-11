import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  Gameboard: {
    width: '100%',
  },
  Row: props => ({
    display: 'flex',
    height: `${100/props.cells.length}%`,
    width: '100%',
  }),
  Alive: props => ({
    backgroundImage: `url(${props.flag})`,
    backgroundSize: ['100%', '100%'],
  }),
  Dead: {
    background: '#444444',
  },
  Cell: props => ({
    display: 'inline-block',
    height: '100%',
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
