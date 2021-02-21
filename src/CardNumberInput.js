import {textCSS, inputCSS, individualInputCSS} from './form.js'

const CardNumberInput = (props) => {
    const number = props.number;
    const action = props.action;
  
  
    return ( 
      <div style={individualInputCSS}>       
        <p style={textCSS}>Card Number *</p>
        <input
          type="text"
          name="cardNumber"
          maxlength="20"
          pattern="[0-9]{20}"
          required
          autofocus
          onChange={action}
          value={number}
          style={inputCSS}        
        />
      </div>
    );
}

export {CardNumberInput};