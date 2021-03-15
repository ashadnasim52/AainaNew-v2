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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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





const B2cpagemain = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <>
        <View
                    style={{
                        backgroundColor: "#14466b",
                        height: 100,
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
                            style={{ paddingRight: 10, paddingLeft: 8, fontSize: 17 }}
                        />
                        <TextInput placeholder="Search Any Products  here....." />
                    </View>
                </View>
            <ScrollView style={{backgroundColor:"#14466b"}}>
                

                <View style={{  marginBottom: 60 }}>
                    <View>
             
                    </View>
                    <View style={{ inlineHeight: 40 }}>
                        <Text
                            style={{
                                fontSize: 30,
                                textAlign: 'center',
                                color: 'black',
                                marginBottom: 40,
                                color:"white",
                                fontWeight:"bold"
                            }}>
                            Our Clients
            </Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('BcPage')}>

                            <Card style={{ marginTop: 0 }}>
                                <CardItem
                                    style={{
                                        marginLeft: 20,
                                        marginTop: 0,
                                        height: 80,
                                        marginBottom: 30,
                                    }}>
                                    <Left>
                                        <Image
                                            source={require('../assests/img/Deepak_Garments.jpg')}
                                            style={{
                                                width: 200,
                                                height: 150,
                                                marginBottom: -20,
                                                marginLeft: -38,
                                                marginTop: 0,
                                                borderRadius: 25,
                                            }}
                                        />
                                    </Left>
                                    <Right>
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                color: "#14466b",
                                                marginLeft: 20,
                                            }}> Deepak Garments </Text>

                                    </Right>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ marginBottom: 60 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chaudhary_Garments')}>
                        <Card style={{ marginTop: 0 }}>
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
                                            fontWeight: 'bold',
                                            color: '#14466b',
                                            marginTop: -40,
                                            marginLeft: -10,
                                            marginRight:80
                                        }}>
                                        Chauhan Lifestyle
                  </Text>

                                </Left>
                                <Right>
                                    <Image
                                        source={require('../assests/img/Chauhan_Lifestyle.jpg')}
                                        style={{
                                            width: 200,
                                                height: 150,
                                            marginBottom: -12,
                                            marginRight: -17,
                                            marginTop: -35,
                                            borderRadius: 25,
                                        }}
                                    />
                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 60 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Benzor')}>

                        <Card style={{ marginTop: 0 }}>
                            <CardItem
                                style={{
                                    marginLeft: 20,
                                    marginTop: 0,
                                    height: 80,
                                    marginBottom: 30,
                                }}>
                                <Left>
                                    <Image
                                        source={require('../assests/img/Benzor.jpg')}
                                        style={{
                                            width: 200,
                                                height: 150,
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
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            color: '#14466b',
                                            marginRight: 30,
                                        }}> Benzor </Text>

                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </View>



                <View style={{ marginBottom: 60 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Leather')}>
                        <Card style={{ marginTop: 0 }}>
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
                                            fontWeight: 'bold',
                                            color: '#14466b',
                                            marginTop: -40,
                                            marginLeft: -10,
                                            marginRight:80
                                        }}>
                                        Leather Home
                  </Text>

                                </Left>
                                <Right>
                                    <Image
                                        source={require('../assests/img/Leather_Home.jpg')}
                                        style={{
                                            width: 200,
                                                height: 150,
                                            marginBottom: -12,
                                            marginRight: -17,
                                            marginTop: -35,
                                            borderRadius: 25,
                                        }}
                                    />
                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 60 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Look')}>

                        <Card style={{ marginTop: 0 }}>
                            <CardItem
                                style={{
                                    marginLeft: 20,
                                    marginTop: 0,
                                    height: 80,
                                    marginBottom: 30,
                                }}>
                                <Left>
                                    <Image
                                        source={require('../assests/img/look_me.jpg')}
                                        style={{
                                            width: 200,
                                                height: 150,
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
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            color: '#14466b',
                                            marginLeft: 0,
                                            marginRight:20
                                        }}> Look Me </Text>

                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </View>



                <View style={{ marginBottom: 60 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Glitz')}>
                        <Card style={{ marginTop: 0 }}>
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
                                            fontWeight: 'bold',
                                            color: '#14466b',
                                            marginTop: -40,
                                            marginLeft: -10,
                                            marginRight:80
                                        }}>
                                        Glitz & Glamour
                  </Text>

                                </Left>
                                <Right>
                                    <Image
                                        source={require('../assests/img/g_g.jpg')}
                                        style={{
                                            width: 200,
                                                height: 150,
                                            marginBottom: -12,
                                            marginRight: -17,
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

export default B2cpagemain;
