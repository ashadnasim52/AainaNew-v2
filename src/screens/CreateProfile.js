import {
  Container,
  Text,
  Content,
  H1,
  H3,
  Form,
  Item,
  Label,
  Input,
  Picker,
  Icon,
  Button,
} from 'native-base';
import React, {useState} from 'react';
import {Image, PermissionsAndroid, StyleSheet, View} from 'react-native';
import {ACCENT, PRIMARY} from '../theme/colors';
import Slider from '@react-native-community/slider';
import {options} from '../utils/option';
import {launchImageLibrary} from 'react-native-image-picker';
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
      launchImageLibrary(options, (response) => {
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
      launchImageLibrary(options, (response) => {
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
      <Content padder>
        <H3
          style={{
            textAlign: 'center',
            color: PRIMARY,
          }}>
          CREATE BODY PROFILE
        </H3>
        <Text
          note
          style={{
            textAlign: 'center',
            marginTop: 10,
          }}>
          Please fill the below form and provide your height, weight, gender,
          your front selfie photo and your side photo and submit Your body
          profile details will be used to create your 3D Virtual Avatar to try
          garments in Aaiena's Virtual Trial Room
        </Text>

        <Image
          source={require('../assests/profile.png')}
          style={{
            resizeMode: 'center',
            height: 150,
            width: '100%',
            marginTop: 20,
            marginBottom: 10,
          }}
        />

        <Form>
          <Item
            rounded
            style={{
              marginBottom: 5,
            }}>
            <Input placeholder="Enter Full Name" />
          </Item>
          <Item
            rounded
            style={{
              marginBottom: 5,
            }}>
            <Picker
              mode="dialog"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              placeholderStyle={{color: '#bfc6ea'}}
              selectedValue={2}
              onValueChange={(value) => {
                console.log({value});
                if (value == 1) {
                  setGender('male');
                } else if (value == 2) {
                  setGender('female');
                }
              }}
              placeholderIconColor="#007aff">
              <Picker.Item label="Select Gender" value="0" />
              <Picker.Item label="Male" value="1" />
              <Picker.Item label="Female" value="2" />
            </Picker>
          </Item>
          {gender === 'male' && (
            <Item
              rounded
              style={{
                marginBottom: 5,
              }}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff">
                <Picker.Item label="Select Body Size" value="key0" />
                <Picker.Item label="Extra Small" value="key1" />
                <Picker.Item label="Small" value="key2" />
                <Picker.Item label="Medium" value="key3" />
                <Picker.Item label="Large" value="key4" />
                <Picker.Item label="Extra Large" value="key5" />
              </Picker>
            </Item>
          )}

          {gender == 'female' && (
            <Item
              rounded
              style={{
                marginBottom: 5,
              }}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff">
                <Picker.Item label="Select Body Size" value="key0" />
                <Picker.Item label="Triangle" value="key1" />
                <Picker.Item label="Diamond" value="key2" />
                <Picker.Item label="Inverted" value="key3" />
                <Picker.Item label="Rectangle" value="key4" />
                <Picker.Item label="Hourglass" value="key5" />
              </Picker>
            </Item>
          )}

          <Item
            rounded
            style={{
              marginBottom: 5,
              paddingHorizontal: 5,
            }}>
            <Label
              style={{
                flex: 0.4,
              }}>
              Select Height
            </Label>
            <Slider
              style={{flex: 0.5, height: 40}}
              minimumValue={0}
              maximumValue={500}
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
                flex: 0.2,
              }}>
              {hieght} cm
            </Text>
          </Item>
          <Item
            rounded
            style={{
              marginBottom: 5,
              paddingHorizontal: 5,
            }}>
            <Label
              style={{
                flex: 0.4,
              }}>
              Select Weight
            </Label>
            <Slider
              style={{flex: 0.5, height: 40}}
              minimumValue={0}
              maximumValue={500}
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
                flex: 0.2,
              }}>
              {weight} kg
            </Text>
          </Item>

          <Button
            block
            rounded
            style={{
              marginBottom: 5,
            }}
            onPress={uploadFrontPhoto}>
            <Text>Upload Front Body Photo</Text>
          </Button>
          <Button
            block
            rounded
            style={{
              marginBottom: 5,
            }}
            onPress={uploadSelfie}>
            <Text>Upload Side Body Photo</Text>
          </Button>
          <Button
            block
            success
            style={{
              marginBottom: 5,
              marginTop: 10,
            }}>
            <Text>Create Profile</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({});
