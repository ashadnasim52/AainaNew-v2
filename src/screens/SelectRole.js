import React, {useContext} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';
import * as Animatable from 'react-native-animatable';

import LOGO from '../assests/onboarding/step1.png';
import {ACCENT, PRIMARY} from '../theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CHANGE_CLIENT_TYPE} from '../actions/action.types';
import {AuthContext} from '../context/context';

const SelectRole = () => {
  const nav = useNavigation();
  const {state, dispatch} = useContext(AuthContext);

  return (
    <>
      <StatusBar backgroundColor={ACCENT} />
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Layout style={styles.container}>
      
      <Image 
      style={{width:170,height:70,alignSelf:"center",marginBottom:30}}
        source={require("../assests/img/logo1.png")}
      />    

          <View style={styles.row}>
            <View>
              <View
                style={[
                  {
                    backgroundColor: 'orange',
                  },
                  styles.card,
                  
                ]}>
                <Image
                  source={LOGO}
                  style={{
                    height: '100%',
                    width: '100%',
                    flex: 1,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={styles.cardText} category="h3">
                  B2B
                </Text>
                <Button
                  accessoryRight={(props) => (
                    <Icon {...props} name="arrow-forward" />
                  )}
                  style={{
                    borderRadius: 25,
                  }}
                  onPress={() => {
                    dispatch({
                      type: CHANGE_CLIENT_TYPE,
                      payload: true,
                    });

                    nav.navigate('SignIn');
                  }}>
                  Next
                </Button>
              </View>
            </View>
            <View
              style={{
                // flex: 0.5,
                alignSelf: 'flex-end',
              }}>
              <View
                style={[
                  {
                    backgroundColor: '#14466b',
                  },
                  styles.card,
                ]}>
                <Image
                  source={LOGO}
                  style={{
                    height: '100%',
                    width: '100%',
                    flex: 1,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={styles.cardText} category="h3">
                  B2C
                </Text>
                <Button
                  accessoryRight={(props) => (
                    <Icon {...props} name="arrow-forward" />
                  )}
                  onPress={() => {
                    dispatch({
                      type: CHANGE_CLIENT_TYPE,
                      payload: false,
                    });
                    nav.navigate('SignIn');
                  }}
                  style={{
                    borderRadius: 25,
                    backgroundColor:"white"
                  }}
                  appearance="outline">
                  Next
                </Button>
              </View>
            </View>
          </View>
        </Layout>
      </KeyboardAwareScrollView>
    </>
  );
};

export default SelectRole;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor:"white"
  },

  card: {
    flexDirection: 'column',
    height: 350,
    width: (Dimensions.get('screen').width - 30) / 2,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: 'grey',
    shadowRadius: 10,
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 15,
    elevation: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  subText: {
    textAlign: 'center',
  },
});
