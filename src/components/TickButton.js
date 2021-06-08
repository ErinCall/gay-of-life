export default function TickButton(props) {
  return <button onClick={props.onClick}>
    {props.ticking ? "Stop" : "Start"} Running
  </button>
}
