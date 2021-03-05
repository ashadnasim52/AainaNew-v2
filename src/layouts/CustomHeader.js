import {useNavigation} from '@react-navigation/native';
// import {Avatar, Icon, Text, Layout} from '@ui-kitten/components';
// import React from 'react';
// import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {ACCENT, PRIMARY} from '../theme/colors';
import React from 'react';
import {
  Container,
  Header,
  CardItem,
  Card,
  Left,
  Right,
  Item,
  Input,
  Button,
  Drawer,
} from 'native-base';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
  TextInput,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
// const CustomHeader = ({navigation}) => {
//   const nav = useNavigation();
//   return (
//     <Layout style={styles.header}>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.dispatch(DrawerActions.toggleDrawer());
//         }}>
//         <Icon style={styles.icon} fill="#A8A8A8" name="menu-2-outline" />
//       </TouchableOpacity>
//       <View>
//         <Text style={styles.subtext} category="label">
//           plans
//         </Text>
//         <Text style={styles.text} category="h6">
//           your plans
//         </Text>
//       </View>
//       <Avatar
//         source={{
//           uri: 'https://picsum.photos/id/1005/367/267',
//         }}
//       />
//     </Layout>
//   );
// };

const CustomHeader = ({navigation}) => {
  const nav = useNavigation();
  return (
    <View style={{backgroundColor: '#fff', height: 60}}>
      <View style={{backgroundColor: '#fff', height: 100, borderRadius: 30}}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Feather
            name="align-center"
            style={{fontSize: 30, marginTop: 35, marginLeft: 40}}
          />
        </TouchableOpacity>
        <Left style={{marginTop: -40}}>
          <Text style={{alignSelf: 'center', color: 'grey'}}>Location</Text>
          <View style={{flexDirection: 'row'}}>
            <Entypo
              name="location-pin"
              style={{fontSize: 20, color: 'green'}}
            />
            <Text style={{fontWeight: 'bold'}}>Priya, </Text>
            <Text style={{color: 'grey'}}>India</Text>
          </View>
        </Left>
        <Right>
          <Image
            source={require('../assests/img/girl.jpg')}
            style={{
              width: 60,
              height: 60,
              marginRight: -170,
              marginTop: -40,
              borderRadius: 50,
            }}
          />
        </Right>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    // backgroundColor: '#fff',
  },
  icon: {
    width: 32,
    height: 32,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Merriweather-BlackItalic',
    color: PRIMARY,
  },
  subtext: {
    textAlign: 'center',
    fontFamily: 'Merriweather-Light',
  },
});
