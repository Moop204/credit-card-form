import { textCSS, inputCSS, individualInputCSS } from "./form.js";

const LastNameInput = (props) => {
  return (
    <div style={individualInputCSS}>
      <label htmlFor="lastName" style={textCSS}>
        Last Name *
      </label>
      <input
        {...props}
        id="lastName"
        type="text"
        name="LastName"
        required
        style={inputCSS}
      />
    </div>
  );
};

export { LastNameInput };
