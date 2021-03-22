import { TextStyleProps } from "@ui-kitten/components/devsupport";
import { View, Text, Card, CardItem, Left, Right, Button } from "native-base";
import React from "react";
import { Image,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const Dress = () => {
    return (
        <>
        <ScrollView style={{marginTop:0,}}>
        <View style={{marginTop:30}}>
      
            <Text style={{alignSelf:"center",color:"black"}}>Dress Fitting Rating </Text>
        </View>
            <View style={{flexDirection:"row",marginTop:20,}}>
                <View style={{ margin:10 }}>
                    <Image
                        source={require('../assests/temp.jpeg')}
                        style={{ width: 180, height: 240,borderRadius:10}}
                    />
                     <View>
                <Text style={{fontSize:20,marginTop:10,color:"darkorange",marginLeft:15}}>Ravin Kumar</Text>
                </View>
                </View>
                  <View style={{marginTop:15}}>
                    <Text style={{backgroundColor:"#293c5d",color:"white",height:40,width:150,padding:10,borderRadius:5,fontSize:12}} >Change Dress Size</Text>
                    <Text style={{backgroundColor:"#f7941e",marginTop:10,color:"white",height:40,width:150,padding:10,borderRadius:5,fontSize:12}}>Change Body Profile</Text>
                    <Text style={{backgroundColor:"#810541",marginTop:105,color:"white",height:40,width:150,padding:10,borderRadius:5,fontSize:12}}>Virtual Trial Room</Text>
                  </View>
                  
            </View>
            <View style={{flexDirection:"row"}}>
            
                <View style={{marginLeft:30,justifyContent:"space-between"}}>
                
                <View>
                <Text style={styles.text}>Shoulder:17.87</Text>
                </View>
                <View>
                <Text style={styles.text}>Waiest:32.87</Text>
                </View>
                <View>
                <Text style={styles.text}>Chest:38.63</Text>
                </View>
                <View>
                <Text style={styles.text}>Hips:37.89</Text>
                </View>
                <View >
                    <Text style={styles.text}>BMI:22.66</Text>
                </View>
               
                </View>
                <View>
                <Image
                        source={require('../assests/temp.jpeg')}
                        style={{ width: 150, height: 150,borderRadius:10,marginLeft:40}}
                    />
                </View>

            </View>

                <View style={{marginTop:30}}>
                <Card >
                        <CardItem style={{backgroundColor:"lightgrey"}}>
                            <Left>
                                <Text>Final Rating</Text>
                            </Left>
                            <Right>
                                <Text style={{backgroundColor:"green",color:"white",height:30,width:60,borderRadius:17,paddingLeft:16,paddingTop:3}}>4.5</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem style={{backgroundColor:"lightgrey"}}>
                            <Left>
                                <Text>Shoulder</Text>
                            </Left>
                            <Right>
                                <Text style={{backgroundColor:"#f7941e",color:"white",height:30,width:60,borderRadius:17,paddingLeft:16,paddingTop:3}}>4.5</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem style={{backgroundColor:"lightgrey",}}>
                            <Left>
                                <Text>Waiest</Text>
                            </Left>
                            <Right>
                            <Text style={{backgroundColor:"#14466b",color:"white",height:30,width:60,borderRadius:17,paddingLeft:16,paddingTop:3}}>4.5</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem style={{backgroundColor:"lightgrey"}}>
                            <Left>
                                <Text>Chest</Text>
                            </Left>
                            <Right>
                            <Text style={{backgroundColor:"#810541",color:"white",height:30,width:60,borderRadius:17,paddingLeft:16,paddingTop:3}}>4.5</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem style={{backgroundColor:"lightgrey"}}>
                            <Left>
                                <Text>Hips</Text>
                            </Left>
                            <Right>
                            <Text style={{backgroundColor:"#15eb77",color:"white",height:30,width:60,borderRadius:17,paddingLeft:16,paddingTop:3}}>4.5</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </View>
                </ScrollView>    
        </>
    )
}

export default Dress;

const styles = StyleSheet.create({
    text: {
      fontSize:14,
      color:"black"
    },
});