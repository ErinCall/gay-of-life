export default function TickControl(props) {
  return (
    <div className="Game-control">
      <button onClick={props.toggle}>
        {props.ticking ? "Pause" : "Play"}
      </button>
      <input
        type="number"
        size="3"
        value={props.interval}
        onChange={props.updateInterval}
      />ms interval
    </div>
  );
}
