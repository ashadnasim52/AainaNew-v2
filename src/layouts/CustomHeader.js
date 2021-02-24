import {useNavigation} from '@react-navigation/native';
import {Avatar, Icon, Text, Layout} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {ACCENT, PRIMARY} from '../theme/colors';

const CustomHeader = ({navigation}) => {
  const nav = useNavigation();
  return (
    <Layout style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}>
        <Icon style={styles.icon} fill="#A8A8A8" name="menu-2-outline" />
      </TouchableOpacity>
      <View>
        <Text style={styles.subtext} category="label">
          plans
        </Text>
        <Text style={styles.text} category="h6">
          your plans
        </Text>
      </View>
      <Avatar
        source={{
          uri: 'https://picsum.photos/id/1005/367/267',
        }}
      />
    </Layout>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    // backgroundColor: '#fff',
  },
  icon: {
    width: 32,
    height: 32,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Merriweather-BlackItalic',
    color: PRIMARY,
  },
  subtext: {
    textAlign: 'center',
    fontFamily: 'Merriweather-Light',
  },
});
