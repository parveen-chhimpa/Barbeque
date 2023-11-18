import { View, Text, SafeAreaView, Image, TouchableOpacity, Linking, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import { Card1, RDLogo } from '../../Utils/Image'
import Swiper from 'react-native-swiper'
export default function Total(props) {

    const Get = () => {
        Linking.openURL('https://g.page/Noor-Mahal-osny?share')
    }

    const [isData, setIsData] = useState(props.route.params.Data);
    const [cart, setCart] = useState();
    const [istotalprice, settotalprice] = useState(0);
    const [istotalItem, settotalItem] = useState(1);
    const Increment = (item, index) => {//
        console.log(item, '---', index);
        if (item.quantity >= 1) {
          const newArr = isData.map((obj, i) => {
            if (index == i) {
              return {
                ...obj,
                quantity: parseInt(isData[index].quantity) + 1,
              };
            }
            return obj;
          });
          console.log(newArr,'-----------');
          setIsData(newArr);
          settotalItem(istotalItem + 1);
          settotalprice(istotalprice + parseInt(item.Price));
        }
      };
    
      //-------------------------------------------------Remove quantity---------------------------------
    
      const RemoveQuantity = (item, index) => {
        if (item.quantity > 1) {
          const newArr = isData.map((obj, i) => {
            if (index == i) {
              return {...obj, quantity: parseInt(isData[index].quantity) - 1};
            }
            return obj;
          });
          setIsData(newArr);
          console.log(newArr,'=============')
          settotalItem(istotalItem - 1);
          settotalprice(istotalprice - parseInt(item.Price));
        }
      };
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <View style={{ marginTop: heightToDp('3'), marginStart: widthToDp('1') }}>
                            <AntDesign name='left' size={30} color={'#000'} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', marginTop: heightToDp('2') }}>
                    <View style={{ width: widthToDp('95'), backgroundColor: '#fff', elevation: 5, height: heightToDp('100') }}>
                        <ScrollView>
                            <View>
                                <View style={{ marginTop: heightToDp('1'), marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Your Order</Text>

                                </View>
                               <FlatList 
                               data={isData}
                               renderItem={({item,index})=>{
                                return(
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
                                            <View style={{ marginTop: heightToDp('2'), marginStart: widthToDp('2'), flexDirection: 'row' }}>
                                                <View style={{ marginTop: heightToDp('0.5') }}>
                                                    <Image source={RDLogo} style={{ height: heightToDp('2'), width: widthToDp('4') }} />
                                                </View>
                                                <View style={{ marginStart: widthToDp('2') }}>
                                                    <Text style={{ color: '#000', fontSize: widthToDp('3.8'), fontWeight: 'bold' }}>{item.name}</Text>
                                                    <View>
                                                        <Text style={{ color: '#000', fontSize: widthToDp('3.8'), paddingTop: heightToDp('0.5'), fontWeight: 'bold' }}>₹{item.Price}</Text>
                                                    </View>

                                                    <View>
                                                        <Text style={{ color: '#a9a9a9' }}>Small [7 inches]</Text>
                                                    </View>
                                                </View>

                                            </View>
                                            <View>
                                                <View style={{ marginTop: heightToDp('2'), marginEnd: widthToDp('3'), backgroundColor: 'rgb(255,246,247)' }}>
                                                    <View style={{ borderWidth: 1, height: heightToDp('4'), width: widthToDp('24'), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', borderRadius: widthToDp('2'), borderColor: 'rgb(236,85,94)' }}>
                                                        <View style={{ bottom: heightToDp('1') }}>
                                                            <TouchableOpacity onPress={()=>RemoveQuantity(item,index)}>
                                                                <Text style={{ fontSize: widthToDp('8'), color: 'rgb(236,85,94)' }}>-</Text>
                                                            </TouchableOpacity>
                                                        </View>


                                                        <Text style={{ fontSize: widthToDp('4.5'), color: '#000' }}>{item.quantity}</Text>
                                                        <View >
                                                            <TouchableOpacity onPress={()=>Increment(item,index)}>
                                                                <Text style={{ fontSize: widthToDp('4'), color: 'rgb(236,85,94)' }}>+</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{ marginStart: widthToDp('15'), marginTop: heightToDp('0.5') }}>
                                                    <Text style={{ color: '#000', fontSize: widthToDp('4'), fontWeight: 'bold' }}>₹{item.Price}</Text>
                                                </View>
                                            </View>
                                        </View>
                                )
                               }}
                               />
                            </View>
                            <View>
                                <View style={{ marginTop: heightToDp('2'), marginStart: widthToDp('4') }}>
                                    <Text style={{ color: '#a9a9a9' }}>COMPLETE YOUR MEAL WITH</Text>
                                </View>
                                <View style={{ width: widthToDp('42'), height: heightToDp('23'), marginStart: widthToDp('4'), marginTop: heightToDp('2'), borderRadius: widthToDp('2') }}>
                                    <Image source={Card1} style={{ height: heightToDp('10'), width: widthToDp('41.2') }} />
                                    <View style={{ marginStart: widthToDp('2') }}>
                                        <Text style={{ color: '#a9a9a9' }}>Farm Fresh Pizza</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: heightToDp('4') }}>
                                        <View style={{ marginTop: heightToDp('1.5'), marginStart: widthToDp('2') }}>
                                            <Text style={{ color: '#000' }}>₹80</Text>
                                        </View>
                                        <View style={{ borderWidth: 1, height: heightToDp('4'), marginTop: heightToDp('1'), width: widthToDp('18'), marginEnd: widthToDp('2'), justifyContent: 'center', alignItems: 'center', borderRadius: widthToDp('2'), borderColor: 'rgb(236,85,94)', backgroundColor: 'rgb(255,246,247)' }}>
                                            <Text style={{ color: 'rgb(236,85,94)' }}>ADD</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                                            <View style={{flexDirection:'row',marginTop:heightToDp('4'),marginStart:widthToDp('4'),justifyContent:'space-between',marginBottom:heightToDp('40')}}>
                        <View style={{justifyContent:'center'}}>
                            <Text style={{color:'#000'}}>Add more items</Text>
                        </View>
                        <View style={{justifyContent:'center'}}>
                        <AntDesign  name='right' size={20} color={'#000'} style={{marginEnd:widthToDp('5')}} />
                        </View>
                      </View>
                    </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
            <View style={{ height: heightToDp('25'), backgroundColor: '#fff', elevation: 5, borderTopStartRadius: widthToDp('6'), borderTopEndRadius: widthToDp('6') }}>
                <View style={{ marginTop: heightToDp('1'), height: heightToDp('5'), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginStart: widthToDp('4') }}>
                            <FontAwesome5 name='map-marker-alt' size={20} color={'rgb(236,85,94)'} />
                        </View>
                        <View style={{ marginStart: widthToDp('2') }}>
                            <Text style={{ color: '#000', fontSize: widthToDp('4') }}>Pickup Address</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                        <TouchableOpacity onPress={() => Get()}>
                            <Text style={{ color: '#000', fontSize: widthToDp('4') }}>Get Diractions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: heightToDp('2') }}>
                    <Text style={{ color: '#a9a9a9', textAlign: 'center' }}>32 Avenue du Maréchal de Lattre de{'\n'}Tassigny 95300 Pontoise</Text>
                </View>
                <View style={{ borderWidth: 1, marginTop: heightToDp('2'), height: heightToDp('12'), alignItems: 'center' }}>
                <TouchableOpacity>
                    <View style={{ marginTop: heightToDp('1'), width: widthToDp('95'), height: heightToDp('8'), backgroundColor: 'rgb(236,85,94)', flexDirection: 'row', justifyContent: 'space-between', borderRadius: widthToDp('2') }}>
                                                <View style={{ justifyContent: 'center', marginStart: widthToDp('4') }}>
                            <View>
                                <Text style={{ color: '#fff', fontSize: widthToDp('4.5') }}>₹{isData.reduce((total, item)=>total+(item.Price*item.quantity),0)}</Text>
                                <Text style={{ color: '#fff', fontSize: widthToDp('4.5') }}>Total</Text>
                            </View>
                        </View>

                        <View style={{ marginEnd: widthToDp('8'), flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{ color: '#fff', fontSize: widthToDp('5') }}>Take Away</Text>
                            </View>
                            <View>
                                <AntDesign name='caretright' color={'#fff'} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>


            </View>
        </>

    )
}