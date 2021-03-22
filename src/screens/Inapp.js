import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from 'react-native';

const Inapp = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor:"#14466b"}}>
        <View>
          <Image
            source={require('../assests/img/inapp1.png')}
            style={{width: 360, height: 400}}
          />
          <View
            style={{
              backgroundColor: 'white',
              margin: 25,
              borderRadius: 25,
              height: 120,
              marginTop: -60,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: '#14466b',
                fontWeight: 'bold',
                fontFamily: 'georgia',
                margin: 10,
                marginLeft: 25,
                marginTop: 20,
              }}>
              In App
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#14466b',
                marginLeft: 25,
                fontFamily: 'georgia',
                marginBottom: 10,
              }}>
              Indian National Bird since 1910
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#14466b',
                fontFamily: 'georgia',
                marginLeft: 25,
              }}>
              Indian National Park New delhi India
            </Text>
          </View>

          <View style={{marginLeft: 10}}>
            <Text style={{fontFamily: 'lucida grande', fontWeight: 'bold',color:"white"}}>
              KingFisher 21/Feb/2020
            </Text>
            <Text style={{marginTop: 12, fontFamily: 'lucida grande',color:"white"}}>
              National Birds
            </Text>
          </View>

          <Text
            style={{
              margin: 10,
              flex: 1,
              fontFamily: 'lucida grande',
              color: 'white',
            }}>
            Our company Product is the best Porduct in the industry of IT and
            Fashion Appearel all Product of the Aaiena are currently in the
            trends and providing world best Sizing Product best ever Our company
            Product is the best Porduct in the industry of IT and Fashion
            Appearel all Product of the Aaiena are currently in the trends and
            providing world best Sizing Product best ever Our company Product is
            the best Porduct in the industry of IT and Fashion Appearel all
            Product of the Aaiena are currently in the trends and providing
            world best Sizing Product best ever Our company Product is the best
            Porduct in the industry of IT and Fashion Appearel all Product of
            the Aaiena are currently in the trends and providing world best
            Sizing Product best ever Our company Product is the best Porduct in
            the industry of IT and Fashion Appearel all Product of the Aaiena
            are currently in the trends and providing world best Sizing Product
            best ever. Our company Product is the best Porduct in the industry
            of IT and Fashion Appearel all Product of the Aaiena are currently
            in the trends and providing world best Sizing Product best ever Our
            company Product is the best Porduct in the industry of IT and
            Fashion Appearel all Product of the Aaiena are currently in the
            trends and providing world best Sizing Product best ever Our company
            Product is the best Porduct in the industry of IT and Fashion
            Appearel all Product of the Aaiena are currently in the trends and
            providing world best Sizing Product best ever Our company Product is
            the best Porduct in the industry of IT and Fashion Appearel all
            Product of the Aaiena are currently in the trends and providing
            world best Sizing Product best ever Our company Product is the best
            Porduct in the industry of IT and Fashion Appearel all Product of
            the Aaiena are currently in the trends and providing world best
            Sizing Product best ever Our company Product is the best Porduct in
            the industry of IT and Fashion Appearel all Product of the Aaiena
            are currently in the trends and providing world best Sizing Product
            best ever Our company Product is the best Porduct in the industry of
            IT and Fashion Appearel all Product of the Aaiena are currently in
            the trends and providing world best Sizing Product best ever Our
            company Product is the best Porduct in the industry of IT and
            Fashion Appearel all Product of the Aaiena are currently in the
            trends and providing world best Sizing Product best ever Our company
            Product is the best Porduct in the industry of IT and Fashion
            Appearel all Product of the Aaiena are currently in the trends and
            providing world best Sizing Product best ever Our company Product is
            the best Porduct in the industry of IT and Fashion Appearel all
            Product of the Aaiena are currently in the trends and providing
            world best Sizing Product best ever Our company Product is the best
            Porduct in the industry of IT and Fashion Appearel all Product of
            the Aaiena are currently in the trends and providing world best
            Sizing Product best ever Our company Product is the best Porduct in
            the industry of IT and Fashion Appearel all Product of the Aaiena
            are currently in the trends and providing world best Sizing Product
            best ever Our company Product is the best Porduct in the industry of
            IT and Fashion Appearel all Product of the Aaiena are currently in
            the trends and providing world best Sizing Product best ever Our
            company Product is the best Porduct in the industry of IT and
            Fashion Appearel all Product of the Aaiena are currently in the
            trends and providing world best Sizing Product best ever Our company
            Product is the best Porduct in the industry of IT and Fashion
            Appearel all Product of the Aaiena are currently in the trends and
            providing world best Sizing Product best ever Our company Product is
            the best Porduct in the industry of IT and Fashion Appearel all
            Product of the Aaiena are currently in the trends and providing
            world best Sizing Product best ever Our company Product is the best
            Porduct in the industry of IT and Fashion Appearel all Product of
            the Aaiena are currently in the trends and providing world best
            Sizing Product best ever Our company Product is the best Porduct in
            the industry of IT and Fashion Appearel all Product of the Aaiena
            are currently in the trends and providing world best Sizing Product
            best ever Our company Product is the best Porduct in the industry of
            IT and Fashion Appearel all Product of the Aaiena are currently in
            the trends and providing world best Sizing Product best ever Our
            company Product is the best Porduct in the industry of IT and
            Fashion Appearel all Product of the Aaiena are currently in the
            trends and providing world best Sizing Product best ever Our company
            Product is the best Porduct in the industry of IT and Fashion
            Appearel all Product of the Aaiena are currently in the trends and
            providing world best Sizing Product best ever Our company Product is
            the best Porduct in the industry of IT and Fashion Appearel all
            Product of the Aaiena are currently in the trends and providing
            world best Sizing Product best ever Our company Product is the best
            Porduct in the industry of IT and Fashion Appearel all Product of
            the Aaiena are currently in the trends and providing world best
            Sizing Product best ever Our company Product is the best Porduct in
            the industry of IT and Fashion Appearel all Product of the Aaiena
            are currently in the trends and providing world best Sizing Product
            best ever Our company Product is the best Porduct in the industry of
            IT and Fashion Appearel all Product of the Aaiena are currently in
            the trends and providing world best Sizing Product best ever Our
            company Product is the best Porduct in the industry of IT and
            Fashion Appearel all Product of the Aaiena are currently in the
            trends and providing world best Sizing Product best ever Our company
            Product is the best Porduct in the industry of IT and Fashion
            Appearel all Product of the Aaiena are currently in the trends and
            providing world best Sizing Product best ever Our company Product is
            the best Porduct in the industry of IT and Fashion Appearel all
            Product of the Aaiena are currently in the trends and providing
            world best Sizing Product best ever Our company Product is the best
            Porduct in the industry of IT and Fashion Appearel all Product of
            the Aaiena are currently in the trends and providing world best
            Sizing Product best ever Our company Product is the best Porduct in
            the industry of IT and Fashion Appearel all Product of the Aaiena
            are currently in the trends and providing world best Sizing Product
            best ever Our company Product is the best Porduct in the industry of
            IT and Fashion Appearel all Product of the Aaiena are currently in
            the trends and providing world best Sizing Product best ever Our
            company Product is the best Porduct in the industry of IT and
            Fashion Appearel all Product of the Aaiena are currently in the
            trends and providing world best Sizing Product best ever Our company
            Product is the best Porduct in the industry of IT and Fashion
            Appearel all Product of the Aaiena are currently in the trends and
            providing world best Sizing Product best ever Our company Product is
            the best Porduct in the industry of IT and Fashion Appearel all
            Product of the Aaiena are currently in the trends and providing
            world best Sizing Product best ever Our company Product is the best
            Porduct in the industry of IT and Fashion Appearel all Product of
            the Aaiena are currently in the trends and providing world best
            Sizing Product best ever Our company Product is the best Porduct in
            the industry of IT and Fashion Appearel all Product of the Aaiena
            are currently in the trends and providing world best Sizing Product
            best ever Our company Product is the best Porduct in the industry of
            IT and Fashion Appearel all Product of the Aaiena are currently in
            the trends and providing world best Sizing Product best ever Our
            company Product is the best Porduct in the industry of IT and
            Fashion Appearel all Product of the Aaiena are currently in the
            trends and providing world best Sizing Product best ever Our company
            Product is the best Porduct in the industry of IT and Fashion
            Appearel all Product of the Aaiena are currently in the trends and
            providing world best Sizing Product best ever Our company Product is
            the best Porduct in the industry of IT and Fashion Appearel all
            Product of the Aaiena are currently in the trends and providing
            world best Sizing Product best ever Our company Product is the best
            Porduct in the industry of IT and Fashion Appearel all Product of
            the Aaiena are currently in the trends and providing world best
            Sizing Product best ever Our company Product is the best Porduct in
            the industry of IT and Fashion Appearel all Product of the Aaiena
            are currently in the trends and providing world best Sizing Product
            best ever Our company Product is the best Porduct in the industry of
            IT and Fashion Appearel all Product of the Aaiena are currently in
            the trends and providing world best Sizing Product best ever Our
            company Product is the best Porduct in the industry of IT and
            Fashion Appearel all Product of the Aaiena are currently in the
            trends and providing world best Sizing Product best ever Our company
            Product is the best Porduct in the industry of IT and Fashion
            Appearel all Product of the Aaiena are currently in the trends and
            providing world best Sizing Product best ever Our company Product is
            the best Porduct in the industry of IT and Fashion Appearel all
            Product of the Aaiena are currently in the trends and providing
            world best Sizing Product best ever Our company Product is the best
            Porduct in the industry of IT and Fashion Appearel all Product of
            the Aaiena are currently in the trends and providing world best
            Sizing Product best ever Our company Product is the best Porduct in
            the industry of IT and Fashion Appearel all Product of the Aaiena
            are currently in the trends and providing world best Sizing Product
            best ever Our company Product is the best Porduct in the industry of
            IT and Fashion Appearel all Product of the Aaiena are currently in
            the trends and providing world best Sizing Product best ever Our
            company Product is the best Porduct in the industry of IT and
            Fashion Appearel all Product of the Aaiena are currently in the
            trends and providing world best Sizing Product best ever Our company
            Product is the best Porduct in the industry of IT and Fashion
            Appearel all Product of the Aaiena are currently in the trends and
            providing world best Sizing Product best ever Our company Product is
            the best Porduct in the industry of IT and Fashion Appearel all
            Product of the Aaiena are currently in the trends and providing
            world best Sizing Product best ever
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Inapp;
