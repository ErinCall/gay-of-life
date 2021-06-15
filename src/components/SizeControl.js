export default function SizeControl(props) {
  return (
    <div className="Game-control">
      <div>
        <label htmlFor="size-control-columns">Width:</label>
        <input
          id="size-control-columns"
          type="number"
          size="3"
          min="1"
          inputMode="numeric"
          value={props.cells[0].length}
          onChange={props.updateCols}
        />
      </div>
      <div>
        <label htmlFor="size-control-rows">Height:</label>
        <input
          id="size-control-rows"
          type="number"
          size="3"
          min="1"
          inputMode="numeric"
          value={props.cells.length}
          onChange={props.updateRows}
        />
      </div>
    </div>
  );
}
