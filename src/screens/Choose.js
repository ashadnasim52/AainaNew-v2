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
import * as Animatable from 'react-native-animatable';

import Logo from '../assests/welcome.png';
import {ACCENT, PRIMARY} from '../theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Choose = () => {
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
          <Layout style={styles.imageContainer}>
            <Image source={Logo} style={styles.image} />
          </Layout>
          <Layout style={styles.mainContainer}>
            <Animatable.View animation="zoomIn" duration={2000}>
              <Text style={styles.text} category="h3">
                Welcome
              </Text>
              <Text
                appearance="hint"
                style={{
                  textAlign: 'center',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                quas quidem ullam cupid
              </Text>
            </Animatable.View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
              }}>
              <Button
                style={styles.button}
                onPress={() => {
                  nav.navigate('SignIn');
                }}>
                Login
              </Button>
              <Button
                style={styles.button}
                appearance="outline"
                status="primary"
                onPress={() => {
                  nav.navigate('SignUp');
                }}>
                Sign Up
              </Button>
            </View>
            <Text appearance="hint" status="primary">
              Or via Social Media
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
          </Layout>
        </Layout>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Choose;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },

  imageContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: '90%',
    resizeMode: 'contain',
  },
  button: {
    borderRadius: 25,
    marginVertical: 5,
    paddingHorizontal: 45,
  },
  icon: {
    width: 32,
    height: 32,
  },
  input: {
    marginTop: 8,
  },
});
