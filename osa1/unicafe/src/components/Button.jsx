const Button = ({ clickFunction, text }) => (
  <button onClick={clickFunction}>
    {text}
  </button>
);

export default Button;