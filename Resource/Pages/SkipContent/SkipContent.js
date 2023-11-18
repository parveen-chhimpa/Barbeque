import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'

export default function SkipContent(props) {
    return (
        <>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>
                                    <View style={{alignItems:'center',marginTop:heightToDp('8')}}>
                <Text style={{color:'#000',fontSize:heightToDp('3.5')}}>SignIn</Text>
            </View>
                    </TouchableOpacity>
<TouchableOpacity>
            <View style={{alignItems:'center',marginTop:heightToDp('4')}}>
                <Text style={{color:'#000',fontSize:heightToDp('3.5')}}>Share</Text>
            </View>
</TouchableOpacity>


            <TouchableOpacity>
            <View style={{alignItems:'center',marginTop:heightToDp('4')}}>
                <Text style={{color:'#000',fontSize:heightToDp('3.5')}}>Ligial</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{alignItems:'center',marginTop:heightToDp('4')}}>
                <Text style={{color:'#000',fontSize:heightToDp('3.5')}}>FQ</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
                            <View style={{alignItems:'center',marginTop:heightToDp('4')}}>
                <Text style={{color:'#000',fontSize:heightToDp('3.5')}}>Privacy Policy</Text>
            </View>
            </TouchableOpacity>

        </SafeAreaView>
        <View style={{alignItems:'center',marginBottom:heightToDp('3')}}>
            <Text style={{color:'#000',fontSize:widthToDp('4.5')}}>Developed By Abstract Brains</Text>
        </View>
        </>

    )
}