import { View, Text, SafeAreaView, TouchableOpacity, BackHandler } from 'react-native'
import React,{useEffect} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { heightToDp, widthToDp } from '../../Utils/Responsive'

export default function Address(props) {
    useEffect(() => {
        const backAction = () => {
            props.navigation.replace('Home_Screen');
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);
  return (
<SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    <View>
          <View style={{flexDirection:'row',marginTop:heightToDp('7'),marginStart:widthToDp('8')}}>
       <TouchableOpacity onPress={()=>props.navigation.replace('Home_Screen')}>
                <View>
            <AntDesign name='arrowleft' size={25} color={'#000'} />
        </View>
       </TouchableOpacity>

        <View style={{justifyContent:'center',marginStart:widthToDp('5')}}>
            <Text style={{color:'#000'}}>Saved Address</Text>
        </View>
    </View>  
    <View style={{marginStart:widthToDp('8')}}>
            <Text
              style={{
                fontSize:widthToDp('4'),
                borderBottomWidth: 1,
                color: "#191970",
              }}
            ></Text>
            </View>
            <TouchableOpacity>
            <View style={{flexDirection:'row',marginStart:widthToDp('8'),marginTop:heightToDp('4')}}>
              <View style={{borderWidth:1,width:widthToDp('5'),height:heightToDp('2.5'),justifyContent:'center',alignItems:'center',borderColor:'rgb(255,111,24)',borderRadius:widthToDp('0.8')}}>
                <Entypo name='plus' size={17} color={'rgb(255,111,24)'} />
              </View>
              <View style={{marginStart:widthToDp('5')}}>
                <Text style={{color:'rgb(255,111,24)'}}>ADD ADDRESS</Text>
              </View>
            </View>  
            </TouchableOpacity>
    </View>
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'#000',fontSize:widthToDp('5')}}>No saved address available</Text>
            </View>

</SafeAreaView>
  )
}