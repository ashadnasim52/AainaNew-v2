import React, {useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {
  Container,
  Content,
  Icon,
  Input,
  Item,
  Col,
  Button,
  Text,
  CheckBox,
  Body,
  Row,
  Card,
  CardItem,
  Left,
  Right,
  H3,
  H2,
} from 'native-base';

import {PRIMARY, WHITE} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/context';
const Profile = () => {
  const nav = useNavigation();

  // const {state, dispatch} = useContext(AuthContext);
  // console.log(state.profile);

  // const {
  //   userId,
  //   height,
  //   weight,
  //   gender,
  //   frontPhotoLink,
  //   selfieLink,
  // } = state.profile;

  const handleSkip = async () => {
    nav.navigate('MyTabs');
  };
  // if (!state.isAuthenticated) {
  //   nav.navigate('SignIn');
  //   return null;
  // }
  return (
    <Container>
      <Content
        style={{
          paddingHorizontal: 25,
        }}>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 10,
          }}>
          <Card
            style={{
              borderColor: PRIMARY,
              borderWidth: 1,
            }}>
            <CardItem
              style={{
                marginVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: PRIMARY,
                  fontSize: 22,
                }}>
                Hello, Ashad
              </Text>
            </CardItem>

            <CardItem
              style={{
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: 'https://picsum.photos/id/1005/367/267',
                    height: 100,
                    width: 80,
                  }}
                  style={{
                    height: 100,
                    width: 80,
                    flex: 1,
                    resizeMode: 'cover',
                  }}
                />
                <Text
                  style={{
                    marginVertical: 5,
                  }}>
                  Your Full pic
                </Text>
                <H3
                  style={{
                    textTransform: 'capitalize',
                    color: PRIMARY,
                    marginTop: 20,
                  }}>
                  Height
                </H3>
                <H3
                  style={{
                    textTransform: 'uppercase',
                    color: PRIMARY,
                    marginBottom: 20,
                  }}>
                  150 cm
                </H3>
              </View>
              <View
                style={{
                  borderRightWidth: 1,
                  borderRightColor: PRIMARY,
                  opacity: 0.4,
                  width: 1,
                  height: '100%',
                }}></View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: 'https://picsum.photos/id/1005/367/267',
                    height: 100,
                    width: 80,
                  }}
                  style={{
                    height: 100,
                    width: 80,
                    flex: 1,
                    resizeMode: 'cover',
                  }}
                />
                <Text
                  style={{
                    marginVertical: 5,
                  }}>
                  Your Selfie pic
                </Text>
                <H3
                  style={{
                    textTransform: 'capitalize',
                    color: PRIMARY,
                    marginTop: 20,
                  }}>
                  Weight
                </H3>
                <H3
                  style={{
                    textTransform: 'uppercase',
                    color: PRIMARY,
                    marginBottom: 20,
                  }}>
                  71 kg
                </H3>
              </View>
            </CardItem>
            <View style={{padding: 20}}>
              <Button
                block
                style={{
                  backgroundColor: '#387988',
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    textTransform: 'capitalize',
                    fontSize: 14,
                  }}>
                  Do you Want to update your profile
                </Text>
              </Button>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 5,
                  }}>
                  or
                </Text>
              </View>
              <Button
                block
                style={{
                  backgroundColor: '#387988',
                  textTransform: 'none',
                  marginTop: 5,
                }}
                onPress={handleSkip}>
                <Text
                  style={{
                    textTransform: 'capitalize',
                    fontSize: 13,
                  }}>
                  Skip, to proceed to see personalized product
                </Text>
              </Button>
            </View>
          </Card>
        </View>
      </Content>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({});
