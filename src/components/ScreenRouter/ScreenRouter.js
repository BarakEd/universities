import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ROUTES from '../../constants/routes';
import WelcomeScreen from '../../screens/WelcomeScreen';
import UniversitiesScreen from '../../screens/UniversitiesScreen';
// import AppHeader from '../AppHeader';

export default function ScreenRouter(props) {
  console.log('ScreenRouter', props)
    return (
      <>
      {/* <AppHeader/> */}
      <Router>
        <Switch>
            <Route
                exact
                path={ ROUTES.LOGIN }
                component={ (props) => <WelcomeScreen { ...props } /> }
                />
            <Route
                path={ ROUTES.UNIVERSITIES }
                component={ () => <UniversitiesScreen { ...props } /> }
            />           
        </Switch>
      </Router>
      </>
    );
}
