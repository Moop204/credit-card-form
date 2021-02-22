import { textCSS, inputCSS, individualInputCSS } from "./form.js";

const CardNumberInput = (props) => {
  return (
    <div style={individualInputCSS}>
      <label htmlFor="cardNumber" style={textCSS}>
        Card Number *
      </label>
      <input
        {...props}
        id="cardNumber"
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
