import { textCSS, inputCSS, individualInputCSS } from "./form.js";

const LastNameInput = (props) => {
  return (
    <div style={individualInputCSS}>
      <p style={textCSS}> Last Name *</p>
      <input {...props} type="text" name="LastName" required style={inputCSS} />
    </div>
  );
};

export { LastNameInput };
