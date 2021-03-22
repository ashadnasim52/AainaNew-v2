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
import { TouchableOpacity } from 'react-native-gesture-handler';
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
       <TouchableOpacity onPress={() => navigation.navigate('Main')}>
         <Text style={{backgroundColor:"#14466b",color:"white",textAlign:"center",padding:15,marginHorizontal:20,borderRadius:10,fontSize:16}}>LOGIN</Text>
         </TouchableOpacity>
       </View>
       {!state.isB2B && (
         <>
       <Text style={{alignSelf:"center",marginTop:10,color:"grey"}}>Or</Text>

       <View style={{alignSelf:"center",marginTop:20}}>
       <Text style={{backgroundColor:"#ebeef4",padding:13,borderRadius:10,width:320,textAlign:"center",color:"#14466b",borderWidth:1,borderColor:"white"}}> <AntDesign name="facebook-square" style={{fontSize:20,}} /> Continue with facebook</Text>
       <Text style={{marginTop:20,backgroundColor:"#ebeef4",padding:13,borderRadius:10,width:320,textAlign:"center",color:"#ea4335",borderWidth:1,borderColor:"white"}}><AntDesign name="google" style={{fontSize:20,color:"green"}}  /> Continue with Google</Text>
       </View>
       </>
       )}

<View style={{marginTop:30,flexDirection:"row",alignSelf:"center"}}>
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
    backgroundColor: PRIMARY,
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
      nav.navigate('Main');
    }}
   title="Login" />
  
</Layout>
</RBSheet>
    </>
  )
}
export default Signin;