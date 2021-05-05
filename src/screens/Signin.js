import React, { useState, useContext, useRef } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  Input,
  TextInput,
  Button
} from 'react-native';
import {  Layout,} from '@ui-kitten/components';
import RBSheet from 'react-native-raw-bottom-sheet';
import Logo from '../assests/image1.png';
import { ACCENT, PRIMARY } from '../theme/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context/context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { color } from 'react-native-reanimated';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const {state, dispatch} = useContext(AuthContext);
  console.log(state.isB2B);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  const nav = useNavigation();
  const refRBSheet = useRef();


  return (
    <>
    {
      (!state.isB2B) ? 
    
    <ScrollView>
      <View>
        <View style={{ marginTop: 10 }}>
          <Image
            source={require('../assests/img/logo1.png')}
            style={{
              width: 140,
              height: 60,
              alignSelf: "center"
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25, marginLeft: 20 }}>Welcome,</Text>
          <Text style={{ fontSize: 20, marginLeft: 20, color: "grey" }}>Sign in to continue!</Text>
        </View>
       <View style={{marginTop:20}}>
       <Text style={{marginLeft:20,color:"grey"}}>Email</Text>
       <TextInput 
       placeholder="Enter your email id"  
       value={email} 
       onChangeText={(nextValue) => setEmail(nextValue)}
         style={{marginHorizontal:20,borderWidth:1,borderRadius:10,borderColor:"darkgrey",paddingLeft:20}}
       />
        <Text style={{marginLeft:20,marginTop:20,color:"grey"}}>Password</Text>
       <TextInput 
       placeholder="Enter password" 
       secureTextEntry={secureTextEntry} 
       value={password}
       caption="Should contain at least 8 symbols"
       onChangeText={(nextValue) => setPassword(nextValue)}
         style={{marginHorizontal:20,borderWidth:1,borderRadius:10,borderColor:"darkgrey",paddingLeft:20}}
       />
       </View>
       <View style={{alignItems:"flex-end",marginVertical:10,marginEnd:20}}>
       <TouchableOpacity onPress={() => refRBSheet.current.open()}>
         <Text style={{color:"#24466b"}} >Forget Password ?</Text>
         </TouchableOpacity>
       </View>

       <View style={{marginTop:30}}>
       <TouchableOpacity onPress={() => navigation.navigate('Home')}>
         <Text style={{backgroundColor:"#14466b",color:"white",textAlign:"center",padding:15,marginHorizontal:20,borderRadius:10,fontSize:16}}>LOGIN</Text>
         </TouchableOpacity>
       </View>
         <>
         
       <Text style={{alignSelf:"center",marginTop:10,color:"grey"}}>Or</Text>

       <View style={{alignSelf:"center",marginTop:20}}>
       <TouchableOpacity>
       <Text style={{backgroundColor:"#ebeef4",padding:13,borderRadius:10,width:320,textAlign:"center",color:"#14466b",borderWidth:1,borderColor:"white"}}> <AntDesign name="facebook-square" style={{fontSize:20,}} /> Continue with Facebook</Text>
       </TouchableOpacity>
          </View>
          
          <TouchableOpacity>
          <View style={{alignSelf:"center",flexDirection:"row",marginTop:20,backgroundColor:"#ebeef4",borderWidth:1,width:320,borderRadius:10,paddingLeft:60,padding:11,borderColor:"white"}}>
          <Image 
            source={require('../assests/img/google1.png')}
            style={{width:22,height:22,marginTop:5}}/>
          <Text style={{marginTop:5,color:"#14466b"}}> Continue with Google</Text>
       </View>
       </TouchableOpacity>
       

       </>
       

<View style={{marginTop:30,flexDirection:"row",alignSelf:"center",marginBottom:10}}>
  <Text style={{}}>Don't have Account ? </Text>
  <TouchableOpacity onPress={() => {
                navigation.navigate('SignUp');
              }}>
  <Text style={{color:'#14466b',fontWeight:"bold"}}>SignUp</Text>
  </TouchableOpacity>
</View>
      </View>


<RBSheet
ref={refRBSheet}
closeOnDragDown={true}
closeOnPressMask={false}
customStyles={{
  wrapper: {
    backgroundColor: 'transparent',
  },
  draggableIcon: {
    backgroundColor: "blue",
  },
  container: {
    backgroundColor: '#CAD5E2',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
}}>
<Layout
  style={{
    paddingHorizontal: 30,
backgroundColor:"white",
    flex: 1,
    justifyContent: 'center',
  }}>
  <Text
    style={{
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: 20,
      color:"green",
    }}
    >
    Enter Email
  </Text>
  <Text category="p1">
    An email with the password reset link will sent to your registered
    email address
  </Text>
  <TextInput
    placeholder=" Enter your Registered Email"
    value={email}
    style={[
      {
        marginVertical: 20,
        borderWidth:1,
        borderColor:"grey",
        borderRadius:5
      },
    ]}
    accessoryLeft={(props) => <Icon name="email-outline" {...props} />}
    onChangeText={(nextValue) => setEmail(nextValue)}
  />
  <Button
    style={{}}
    onPress={() => {
      nav.navigate('Home');
    }}
   title="Login" />
  
</Layout>
</RBSheet>
</ScrollView>
:

<ScrollView>
      <View>
        <View style={{ marginTop: 10 }}>
          <Image
            source={require('../assests/img/logo1.png')}
            style={{
              width: 140,
              height: 60,
              alignSelf: "center"
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25, marginLeft: 20 }}>Welcome,</Text>
          <Text style={{ fontSize: 20, marginLeft: 20, color: "grey" }}>Sign in to continue!</Text>
        </View>
       <View style={{marginTop:20}}>
       <Text style={{marginLeft:20,color:"grey"}}>Email</Text>
       <TextInput 
       placeholder="Enter your email id"  
       value={email} 
       onChangeText={(nextValue) => setEmail(nextValue)}
         style={{marginHorizontal:20,borderWidth:1,borderRadius:10,borderColor:"darkgrey",paddingLeft:20}}
       />
        <Text style={{marginLeft:20,marginTop:20,color:"grey"}}>Password</Text>
       <TextInput 
       placeholder="Enter password" 
       secureTextEntry={secureTextEntry} 
       value={password}
       caption="Should contain at least 8 symbols"
       onChangeText={(nextValue) => setPassword(nextValue)}
         style={{marginHorizontal:20,borderWidth:1,borderRadius:10,borderColor:"darkgrey",paddingLeft:20}}
       />
       </View>
       <View style={{alignItems:"flex-end",marginVertical:10,marginEnd:20}}>
       <TouchableOpacity onPress={() => refRBSheet.current.open()}>
         <Text style={{color:"#24466b"}} >Forget Password ?</Text>
         </TouchableOpacity>
       </View>

       <View style={{marginTop:30}}>
       <TouchableOpacity onPress={() => navigation.navigate('HomeB')}>
         <Text style={{backgroundColor:"#14466b",color:"white",textAlign:"center",padding:15,marginHorizontal:20,borderRadius:10,fontSize:16}}>LOGIN</Text>
         </TouchableOpacity>
       </View>


       <View style={{marginTop:30,flexDirection:"row",alignSelf:"center",marginBottom:10}}>
  <Text style={{}}>Don't have Account ? </Text>
  <TouchableOpacity onPress={() => {
                navigation.navigate('SignUp');
              }}>
  <Text style={{color:'#14466b',fontWeight:"bold"}}>SignUp</Text>
  </TouchableOpacity>
</View>
      </View>


<RBSheet
ref={refRBSheet}
closeOnDragDown={true}
closeOnPressMask={false}
customStyles={{
  wrapper: {
    backgroundColor: 'transparent',
  },
  draggableIcon: {
    backgroundColor: "blue",
  },
  container: {
    backgroundColor: '#CAD5E2',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
}}>
<Layout
  style={{
    paddingHorizontal: 30,
backgroundColor:"white",
    flex: 1,
    justifyContent: 'center',
  }}>
  <Text
    style={{
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: 20,
      color:"green",
    }}
    >
    Enter Email
  </Text>
  <Text category="p1">
    An email with the password reset link will sent to your registered
    email address
  </Text>
  <TextInput
    placeholder=" Enter your Registered Email"
    value={email}
    style={[
      {
        marginVertical: 20,
        borderWidth:1,
        borderColor:"grey",
        borderRadius:5
      },
    ]}
    accessoryLeft={(props) => <Icon name="email-outline" {...props} />}
    onChangeText={(nextValue) => setEmail(nextValue)}
  />
  <Button
    style={{}}
    onPress={() => {
      nav.navigate('Home');
    }}
   title="Login" />
  
</Layout>
</RBSheet>
</ScrollView>
    }
    </>
  )
}
export default Signin;