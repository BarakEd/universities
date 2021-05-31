import React, { useState, useEffect } from 'react';
import styles from './UniversitiesScreen.style';
import SearchBar from '../../components/SearchBar';
import UniversitiesTable from '../../components/UniversitiesTable';
import URLS from '../../constants/urls';
import { useLocation } from "react-router-dom";
import AppHeader from '../../components/AppHeader';
import App from '../../App';

const UniversitiesScreen = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [universities, setUniversities] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [pinned, setPinned] = useState(null);
  const [userName, setUserName] = useState(null);
  const location = useLocation();
  
  console.log('location', location);
  console.log('location', location?.name);
  
  useEffect(() => {
    if(location?.name){
      localStorage.setItem('userName', location.name);
      setUserName(location.name);
    } else {
      const name = localStorage.getItem('userName');
      localStorage.setItem('userName', name);
      console.log('localStorage.universities', name);
      setUserName(name);
    }
  }, []);
  

  console.log('props are:::', props);
  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const onSearchButtonClick = async() => {
    setIsFetching(true)
    const response = await fetch(URLS.searchUniversity+searchValue).then(res => res.json());
    console.log(response);
    setUniversities(response.slice(0, 10));
    setIsFetching(false);
  };

  // const fetchUniversities = async () => {
  //   const response = await fetch(URLS.getUniversities).then(res => res.json());
  //   setUniversities(response.slice(0, 10));
  //   console.log(response.slice(0, 10));
  // };

  // useEffect(() => {
  //   setIsFetching(true);
  //   fetchUniversities();
  //   setIsFetching(false);
  // },[]);

  const pinHandler = (name) => {
    console.log(name);
    setPinned(name);
  }

  console.log('isFetching', isFetching);
  return (
    <>
      <AppHeader name={userName} />
      <styles.ScreenWrapper className="ScreenWrapper"> 
        <SearchBar 
          onSearchChange={onSearchChange}
          onClickHandler={onSearchButtonClick}/>
        <UniversitiesTable
          isFetching={isFetching}
          pinnedUniversity={pinned}
          onStarClick={pinHandler}
          universities={universities || props?.universities} />
      </styles.ScreenWrapper>
    </>
  );
};

export default UniversitiesScreen;