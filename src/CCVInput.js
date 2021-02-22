import { textCSS, inputCSS, individualInputCSS } from "./form.js";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 70px;
`;

const CCVInput = (props) => {
  return (
    <div style={individualInputCSS}>
      <label htmlFor="cvv" style={textCSS}>
        CVV *
      </label>
      <StyledInput
        {...props}
        id="cvv"
        type="text"
        name="cvv"
        maxlength="7"
        pattern="[0-9]{3,4}"
        required
        style={inputCSS}
      />
    </div>
  );
};

export { CCVInput };
