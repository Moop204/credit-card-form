import chip from "./media/credit-card-chip.svg";

const metalPlateCSS = {
  height: "50px",
  width: "auto",
  background: "yellow",
  borderRadius: "4px",
};

const indentCSS = {
  flexDirection: "column",
  paddingLeft: "40px",
};

const creditCardCSS = {
  background: "#046296",
  borderStyle: "groove",
  padding: "24px",
  paddingTop: "72px",
  borderRadius: "20px",
  maxWidth: "630px",
  maxHeight: "384px",
  marginLeft: "40px",
  marginRight: "40px",
  position: "absolute",
  top: "30%",
  left: "30%",
};

const cvvStyle = {
  paddingTop: "40px",
};

const blackBar = {
  background: "#000000",
  height: "40px",
  width: "100%",
};

const cardStyle = {
  letterSpacing: "5px",
  textShadow: "1px 1px 2px",
  fontSize: "150%",
};

const expiryStyle = {
  letterSpacing: "3px",
  textShadow: "1px 1px 2px",
  fontSize: "90%",
};

const CreditCard = (props) => {
  const { cardNumber, expiryDate, firstName, lastName, cvv, cardFace } = props;
  if (cardFace) {
    return (
      <div style={creditCardCSS}>
        <div style={indentCSS}>
          <img src={chip} style={metalPlateCSS} />
          <p style={cardStyle}> {cardNumber} </p>
          <div style={indentCSS}>
            <label>Expiry </label>
            <p style={expiryStyle}> {expiryDate} </p>
          </div>
          <p style={cardStyle}>
            {firstName} {lastName}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div style={creditCardCSS}>
      <div style={blackBar}></div>
      <div style={cvvStyle}>{cvv}</div>
    </div>
  );
};

export { CreditCard };
