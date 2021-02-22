import React, { useState } from "react";
import { FirstNameInput } from "./FirstNameInput.js";
import { LastNameInput } from "./LastNameInput.js";
import { CardNumberInput } from "./CardNumberInput.js";
import { CreditCard } from "./CreditCard.js";
import { CCVInput } from "./CCVInput.js";
import { ExpiryDateInput } from "./ExpiryDateInput.js";
import styled from "styled-components";
import { NavBar } from "./NavBar.js";

import "./App.css";
import "./NavBar.js";

const formOuterCSS = {
  display: "flex",
  flexDirection: "column",
  background: "#D8CEC9",
  paddingTop: "300px",
  paddingBottom: "30px",
  paddingLeft: "40px",
  paddingRight: "40px",
  marginTop: "100px",
  marginLeft: "30%",
  marginRight: "30%",
  borderRadius: "10px",
  position: "absolute",
};

const namesCSS = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
};

const CreditCardForm = () => {
  /* State */
  const [cardNum, setCardNum] = useState("XXXX-XXXX-XXXX-XXXX");
  const [expDate, setExpDate] = useState("MM/YYYY");
  const [firstName, setFirstName] = useState("__________");
  const [lastName, setLastName] = useState("__________");
  const [cvv, setCvv] = useState("XXX(X)");
  const [showFront, setShowFront] = useState(true);

  const formatCardNumber = (cardNum) => {
    const size = cardNum.length;
    let insertions = [];
    for (let i = 0; i < size; i++) {
      if (i % 4 === 0 && i > 0) {
        insertions.push(i);
      }
    }
    insertions.reverse();
    for (let i = 0; i < insertions.length; i++) {
      let pos = insertions[i];
      cardNum =
        cardNum.substring(0, pos) +
        "-" +
        cardNum.substring(pos, cardNum.length);
    }
    return cardNum;
  };

  const cardNumberHandler = (event) => {
    let val = event.target.value;
    // Filter out non-numbers
    val = val.replace(/[^0-9]/g, "");
    val = formatCardNumber(String(val));
    if (val.length > 19) val = val.substr(0, 19);

    setCardNum(val);
  };

  const firstNameHandler = (event) => {
    let val = event.target.value;
    // Filter characters
    val = val.replace(/[^a-zA-Z]/g, "");
    val = val.toUpperCase();
    setFirstName(val);
  };

  const lastNameHandler = (event) => {
    let val = event.target.value;
    // Filter characters
    val = val.replace(/[^a-zA-Z]/g, "");
    val = val.toUpperCase();
    setLastName(val);
  };

  const cvvHandler = (event) => {
    let val = event.target.value;
    // Filter out non-numbers
    val = val.replace(/[^0-9]/g, "");
    if (val.length > 4) val = val.substr(0, 4);
    setCvv(val);
  };

  const expDateHandler = (event) => {
    let val = event.target.value;
    // Filter out non-numbers
    val = val.replace(/[^0-9]/g, "");
    if (val.length >= 2) {
      val = val.substring(0, 2) + "/" + val.substring(2, val.length);
    } else {
      val += "/";
    }
    // Trim back to acceptable size
    if (val.length > 7) val = val.substr(0, 7);
    setExpDate(val);
  };

  const handleCvvFocus = (event) => {
    setShowFront(false);
  };

  const flexStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const handleExpDateFocus = (event) => {
    setShowFront(true);
  };

  const handleLastNameFocus = (event) => {
    setShowFront(true);
  };

  const handleFirstNameFocus = (event) => {
    setShowFront(true);
  };

  const handleCardNumberFocus = (event) => {
    setShowFront(true);
  };

  const handleSubmit = (event) => {
    console.log("SUBMITTED!");
    console.log("Card Number " + { cardNum });
    console.log("Expiry Date " + { expDate });
    console.log("Name " + { firstName } + " " + { lastName });
    console.log("CVV " + { cvv });
  };

  const CentredCard = styled.div`
    diplay: flex;
    justify-content: center;
    background-color: black;
  `;

  return (
    <div style={flexStyle}>
      <NavBar />
      <form>
        <div style={formOuterCSS}>
          <CardNumberInput
            value={cardNum}
            onChange={cardNumberHandler}
            onFocus={handleCardNumberFocus}
          />
          <div style={namesCSS}>
            <FirstNameInput
              value={firstName}
              onChange={firstNameHandler}
              onFocus={handleFirstNameFocus}
            />
            <LastNameInput
              value={lastName}
              onChange={lastNameHandler}
              onFocus={handleLastNameFocus}
            />
          </div>
          <div style={namesCSS}>
            <CCVInput
              value={cvv}
              onChange={cvvHandler}
              onFocus={handleCvvFocus}
            />
            <ExpiryDateInput
              value={expDate}
              onChange={expDateHandler}
              onFocus={handleExpDateFocus}
            />
            <button onSubmit={handleSubmit}>Submit</button>
          </div>
        </div>
      </form>
      <CentredCard>
        <CreditCard
          cardNumber={cardNum}
          expiryDate={expDate}
          firstName={firstName}
          lastName={lastName}
          cvv={cvv}
          cardFace={showFront}
        />
      </CentredCard>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CreditCardForm />
    </div>
  );
}

export default App;
