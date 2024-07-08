import React from "react";
import checkIcon from "./assets/images/icon-success.svg";
import './thankyou.css';



const ThankYou = ({email}) => {
    return (
        <div className="thank-you">
            <img src={checkIcon} alt="Check Icon"></img>
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to {email}<br/> Please open it and click the
            button inside to confirm your subscription.</p>
        </div>
    );
};

export default ThankYou;


