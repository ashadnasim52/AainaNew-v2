import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

const Signin = () => {
  return <Layout style={styles.container}></Layout>;
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
