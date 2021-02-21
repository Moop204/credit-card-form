import {textCSS, inputCSS, individualInputCSS} from './form.js'

const LastNameInput = (props) => {
    const name = props.name;
    const action = props.action;
  
  
    return ( 
      <div style={individualInputCSS}>       
        <p style={textCSS}> Last Name *</p>
        <input
          type="text"
          name="LastName"
          required
          onChange={action}
          value={name}
          style={inputCSS}        
          />
      </div>
    );
}

export {LastNameInput};