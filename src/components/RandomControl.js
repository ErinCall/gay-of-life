export default function RandomControl(props) {
  return (
    <div className="Game-control">
      <button onClick={props.randomize}> Randomize </button>
      <input
        type="number"
        size="3"
        min="0"
        max="100"
        inputMode="numeric"
        value={Math.round(props.queerChance)}
        onChange={props.updateQueerChance}
      />
      % gay
    </div>
  );
}
