import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../context/context';

import ClientHome from './client/Home';
import CompanyHome from './company/Home';

const Home = () => {
  const {state, dispatch} = useContext(AuthContext);

  if (state.isB2B) {
    // /client
    return <CompanyHome />;
  } else {
    // company
    return <ClientHome />;
  }
};

export default Home;

const styles = StyleSheet.create({});
