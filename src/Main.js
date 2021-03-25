import * as React from 'react';
import {StatusBar, Settings, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthContext} from './context/context';
import authInitialState from './state/authState';
import authReducer from './reducer/authReducer';
import Home from './screens/Home';
import Notification from './screens/Notification';
import CustomDrawer from './layouts/CustomDrawer';
import {PRIMARY} from './theme/colors';
import Demo from './screens/Demo';
import BuyPlans from './screens/BuyPlans';
import MyPlans from './screens/MyPlans';
import Profile from './screens/Profile';
import Setting from './screens/Setting';
import DetailScreen from './screens/DetailScreen';
import About from './screens/About';
import Sizing from './screens/Sizing';
import Ettire from './screens/Ettire';
import Sneaky from './screens/Sneaky';
import Instore from './screens/Instore';
import Inapp from './screens/Inapp';
import List from './screens/List';
import Inweb from './screens/Inweb';
import BcPage from './screens/BcPage';
import B2cpagemain from './screens/B2cpagemain';
import Chaudhary_Garments from './screens/Chaudhary_Garments';
import Root from './Root';
import axios from 'axios';
import {API} from './utils/Base';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
const Drawer = createDrawerNavigator();

export default function Main() {
  const [authState, dispatchAuth] = React.useReducer(
    authReducer,
    authInitialState,
  );

  const {
    isAuthenticated,
    authChecking,
    skipAuth,
    user,
    profile,
    role,
  } = authState;

  React.useEffect(() => {
    axios.defaults.baseURL = API;
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={PRIMARY} />
      <AuthContext.Provider value={{state: authState, dispatch: dispatchAuth}}>
        <NavigationContainer ref={navigationRef}>
          <Drawer.Navigator
            initialRouteName="Root"
            drawerType="front"
            drawerStyle={
              {
                // backgroundColor: PRIMARY,
                // width: '100%',
              }
            }
            drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Root" component={Root} />
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}
