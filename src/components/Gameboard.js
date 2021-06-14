import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  Row: props => ({
    display: 'flex',
    height: `${100/props.cells.length}%`,
    width: '100%',
  }),
  Alive: props => ({
    backgroundImage: `url(${props.flag})`,
    backgroundSize: ['100%', '100%'],
  }),
  Dead: props => ({
    background: '#444444',
  }),
  Cell: props => ({
    display: 'inline-block',
    height: '100%',
    width: `${100/props.cells[0].length}%`,
  }),
});

export default function Gameboard(props) {
  const classes = useStyles(props);
  const cellClass = alive => {
    let className = `Cell ${classes.Cell}`;
    if (alive) {
      className += ' alive ' + classes.Alive;
    } else {
      className += ' dead ' + classes.Dead;
    }
    return className
  }
  return (
    <div className="Gameboard">
      {props.cells.map((row, y) =>
        <div className={`Row ${classes.Row}`} key={y}>
          {row.map((alive, x) =>
            <div
              className={cellClass(alive)}
              key={x}
              onClick={() => props.toggleCell(x, y)}
            ></div>
          )}
        </div>
      )}
    </div>
  );
}
