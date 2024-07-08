import './App.css';
import './mobile.css';

import React, { useState } from 'react'; // Only import what's necessary
import ThankYou from './ThankYou';
import Mobile from './Mobile';

import iconList from './assets/images/icon-list.svg'; // Correct import statement
import illustrationDesktop from './assets/images/illustration-sign-up-desktop.svg';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [thankYou, setThankYou] = useState(false);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputValue !== "" && EmailRegex.test(inputValue)) {
      setThankYou(true);
    }
  }

  const isValid = (email) => {
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EmailRegex.test(email);
  }

  const isMobile = () => {
    return window.innerWidth <= 480;
  }

  return (
    <div className="App">
      {isMobile() ? (
        <Mobile />
      ) : (
        thankYou ? (
          <ThankYou email={inputValue} />
        ) : (
          <div className='container'>
            <div className='left'>
              <h1>Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <div className='notes'><img src={iconList} alt="Icon list" /><p>Product discovery and building what matters</p></div> 
              <div className='notes'><img src={iconList} alt="Icon list" /><p>Measuring to ensure updates are a success</p></div> 
              <div className='notes'><img src={iconList} alt="Icon list" /><p>And much more!</p></div> 
              <form onSubmit={handleSubmit}>
                <input onInput={handleInputValue} value={inputValue} type='text' className='email-input' placeholder='Email address' />
                <p className='valid' style={{ display: inputValue === "" || isValid(inputValue) ? "none" : "block" }}>Please Enter valid email</p>
              </form>
            </div>
            <div className='right'>
              <img src={illustrationDesktop} alt="Illustration" />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
