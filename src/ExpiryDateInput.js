import { textCSS, inputCSS, individualInputCSS } from "./form.js";
import styled from "styled-components";

const ExpiryDateInput = (props) => {
  const expDate = props.expiry;
  const action = props.action;

  const StyledExpiryDate = styled.input`
    width: 110px;
  `;

  return (
    <div style={individualInputCSS}>
      <label htmlFor="expiryDate" style={textCSS}>
        Expiration Date *
      </label>
      <StyledExpiryDate
        {...props}
        id="expiryDate"
        type="month"
        name="expire"
        required
        pattern="[0-9]{2}\/[0-9]{4}"
        style={inputCSS}
      />
    </div>
  );
};

export { ExpiryDateInput };
