import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView,Modal,Pressable, TextInput, FlatList} from 'react-native'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import Swiper from 'react-native-swiper'
import { BBQLogo, Card1, Card2, HomeLogo, HomeLogo1, MYCartLogo1, SplashLogo } from '../../Utils/Image'
import { BottomSheet } from 'react-native-btr'
import CalendarPicker from 'react-native-calendar-picker'; 
export default function HomeScreen(props) {
    const data =[
        {id:1,name:'Agra'},
        {id:2,name:'Ahmedabad'},
        {id:3,name:'Ambala'},
        {id:4,name:'Amravati'},
        {id:5,name:'Amritsar'},
        {id:6,name:'Anand'},
        {id:7,name:'Asansol'},
        {id:8,name:'Aurangabad'},
    ]
    const [select, setSelect] = useState(0);
    const [press, setPress] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [isData,setIsData] = useState(data);
    const [visible, setVisible] = useState(false);
    const [open,setOpen] = useState(false);
    const [selectedDate,setSelectedDate] = useState(null)

    const Bell = () => {
        setSelect(1);
    }
    const MyCart = () => {
        props.navigation.navigate('My');
        setPress(1);
    }

    const Select = ()=>{
        setModalVisible(true)
    }
    const Search = (input)=>{
        if(input){
          const newData = isData.filter(item=>{
          const itemData = item.name ? item.name.toUpperCase():''.toUpperCase();
          const inputData = input.toUpperCase();
          return itemData.indexOf(inputData) > -1;
          });
          setIsData(newData);
        }else{
          setIsData(data);
        }
      }
      const toggleBottomNavigationView = () => {
        setVisible(!visible);
      };
      const onDateChange = (date)=>{
        setSelectedDate(date);
      }
      const Book = ()=>{
        setOpen(!open);
      }

      const startDate = selectedDate ? selectedDate.toString() : ''
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar backgroundColor={'#fff'}
                    barStyle={'dark-content'}
                />
                <View style={{ flexDirection: 'row-reverse', marginTop: heightToDp('4') }}>
                    <View style={{ flexDirection: 'row', marginEnd: widthToDp('4'), marginTop: heightToDp('1') }}>
                        <View style={{ marginEnd: widthToDp('8'), justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => Bell()}>
                                <Fontisto name='bell-alt' color={'rgb(252,73,17)'} size={22} />
                            </TouchableOpacity>

                        </View>

                        <View style={{ justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                                <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: heightToDp('4'), marginStart: widthToDp('6'), justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ color: 'rgb(107,107,107)', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Hello,Guest !!!</Text>
                    </View>
                    <View style={{ height: heightToDp('3.5'), marginEnd: widthToDp('8'), width: widthToDp('43'), borderRadius: widthToDp('2'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', elevation: 2 }}>
                        <Text style={{ color: 'rgb(207,120,75)', fontSize: widthToDp('3.8') }}>Smiles Coin 0</Text>
                    </View>
                </View>

                {select == 0 ? (
                    <ScrollView>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginTop: heightToDp('2'), height: heightToDp('25'), width: widthToDp('90'), borderRadius: widthToDp('3') }}>
                                <Image source={BBQLogo} style={{ height: heightToDp('25'), width: widthToDp('90') }} />
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={{ width: widthToDp('93'), height: heightToDp('16'), marginTop: heightToDp('2'), backgroundColor: 'rgb(254,240,227)', borderRadius: widthToDp('4') }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('5'), flexDirection: 'row' }}>
                                            <Text style={{ color: '#a9a9a9' }}>Reserve a Table at </Text>
                                           <TouchableOpacity activeOpacity={1}
                                            onPress={()=>Select()}
                                           >
                                           <Text style={{ color: 'rgb(252,73,17)', fontWeight: 'bold' }}> Select Location</Text>
                                           </TouchableOpacity>
                                            
                                            <View style={{ justifyContent: 'center', marginStart: widthToDp('18') }}>
                                                <AntDesign name='exclamationcircleo' color={'#a9a9a9'} />
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: heightToDp('4') }}>
                                        <TouchableOpacity activeOpacity={1}
                                        onPress={()=>Select()}
                                        >
                                            <View style={{ height: heightToDp('4'), width: widthToDp('20'), backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: 'rgb(252,73,17)' }}>Today</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity activeOpacity={1}
                                         onPress={()=>Select()}
                                        >
                                            <View style={{ height: heightToDp('4'), width: widthToDp('25'), backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: 'rgb(252,73,17)' }}>Tommorrow</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity activeOpacity={1}
                                         onPress={()=>toggleBottomNavigationView()}
                                        >
                                            <View style={{ height: heightToDp('4'), width: widthToDp('25'), backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: 'rgb(252,73,17)' }}>Pick a date</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                 
                                 <BottomSheet
                                 visible={visible}
                                 onBackButtonPress={toggleBottomNavigationView}
                                 >
                                  <View style={{height:heightToDp('60'),backgroundColor:'#fff'}}>
                                    <View style={{marginTop:heightToDp('2'),marginStart:widthToDp('5')}}>
                                        <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Please Select Date</Text>
                                    </View>
                                    <View style={{marginTop:heightToDp('4')}}>
                                     <CalendarPicker 
                                     onDateChange={onDateChange}
                                     minDate={'2022-11-1'}
                                     />  
                                    </View>

                                     <View style={{alignItems:'center'}}>
                                   <TouchableOpacity onPress={()=>Book()}>
                                     <View style={{alignItems:'center',marginTop:heightToDp('4'),width:widthToDp('70'),height:heightToDp('6'),borderRadius:widthToDp('15'),backgroundColor:'rgb(252,73,17)',justifyContent:'center'}}>
                                        <Text style={{fontSize:widthToDp('5.5'),color:'#fff'}}>Book</Text>
                                     </View>
                                   </TouchableOpacity>
  
                                     </View>
                                  </View>
                                  <BottomSheet
                                  visible={open}
                                   onBackButtonPress={Book}
                                  >
<View style={{flex:1,backgroundColor:'#fff'}}>
   <View style={{marginStart:widthToDp('10'),marginTop:heightToDp('4')}}>
   <Text style={{color:'#000'}}>Reserving a table at</Text>
   </View>
   <View style={{borderWidth:1,height:heightToDp('8'),marginTop:heightToDp('3')}}>

</View>
<ScrollView>
   <View style={{flexDirection:'row'}}>
    <View style={{marginStart:widthToDp('10'),marginTop:heightToDp('4')}}>
           <View style={{alignItems:'center'}}>
        <Text style={{color:'#000',fontSize:widthToDp('5'),fontWeight:'bold'}}>Date</Text>
    </View>  
     <View style={{marginTop:heightToDp('2'),alignItems:'center'}}>
        <Text style={{color:'#000'}}>Today</Text>
     </View>
     <View style={{marginTop:heightToDp('6'),alignItems:'center'}}>
        <Text style={{color:'#000'}}>Tomorrow</Text>
     </View>
     <TouchableOpacity>
             <View style={{width:widthToDp('35'),marginTop:heightToDp('2'),height:heightToDp('4.5'),borderRadius:widthToDp('15'),backgroundColor:'rgb(250,100,3)',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
       <Text style={{color:'#fff'}}>Pick a date</Text>
       <View style={{marginStart:widthToDp('2')}}>
           <Entypo name='calendar' size={20} color={'#fff'} />
       </View>
     </View>
     </TouchableOpacity>

    </View>
    <View style={{marginTop:heightToDp('4'),marginStart:widthToDp('8')}}>
        <View>
    <Text style={{color:'#000'}}>Available Time Slots</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>12:00 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>12:15 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>12:30 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>12:45 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>01:00 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>01:15 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>01:30 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>01:45 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>02:00 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>02:15 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>02:30 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>02:45 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>03:00 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>03:15 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>03:30 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>03:45 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>04:00 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>04:15 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>04:30 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>04:45 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>05:00 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>05:15 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>05:30 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>05:45 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>06:00 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>06:15 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>06:30 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>06:45 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>07:00 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>07:15 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>07:30 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>07:45 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>08:00 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>08:15 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>08:30 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>08:45 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>09:00 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>09:15 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>09:30 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>09:45 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>10:00 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>10:15 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>10:30 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>10:45 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>11:00 P.M</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('2')}}>
    <Text style={{color:'#000'}}>11:15 P.M</Text>
</View>
    </View>

</View> 
</ScrollView>

</View>
                                  </BottomSheet>
                                 </BottomSheet>
                                </View>
                            </TouchableOpacity>

                        </View>
                        <View style={{ marginStart: widthToDp('4'), marginTop: heightToDp('2') }}>
                            <Text style={{ color: '#000' }}>Happiness Card</Text>
                        </View>
                        <ScrollView horizontal={true}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginStart: widthToDp('3'), marginTop: heightToDp('2') }}>
                                <View style={{ height: heightToDp('26'), width: widthToDp('95') }}>
                                    <Image source={Card2} style={{ height: heightToDp('18'), width: widthToDp('94') }} />
                                    <View style={{ height: heightToDp('7'), flexDirection: 'row', backgroundColor: '#fff', elevation: 5, borderRadius: widthToDp('2') }}>
                                        <View style={{ marginStart: widthToDp('3'), marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#a9a9a9' }}>Happiness Gift Card- Treat for...</Text>
                                            <Text style={{ color: '#a9a9a9', fontSize: widthToDp('4.7') }}>₹3,600</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center' }}>
                                            <View style={{ backgroundColor: 'rgb(252,73,17)', justifyContent: 'center', marginStart: widthToDp('10'), width: widthToDp('23'), alignItems: 'center', height: heightToDp('4'), borderRadius: widthToDp('1.5'), elevation: 5 }}>
                                                <Text style={{ color: '#fff' }}>Buy Now!</Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                <View style={{ height: heightToDp('26'), width: widthToDp('95'), marginEnd: widthToDp('2'), marginStart: widthToDp('2') }}>
                                    <Image source={Card2} style={{ height: heightToDp('18'), width: widthToDp('94') }} />
                                    <View style={{ height: heightToDp('7'), flexDirection: 'row', backgroundColor: '#fff', elevation: 5, borderRadius: widthToDp('2') }}>
                                        <View style={{ marginStart: widthToDp('3'), marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#a9a9a9' }}>Happiness Gift Card- Treat for...</Text>
                                            <Text style={{ color: '#a9a9a9', fontSize: widthToDp('4.7') }}>₹1,800</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center' }}>
                                            <View style={{ backgroundColor: 'rgb(252,73,17)', justifyContent: 'center', marginStart: widthToDp('10'), width: widthToDp('23'), alignItems: 'center', height: heightToDp('4'), borderRadius: widthToDp('1.5'), elevation: 5 }}>
                                                <Text style={{ color: '#fff' }}>Buy Now!</Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                <View style={{ height: heightToDp('26'), width: widthToDp('95'), marginEnd: widthToDp('2'), marginStart: widthToDp('2') }}>
                                    <Image source={Card1} style={{ height: heightToDp('18'), width: widthToDp('94') }} />
                                    <View style={{ height: heightToDp('7'), flexDirection: 'row', backgroundColor: '#fff', elevation: 5, borderRadius: widthToDp('2'), justifyContent: 'space-between' }}>
                                        <View style={{ marginStart: widthToDp('3'), marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#a9a9a9' }}>Happiness Gift Card</Text>
                                            <Text style={{ color: '#a9a9a9', fontSize: widthToDp('4.7') }}>₹10,000</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center' }}>
                                            <View style={{ backgroundColor: 'rgb(252,73,17)', justifyContent: 'center', width: widthToDp('23'), alignItems: 'center', height: heightToDp('4'), borderRadius: widthToDp('1.5'), elevation: 5, marginEnd: widthToDp('5') }}>
                                                <Text style={{ color: '#fff' }}>Buy Now!</Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                <View style={{ height: heightToDp('26'), width: widthToDp('95'), marginEnd: widthToDp('2'), marginStart: widthToDp('2') }}>
                                    <Image source={Card1} style={{ height: heightToDp('18'), width: widthToDp('94') }} />
                                    <View style={{ height: heightToDp('7'), flexDirection: 'row', backgroundColor: '#fff', elevation: 5, borderRadius: widthToDp('2'), justifyContent: 'space-between' }}>
                                        <View style={{ marginStart: widthToDp('3'), marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#a9a9a9' }}>Happiness Gift Card</Text>
                                            <Text style={{ color: '#a9a9a9', fontSize: widthToDp('4.7') }}>₹5,000</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center' }}>
                                            <View style={{ backgroundColor: 'rgb(252,73,17)', justifyContent: 'center', width: widthToDp('23'), alignItems: 'center', height: heightToDp('4'), borderRadius: widthToDp('1.5'), elevation: 5, marginEnd: widthToDp('5') }}>
                                                <Text style={{ color: '#fff' }}>Buy Now!</Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                <View style={{ height: heightToDp('26'), width: widthToDp('95'), marginEnd: widthToDp('2'), marginStart: widthToDp('2') }}>
                                    <Image source={Card1} style={{ height: heightToDp('18'), width: widthToDp('94') }} />
                                    <View style={{ height: heightToDp('7'), flexDirection: 'row', backgroundColor: '#fff', elevation: 5, borderRadius: widthToDp('2'), justifyContent: 'space-between' }}>
                                        <View style={{ marginStart: widthToDp('3'), marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#a9a9a9' }}>Happiness Gift Card</Text>
                                            <Text style={{ color: '#a9a9a9', fontSize: widthToDp('4.7') }}>₹2,500</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center' }}>
                                            <View style={{ backgroundColor: 'rgb(252,73,17)', justifyContent: 'center', width: widthToDp('23'), alignItems: 'center', height: heightToDp('4'), borderRadius: widthToDp('1.5'), elevation: 5, marginEnd: widthToDp('5') }}>
                                                <Text style={{ color: '#fff' }}>Buy Now!</Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                <View style={{ height: heightToDp('26'), width: widthToDp('95'), marginEnd: widthToDp('2'), marginStart: widthToDp('2') }}>
                                    <Image source={Card1} style={{ height: heightToDp('18'), width: widthToDp('94') }} />
                                    <View style={{ height: heightToDp('7'), flexDirection: 'row', backgroundColor: '#fff', elevation: 5, borderRadius: widthToDp('2'), justifyContent: 'space-between' }}>
                                        <View style={{ marginStart: widthToDp('3'), marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#a9a9a9' }}>Happiness Gift Card</Text>
                                            <Text style={{ color: '#a9a9a9', fontSize: widthToDp('4.7') }}>₹1,000</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center' }}>
                                            <View style={{ backgroundColor: 'rgb(252,73,17)', justifyContent: 'center', width: widthToDp('23'), alignItems: 'center', height: heightToDp('4'), borderRadius: widthToDp('1.5'), elevation: 5, marginEnd: widthToDp('5') }}>
                                                <Text style={{ color: '#fff' }}>Buy Now!</Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                            </View>

                        </ScrollView>


                    </ScrollView>

                ) : (
                    <>
                        <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('6') }}>
                            <Text style={{ color: '#000', fontSize: widthToDp('4.8'), fontWeight: 'bold' }}>Notifications</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View>
                                <Text style={{ color: '#a9a9a9', fontSize: widthToDp('6'), textAlign: 'center', paddingTop: heightToDp('5') }}>You are up to date{'\n'}No new notifications</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => setSelect(0)}>
                                <View style={{ height: heightToDp('8.5'), width: widthToDp('17'), borderRadius: widthToDp('15'), marginStart: widthToDp('5'), marginBottom: heightToDp('4'), backgroundColor: 'rgb(255,130,50)', alignItems: 'center', justifyContent: 'center' }}>
                                    <AntDesign name='arrowleft' color={'#fff'} size={25} />
                                </View>
                            </TouchableOpacity>

                        </View>
                    </>

                )}

            </SafeAreaView>
            <View style={{ height: heightToDp('8'), flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around', elevation: 5, alignItems: 'center' }}>
                <TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        {press == 0 ?
                            <Image source={HomeLogo1} style={{ height: heightToDp('3.4'), width: widthToDp('10'), color: 'rgb(252,73,17)' }} /> :
                            <Image source={HomeLogo} style={{ height: heightToDp('3.4'), width: widthToDp('10'), color: 'rgb(252,73,17)' }} />}

                        <View>
                            <Text style={{ color: press == 0 ? 'rgb(252,73,17)' : 'rgb(111,111,111)' }}>Reservation</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => MyCart()}>
                    <View style={{ alignItems: 'center' }}>
                        <FontAwesome5 name='shopping-bag' size={23} style={{ color: press == 1 ? 'rgb(252,73,17)' : 'rgb(111,111,111)' }} />
                        <View>
                            <Text style={{ color: press == 1 ? 'rgb(252,73,17)' : 'rgb(111,111,111)' }}>My Cart</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        <Entypo name='home' color={'rgb(111,111,111)'} size={24} />
                        <View>
                            <Text style={{ color: 'rgb(111,111,111)' }}>Delivery</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </>
    )
}