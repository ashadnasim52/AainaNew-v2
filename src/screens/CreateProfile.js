import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../context/context';

import ClientCreateProfile from './client/CreateProfile';
import CompanyCreateProfile from './company/CreateProfile';

const CreateProfile = () => {
  const {state, dispatch} = useContext(AuthContext);

  if (state.isB2B) {
    // /client
    return <CompanyCreateProfile />;
  } else {
    // company
    return <ClientCreateProfile />;
  }
};

export default CreateProfile;

const styles = StyleSheet.create({});
