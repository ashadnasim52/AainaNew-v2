import React, {useState} from 'react';
import {
  Image,
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

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
              Welcome to Aaina
            </Text>
          </Layout>
          <Layout style={styles.imageContainer}>
            <Image source={Logo} style={styles.image} />
          </Layout>
          <Layout style={styles.mainContainer}>
            <Input
              placeholder="Place your Text"
              value={email}
              style={styles.input}
              accessoryLeft={(props) => (
                <Icon name="email-outline" {...props} />
              )}
              onChangeText={(nextValue) => setEmail(nextValue)}
            />
            <Input
              value={password}
              placeholder="Place your Text"
              style={styles.input}
              caption="Should contain at least 8 symbols"
              accessoryLeft={(props) => <Icon name="lock-outline" {...props} />}
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
              onChangeText={(nextValue) => setPassword(nextValue)}
            />
            <View
              style={{
                alignItems: 'flex-end',
                width: '100%',
                marginVertical: 10,
              }}>
              <TouchableOpacity onPress={() => nav.navigate('ForgetPassword')}>
                <Text appearance="hint" status="primary">
                  Foget Password?
                </Text>
              </TouchableOpacity>
            </View>
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
                nav.navigate('SignUp');
              }}>
              <Text
                style={{
                  marginVertical: 25,
                }}
                appearance="hint">
                Do not have an account? SignUp here
              </Text>
            </TouchableOpacity>
          </Layout>
        </Layout>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  topContainer: {
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 0.6,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },
  button: {
    width: '100%',
    borderRadius: 25,
    marginVertical: 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
  input: {
    marginTop: 8,
  },
});
