import "../index.css";

function ButtonL(props) {
  return (
    <button className="btn">
      <a
        href={props.url}
        target="_blank"
      >
        {props.name}
      </a>
    </button>
  );
}

export default ButtonL;
