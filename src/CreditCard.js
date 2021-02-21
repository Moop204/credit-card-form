
const bankDetailCSS = {
    display: 'flex', 
    flexDirection: 'row', 
  };
  
const metalPlateCSS = {
    display: 'flex',  
    height: '90px',
    width: '80px',
    background: 'yellow',
};

const indentCSS = {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '40px',
    alignItems: 'flex-start'    
}

const creditCardCSS = {
    background: '#046296',
    flexDirection: 'column',
    display: 'flex',
    borderStyle: 'groove',
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '30px',
    paddingRight: '10px',
    width: '100vmin',
    alignItems: 'flex-start',    
    borderRadius: '20px',
    maxWidth: ''
};


const CreditCard = (props) => {
    const bankName = props.bankName;
    const cardNum = props.cardNumber;
    const expDate = props.expiryDate;
    const firstName = props.firstName;
    const lastName = props.lastName;

    return (
    <div style={creditCardCSS}>  
        <p> {bankName} </p>
        <div style={indentCSS}> 
            <div style={metalPlateCSS} />
            <p> {cardNum} </p>
            <div style={indentCSS}> 
                <p> Expiry: {expDate} </p>
                <p> {firstName} {lastName} </p>            
            </div>
        </div>
    </div>
    );

}

export {CreditCard};