const Button = (props) => (
    <button onClick={props.clickFunction}>
      {props.text}
    </button>
);

export default Button;