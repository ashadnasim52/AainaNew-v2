import React, { Component } from 'react';
import { Image, View, Text, ScrollView, Button, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';




const BcPage = ({navigation}) => {


  return (
    <>
    <View style={{backgroundColor:"#2B547E",height:80}}>
    <View
          style={{
            height: 50,
            backgroundColor: '#fff',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center',
            borderRadius: 10,
            margin: 20,
            marginTop:20
          }}>
          <Icon
            name="search"
            style={{ paddingRight: 10, paddingLeft: 8, fontSize: 17 }}
          />
          <TextInput placeholder="Search Any Products  here....." />
        </View>
       </View>

      <ScrollView style={{ backgroundColor: "#2B547E" }}>
     


        <View style={{marginTop:10}}>
      <Image
                source={require('../assests/img/Deepak_Garments.jpg')}
                style={{
                  width: 360,
                  height: 250,
                  justifyContent: 'center',
                }}
              />
      </View>

        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

            <View style={{ backgroundColor: "white", height: 300, marginLeft:6,borderRadius:10}}>
              <Image
                source={require('../assests/img/girl.jpg')}
                style={{
                  width: 170,
                  height: 250,
                  justifyContent: 'center',
                }}
              />
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Sizing
              </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Ettire
              </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ backgroundColor: "white", marginRight: 6,borderRadius:10 }}>
              <Image
                source={require('../assests/img/girl.jpg')}
                style={{
                  width: 170,
                  height: 250,

                }}
              />
              <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Sizing
              </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Ettire
              </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

            <View style={{ backgroundColor: "white", height: 300, marginLeft:6,borderRadius:10}}>
              <Image
                source={require('../assests/img/girl.jpg')}
                style={{
                  width: 170,
                  height: 250,
                  justifyContent: 'center',
                }}
              />
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Sizing
              </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Ettire
              </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ backgroundColor: "white", marginRight: 6,borderRadius:10 }}>
              <Image
                source={require('../assests/img/girl.jpg')}
                style={{
                  width: 170,
                  height: 250,

                }}
              />
              <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Sizing
              </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Ettire
              </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

            <View style={{ backgroundColor: "white", height: 300, marginLeft:6,borderRadius:10}}>
              <Image
                source={require('../assests/img/girl.jpg')}
                style={{
                  width: 170,
                  height: 250,
                  justifyContent: 'center',
                }}
              />
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Sizing
              </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Ettire
              </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ backgroundColor: "white", marginRight: 6,borderRadius:10 }}>
              <Image
                source={require('../assests/img/girl.jpg')}
                style={{
                  width: 170,
                  height: 250,

                }}
              />
              <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Sizing
              </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Ettire
              </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

            <View style={{ backgroundColor: "white", height: 300, marginLeft:6,borderRadius:10}}>
              <Image
                source={require('../assests/img/girl.jpg')}
                style={{
                  width: 170,
                  height: 250,
                  justifyContent: 'center',
                }}
              />
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Sizing
              </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Ettire
              </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ backgroundColor: "white", marginRight: 6,borderRadius:10 }}>
              <Image
                source={require('../assests/img/girl.jpg')}
                style={{
                  width: 170,
                  height: 250,

                }}
              />
              <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Sizing
              </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Ettire
              </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

            <View style={{ backgroundColor: "white", height: 300, marginLeft:6,borderRadius:10}}>
              <Image
                source={require('../assests/img/girl.jpg')}
                style={{
                  width: 170,
                  height: 250,
                  justifyContent: 'center',
                }}
              />
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Sizing
              </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Ettire
              </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ backgroundColor: "white", marginRight: 6,borderRadius:10 }}>
              <Image
                source={require('../assests/img/girl.jpg')}
                style={{
                  width: 170,
                  height: 250,

                }}
              />
              <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Sizing
              </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                  <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                    Ettire
              </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        

        
        

        




      </ScrollView>
    </>
  );
};
export default BcPage;
