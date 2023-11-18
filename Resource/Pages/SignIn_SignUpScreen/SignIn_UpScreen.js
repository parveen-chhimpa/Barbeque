import { View, Text, SafeAreaView, Image, TextInput, ScrollView, ImageBackground, TouchableOpacity, ToastAndroid } from 'react-native'
import React,{useState} from 'react'
import { SignInLogo } from '../../Utils/Image'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import Feather from 'react-native-vector-icons/Feather'
export default function SignIn_UpScreen(props) {
  const [isSecureText,setIsSecureText] = useState(true);
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
  const LogIn = ()=>{
if(!email.trim()){
ToastAndroid.show('Please Enter Username or Email',ToastAndroid.SHORT)
}
else if(!password.trim()){
  ToastAndroid.show('Please Enter Password',ToastAndroid.SHORT);
}
else{
  props.navigation.navigate('Home_Screen');
}
  }
  return (
<SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    <ScrollView>
     <View style={{height:heightToDp('35')}}>
 <ImageBackground source={SignInLogo} style={{height:heightToDp('35'),width:widthToDp('100')}}>
    <View style={{flex:1,alignItems:'flex-end',marginTop:heightToDp('5'),marginEnd:widthToDp('8')}}>
       <TouchableOpacity onPress={()=>props.navigation.navigate('Skip')}>
        <Text style={{color:'#fff',fontSize:widthToDp('5')}}>Skip</Text>
       </TouchableOpacity>
        
    </View>
 </ImageBackground>
</View>
<View style={{alignItems:'center'}}>
<View style={{marginTop:heightToDp('3')}}>
    <Text style={{textAlign:'center',fontSize:widthToDp('6'),color:'#000',fontWeight:'bold'}}> #1 Restaurant in Paris{'\n'}for fine Dining</Text>
</View>
<View style={{marginTop:heightToDp('4'),width:widthToDp('90'),height:heightToDp('7'),borderRadius:widthToDp('1'),borderWidth:0.5}}> 
  <TextInput 
  placeholder='UserName'
  value={email}
  onChangeText={(e)=>setEmail(e)}
  placeholderTextColor={'#000'}
  style={{color:'#000',paddingStart:widthToDp('3')}}
  />
</View>
<View style={{marginTop:heightToDp('5'),width:widthToDp('90'),height:heightToDp('7'),borderRadius:widthToDp('1'),borderWidth:0.5,flexDirection:'row'}}> 
<View style={{width:widthToDp('80')}}>
    <TextInput 
   placeholder='Password'
   value={password}
   onChangeText={(e)=>setPassword(e)}
   placeholderTextColor={'#000'}
   secureTextEntry={isSecureText}
   style={{color:'#000',paddingStart:widthToDp('3')}}
  />
</View>
<View style={{justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>setIsSecureText(e=>!e)}>
            {isSecureText?<Feather name='eye-off' size={20} color={'#000'} style={{fontWeight:'bold'}} />
        :<Feather name='eye' size={20} color={'#000'} style={{fontWeight:'bold'}} />    
        }
        
        </TouchableOpacity>
       </View>
</View>
<View style={{marginTop:heightToDp('4')}}>
<TouchableOpacity onPress={()=>LogIn()}>
  <View style={{width:widthToDp('90'),height:heightToDp('7'),justifyContent:'center',alignItems:'center',borderRadius:widthToDp('1'),backgroundColor:'rgb(0,130,244)'}}>
<Text style={{color:'#fff',fontSize:widthToDp('5'),fontWeight:'bold'}}>Log In</Text>
</View>  
</TouchableOpacity>

<Text style={{textAlign:'center',paddingTop:heightToDp('1'),color:'#000',fontSize:widthToDp('4')}}>Or</Text>
<TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>
  <View style={{width:widthToDp('90'),height:heightToDp('7'),justifyContent:'center',alignItems:'center',borderRadius:widthToDp('1'),marginTop:heightToDp('1'),backgroundColor:'rgb(0,130,244)'}}>
<Text style={{color:'#fff',fontSize:widthToDp('5'),fontWeight:'bold'}}>Sign Up</Text>
</View>  
</TouchableOpacity>

</View>
<View style={{marginTop:heightToDp('1')}}>
    <Text style={{color:'#a9a9a9'}}>By Continuing you agree to our</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'center',marginTop:heightToDp('1')}}>
    <TouchableOpacity>
          <View>
        <Text style={{color:'#000',fontWeight:'bold'}}>Terms of Service</Text>
    </View>
    </TouchableOpacity>
 
   <TouchableOpacity>
        <View style={{marginStart:widthToDp('2.5')}}>
        <Text style={{color:'#000',fontWeight:'bold'}}>Privacy Policy</Text>
    </View>
   </TouchableOpacity>
<TouchableOpacity>
      <View style={{marginStart:widthToDp('2.5')}}>
        <Text style={{color:'#000',fontWeight:'bold'}}>Contant Policy</Text>
    </View>
</TouchableOpacity>

</View>
</View>   
    </ScrollView>

</SafeAreaView>
  )
}