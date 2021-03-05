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
import Sizing from './Sizing';
import Ettire from './Ettire';
import Sneaky from './Sneaky';
import Instore from './Instore';
import Inapp from './Inapp';
import Inweb from './Inweb';

const About = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <ScrollView>
        <View
          style={{
            height: 50,
            marginTop: 80,
            justifyContent: 'center',
            paddingHorizontal: 20,
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

        <View style={{marginTop: 10, marginBottom: 40}}>
          <View>
            <Text style={{fontSize: 25, textAlign: 'center', color: 'black'}}>
              Aaiena
            </Text>
            <Text style={{color: 'black', marginLeft: 10}}>
              Our company Product is the best Porduct in the industry of IT and
              Fashion Appearel all Product of the Aaiena are currently in the
              trends and providing world best Sizing Product best ever Our
              company Product is the best Porduct
            </Text>
          </View>
          <View style={{inlineHeight: 40}}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                color: 'black',
                marginBottom: 40,
              }}>
              Our Products
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Size')}>
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
                      marginLeft: -34,
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
                      marginTop: -10,
                      marginRight: 50,
                    }}>
                    Sizing
                  </Text>
                  <Text style={{flex: 1, marginLeft: -18}}>
                    sizing is the product of sankshit group{' '}
                  </Text>
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 40}}>
          <TouchableOpacity onPress={() => navigation.navigate('Ettir')}>
            <Card style={{marginTop: 0}}>
              <CardItem
                style={{
                  marginLeft: 20,
                  marginTop: 50,
                  height: 30,
                  marginBottom: 30,
                }}>
                <Left>
                  <Image
                    source={require('../assests/img/ettire1.jpg')}
                    style={{
                      width: 150,
                      height: 130,
                      marginBottom: -12,
                      marginLeft: -34,
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
                      color: 'green',
                      marginTop: -60,
                      marginRight: 50,
                    }}>
                    Ettire
                  </Text>
                  <Text style={{flex: 1, marginLeft: -18}}>
                    Ettire is the product of sankshit group{' '}
                  </Text>
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 40}}>
          <TouchableOpacity onPress={() => navigation.navigate('Sneak')}>
            <Card style={{marginTop: 0}}>
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
                      marginLeft: -34,
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
                      color: 'green',
                      marginTop: -60,
                      marginRight: 50,
                    }}>
                    Sneaky
                  </Text>
                  <Text style={{flex: 1, marginLeft: -18}}>
                    sneak is the product of sankshit group{' '}
                  </Text>
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 40}}>
            Our Services
          </Text>
        </View>

        <View style={{marginBottom: 40}}>
          <TouchableOpacity onPress={() => navigation.navigate('store')}>
            <Card style={{marginTop: 0}}>
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
                      color: 'green',
                      marginTop: -80,
                      marginLeft: 0,
                    }}>
                    In Store
                  </Text>
                  <Text style={{marginLeft: -110, marginTop: -20}}>
                    In Store Product Aaiena
                  </Text>
                </Left>
                <Right>
                  <Image
                    source={require('../assests/img/instore3.png')}
                    style={{
                      width: 160,
                      height: 130,
                      marginBottom: -12,
                      marginRight: -14,
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
          <TouchableOpacity onPress={() => navigation.navigate('inapp')}>
            <Card style={{marginTop: 0}}>
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
                      color: 'green',
                      marginTop: -80,
                      marginLeft: 0,
                    }}>
                    In App
                  </Text>
                  <Text style={{marginLeft: -95, marginTop: -20}}>
                    In App Product Aaiena
                  </Text>
                </Left>
                <Right>
                  <Image
                    source={require('../assests/img/app.jpg')}
                    style={{
                      width: 160,
                      height: 130,
                      marginBottom: -12,
                      marginRight: -14,
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
          <TouchableOpacity onPress={() => navigation.navigate('web')}>
            <Card style={{marginTop: 0}}>
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
                      color: 'green',
                      marginTop: -80,
                      marginLeft: 0,
                    }}>
                    In Web
                  </Text>
                  <Text style={{marginLeft: -100, marginTop: -20}}>
                    In Web Product Aaiena
                  </Text>
                </Left>
                <Right>
                  <Image
                    source={require('../assests/img/inweb.webp')}
                    style={{
                      width: 160,
                      height: 130,
                      marginBottom: -12,
                      marginRight: -14,
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
