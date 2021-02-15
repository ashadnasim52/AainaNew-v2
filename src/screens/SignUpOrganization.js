import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  Button,
  Icon,
  Input,
  Layout,
  Text,
  IndexPath,
  Select,
  SelectItem,
  CheckBox,
  Divider,
} from '@ui-kitten/components';

import Logo from '../assests/image1.png';
import {ACCENT, PRIMARY} from '../theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignUpOrganization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [gender, setGender] = useState('Male');
  const [checked, setChecked] = React.useState(false);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const nav = useNavigation();

  return (
    <>
      <StatusBar backgroundColor={ACCENT} />
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Layout style={styles.container}>
          {/* <Layout >
            <Image source={Logo} style={styles.image} />
          
          </Layout> */}

          {/* <Layout style={styles.imageContainer}></Layout> */}
          <Layout style={styles.imageContainer}>
            <Image source={Logo} style={styles.image} />
          </Layout>
          <Layout style={styles.mainContainer}>
            <Text
              category="h6"
              style={{
                fontFamily: 'Merriweather-BlackItalic',
                marginBottom: 20,
                color: PRIMARY,
              }}>
              SignUp as Organization
            </Text>
            {/* <Button
              style={{
                width: '100%',
                marginBottom: 10,
              }}
              appearance="outline"
              status="primary"
              size="small"
              accessoryRight={(props) => (
                <Icon {...props} name="arrow-ios-forward-outline" />
              )}>
              <Text category="p1" style={{}}>
                Signup as Organization
              </Text>
            </Button> */}
            <Select
              style={{
                width: '100%',
              }}
              accessoryLeft={(props) => (
                <Icon name="person-outline" {...props} />
              )}
              value={gender}
              onSelect={(item) =>
                item.row == 0 ? setGender('Male') : setGender('Female')
              }>
              <SelectItem
                title="Male"
                accessoryLeft={(props) => (
                  <Icon name="person-outline" {...props} />
                )}
              />
              <SelectItem
                title="Female"
                accessoryLeft={(props) => (
                  <Icon name="person-outline" {...props} />
                )}
              />
            </Select>
            <Input
              placeholder="Name"
              value={name}
              style={styles.input}
              accessoryLeft={(props) => (
                <Icon name="person-outline" {...props} />
              )}
              onChangeText={(nextValue) => setName(nextValue)}
            />

            <Input
              placeholder="Email"
              value={email}
              style={styles.input}
              accessoryLeft={(props) => (
                <Icon name="email-outline" {...props} />
              )}
              onChangeText={(nextValue) => setEmail(nextValue)}
            />
            <Input
              value={password}
              placeholder="Password"
              style={styles.input}
              accessoryLeft={(props) => <Icon name="lock-outline" {...props} />}
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
              onChangeText={(nextValue) => setPassword(nextValue)}
            />
            <Input
              value={password}
              placeholder="Confirm Password"
              style={styles.input}
              accessoryLeft={(props) => <Icon name="lock-outline" {...props} />}
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
              onChangeText={(nextValue) => setPassword(nextValue)}
            />
            <View
              style={{
                // justifyContent: 'flex-start',
                // alignItems: 'flex-start',
                width: '100%',
                paddingVertical: 6,
              }}>
              <CheckBox
                checked={checked}
                onChange={(nextChecked) => setChecked(nextChecked)}>
                <Text appearance="hint">Accept our Terms and Condition</Text>
              </CheckBox>
            </View>
            {/* <View
              style={{
                alignItems: 'flex-end',
                width: '100%',
                marginVertical: 5,
              }}>
              <Text appearance="hint" status="primary">
                Foget Password?
              </Text>
            </View> */}
            <Button
              style={styles.button}
              onPress={() => nav.navigate('CompanyCreateProfile')}>
              Get Started
            </Button>
            {/* <Text appearance="hint" status="primary">
              OR
            </Text>
            <Layout
              style={{
                flexDirection: 'row',
              }}>
              <Button
                style={{
                  marginRight: 15,
                  borderRadius: 25,
                  paddingHorizontal: 30,
                }}
                status="danger"
                accessoryLeft={(props) => <Icon {...props} name="google" />}
              />
              <Button
                style={{
                  marginLeft: 15,
                  borderRadius: 25,
                  paddingHorizontal: 30,
                }}
                status="primary"
                accessoryLeft={(props) => <Icon {...props} name="facebook" />}
              />
            </Layout> */}
            {/* <Layout
              style={{
                flexDirection: 'column',
              }}> */}
            {/* <Button
              style={[
                {
                  backgroundColor: '#3C62F9',
                  borderColor: '#3C62F9',
                },
                styles.button,
              ]}
              status="danger"
              accessoryLeft={(props) => <Icon {...props} name="google" />}>
              Sign in with Google
            </Button>

            <Button
              style={[
                {
                  backgroundColor: '#3703E9',
                  borderColor: '#3703E9',
                },
                styles.button,
              ]}
              status="primary"
              accessoryLeft={(props) => <Icon {...props} name="facebook" />}>
              Sign in with Facebook
            </Button> */}
            {/* </Layout> */}
            <TouchableOpacity
              onPress={() => {
                nav.navigate('SelectRole');
              }}>
              <Text
                style={{
                  marginVertical: 10,
                }}
                appearance="hint">
                Have an account? SignIn here
              </Text>
            </TouchableOpacity>
          </Layout>
        </Layout>
      </KeyboardAwareScrollView>
    </>
  );
};

export default SignUpOrganization;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  topContainer: {
    justifyContent: 'center',
    marginTop: 10,
  },
  imageContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    // fontWeight: 'bold',
  },
  image: {
    height: 160,
    width: '100%',
    resizeMode: 'contain',
  },
  button: {
    width: '100%',
    borderRadius: 25,
    marginVertical: 2,
  },
  icon: {
    width: 32,
    height: 32,
  },
  input: {
    marginTop: 8,
  },
});
