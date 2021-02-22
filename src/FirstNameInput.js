import { textCSS, inputCSS, individualInputCSS } from "./form.js";

const FirstNameInput = (props) => {
  const name = props.name;
  const action = props.action;

  return (
    <div style={individualInputCSS}>
      <label htmlFor="firstName" style={textCSS}>
        First Name *
      </label>
      <input
        {...props}
        id="firstName"
        type="text"
        name="firstName"
        required
        style={inputCSS}
      />
    </div>
  );
};

export { FirstNameInput };
