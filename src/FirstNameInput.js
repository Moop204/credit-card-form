import { textCSS, inputCSS, individualInputCSS } from "./form.js";

const FirstNameInput = (props) => {
  const name = props.name;
  const action = props.action;

  return (
    <div style={individualInputCSS}>
      <p style={textCSS}>First Name *</p>
      <input
        {...props}
        type="text"
        name="firstName"
        required
        style={inputCSS}
      />
    </div>
  );
};

export { FirstNameInput };
