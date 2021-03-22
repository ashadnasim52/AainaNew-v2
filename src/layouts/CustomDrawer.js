import React from 'react';
import {Image, Linking, SafeAreaView, StyleSheet, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Avatar, Button, Icon, Layout, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';



const CustomDrawer = (props) => {
  const nav = useNavigation();
  return (
    <>
    
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        flex: 1,
        backgroundColor:"#14466b",
        
      
     
      }}>
      
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor:"#14466b",
          labelStyle:{
            color:"red",
          }
          
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            paddingTop: 50,
            
            
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
                   color: '#fff',
                }
              }>
              Sakshi
            </Text>
            <Text style={
                {
                   color: '#fff',
                   fontSize:12
                }
              }>
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
          backgroundColor:"#14466b",
          marginBottom:90
  
        }}>
        <DrawerItem 
      style={{color:"#fff",}}
  
          label="Home"
          labelStyle={{color:"#fff"}}
          onPress={() => nav.navigate('Home')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="home-outline" />
          )}
        />
        <DrawerItem
          label="About Aaiena"
          labelStyle={{color:"#fff"}}
          onPress={() => nav.navigate('About')}
          icon={({focused, color, size}) => (
            <Icon
              style={styles.icon}
              fill="#fff"
              name="alert-circle-outline"
            />
          )}
        />
         <DrawerItem
          label="Clients"
          labelStyle={{color:"#fff"}}
          onPress={() => nav.navigate('B2Cmain')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="person-outline" />
          )}
        />
          <DrawerItem
          label="Profile"
          labelStyle={{color:"#fff"}}
          onPress={() => nav.navigate('Profile')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="person-outline" />
          )}
        />
        <DrawerItem 
        
          label="Demo"
          labelStyle={{color:"#fff"}}
          onPress={() => nav.navigate('Demo')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="monitor-outline" />
          )}
        />
        <DrawerItem
          label="Buy plan"
          labelStyle={{color:"#fff"}}
          onPress={() => nav.navigate('BuyPlans')}
          icon={({focused, color, size}) => (
            <Icon
              style={styles.icon}
              fill="#fff"
              name="shopping-bag-outline"
            />
          )}
        />
        <DrawerItem
          label="My plans"
          labelStyle={{color:"#fff"}}
          onPress={() => nav.navigate('MyPlans')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="award-outline" />
          )}
        />
        
      
         
        <DrawerItem
          label="Setting"
          labelStyle={{color:"#fff"}}
          onPress={() => nav.navigate('Setting')}
          icon={({focused, color, size}) => (
            <Icon
              style={styles.icon}
              fill="#fff"
              name="settings-2-outline"
            />
          )}
        />
      </Layout>
      <Layout>
       <Text style={{marginTop:-60,marginLeft:70,fontSize:16,fontWeight:"bold",color:"#fff"}}>
         Log Out
       </Text>
      </Layout>

    </DrawerContentScrollView>
    
    </>
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
