import React, { Component,useState } from 'react';
import { Image, View, Text, ScrollView, Button, TextInput, Alert,ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';




const BcPage = ({ navigation }) => {

  const [showDataByButton_1, setShowDataByButton_1] = useState(false)
  const [showDataByButton_2, setShowDataByButton_2] = useState(false)
  const [showDataByButton_3, setShowDataByButton_3] = useState(false)

const handleButton_1 = () =>{
  setShowDataByButton_1(true)
  setShowDataByButton_2(false)
}
const handleButton_2 = () =>{
  setShowDataByButton_1(false)
  setShowDataByButton_2(true)
}
const handleButton_3 = () =>{
  setShowDataByButton_1(false)
  setShowDataByButton_2(false)
}


  return (
    <>
      <View style={{ backgroundColor: "#2B547E", height: 80 }}>
        <View
          style={{
            height: 50,
            backgroundColor: '#fff',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center',
            borderRadius: 10,
            margin: 20,
            marginTop: 20
          }}>
          <Icon
            name="search"
            style={{ paddingRight: 10, paddingLeft: 8, fontSize: 17 }}
          />
          <TextInput placeholder="Search Any Products  here....." />
        </View>
      </View>

      <ScrollView style={{ backgroundColor: "#2B547E" }}>



        <View style={{ marginTop: 10 }}>
          <Image
            source={require('../assests/img/Deepak_Garments.jpg')}
            style={{
              width: 360,
              height: 250,
              justifyContent: 'center',
            }}
          />
        </View>

        <View>

          <View style={{marginTop:10}}>
                 <Text style={{color:"white",fontSize:24,textAlign:"center",textDecorationLine:"underline"}}>About Deepak Garments</Text>
                 <Text style={{color:"lightgrey",fontSize:15,marginLeft:10,marginTop:10}}>Shopping never goes in vain with Deepak Garments, which provides its customers with T-shirts, jeans, undergarments, sportswear, and much more.</Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginBottom:20,marginHorizontal:60}}>
            <TouchableOpacity onPress={()=>handleButton_3()}>
            <Text style={{color:"black",backgroundColor:"white",width:60,lineHeight:30,textAlign:'center',borderRadius:10}}>All</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>handleButton_1()}>
            <Text style={{color:"black",backgroundColor:"white",width:60,lineHeight:30,textAlign:'center',borderRadius:10}}>Men</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>handleButton_2()}>
            <Text style={{color:"black",backgroundColor:"white",width:60,lineHeight:30,textAlign:'center',borderRadius:10}}>Women</Text>
            </TouchableOpacity>
          </View>
          </View>

{/* ==========================Ternary Operator start==================================================== */}

{/* Men */}

{
            showDataByButton_1 ? (
              
              
            
              <View>
<View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  
    <ImageBackground
      source={require('../assests/deepak_garments/men/25.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Black Colour Full Sleeve T-Shirt with Print on Chest</Text>
    </ImageBackground>
   
      
      
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/26.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Black half T-shirt with Print in Round Neck</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>

<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/27.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Peach Colour Half Sleeve T-shirt with Block Prints</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/28.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Sleeveless Jackets in Three Colours Yellow, White and Sky Blue with Front Zip</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>

<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/29.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Polo T-Shirt with Half Sleeve, Yellow Colour</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/30.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Narrow Fitted Blue Jeans</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>

</View>
</View>





  

            ):(
      <>
              {
                showDataByButton_2 ? (         
 <View>
<View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/women/31.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Free Size Half Sleeve T-shirt in Two Colours Right and Light Sky Colour</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/women/32.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Red Colour Sheath Dress with Side Pocket, Collar and Waist band</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>

<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/women/33.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>White Round Neck T-Shirt with Quarter Sleeve</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/women/34.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Blue Half Sleeve Polo T-Shirt</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>

<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/women/35.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Light Blue Short with Side Pockets</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/women/36.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Peach Colour Half Sleeve Polo T-Shirt</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>

</View>
</View>








              ):(
               <>
                {
                showDataByButton_3 ? ( 
                  <View>
<View style={{marginTop:30}}>
       <Text style={{color:"white",fontSize:24,textAlign:"center",textDecorationLine:"underline"}}>About Deepak Garments</Text>
       <Text style={{color:"lightgrey",fontSize:15,marginLeft:10,marginTop:10}}>Shopping never goes in vain with Deepak Garments, which provides its customers with T-shirts, jeans, undergarments, sportswear, and much more.</Text>
</View>



<View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/25.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Black Colour Full Sleeve T-Shirt with Print on Chest</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/26.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Black Colour Full Sleeve T-Shirt with Print on Chest</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
</View>
<View>
<View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/27.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Black Colour Full Sleeve T-Shirt with Print on Chest</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/28.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Black Colour Full Sleeve T-Shirt with Print on Chest</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
</View>
</View>
</View>
              
              
              
              
              
                ):(
                  <View>

<View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/25.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Black Colour Full Sleeve T-Shirt with Print on Chest</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/26.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Black half T-shirt with Print in Round Neck</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
</View>


<View>
<View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/27.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Peach Colour Half Sleeve T-shirt with Block Prints</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/28.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Sleeveless Jackets in Three Colours Yellow, White and Sky Blue with Front Zip</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
</View>
</View>

<View>
<View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/29.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Polo T-Shirt with Half Sleeve, Yellow Colour</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/men/30.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Narrow Fitted Blue Jeans</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
</View>
</View>


<View>
<View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/women/31.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Free Size Half Sleeve T-shirt in Two Colours Right and Light Sky Colour</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/women/32.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Red Colour Sheath Dress with Side Pocket, Collar and Waist band</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
</View>
</View>

<View>
<View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/women/33.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>White Round Neck T-Shirt with Quarter Sleeve</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/women/34.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Blue Half Sleeve Polo T-Shirt</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
</View>
</View>

<View>
<View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

  <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/women/35.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Light Blue Short with Side Pockets</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
  <ImageBackground
      source={require('../assests/deepak_garments/women/36.jpg')}
      style={{
        width: 170,
        height: 250,
        justifyContent: 'center',
      }}
    >
    <Text style={{color:"white",textAlign:"center",backgroundColor:"rgba(55, 81, 126, 0.8)",marginTop:200,height:50,opacity:0.9}}>Peach Colour Half Sleeve Polo T-Shirt</Text>
    </ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Sizing
    </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
        <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
          Ettire
    </Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
</View>
</View>




</View>
                )}
                </>
                )}
              </>
            )}


      </ScrollView>
    </>
  );
};
export default BcPage;
