import { View, Text,SafeAreaView,TextInput,TouchableOpacity,ScrollView,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SignInLogo } from '../../Utils/Image'
import { heightToDp, widthToDp } from '../../Utils/Responsive'

export default function BookTable(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <ScrollView>
      <View style={{ height: heightToDp('55') }}>
        <ImageBackground source={SignInLogo} style={{ height: heightToDp('55'), width: widthToDp('100') }}>
          <View style={{ flex: 1, alignItems: 'flex-end', marginTop: heightToDp('3'), marginEnd: widthToDp('8') }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Skip')}>
              <Text style={{ color: '#fff', fontSize: widthToDp('5') }}>Skip</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={{ marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('1'), borderWidth: 1 }}>
          <TextInput
            placeholder='Booking_Date'
            placeholderTextColor={'#000'}
            style={{ color: '#000', paddingStart: widthToDp('3'), fontStyle: 'italic' }}
          />
        </View>
        <View style={{ marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('1'), borderWidth: 1 }}>
          <TextInput
            placeholder='Number of Guest'
            onChangeText={(e) => setEmail(e)}
            placeholderTextColor={'#000'}
            style={{ color: '#000', paddingStart: widthToDp('3'), fontStyle: 'italic' }}
          />
        </View>
        <View style={{ marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('1'), borderWidth: 1 }}>
          <TextInput
            placeholder='Massage'
            maxLength={10}
            placeholderTextColor={'#000'}
            style={{ color: '#000', paddingStart: widthToDp('3'), fontStyle: 'italic' }}
          />
        </View>
        <View style={{ marginTop: heightToDp('2') }}>
          <TouchableOpacity>
            <View style={{ width: widthToDp('90'), height: heightToDp('7'), justifyContent: 'center', alignItems: 'center', borderRadius: widthToDp('1'), marginTop: heightToDp('1'), backgroundColor: 'rgb(0,130,244)' }}>
              <Text style={{ color: '#fff', fontSize: widthToDp('6'), fontWeight: 'bold' }}>Submit</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>

  </SafeAreaView>
  )
}