import * as React from 'react';
import {Button, Settings, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Notification from './screens/Notification';
import CustomDrawer from './layouts/CustomDrawer';
import {PRIMARY} from './theme/colors';
import Demo from './screens/Demo';
import BuyPlans from './screens/BuyPlans';
import MyPlans from './screens/MyPlans';
import About from './screens/About';
import Profile from './screens/Profile';
import Setting from './screens/Setting';
import DetailScreen from './screens/DetailScreen';

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      // drawerType="slide"
      drawerStyle={
        {
          // backgroundColor: PRIMARY,
          // width: '100%',
        }
      }
      statusBarAnimation="fade"
      hideStatusBar={true}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={Notification} />
      <Drawer.Screen name="Demo" component={Demo} />
      <Drawer.Screen name="BuyPlans" component={BuyPlans} />
      <Drawer.Screen name="MyPlans" component={MyPlans} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
}
