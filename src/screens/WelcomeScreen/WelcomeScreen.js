import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './WelcomeScreen.style.js';
import styles from './WelcomeScreen.style';
import { useHistory } from "react-router-dom";
import AppHeader from '../../components/AppHeader';

const WelcomeScreen = () => {
  const [name, setName] = useState('');
  let history = useHistory();

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }
  
  const handleButtonCLick = () => {
    history.push({
      pathname: "/universities",
      name: name,
    });
  }

  return (
    <>
    <AppHeader />
      <styles.ScreenWrapper className="ScreenWrapper">
        <styles.ImageWrapper className="ImageWrapper"/>
        <styles.LoginWrapper className="LoginWrapper">
          <styles.InputWrapper className="InputWrapper">
            <styles.LoginText className="LoginText">
              Whats your name?
            </styles.LoginText>
            <styles.LoginInput 
            className="LoginInput" 
            placeholder='Full Name'
            value={ name }
            onChange={handleInputChange}/>
            <styles.LoginButton 
              onClick={handleButtonCLick}
              disabled={name.length === 0}
              >Continue</styles.LoginButton>
          </styles.InputWrapper>
        </styles.LoginWrapper>
      </styles.ScreenWrapper>
    </>
  );
};

WelcomeScreen.propTypes = {
  
};

export default WelcomeScreen;