import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Text,
  Right,
  Title,
  Content,
  H1,
  Row,
  Col,
  CardItem,
  Form,
  Item,
  Label,
  Input,
  H3,
} from 'native-base';
import React, {useState} from 'react';
import {
  StyleSheet,
  PermissionsAndroid,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Slider from '@react-native-community/slider';
import {PRIMARY} from '../theme/colors';
import ImagePicker from 'react-native-image-picker';
import {options} from '../utils/option';

const CreateProfile = () => {
  const [isPermission, setIsPermission] = useState(false);
  const [frontPhoto, setfrontPhoto] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const [hieght, setHieght] = useState(180);
  const [weight, setWeight] = useState(50);
  const [gender, setGender] = useState('male');

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);

      console.log('isG', granted);
      console.log('isGranted', PermissionsAndroid.RESULTS.GRANTED);
      if ('granted' == PermissionsAndroid.RESULTS.GRANTED) {
        setIsPermission(true);
      } else {
        console.log('permission denied');
        setIsPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const uploadFrontPhoto = async () => {
    if (isPermission) {
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          //  calling upload function to upload the selected image
          // sending the whole image response as parameter

          setfrontPhoto(response);
        }
      });
    } else {
      requestStoragePermission();
    }
  };
  const uploadSelfie = async () => {
    if (isPermission) {
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          //  calling upload function to upload the selected image
          // sending the whole image response as parameter

          setSelfie(response);
        }
      });
    } else {
      requestStoragePermission();
    }
  };

  return (
    <Container>
      <Header style={{backgroundColor: '#fff', color: '#000'}}>
        <Left>
          <Button transparent>
            <Icon
              name="arrow-back"
              style={{
                color: '#000',
              }}
            />
          </Button>
        </Left>
        <Body>
          <Title
            style={{
              color: '#000',
            }}>
            Your Body Pofile
          </Title>
        </Body>
        <Right></Right>
      </Header>

      <Content padder>
        <ImageBackground
          source={{uri: 'https://picsum.photos/id/1019/4312/2868'}}
          style={[
            {
              marginHorizontal: -10,
              marginTop: -10,
              paddingHorizontal: 10,
              paddingTop: 10,
              paddingBottom: 10,
            },
            styles.image,
          ]}>
          <Row>
            <Col size={4}>
              <Text
                note
                style={{
                  color: '#fff',
                }}>
                Please fill the below form and provide your height, weight,
                gender, your front selfie photo and your side photo and submit
                Edit Profile Your body Profile details will be used to create
                your 3D Virtual Avatar to try garments in Aaiena's Virtual Trial
                Room.
              </Text>
            </Col>
            <Col
              size={2}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://picsum.photos/id/1013/4256/2832',
                  width: 100,
                  height: 120,
                }}
                style={{
                  resizeMode: 'center',
                }}
              />
            </Col>
          </Row>
        </ImageBackground>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,

            borderRadius: 15,
            overflow: 'hidden',
            padding: 10,
            marginTop: 20,
          }}>
          <Form
            style={{
              borderWidth: 0,
            }}>
            <Item
              rounded
              style={{
                marginVertical: 5,
                paddingHorizontal: 10,
              }}>
              <Input placeholder="Enter Full Name" />
            </Item>
            <Item
              rounded
              style={{
                marginVertical: 5,
                paddingHorizontal: 10,
              }}>
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                placeholder={{label: 'Select Gender', value: 'someValue'}}
                items={[
                  {label: 'Football', value: 'football'},
                  {label: 'Baseball', value: 'baseball'},
                  {label: 'Hockey', value: 'hockey'},
                ]}
                style={{
                  viewContainer: {
                    width: '100%',
                  },
                }}
              />
            </Item>
            <Item
              rounded
              style={{
                marginVertical: 5,
                paddingHorizontal: 10,
              }}>
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                placeholder={{label: 'Select Body Size', value: 'someValue'}}
                items={[
                  {label: 'Football', value: 'football'},
                  {label: 'Baseball', value: 'baseball'},
                  {label: 'Hockey', value: 'hockey'},
                ]}
                style={{
                  viewContainer: {
                    width: '100%',
                  },
                }}
              />
            </Item>

            <View
              style={{
                marginVertical: 5,
                paddingHorizontal: 10,
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 5,
                }}>
                <Text note>Select Height</Text>
                <Slider
                  style={{width: '100%', height: 40}}
                  minimumValue={0}
                  maximumValue={300}
                  minimumTrackTintColor={PRIMARY}
                  maximumTrackTintColor={PRIMARY}
                  value={hieght}
                  thumbTintColor={PRIMARY}
                  step={1}
                  onValueChange={(text) => {
                    console.log(text);
                    setHieght(text);
                  }}
                />
                <Text
                  style={{
                    fontSize: 15,
                  }}>
                  Height: cm / 5ft 11 in
                </Text>
              </View>
              <View
                style={{
                  flex: 1.5,
                }}>
                <Item regular>
                  <Input placeholder="5ft" />
                </Item>
              </View>
            </View>

            <View
              style={{
                marginVertical: 5,
                paddingHorizontal: 10,
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 5,
                }}>
                <Text note>Select Weight</Text>
                <Slider
                  style={{width: '100%', height: 40}}
                  minimumValue={0}
                  maximumValue={100}
                  minimumTrackTintColor={PRIMARY}
                  maximumTrackTintColor={PRIMARY}
                  value={weight}
                  thumbTintColor={PRIMARY}
                  step={1}
                  onValueChange={(text) => {
                    console.log(text);
                    setWeight(text);
                  }}
                />
                <Text
                  style={{
                    fontSize: 15,
                  }}>
                  Weight : {weight} kg
                </Text>
              </View>
              <View
                style={{
                  flex: 1.5,
                }}>
                <Item regular>
                  <Input placeholder="50 kg" />
                </Item>
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
                paddingHorizontal: 10,
              }}>
              <H3
                style={{
                  color: PRIMARY,
                }}>
                Front Body Photo
              </H3>

              <View
                style={{
                  marginVertical: 5,
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={{
                    uri: 'https://picsum.photos/id/1005/100/100',
                    width: 50,
                    height: 80,
                  }}
                  style={{
                    resizeMode: 'cover',
                  }}
                />

                <View>
                  <Button
                    bordered
                    info
                    onPress={uploadSelfie}
                    style={{
                      borderRadius: 15,
                    }}>
                    <Text>Upload Photo</Text>
                  </Button>
                </View>
                <View>
                  <Button
                    danger
                    bordered
                    style={{
                      borderRadius: 15,
                    }}>
                    <Text>Remove</Text>
                  </Button>
                </View>
              </View>
            </View>

            <View
              style={{
                marginVertical: 10,
                paddingHorizontal: 10,
              }}>
              <H3
                style={{
                  color: PRIMARY,
                }}>
                Side Body Photo
              </H3>

              <View
                style={{
                  marginVertical: 5,
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={{
                    uri: 'https://picsum.photos/id/1005/100/100',
                    width: 50,
                    height: 80,
                  }}
                  style={{
                    resizeMode: 'cover',
                  }}
                />

                <View>
                  <Button
                    bordered
                    onPress={uploadFrontPhoto}
                    info
                    style={{
                      borderRadius: 15,
                    }}>
                    <Text>Upload Photo</Text>
                  </Button>
                </View>
                <View>
                  <Button
                    danger
                    bordered
                    style={{
                      borderRadius: 15,
                    }}>
                    <Text>Remove</Text>
                  </Button>
                </View>
              </View>
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginVertical: 20,
              }}>
              <Button
                style={{
                  borderRadius: 15,
                }}>
                <Text>Submit Body Profile</Text>
              </Button>
            </View>
          </Form>
        </View>
      </Content>
    </Container>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
