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


const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <Drawer.Navigator
      initialRouteName="About"
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
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Setting" component={Setting} />

      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Size" component={Sizing} />
      <Drawer.Screen name="Ettir" component={Ettire} />
      <Drawer.Screen name="Sneak" component={Sneaky} />
      <Drawer.Screen name="store" component={Instore} />
      <Drawer.Screen name="inapp" component={Inapp} />
      <Drawer.Screen name="web" component={Inweb} />
      <Drawer.Screen name="List" component={List} />
      <Drawer.Screen name="B2C" component={BcPage} />
      <Drawer.Screen name="B2Cmain" component={B2cpagemain} />
    </Drawer.Navigator>
  );
}
