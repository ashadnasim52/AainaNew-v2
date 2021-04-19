import { FlexStyleProps } from '@ui-kitten/components/devsupport';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import {
  StyleSheet,
  PermissionsAndroid,
  View,
  Image,
  ImageBackground,
  Modal,
  Text,
  TextInput,
  Input
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';


const CreateProfile1 =({navigation})=>{
  const [modalVisible, setModalVisible] = useState(false);
  const [value1,setValue1]=useState("hello")

 const  changer1 = (event) => {
    setValue1(event.target.value);
}

  return(
    <> 
    <KeyboardAwareScrollView>


    <Modal
                    animationType="slide"
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => {setModalVisible(!modalVisible); }}
                >
                    <View style={styles.centeredView} >
                        <View   style={styles.modalView}>
                        <ScrollView>
                   <Text
                   
                                onPress={changer1}
                                style={styles.text1}
                                value="Extra small"
                                >Extra Small</Text>
                   
                   <Text 
                                onPress={() => setModalVisible(!modalVisible)}
                                style={styles.text1}
                                onChange={e => setValue(e.target.value)}
                                >Small</Text>

<Text  
                                onPress={() => setModalVisible(!modalVisible)}
                                style={styles.text1}
                                onChange={e => setValue(e.target.value)} 
                                >Medium</Text>

<Text  
                                onPress={() => setModalVisible(!modalVisible)}
                                style={styles.text1}
                                onChange={e => setValue(e.target.value)}
                                >Large</Text>

<Text   
                                onPress={() => setModalVisible(!modalVisible)}
                                style={styles.text1}
                                onChange={e => setValue(e.target.value)}
                                >Extra Large</Text>

                                
</ScrollView>

                            <View >
                            </View>
                        </View>
                    </View>
                </Modal>
    <View style={{}}>
       <Image 
         source={require("../assests/img/MALE.jpg")}
         style={{width:360,height:250,}}
       />
      <TextInput style={{marginTop:40,borderBottomWidth:1,marginLeft:20,marginRight:10}} placeholder="Enter Your Name"/>
       
<View style={{marginTop:30,marginLeft:20,}}>
    
     <View style={{flexDirection:"row"}}>
     <View>
         <Text style={{width:150}}>Your Weight</Text>
         <TextInput style={{borderBottomWidth:1,marginTop:-20}}/>
       </View>
       <View style={{marginLeft:30,width:150}}>
         <Text>Your height</Text>
         <TextInput style={{borderBottomWidth:1,marginTop:-20}}/>
       </View>
       </View>

       <TouchableOpacity onPress={() => setModalVisible(true)} >
       <View style={{marginTop:30,marginBottom:50,}}>
      <Text>Your Body Size <AntDesign name="caretdown"/></Text>

      <Text>{value1}</Text>
       </View>
       </TouchableOpacity>
       </View>
<TouchableOpacity onPress={()=>navigation.navigate("CreateProfile2")}>
       <View style={{marginTop:10,backgroundColor:"#D6415C",marginHorizontal:90,height:50,paddingTop:10,borderRadius:10}}>
       <Text style={{textAlign:"center",fontSize:20,color:"white"}}>Continue <AntDesign name="arrowright" size={16}/></Text>
       </View>
</TouchableOpacity>

       </View>
       </KeyboardAwareScrollView>
    </>
  )
}

export default CreateProfile1;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 400
  },
  modalView: {
    margin: 30,
    backgroundColor: "#14466b",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    width:340,
    height:200,
    marginBottom:0,
    shadowOffset: {
      width: 0,
      height: 2
    }},
    text1:{
      fontSize: 15,
      color: "black",
      backgroundColor: "white",
      borderRadius: 10,
      width: 160,
      height: 30,
      textAlign: "center",
      marginTop:10,
      paddingTop:3
  }
  });