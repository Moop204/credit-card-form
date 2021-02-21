import React, { Button, useState } from 'react';
import { FirstNameInput } from './FirstNameInput.js'; 
import { LastNameInput } from './LastNameInput.js'; 
import { CardNumberInput } from './CardNumberInput.js'; 
import { CreditCard } from './CreditCard.js'; 
import { CCVInput } from './CCVInput.js'; 
import { ExpiryDateInput } from './ExpiryDateInput.js'; 
import './App.css';

/*
  Write JavaScript/React code here and press Ctrl+Enter to execute.

  Try: mountNode.innerHTML = 'Hello World!';
   Or: ReactDOM.render(<h2>Hello React!</h2>, mountNode);
*/

/*

const testBox = () => {
    const [change, setChange] = useState(true);       
    return ( 
        <div> 
        <button onClick = {() => setChange(!change)}> 
          Click Here! 
        </button> 
        {change?<h1>Welcome to GeeksforGeeks</h1>: 
                <h1>A Computer Science Portal for Geeks</h1>} 
        </div> 
    ); 
}
*/



const formOuterCSS = {
  display: 'flex', 
  flexDirection: 'column', 
  background: '#D8CEC9',
  paddingTop: '30px',
  paddingBottom: '30px',
  paddingLeft: '40px',
  paddingRight: '40px',
  marginTop: '100px',
  borderRadius: '20px',
}

const namesCSS = { 
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'space-around',

}

const CreditCardForm = () => {

  /* State */
  const [bankName, setBankName] = useState("Bank");       
  const [cardNum, setCardNum] = useState("XXXX-XXXX-XXXX-XXXX");       
  const [expDate, setExpDate] = useState("MM/YYYY");       
  const [firstName, setFirstName] = useState("__________");       
  const [lastName, setLastName] = useState("__________");       
  const [cvv, setCvv] = useState("XXX(X)");       

  const formatCardNumber = (cardNum) => {
    const size = cardNum.length; 
    let insertions = [];
    for(let i=0;i<size;i++){
      if(i%4 == 0 && i > 0) {
        insertions.push(i);
      }
    }
    insertions.reverse();
    for(let i=0; i<insertions.length; i++) {
      let pos = insertions[i];
      cardNum = cardNum.substring(0, pos) + '-' + cardNum.substring(pos, cardNum.length);
    }
    return cardNum;
  } 

  const cardNumberHandler = (event) => {
    let val= event.target.value;
    // Filter out non-numbers
    val = val.replace(/[^0-9]/g, "");
    console.log("CLEANED INPUT " + val);
    val = formatCardNumber(String(val));
    console.log("SOZE " + val.length );
    if(val.length > 19) val = val.substr(0, 19);
    setCardNum(val);
  }

  const firstNameHandler = (event) => {
    let val= event.target.value;
    // Filter out non-numbers
    val = val.replace(/[^a-zA-Z]/g, "");
    val = val.toUpperCase();
    setFirstName(val);
  }


  const lastNameHandler = (event) => {
    let val= event.target.value;
    // Filter out non-numbers
    val = val.replace(/[^a-zA-Z]/g, "");
    val = val.toUpperCase();
    setLastName(val);
  }

  const cvvHandler = (event) => {
    let val= event.target.value;
    // Filter out non-numbers
    val = val.replace(/[^0-9]/g, "");
    if(val.length > 4) val = val.substr(0, 4);
    setCvv(val);
  }
  
  const expDateHandler = (event) => {
    let val= event.target.value;
    val = val.replace(/[^0-9]/g, "");
    if(val.length >= 2) {
      val = val.substring(0, 2) + '/' + val.substring(2, val.length);
    } else {
      val += '/';
    }
    if(val.length > 7) val = val.substr(0, 7);
    // Filter out non-numbers
    setExpDate(val);
  }

  return (
    <form>
      <h1>Credit Card</h1>
      <CreditCard bankName={bankName} cardName={cardNum} expiryDate={expDate} firstName={firstName} lastName = {lastName}/>
      <div style={formOuterCSS}> 
        <CardNumberInput number={cardNum} action={cardNumberHandler}/>
        <div style={namesCSS}> 
          <FirstNameInput name={firstName} action={firstNameHandler} />
          <LastNameInput name={lastName} action={lastNameHandler} />
        </div>
        <CCVInput number={cvv} action={cvvHandler} />
        <ExpiryDateInput expiry={expDate} action={expDateHandler}/>
      </div>      
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreditCardForm/>
      </header>
    </div>
  );
}

export default App;
