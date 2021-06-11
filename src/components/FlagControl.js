export default function FlagControl(props) {
  return (
    <div className="Game-control" id="Flag-control">
      {Object.entries(props.flags).map(([name, flag]) => {
        let className = 'Flag-button';
        if (name === props.currentFlag) {
          className += ' active';
        }
        return (<img
          className={className}
          key={name}
          alt={`${name} pride flag`}
          title={name}
          src={flag}
          onClick={() => props.setCurrent(name)}
        />)
      })}
    </div>
  );
}
