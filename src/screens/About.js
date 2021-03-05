import React from 'react';

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

const About = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <ScrollView>
        <View style={{backgroundColor: '#fff', height: 60}}>
          <View
            style={{backgroundColor: '#fff', height: 100, borderRadius: 30}}>
            <TouchableOpacity
              onPress={() => alert('Drawer Will Open from here')}>
              <Icon
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
