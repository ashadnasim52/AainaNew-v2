import { FlexStyleProps } from '@ui-kitten/components/devsupport';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  StyleSheet,
  PermissionsAndroid,
  View,
  Image,
  ImageBackground,
  Modal,
  Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CreateProfile2 =()=>{
  return(
    <>
    <View>
    <View>
       <Image 
         source={require("../assests/img/gym.jpg")}
         style={{width:360,height:210,}}
       />
     </View>
     <View style={{marginTop:30}}>
       <Text style={{textAlign:"center",fontSize:20}}>
         Upload Your Photo
       </Text>
     </View>
<View style={{flexDirection:"row",justifyContent:"space-around",marginTop:30}}>
      <View >
          <View style={{width:150,height:150,backgroundColor:"green",borderRadius:10}}>
             {/* <Image 
              source={require("../assests/img/girl.jpg")}
              style={{width:150,height:150,borderRadius:10}}
              /> */}
           </View>
      <Text style={{textAlign:"center",marginTop:10}}>Front Photo</Text>
     </View>

      <View>
      <View style={{width:150,height:150,backgroundColor:"green",borderRadius:10}}>
      {/* <Image 
       source={require("../assests/img/girl.jpg")}
         style={{width:150,height:150,borderRadius:10}}
       /> */}
       </View>
       <Text style={{textAlign:"center",marginTop:10}}>Side Photo</Text>
       </View>

</View>

<TouchableOpacity >
       <View style={{marginTop:60,backgroundColor:"#D6415C",marginHorizontal:90,height:50,paddingTop:10,borderRadius:10}}>
       <Text style={{textAlign:"center",fontSize:20,color:"white"}}>Continue <AntDesign name="arrowright" size={16}/></Text>
       </View>
</TouchableOpacity>

     </View>
    
    </>
  )
}

export default CreateProfile2;