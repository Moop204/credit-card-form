import {textCSS, inputCSS, individualInputCSS} from './form.js'

const CCVInput = (props) => {
    const number = props.number;
    const action = props.action;
  
  
    return ( 
      <div style={individualInputCSS}>       
        <p style={textCSS}>CVV *</p>
        <input
          type="text"
          name="cvv"
          maxlength="7"
          pattern="[0-9]{3,4}"
          required
          onChange={action}
          value={number}
          style={inputCSS}
        />
      </div>
    );
}

export {CCVInput};