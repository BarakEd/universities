import React from 'react';
import styles from './AppHeader.style';
import Logo from '../../assets/logo.png';

const AppHeader = ({name}) => {  
  console.log(name);

  return (
    <styles.Header>
      <img src={Logo} />
      {name && 
        <styles.NameWrapper>
          {`Welcome ${name}`}
        </styles.NameWrapper>
      }
    </styles.Header>
  );
};

export default AppHeader;