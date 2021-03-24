import React from 'react';
import {Image, Linking, SafeAreaView, StyleSheet, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Avatar, Button, Icon, Layout, Text} from '@ui-kitten/components';
import {PRIMARY} from '../theme/colors';
import * as RootNavigation from '../RootNavigation';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#14466b',
      }}>
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#14466b',
          labelStyle: {
            color: 'red',
          },
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            paddingTop: 30,
            marginBottom: 20,
          }}>
          <Avatar
            source={{
              uri: 'https://picsum.photos/200/300',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              Sakshi
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
              }}>
              Last Name
            </Text>
          </View>
        </View>
      </Layout>
      {/* <DrawerItemList {...props} /> */}
      <Layout
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          backgroundColor: '#14466b',
          marginBottom: 20,
        }}>
        <DrawerItem
          style={{color: '#fff'}}
          label="Home"
          onPress={() => RootNavigation.navigate('Home')}
          labelStyle={{color: '#fff'}}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="home-outline" />
          )}
        />
        <DrawerItem
          label="About Aaiena"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('About')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="alert-circle-outline" />
          )}
        />
        <DrawerItem
          label="Clients"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('B2Cmain')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="person-outline" />
          )}
        />
        <DrawerItem
          label="Profile"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('Profile')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="person-outline" />
          )}
        />
        <DrawerItem
          label="Demo"
          onPress={() => RootNavigation.navigate('Demo')}
          labelStyle={{color: '#fff'}}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="monitor-outline" />
          )}
        />
        <DrawerItem
          label="Buy plan"
          onPress={() => RootNavigation.navigate('BuyPlans')}
          labelStyle={{color: '#fff'}}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="shopping-bag-outline" />
          )}
        />
        <DrawerItem
          label="My plans"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('MyPlans')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#8F9BB3" name="award-outline" />
          )}
        />
        <DrawerItem
          label="About Aaiena"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('About')}
          icon={({focused, color, size}) => (
            <Icon
              style={styles.icon}
              fill="#8F9BB3"
              name="alert-circle-outline"
            />
          )}
        />
        <DrawerItem
          label="Profile"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('Profile')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#8F9BB3" name="person-outline" />
          )}
        />
        <DrawerItem
          label="B2Cmain"
          onPress={() => RootNavigation.navigate('B2Cmain')}
          labelStyle={{color: '#fff'}}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="award-outline" />
          )}
        />

        <DrawerItem
          label="Setting"
          onPress={() => RootNavigation.navigate('Setting')}
          labelStyle={{color: '#fff'}}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="settings-2-outline" />
          )}
        />
        <Button
          style={{}}
          onPress={() => RootNavigation.replace('SignIn')}
          appearance="ghost"
          status="danger">
          Log Out
        </Button>
      </Layout>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
  },
});

// focused: Boolean indicating whether to highlight the drawer item as active.
// onPress (required): Function to execute on press.
// activeTintColor: Color for the icon and label when the item is active.
// inactiveTintColor: Color for the icon and label when the item is inactive.
// activeBackgroundColor: Background color for item when it's active.
// inactiveBackgroundColor: Background color for item when it's inactive.
// labelStyle: Style object for the label Text.
// style: Style object for the wrapper View.
