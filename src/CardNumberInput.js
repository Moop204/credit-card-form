import { textCSS, inputCSS, individualInputCSS } from "./form.js";

const CardNumberInput = (props) => {
  return (
    <div style={individualInputCSS}>
      <p style={textCSS}>Card Number *</p>
      <input
        {...props}
        type="text"
        name="cardNumber"
        maxlength="20"
        pattern="[0-9]{20}"
        required
        autofocus
        style={inputCSS}
      />
    </div>
  );
};

export { CardNumberInput };
