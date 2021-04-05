import {Divider, Layout} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList,TextInput,Image, ScrollView} from 'react-native';
import CustomCards from '../components/CustomCards';
import {AuthContext} from '../context/context';
import Icon from 'react-native-vector-icons/FontAwesome';

import ClientHome from './client/Home';
import CompanyHome from './company/Home';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [
  {title: 'Title Text', key: 'item1'},
  {title: 'Title Text', key: 'item2'},

];
const Home = ({navigation}) => {
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
  <TouchableOpacity onPress={() => navigation.navigate('B2C')}>
      <View>
           <Image
                source={require('../assests/img/Deepak_Garments.jpg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:100, 
                  resizeMode:"stretch" 
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:0,marginTop:5,color:"#fff",width:70}}>Deepak Garments</Text>
              </View>
              </TouchableOpacity>
              </View>

              <View style={{marginLeft:20}}>
              <TouchableOpacity onPress={() => navigation.navigate('Chaudhary_Garments')}>
      <View>
           <Image
                source={require('../assests/img/Chauhan_Lifestyle.jpg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:100,
                  resizeMode:"stretch"
                     
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:0,marginTop:5,color:"#fff",width:70}}>Chauhan Garments</Text>
              </View>
              </TouchableOpacity>
              </View>


              <View style={{marginLeft:20}}>
              <TouchableOpacity onPress={() => navigation.navigate('Leather')}>
      <View>
           <Image
                source={require('../assests/img/Leather_Home.jpg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:100,
                  resizeMode:"stretch"  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:0,marginTop:5,color:"#fff",width:70}}>Leather Home</Text>
              </View>
              </TouchableOpacity>
              </View>

              <View style={{marginLeft:20}}>
              <TouchableOpacity onPress={() => navigation.navigate('Glitz')}>
      <View>
           <Image
                source={require('../assests/img/g_g.jpg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:100,
                  resizeMode:"stretch"  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:0,marginTop:5,color:"#fff",width:70}}>Glitz & Glamour</Text>
              </View>
              </TouchableOpacity>
              </View>

              <View style={{marginLeft:20}}>
              <TouchableOpacity onPress={() => navigation.navigate('Look')}>
      <View>
           <Image
                source={require('../assests/img/look_me.jpg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:0,marginTop:5,color:"#fff",width:70}}>Look Me</Text>
              </View>
              </TouchableOpacity>
              </View>

              <View style={{marginLeft:20}}>
              <TouchableOpacity onPress={() => navigation.navigate('Benzor')}>
      <View>
           <Image
                source={require('../assests/img/Benzor.jpg')}
                style={{
                  width: 70,
                  height:70,
                  borderRadius:10,  
                }}
              />
              </View>
              <View>
              <Text style={{marginLeft:0,marginTop:5,color:"#fff",width:70}}>Benzor</Text>
              </View>
              </TouchableOpacity>
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
          renderItem={({item, index, separators}) => <CustomCards />

          
          
          
          }
        />
      </Layout>
    </Layout>
    
    </ScrollView> 
    
    </>
  );
};

export default Home;

