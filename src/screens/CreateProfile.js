import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CreateProfile = ({navigation}) => {
  const [checked, setChecked] = useState();
  const [visible,setVisible]=useState()
  var gender = ['Male', 'Female'];
  return (
    <View>
    <View>
    <Image
      style={styles.img}
                    source={require("../assests/img/gym.jpg")}
                    style={{height:250,width:360}}
                  />
    </View>
    <View style={{marginTop:20}}>
      <Text style={{textAlign:"center",fontSize:20}}>Your Details</Text>
    </View>
      <View style={styles.btn}>
        {gender.map((gender, key) => {
          return (
            <View style={{flexDirection:"row",margin:30}} key={gender}>
              {checked == key ? (
                <TouchableOpacity style={styles.btn}>
                  <View>
                  <Image
                    style={{width:150,height:150,borderRadius:10}}
                    source={require("../assests/img/MALE.jpg")}
                  />
                  <Text style={{textAlign:"center"}}>{gender}</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(key);
                  }}
                  style={styles.btn}>
                  <View>
                  <Image
                    style={{width:100,height:100,borderRadius:10}}
                    source={require("../assests/img/FEMALE.jpg")}
                  />
                  <Text style={{textAlign:"center"}}>{gender}</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
      {(gender[checked]=="Male") ?<Text style={{marginTop:20,fontSize:20,textAlign:"center",backgroundColor:"#D6415C",padding:10,height:50,marginHorizontal:90,borderRadius:20,color:"white",}} onPress={()=>navigation.navigate("CreateProfile1")} id="button3">Continue <AntDesign name="arrowright" size={16}/></Text>:<Text style={{marginTop:20,fontSize:20,textAlign:"center",backgroundColor:"#D6415C",padding:10,color:"white",height:50,marginHorizontal:90,borderRadius:20}} onPress={()=>navigation.navigate("Female1")} >Continue <AntDesign name="arrowright" size={16}/></Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
  },
  img: {
    height: 100,
    width: 100,
    marginHorizontal: 5,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CreateProfile;