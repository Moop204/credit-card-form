import {textCSS, inputCSS, individualInputCSS} from './form.js'

const ExpiryDateInput = (props) => {
    const expDate = props.expiry;
    const action = props.action;
  
  
    return ( 
      <div style={individualInputCSS}>       
        <p style={textCSS}>Expiration Date *</p>
        <input
        type="month"
        name="expire"
        required
        pattern="[0-9]{2}\/[0-9]{4}"
        onChange={action}
        value={expDate}
        style={inputCSS}        
        />
      </div>
    );
}

export {ExpiryDateInput};

