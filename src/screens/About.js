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
            height: 100,
            justifyContent: 'center',
            paddingHorizontal: 20,
            marginTop:30
            
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
            <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>
              Aaiena
            </Text>
            <Text style={{color: 'black', marginLeft: 10,color:"white"}}>
              Our company Product is the best Porduct in the industry of IT and
              Fashion Appearel all Product of the Aaiena are currently in the
              trends and providing world best Sizing Product best ever Our
              company Product is the best Porduct
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
                      marginTop: -10,
                      marginRight: 50,
                      color:"#14466b"
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
          <TouchableOpacity onPress={() => navigation.navigate('Ettire')}>
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
                      color:"#14466b",
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
          <TouchableOpacity onPress={() => navigation.navigate('Sneaky')}>
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
          <Text style={{fontSize: 30, textAlign: 'center', marginBottom: 40,color:"white"}}>
            Our Services
          </Text>
        </View>

        <View style={{marginBottom: 40}}>
          <TouchableOpacity onPress={() => navigation.navigate('Instore')}>
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
                      color: '#14466b',
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
          <TouchableOpacity onPress={() => navigation.navigate('Inapp')}>
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
                      color: '#14466b',
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
                      color: '#14466b',
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
      </ScrollView>
    </>
  );
};

export default About;
