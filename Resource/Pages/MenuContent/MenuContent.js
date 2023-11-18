import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'

export default function MenuContent(props) {
    return (
        <>
<SafeAreaView style={{flex:1,backgroundColor:'rgb(255,202,196)'}}>
<View style={{marginStart:widthToDp('5'),marginTop:heightToDp('5')}}>
<TouchableOpacity onPress={()=>props.navigation.replace('Menu')}>
  <View>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Home</Text>
</View>  
</TouchableOpacity>
<TouchableOpacity onPress={()=>props.navigation.navigate('RS')}>
  <View style={{marginTop:heightToDp('3')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Reservation History</Text>
</View>  
</TouchableOpacity>
<TouchableOpacity onPress={()=>props.navigation.replace('Book')}>
  <View style={{marginTop:heightToDp('3')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Book Table</Text>
</View>  
</TouchableOpacity>
<TouchableOpacity onPress={()=>props.navigation.navigate('Order')}>
  <View style={{marginTop:heightToDp('3')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Order History</Text>
</View>  
</TouchableOpacity>
{/* <TouchableOpacity onPress={()=>props.navigation.navigate('Address')}>
  <View style={{marginTop:heightToDp('3')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>My Addresses</Text>
</View>  
</TouchableOpacity> */}
<TouchableOpacity onPress={()=>props.navigation.navigate('Info')}>
  <View style={{marginTop:heightToDp('3')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Restaurant Info</Text>
</View>  
</TouchableOpacity>
{/* <TouchableOpacity >
  <View style={{marginTop:heightToDp('3')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Spacially for Guest</Text>
</View>  
</TouchableOpacity> */}
<TouchableOpacity onPress={()=>props.navigation.navigate('My_Profile')}>
  <View style={{marginTop:heightToDp('3')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Profile</Text>
</View>  
</TouchableOpacity>
<TouchableOpacity onPress={()=>props.navigation.navigate('Help')}>
  <View style={{marginTop:heightToDp('3')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Help & Support</Text>
</View>  
</TouchableOpacity>
<TouchableOpacity onPress={()=>props.navigation.navigate('About')}>
  <View style={{marginTop:heightToDp('3')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>About</Text>
</View>  
</TouchableOpacity>
<TouchableOpacity>
  <View style={{marginTop:heightToDp('3')}}>
        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Logout</Text>
</View>  
</TouchableOpacity>

</View>
</SafeAreaView>
        </>

    )
}