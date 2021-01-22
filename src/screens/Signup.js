import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';

import Logo from '../assests/image1.png';
import {ACCENT, PRIMARY} from '../theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

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
          <Layout style={styles.topContainer}>
            <Text style={styles.text} category="h3">
              Sign Up
            </Text>
            <Text
              appearance="hint"
              style={{
                textAlign: 'center',
              }}>
              Fill the details and create your account
            </Text>
          </Layout>
          <Layout style={styles.imageContainer}>
            <Image source={Logo} style={styles.image} />
          </Layout>
          <Layout style={styles.mainContainer}>
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
            <Button style={styles.button}>Login</Button>
            <Text appearance="hint" status="primary">
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
                }}
                status="danger"
                accessoryLeft={(props) => <Icon {...props} name="google" />}
              />
              <Button
                style={{
                  marginLeft: 15,
                  borderRadius: 25,
                }}
                status="primary"
                accessoryLeft={(props) => <Icon {...props} name="facebook" />}
              />
            </Layout>
            <TouchableOpacity
              onPress={() => {
                nav.navigate('SignIn');
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

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  topContainer: {
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 0.7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
  },
  button: {
    width: '100%',
    borderRadius: 25,
    marginVertical: 5,
  },
  icon: {
    width: 32,
    height: 32,
  },
  input: {
    marginTop: 8,
  },
});
