export default function RandomControl(props) {
  return (
    <div className="Game-control">
      <button onClick={props.randomize}> Randomize </button>
      <input
        type="number"
        size="3"
        min="0"
        max="100"
        inputmode="numeric"
        value={Math.round(props.lifeChance)}
        onChange={props.updateLifeChance}
      />
      % chance
    </div>
  );
}
