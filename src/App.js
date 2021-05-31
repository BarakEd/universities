import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import ScreenRouter from './components/ScreenRouter';
import URLS from './constants/urls';
import styles from './App.style';

const Loader = styled(CircularProgress)`
  position: absolute; 
`;

const LoaderWrapper = styled.div`
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;


function App() {
  const [universities, setUniversities] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  
  useEffect(async() => {
    setIsFetching(true);
    
    const response = await fetch(URLS.getUniversities).then(res => res.json());
    setUniversities(response.slice(0, 10));
    setIsFetching(false);
  },[]);

  const renderLoader = () => (
    <LoaderWrapper>
      <Loader size={60}/>
    </LoaderWrapper>
  );

  return isFetching ? renderLoader() : (
    <styles.App>
      <ScreenRouter universities={universities}/>
    </styles.App>
  );
}

export default App;
