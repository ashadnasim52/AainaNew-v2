import {Divider, Layout} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList,TextInput,Image, ScrollView} from 'react-native';
import CustomCards from '../components/CustomCards';
import {AuthContext} from '../context/context';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    <>
    
    <ScrollView style={{backgroundColor:"#14466b"}}>
    
    <View style={{height:110,}}>
    <View
          style={{
            height: 50,
            backgroundColor: '#fff',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 20,
            marginHorizontal:20
          }}>
          <Icon
            name="search"
            style={{ paddingRight: 10, paddingLeft: 8, fontSize: 17 }}
          />
          <TextInput placeholder="Search Any Products...." />
        </View>
       </View>
    <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
<View style={{height:80,marginTop:40}}>
  <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:-40}}>
  
  <View style={{marginLeft:10,}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>

              <View style={{marginLeft:20}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>

              <View style={{marginLeft:20}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>

              <View style={{marginLeft:20}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>

              <View style={{marginLeft:20}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>

              <View style={{marginLeft:20}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>

              <View style={{marginLeft:20}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>

              <View style={{marginLeft:20}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>

              <View style={{marginLeft:20}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>

              <View style={{marginLeft:20}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>

              <View style={{marginLeft:20}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>

              <View style={{marginLeft:20}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>

              <View style={{marginLeft:20}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>

              <View style={{marginLeft:20}}>
      <View>
           <Image
                source={require('../assests/temp.jpeg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:10,marginTop:5,color:"#fff"}}>Hello</Text>
              </View>
              </View>
              
              
            
           
  </View>
</View>

</ScrollView>
  
    <Layout
      style={{
        flex: 1,
        
      }}>
      <Layout
        style={{borderTopRightRadius: 15, borderTopLeftRadius: 15}}
        level="2">
        <FlatList style={{backgroundColor:"#14466b"}}
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
    
    </ScrollView> 
    
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
