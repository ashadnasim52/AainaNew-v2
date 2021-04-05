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
import Icon from 'react-native-vector-icons/FontAwesome';


const About = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
    
      <ScrollView style={{backgroundColor:"#14466b"}}>
      <View
          style={{
            backgroundColor: "#14466b",
            height: 90,
            justifyContent: 'center',
            paddingHorizontal: 20,
            marginTop:0
            
          }}>
          <View
            style={{
              height: 50,
              backgroundColor: '#fff',
              flexDirection: 'row',
              padding: 5,
              alignItems: 'center',
              borderRadius: 15,
            }}>
            <Icon
              name="search"
              style={{paddingRight: 10, paddingLeft: 8, fontSize: 17}}
            />
            <TextInput placeholder="Search Any Products  here....." />
          </View>
        </View>

        <View style={{ marginBottom: 40}}>
          <View>
            <Text style={{fontSize: 30, textAlign: 'center', color: 'white',}}>
             Why AAIENA ?
            </Text>
            <Text style={{color: 'black', marginLeft: 10,color:"white",marginTop:10,fontFamily:"sans-serif-light"}}>
            AAIENA is the perfect amalgamation of Artificial Intelligence and Virtual Reality, which sprinkles its magic in the form of a contactless virtual trial room. The virtual avatar created through AAIENA is an outcome that can facilitate the trial prospect to the next level.
            </Text>
          </View>
          <View style={{inlineHeight: 40}}>
            <Text
              style={{
marginTop:20,
                fontSize: 30,
                textAlign: 'center',
                color: 'white',
                marginBottom: 40,
             
              }}>
              Our Products
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Sizing')}>
            <Card style={{marginTop: 0}}>
              <CardItem
                style={{
                  marginLeft: 20,
                  marginTop: 0,
                  height: 80,
                  marginBottom: 30,
                }}>
                <Left>
                  <Image
                    source={require('../assests/img/sizing2.webp')}
                    style={{
                      width: 150,
                      height: 130,
                      marginBottom: -20,
                      marginLeft: -40,
                      marginTop: 0,
                      borderRadius: 25,
                    }}
                  />
                </Left>
                <Right>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: 0,
                      marginRight: 50,
                      color:"#14466b"
                    }}>
                    Sizing
                  </Text>
                
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 40}}>
          <TouchableOpacity onPress={() => navigation.navigate('Ettire')}>
            <Card style={{marginTop: 30}}>
              <CardItem
                style={{
                  marginLeft: 20,
                  marginTop: 50,
                  height: 30,
                  marginBottom: 30,
                }}>
                <Left style={{backgroundColor:"#ECECF3",height:113,marginTop:-22,marginLeft:-80,borderRadius:10}}>
                  <Image
                    source={require('../assests/img/inweb3.png')}
                    style={{
                      width: 180,
                      height: 180, 
                      marginBottom: -12,
                      marginLeft:45,
                      marginTop: -80,
                      borderTopRightRadius:20,
                      borderTopLeftRadius:20
                    }}
                  />
                </Left>
                <Right>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color:"#14466b",
                      marginTop: -30,
                      marginRight: 50,
                    }}>
                    Ettire
                  </Text>
                  
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 40}}>
          <TouchableOpacity onPress={() => navigation.navigate('Sneaky')}>
            <Card style={{marginTop: 30}}>
              <CardItem
                style={{
                  marginLeft: 20,
                  marginTop: 50,
                  height: 30,
                  marginBottom: 30,
                }}>
                <Left>
                  <Image
                    source={require('../assests/img/sneaky1.jpg')}
                    style={{
                      width: 150,
                      height: 130,
                      marginBottom: -12,
                      marginLeft: -40,
                      marginTop: -35,
                      borderRadius: 25,
                    }}
                  />
                </Left>
                <Right>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#14466b',
                      marginTop: -30,
                      marginRight: 50,
                    }}>
                    Sneaky
                  </Text>
                  
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{fontSize: 30, textAlign: 'center', marginBottom: 40,color:"white"}}>
            Our Services
          </Text>
        </View>

        <View style={{marginBottom: 40}}>
          <TouchableOpacity onPress={() => navigation.navigate('Instore')}>
            <Card style={{marginTop: 30}}>
              <CardItem
                style={{
                  marginLeft: 20,
                  marginTop: 50,
                  height: 30,
                  marginBottom: 30,
                }}>
                <Left>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: -20,
                      fontWeight: 'bold',
                      color: '#14466b',
                      marginTop: -20,
                      marginLeft: 0,
                    }}>
                    In Store
                  </Text>
                
                </Left>
                <Right>
                  <Image
                    source={require('../assests/img/instore10.png')}
                    style={{
                      width: 160,
                      height: 900,
                      marginBottom: -12,
                      marginRight: -18,
                      marginTop: -60,
                      borderRadius: 25,
                    }}
                  />
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 40}}>
          <TouchableOpacity onPress={() => navigation.navigate('Inapp')}>
            <Card style={{marginTop: 30}}>
              <CardItem
                style={{
                  marginLeft: 20,
                  marginTop: 50,
                  height: 30,
                  marginBottom: 30,
                }}>
                <Left>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 10,
                      fontWeight: 'bold',
                      color: '#14466b',
                     marginTop:-25,
                    }}>
                    In App
                  </Text>
                
                </Left>
                <Right>
                  <Image
                    source={require('../assests/img/inapp10.png')}
                    style={{
                      width: 240,
                      height: 230,
                      marginBottom: -12,
                      marginRight: -18,
                      marginTop: -35,
                      borderRadius: 25,
                    }}
                  />
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 40}}>
          <TouchableOpacity onPress={() => navigation.navigate('Inweb')}>
            <Card style={{marginTop: 30}}>
              <CardItem
                style={{
                  marginLeft: 20,
                  marginTop: 50,
                  height: 30,
                  marginBottom: 30,
                }}>
                <Left>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: -20,
                      fontWeight: 'bold',
                      color: '#14466b',
                      marginTop: -20,
                      marginLeft: 0,
                    }}>
                    In Web
                  </Text>
                  
                </Left>
                <Right>
                  <Image
                    source={require('../assests/img/inweb10.png')}
                    style={{
                      width: 270,
                      height: 200,
                      marginBottom: -12,
                      marginRight: -15,
                      marginTop: -35,
                      borderRadius: 25,
                    }}
                  />
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default About;
