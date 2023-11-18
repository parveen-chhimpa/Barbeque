import { View, Text, SafeAreaView, Image, TextInput, ScrollView, ImageBackground, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { SignInLogo } from '../../Utils/Image'
import { heightToDp, widthToDp } from '../../Utils/Responsive'

export default function SignUpScreen(props) {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Password, setPassword] = useState('');
  const [Address, setAddress] = useState('');

  const SignIn = () => {
    if (!Name.trim()) {
      ToastAndroid.show('Please Enter Your Name', ToastAndroid.SHORT);
    }
    else if (!Email.trim()) {
      ToastAndroid.show('Please Enter Email Id', ToastAndroid.SHORT);
    }
    else if (!Mobile.trim()) {
      ToastAndroid.show('Please Enter Phone Number', ToastAndroid.SHORT);
    }
    else if (!Password.trim()) {
      ToastAndroid.show('Please Enter Password', ToastAndroid.SHORT);
    }
    else if (!Address.trim()) {
      ToastAndroid.show('Please Enter Your Address', ToastAndroid.SHORT);
    }
    else {
      props.navigation.navigate('Menu');
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={{ height: heightToDp('30') }}>
          <ImageBackground source={SignInLogo} style={{ height: heightToDp('30'), width: widthToDp('100') }}>
            <View style={{ flex: 1, alignItems: 'flex-end', marginTop: heightToDp('3'), marginEnd: widthToDp('8') }}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Skip')}>
                <Text style={{ color: '#fff', fontSize: widthToDp('5') }}>Skip</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ marginTop: heightToDp('3') }}>
            <Text style={{ textAlign: 'center', fontSize: widthToDp('6'), color: '#000', fontWeight: 'bold' }}> #1 Restaurant in Paris{'\n'}for fine Dining</Text>
          </View>
          <View style={{ marginTop: heightToDp('1'), width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('1'), borderWidth: 1 }}>
            <TextInput
              value={Name}
              placeholder='Name'
              onChangeText={(e) => setName(e)}
              placeholderTextColor={'#000'}
              style={{ color: '#000', paddingStart: widthToDp('3'), fontStyle: 'italic' }}
            />
          </View>
          <View style={{ marginTop: heightToDp('1'), width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('1'), borderWidth: 1 }}>
            <TextInput
              value={Email}
              placeholder='Email'
              onChangeText={(e) => setEmail(e)}
              placeholderTextColor={'#000'}
              style={{ color: '#000', paddingStart: widthToDp('3'), fontStyle: 'italic' }}
            />
          </View>
          <View style={{ marginTop: heightToDp('1'), width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('1'), borderWidth: 1 }}>
            <TextInput
              value={Mobile}
              placeholder='Phone Number'
              onChangeText={(e) => setMobile(e)}
              keyboardType='numeric'
              maxLength={10}
              placeholderTextColor={'#000'}
              style={{ color: '#000', paddingStart: widthToDp('3'), fontStyle: 'italic' }}
            />
          </View>
          <View style={{ marginTop: heightToDp('1'), width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('1'), borderWidth: 1 }}>
            <TextInput
              value={Password}
              onChangeText={(e) => setPassword(e)}
              placeholder='Password'
              placeholderTextColor={'#000'}
              style={{ color: '#000', paddingStart: widthToDp('3'), fontStyle: 'italic' }}
            />
          </View>
          <View style={{ marginTop: heightToDp('1'), width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('1'), borderWidth: 1 }}>
            <TextInput
              value={Address}
              placeholder='Address'
              onChangeText={(e) => setAddress(e)}
              placeholderTextColor={'#000'}
              style={{ color: '#000', paddingStart: widthToDp('3'), fontStyle: 'italic' }}
            />
          </View>
          <View style={{ marginTop: heightToDp('2') }}>
            <TouchableOpacity onPress={() => SignIn()}>
              <View style={{ width: widthToDp('90'), height: heightToDp('7'), justifyContent: 'center', alignItems: 'center', borderRadius: widthToDp('1'), marginTop: heightToDp('1'), backgroundColor: 'rgb(0,130,244)' }}>
                <Text style={{ color: '#fff', fontSize: widthToDp('5'), fontWeight: 'bold' }}>Sign In</Text>
              </View>
            </TouchableOpacity>

          </View>
          <View style={{ marginTop: heightToDp('1') }}>
            <Text style={{ color: '#a9a9a9' }}>By Continuing you agree to our</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: heightToDp('1') }}>
            <TouchableOpacity>
              <View>
                <Text style={{ color: '#000', fontWeight: 'bold' }}>Terms of Service</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{ marginStart: widthToDp('2.5') }}>
                <Text style={{ color: '#000', fontWeight: 'bold' }}>Privacy Policy</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ marginStart: widthToDp('2.5') }}>
                <Text style={{ color: '#000', fontWeight: 'bold' }}>Contant Policy</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}