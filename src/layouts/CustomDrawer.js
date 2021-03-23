import React from 'react';
import {Image, Linking, StyleSheet, View} from 'react-native';
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
        flex: 1,
        backgroundColor: PRIMARY,
      }}>
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            paddingTop: 20,
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
              style={
                {
                  // color: '#fff',
                }
              }>
              Sakshi
            </Text>
            <Text category="label" appearance="hint">
              Your Last Name
            </Text>
          </View>
        </View>
      </Layout>
      {/* <DrawerItemList {...props} /> */}
      <Layout
        style={{
          flexGrow: 1,
          justifyContent: 'center',
        }}>
        <DrawerItem
          label="Home"
          onPress={() => RootNavigation.navigate('Home')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#8F9BB3" name="home-outline" />
          )}
        />
        <DrawerItem
          label="Demo"
          onPress={() => RootNavigation.navigate('Demo')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#8F9BB3" name="monitor-outline" />
          )}
        />
        <DrawerItem
          label="Buy plan"
          onPress={() => RootNavigation.navigate('BuyPlans')}
          icon={({focused, color, size}) => (
            <Icon
              style={styles.icon}
              fill="#8F9BB3"
              name="shopping-bag-outline"
            />
          )}
        />
        <DrawerItem
          label="My plans"
          onPress={() => RootNavigation.navigate('MyPlans')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#8F9BB3" name="award-outline" />
          )}
        />
        <DrawerItem
          label="About Aaiena"
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
          onPress={() => RootNavigation.navigate('Profile')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#8F9BB3" name="person-outline" />
          )}
        />
        <DrawerItem
          label="B2Cmain"
          onPress={() => RootNavigation.navigate('B2Cmain')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#8F9BB3" name="person-outline" />
          )}
        />
        <DrawerItem
          label="Setting"
          onPress={() => RootNavigation.navigate('Setting')}
          icon={({focused, color, size}) => (
            <Icon
              style={styles.icon}
              fill="#8F9BB3"
              name="settings-2-outline"
            />
          )}
        />
      </Layout>
      <Layout>
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
