import {Divider, Layout} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import CustomCards from '../components/CustomCards';
import {AuthContext} from '../context/context';

import ClientHome from './client/Home';
import CompanyHome from './company/Home';

const data = [
  {title: 'Title Text', key: 'item1'},
  {title: 'Title Text', key: 'item2'},
  {title: 'Title Text', key: 'item13'},
  {title: 'Title Text', key: 'item1345'},
  {title: 'Title Text', key: 'item13'},
  {title: 'Title Text', key: 'item17'},
];
const Home = () => {
  const {state, dispatch} = useContext(AuthContext);

  // if (state.isB2B) {
  //   // /client
  //   return <CompanyHome />;
  // } else {
  //   // company
  //   return <ClientHome />;
  // }

  return (
    <Layout
      style={{
        flex: 1,
      }}>
      <Layout
        style={{borderTopRightRadius: 15, borderTopLeftRadius: 15}}
        level="2">
        <FlatList
          // ItemSeparatorComponent={({highlighted}) => <Divider />}
          contentContainerStyle={
            {
              // backgroundColor: '#F6F6F6',
              // borderColor: 'red',
              // borderWidth: 2,
            }
          }
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item, index, separators}) => <CustomCards />}
        />
      </Layout>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({});
