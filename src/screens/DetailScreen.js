import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Layout, Text, Card, Icon, Avatar, Button} from '@ui-kitten/components';
import {ACCENT, PRIMARY} from '../theme/colors';
// import moment from 'moment';
const DetailScreen = () => {
  return (
    <Layout
      style={{
        flex: 1,
      }}>
      <View>
        <ImageBackground
          source={require('../assests/temp.jpeg')}
          style={{
            width: '100%',
            height: 350,
          }}
        />
      </View>
      <Card
        style={{
          marginHorizontal: 20,
          borderRadius: 25,
          marginTop: -50,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <Text
              category="h6"
              style={{
                color: PRIMARY,
                fontFamily: 'Merriweather-Bold',
              }}>
              Plane Name
            </Text>
            <Text
              category="label"
              style={{
                fontFamily: 'Merriweather-Light',
              }}>
              Duration 5 days
            </Text>
            <Text
              appearance="hint"
              category="label"
              style={{
                fontFamily: 'Merriweather-Light',
                marginTop: 5,
              }}>
              No of trials left:- 5
            </Text>
          </View>
          <View
            style={{
              // justifyContent: 'flex-end',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Icon style={styles.icon} fill="#8F9BB3" name="gift-outline" />
          </View>
        </View>
      </Card>
      <Layout
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingVertical: 5,
        }}>
        <Avatar
          source={{
            uri: 'https://picsum.photos/id/1005/367/267',
          }}
        />
        <View
          style={{
            flexGrow: 1,
            paddingLeft: 20,
          }}>
          <Text
            category="p1"
            style={{
              color: PRIMARY,
              fontFamily: 'Merriweather-Bold',
            }}>
            Plane Name
          </Text>
          <Text
            category="label"
            appearance="hint"
            style={{
              fontFamily: 'Merriweather-Light',
            }}>
            Duration 5 days
          </Text>
        </View>
        <View>
          <Text>17 Jan,2005</Text>
        </View>
      </Layout>

      <Layout
        style={{
          paddingHorizontal: 20,
          flex: 1,
        }}>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          dignissimos impedit praesentium sequi itaque ea eos quisquam minima
          unde dolor quia provident.
        </Text>
      </Layout>

      <Layout
        level="3"
        style={{
          flexDirection: 'row',
          padding: 10,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
        }}>
        <Button
          style={{
            marginHorizontal: 20,
            borderRadius: 15,
          }}
          status="primary"
          accessoryLeft={(props) => <Icon {...props} name="heart-outline" />}
        />
        <Button
          style={{
            flexGrow: 1,
            borderRadius: 15,
          }}>
          BUTTON
        </Button>
      </Layout>
    </Layout>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
  },
});
