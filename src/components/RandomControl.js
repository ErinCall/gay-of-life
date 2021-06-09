export default function RandomControl(props) {
  return (
    <div className="Game-control">
      <button onClick={props.randomize}> Randomize </button>
      <input
        type="number"
        size="2"
        value={Math.round(props.lifeChance)}
        onChange={props.updateLifeChance}
      />
      % chance
    </div>
  );
}
