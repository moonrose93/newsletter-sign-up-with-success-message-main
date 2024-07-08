import React, { useState } from "react";
import "./mobile.css";
import illustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import iconList from "./assets/images/icon-list.svg";
import ThankYou from "./ThankYou";
import "./thankyou.css";

export default function Mobile() {
  const [inputValue, setInputValue] = useState("");
  const [thankYou, setThankYou] = useState(false);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputValue !== "" && EmailRegex.test(inputValue)) {
      setThankYou(true);
    }
  };

  const isValid = (email) => {
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EmailRegex.test(email);
  };

  return (
    <>
      {thankYou ? (
        <ThankYou email={inputValue} />
      ) : (
        <div className="container-mobile">
          <div className="left-mobile">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="notes">
              <img src={iconList} alt="Icon list" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="notes">
              <img src={iconList} alt="Icon list" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="notes">
              <img src={iconList} alt="Icon list" />
              <p>And much more!</p>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                onInput={handleInputValue}
                value={inputValue}
                type="text"
                className="email-input"
                placeholder="Email address"
              />
              <p
                className="valid"
                style={{ display: inputValue === "" || isValid(inputValue) ? "none" : "block" }}
              >
                Please enter a valid email
              </p>
            </form>
          </div>
          <div className="right-mobile">
            <img src={illustrationMobile} alt="Illustration" />
          </div>
        </div>
      )}
    </>
  );
}
