export default function TickControl(props) {
  return (
    <div className="Game-control">
      <button onClick={props.toggle}>
        {props.ticking ? "Pause" : "Play"}
      </button>
      <input
        type="number"
        size="3"
        min="1"
        inputMode="numeric"
        value={props.interval}
        onChange={props.updateInterval}
      />ms
    </div>
  );
}
