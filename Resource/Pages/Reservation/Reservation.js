import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Alert,Linking } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import Styles from './ReservationStyle'
import { useState } from 'react'
export default function Reservation(props) {

  const Cancel = () => {
   if(true){
          Alert.alert('Reservation','Reservation cancelled successfully. Notification sent to customer.', [
        {
          text: 'Ok',
          onPress: () => console.log('Ok Presed')
        }
      ])
   }
   else{
    Alert.alert('Reservation','Reservation cancellation failed. Please contact to customer manually and inform this error to owner', [
      {
        text: 'Ok',
        onPress: () => console.log('Ok Presed')
      }
    ])
   }
  }
 

const data=[
  {id:1,
  code:'#592567',
  name:'Parveen',
  Date:'21 jun 2021',
  Time:'4:44PM',
  Guest:4
  },
  {id:2,
  code:'#595656',
  name:'Gaurav',
  Date:'21 Aug 2021',
  Time:'5:44PM',
  Guest:7
  }
]

const [Data,setData] = useState(data)

  const Dialer = (phone)=>{
    let phoneNumber = '+918987896798';
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phoneNumber}`;
    }
    else  {
      phoneNumber = `tel:${phoneNumber}`;
    }
    Linking.openURL(phoneNumber)
  }
  return (
    <>

    <SafeAreaView style={Styles.container}>
      <View style={Styles.TopView}>
        <View style={Styles.TopTextView}>
          <Text style={Styles.TopText}>Reservation</Text>
        </View>
        <View style={Styles.Icon1}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()} >
                            <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
                        </TouchableOpacity>
        </View>
      </View>
     {Data.map((item)=>{
      return(
        <View style={Styles.ChildView}>
        <View>
          <View style={Styles.Code}>
            <Text style={Styles.CodeText}>{item.code}</Text>
          </View>
          <View style={Styles.NameCallView}>
            <View style={Styles.Name}>
              <Text style={Styles.NameText}>{item.name}</Text>
            </View>
          </View>
          <View style={Styles.Date}>
            <Text style={Styles.DateText}>Date:{item.Date}</Text>
          </View>
          <View style={Styles.Time}>
            <Text style={Styles.TimeText}>Time:{item.Time}</Text>
          </View>
          <View style={Styles.Time}>
            <Text style={Styles.Guest}>Number of Guest:{item.Guest}</Text>
          </View>
          <View style={Styles.Time}>
            <Text style={Styles.Guest}>Spacial Instruction</Text>
          </View>
          <View style={Styles.TableCancel}>
            <TouchableOpacity onPress={()=>Cancel()}>
              <View style={Styles.Cancel}>
                <Text style={Styles.CancelText}>Cancel</Text>
              </View>
            </TouchableOpacity>

            <View style={Styles.Table}>
              <Text style={Styles.TableText}>Table Confirmed</Text>
              <View style={Styles.Icon}>
                <AntDesign name='checkcircleo' size={20} color={'rgb(0,155,68)'} />
              </View>
            </View>
          </View>
          <View style={{ marginTop: heightToDp('4'), alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: "#a9a9a9",
                width: widthToDp('85')
              }}
            ></Text>
          </View>
        </View>
      </View>
      )

     })}

    </SafeAreaView>
    <View style={{height:heightToDp('0.1')}}>
        <View style={{ bottom: heightToDp('10'),width:widthToDp('25') }}>
          <TouchableOpacity onPress={() => props.navigation.replace('Menu')}>
            <View style={{ height: heightToDp('8.5'), width: widthToDp('17.5'), borderRadius: widthToDp('15'), marginStart: widthToDp('5'), marginBottom: heightToDp('1'), backgroundColor: 'rgb(255,130,50)', alignItems: 'center', justifyContent: 'center' }}>
            <AntDesign name='arrowleft' color={'#fff'} size={25} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}