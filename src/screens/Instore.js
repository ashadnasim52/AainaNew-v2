import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from 'react-native';

export const Instore = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor:"white"}}>
        <View>
          <Image
            source={require('../assests/img/Benzor.jpg')}
            style={{width: 360, height: 400}}
          />
          <View
            style={{
              backgroundColor: '#14466b',
              margin: 25,
              borderRadius: 25,
              height: 120,
              marginTop: -60,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: 'white',
                fontWeight: 'bold',
                fontFamily: 'georgia',
                margin: 10,
                marginLeft: 25,
                marginTop: 20,
              }}>
              In Store
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'white',
                marginLeft: 25,
                fontFamily: 'georgia',
                marginBottom: 10,
              }}>
              Indian National Bird since 1910
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'white',
                fontFamily: 'georgia',
                marginLeft: 25,
              }}>
              Indian National Park New delhi India
            </Text>
          </View>

          

          <Text
            style={{
              margin: 10,
              flex: 1,
              fontFamily: 'lucida grande',
              color: 'black',
            }}>
           AAIENA’s In-Store facilitates the trial procedure by substituting it with advanced contactless virtual try-on so that they can opt for suitable apparel.
          </Text>
          <Text style={{color:"black",marginLeft:10,fontSize:20}}>Configure your Digital Store</Text>
          <Text style={{color:"black",marginLeft:10}}>Our self-formulated dashboard aims to set up your store. But before this configuration, you must ensure to plan your digitalized inventories.</Text>
          <Text style={{color:"black",marginLeft:10,fontSize:20}}>Installation & Training</Text>
          <Text style={{color:"black",marginLeft:10}}>With gadgets such as the iPad or laptop, AAIENA will integrate to the larger screen connected into your store.</Text>
          <Text style={{color:"black",marginLeft:10,fontSize:20}}>You are good to go</Text>
          <Text style={{color:"black",marginLeft:10}}>Bravo! Your customers are all set to experience a rich contactless virtual try-on without any hindrances.</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Instore;
