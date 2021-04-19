
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

const item = require("../assests/img/triangle.png")


const Female1 = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value1, setValue1] = useState("hello")

  const changer1 = (event) => {
    setValue1(event.target.value);
  }



  return (
    <>
      <KeyboardAwareScrollView>


        <Modal
          animationType="slide"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => {

            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView} >
            <View style={styles.modalView}>
  <ScrollView>



<View style={{ flexDirection: "row",marginTop:30}}>
             
                <View >
                  <View style={{height:150,width:120,backgroundColor:"white",marginRight:20,borderRadius:10}}>
                    <Text style={{textAlign:"center",color:"black",marginTop:50,fontSize:19}}
                    onPress={()=>setModalVisible(!modalVisible)}
                    >Body Shapes</Text>
                  </View>

                </View>


                
{/*=============2nd image========================================================*/}
   
    <View>
    
         <View style={{ backgroundColor:"white",borderRadius:10 }}>
            <Image
            source={require("../assests/img/triangle.png")}
            style={{ height: 150, width: 120 }}
            />
          </View>
          
         <View >
         
           <Text style={{textAlign:"center",color:"black",marginTop:5,fontSize:19,marginTop:-30}}
           onPress={()=>setModalVisible(!modalVisible)}
           >Triangle</Text>
          
        </View>
      

    </View>

                 
</View>

<View style={{ flexDirection: "row",marginTop:20}}>
             
                <View>

                  <View style={{ backgroundColor:"white",marginRight:20,borderRadius:10}}>
                    <Image
                      source={require("../assests/img/diamond.png")}
                      style={{ height: 150, width: 120 }}
                    />
                  </View>
                  <View>
                    <Text style={{textAlign:"center",color:"black",marginTop:5,fontSize:19,marginTop:-30,marginLeft:-10}}
                    onPress={()=>setModalVisible(!modalVisible)}
                    >Diamond</Text>
                  </View>

                </View>


                
{/*=============2nd image========================================================*/}
    <View>
         <View style={{ backgroundColor:"white",borderRadius:10 }}>
            <Image
            source={require("../assests/img/rectangle.png")}
            style={{ height: 150, width: 120 }}
            />
          </View>
         <View>
           <Text style={{textAlign:"center",color:"black",marginTop:5,fontSize:19,marginTop:-30}}
           onPress={()=>setModalVisible(!modalVisible)}
           >Rectangle</Text>
        </View>

    </View>
                 
</View>

<View style={{ flexDirection: "row",marginTop:20}}>
             
                <View>

                  <View style={{ backgroundColor:"white",marginRight:20,borderRadius:10}}>
                    <Image
                      source={require("../assests/img/inverted.png")}
                      style={{ height: 150, width: 120 }}
                    />
                  </View>
                  <View>
                    <Text style={{textAlign:"center",color:"black",marginTop:5,fontSize:19,marginTop:-30,marginLeft:-10}}
                    onPress={()=>setModalVisible(!modalVisible)}
                    >Inverted</Text>
                  </View>

                </View>


                
{/*=============2nd image========================================================*/}
    <View>
         <View style={{ backgroundColor:"white",borderRadius:10 }}>
            <Image
            source={require("../assests/img/hourglass.png")}
            style={{ height: 150, width: 120 }}
            />
          </View>
         <View>
           <Text style={{textAlign:"center",color:"black",marginTop:5,fontSize:19,marginTop:-30}}
           onPress={()=>setModalVisible(!modalVisible)}
           >Hourglass</Text>
        </View>

    </View>
                 
</View>


               
                




              </ScrollView>

              <View >
              </View>
            </View>
          </View>
        </Modal>
        <View style={{}}>
          <Image
            source={require("../assests/img/FEMALE.jpg")}
            style={{ width: 360, height: 250, }}
          />
          <TextInput style={{ marginTop: 40, borderBottomWidth: 1, marginLeft: 20, marginRight: 10 }} placeholder="Enter Your Name" />

          <View style={{ marginTop: 30, marginLeft: 20, }}>

            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={{ width: 150 }}>Your Weight</Text>
                <TextInput style={{ borderBottomWidth: 1, marginTop: -20 }} />
              </View>
              <View style={{ marginLeft: 30, width: 150 }}>
                <Text >Your height</Text>
                <TextInput style={{ borderBottomWidth: 1, marginTop: -20 }} />
              </View>
            </View>

            <TouchableOpacity onPress={() => setModalVisible(true)} >
              <View style={{ marginTop: 30, marginBottom: 50, }}>
                <Text>Your Body Shape <AntDesign name="caretdown" /></Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Female")}>
            <View style={{ marginTop: 10, backgroundColor: "#D6415C", marginHorizontal: 90, height: 50, paddingTop: 10, borderRadius: 10 }}>
              <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>Continue <AntDesign name="arrowright" size={16} /></Text>
            </View>
          </TouchableOpacity>

        </View>
      </KeyboardAwareScrollView>
    </>
  )
}

export default Female1;

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
    width: 340,
    height: 1000,
    marginBottom: 0,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  text1: {
    fontSize: 15,
    color: "black",
    backgroundColor: "white",
    borderRadius: 10,
    width: 160,
    height: 30,
    textAlign: "center",
    marginTop: 10,
    paddingTop: 3
  }
});