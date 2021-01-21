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

  console.log(authState.isAuthenticated);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={PRIMARY} />
      <AuthContext.Provider value={{state: authState, dispatch: dispatchAuth}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={
              {
                // header: (props) => <CustomHeader {...props} />,
              }
            }
            initialRouteName="SignIn">
            {isAuthenticated ? (
              <></>
            ) : (
              <>
                <Stack.Screen
                  name="SignIn"
                  component={Signin}
                  options={{
                    headerShown: false,
                  }}
                />

                <Stack.Screen
                  name="Signup"
                  component={Signup}
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
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
};

export default Root;
