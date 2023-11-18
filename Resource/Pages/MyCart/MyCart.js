import { View, Text, BackHandler, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightToDp, widthToDp } from '../../Utils/Responsive';
import {MYCartLogo} from '../../Utils/Image'
export default function MyCart(props) {
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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{flexDirection:'row',marginStart:widthToDp('5'),marginTop:heightToDp('3')}}>
                <View style={{justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>props.navigation.replace('Home_Screen')}>
                        <AntDesign name='arrowleft' color={'#000'} size={25} />
                    </TouchableOpacity>
                 
                </View>
                <View style={{justifyContent:'center',marginStart:widthToDp('30')}}>
                    <Text style={{ color: '#000',fontSize:widthToDp('4.5'),fontWeight:'bold' }}>MyCart</Text>
                </View>
            </View>
            <View>
            <Text
              style={{
                fontSize:widthToDp('4'),
                borderBottomWidth: 1,
                color: "#191970",
              }}
            ></Text>
            </View>
            <View style={{alignItems:'center',marginTop:heightToDp('5')}}>
                <Text style={{color:'rgb(252,73,17)',fontSize:widthToDp('5')}}>Awesome Food Awaits!!</Text>
             <View style={{height:heightToDp('38'),width:widthToDp('90'),marginTop:heightToDp('3'),alignItems:'center'}}>
                <Image source={MYCartLogo} style={{height:heightToDp('37'),width:widthToDp('85')}} />
             </View>
             <TouchableOpacity>
                           <View style={{backgroundColor:'rgb(252,73,17)',width:widthToDp('40'),height:heightToDp('5'),justifyContent:'center',borderRadius:widthToDp('6')}}>
                <Text style={{color:'#fff',textAlign:'center',fontSize:widthToDp('4.3')}}>ADD SOME NOW!</Text>
             </View>  
             </TouchableOpacity>

            </View>
        </SafeAreaView>

    )
}