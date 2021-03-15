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
import Chaudhary_Garments from './screens/Chaudhary_Garments';
import Benzor from './screens/Benzor';
import Leather from './screens/Leather';
import Look from './screens/Look';
import Glitz from './screens/Glitz';


const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <Drawer.Navigator
      initialRouteName="Onboarding"
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
      <Drawer.Screen name="Sizing" component={Sizing} />
      <Drawer.Screen name="Ettire" component={Ettire} />
      <Drawer.Screen name="Sneaky" component={Sneaky} />
      <Drawer.Screen name="Instore" component={Instore} />
      <Drawer.Screen name="Inapp" component={Inapp} />
      <Drawer.Screen name="Inweb" component={Inweb} />
      <Drawer.Screen name="B2Cmain" component={B2cpagemain} />
      <Drawer.Screen name="Chaudhary_Garments" component={Chaudhary_Garments} />
      <Drawer.Screen name="BcPage" component={BcPage} />
      <Drawer.Screen name="Benzor" component={Benzor} />
      <Drawer.Screen name="Leather" component={Leather} />
      <Drawer.Screen name="Look" component={Look} />
      <Drawer.Screen name="Glitz" component={Glitz} />
      
      
      
   
  
     
    </Drawer.Navigator>
  );
}
