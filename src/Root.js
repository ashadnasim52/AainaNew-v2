import React, {useReducer, useEffect} from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthContext} from './context/context';
import authInitialState from './state/authState';
import authReducer from './reducer/authReducer';

import {PRIMARY} from './theme/colors';
import Axios from 'axios';
import {API} from './utils/Base';
import {checkAuth} from './actions/auth.action';
import AsyncStorage from '@react-native-community/async-storage';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Onboarding from './screens/Onboarding';
import Choose from './screens/Choose';
import ForgetPassword from './screens/ForgetPassword';
import OPTVerification from './screens/OTPVerification';
import SelectRole from './screens/SelectRole';
import CreateProfile from './screens/CreateProfile';
import Home from './screens/Home';
import SignUpOrganization from './screens/SignUpOrganization';
import Main from './Main';
import CustomHeader from './layouts/CustomHeader';
import DetailScreen from './screens/DetailScreen';
import About from './screens/About';
import Sizing from './screens/Sizing';
import Ettire from './screens/Ettire';
import Sneaky from './screens/Sneaky';
import Instore from './screens/Instore';
import Inapp from './screens/Inapp';
import List from './screens/List';
import Inweb from './screens/Inweb';

AsyncStorage.removeItem('@aaina_login');

const Stack = createStackNavigator();

const Root = () => {
  const [authState, dispatchAuth] = useReducer(authReducer, authInitialState);

  const {
    isAuthenticated,
    authChecking,
    skipAuth,
    user,
    profile,
    role,
  } = authState;

  useEffect(() => {
    Axios.defaults.baseURL = API;
  }, []);

  // console.log(authState.isAuthenticated);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={PRIMARY} />
      <AuthContext.Provider value={{state: authState, dispatch: dispatchAuth}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: (props) => <CustomHeader {...props} />,
            }}
            initialRouteName="Main">
            <Stack.Screen
              name="SignUp"
              component={Signup}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUpOrganization"
              component={SignUpOrganization}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="OPTVerification"
              component={OPTVerification}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SelectRole"
              component={SelectRole}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Choose"
              component={Choose}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignIn"
              component={Signin}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="CreateProfile"
              component={CreateProfile}
              options={
                {
                  // headerShown: false,
                }
              }
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={
                {
                  // headerShown: false,
                }
              }
            />

            <Stack.Screen
              name="DetailScreen"
              component={DetailScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Size" component={Sizing} />
            <Stack.Screen name="Ettir" component={Ettire} />
            <Stack.Screen name="Sneak" component={Sneaky} />
            <Stack.Screen name="store" component={Instore} />
            <Stack.Screen name="inapp" component={Inapp} />
            <Stack.Screen name="web" component={Inweb} />
            <Stack.Screen name="List" component={List} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
};

export default Root;
