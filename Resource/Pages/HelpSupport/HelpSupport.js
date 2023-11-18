import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import { BBQLogo, Card1, Card2, HomeLogo, HomeLogo1, MYCartLogo1, SplashLogo } from '../../Utils/Image'
export default function HelpSupport(props) {
  const [press, setPress] = useState(0);
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const [show7, setShow7] = useState(false)
  const [show8, setShow8] = useState(false)
  const [show9, setShow9] = useState(false)
  const [show10, setShow10] = useState(false)
  const [show11, setShow11] = useState(false)
  const [show12, setShow12] = useState(false)

//   const MyCart = () => {
//     props.navigation.navigate('My');
//     setPress(1);
// }
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: heightToDp('4') }}>
          <View style={{ marginStart: widthToDp('5'), flexDirection: 'row' }}>
            <Ionicons name='location-sharp' color={'rgb(252,73,17)'} size={35} />
            <View>
              <Text style={{ color: 'rgb(120,120,120)' }}>Your Location</Text>
              <Text style={{ color: '#000', paddingStart: widthToDp('1') }}>xyz</Text>
            </View>
          </View>
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

        <View style={{ marginStart: widthToDp('6'), marginTop: heightToDp('4') }}>
          <Text style={{ color: '#000', fontSize: widthToDp('5'), fontWeight: 'bold' }}>Help & Support</Text>
        </View>
        <View style={{ height: heightToDp('14') }}>
          <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: heightToDp('4') }}>
              <TouchableOpacity>
                             <View style={{ borderWidth: 1, width: widthToDp('35'), height: heightToDp('5'), marginStart: widthToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
                <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>UBQ Services</Text>
              </View> 
              </TouchableOpacity>
                <TouchableOpacity>
                               <View style={{ borderWidth: 1,height:heightToDp('5'), width: widthToDp('25'), marginStart: widthToDp('2'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
                <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>Careers</Text>
              </View> 
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                          <View style={{ borderWidth: 1, width: widthToDp('45'), marginStart: widthToDp('4'), marginTop: heightToDp('2'), height: heightToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
              <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>Partner Association</Text>
            </View>
            </TouchableOpacity>
             <TouchableOpacity>
                          <View style={{ borderWidth: 1, width: widthToDp('45'), marginStart: widthToDp('4'), marginTop: heightToDp('2'), height: heightToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
              <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>Prices and Payments</Text>
            </View>
             </TouchableOpacity>
<TouchableOpacity>
              <View style={{ borderWidth: 1, width: widthToDp('55'), marginStart: widthToDp('4'), marginTop: heightToDp('2'), height: heightToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
              <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>Offers and Gift Vouchers</Text>
            </View>
</TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
             <TouchableOpacity>
                            <View style={{ borderWidth: 1, width: widthToDp('35'), marginStart: widthToDp('4'), marginTop: heightToDp('2'), height: heightToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
                <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>New Outlets</Text>
              </View>
             </TouchableOpacity>

<TouchableOpacity>
                <View style={{ borderWidth: 1, width: widthToDp('40'), marginStart: widthToDp('2'), marginTop: heightToDp('2'), height: heightToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
                <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>Food and Drinks</Text>
              </View>
</TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                              <View style={{ borderWidth: 1, width: widthToDp('25'), marginStart: widthToDp('4'), marginTop: heightToDp('2'), height: heightToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
                <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>Booking</Text>
              </View>
              </TouchableOpacity>

<TouchableOpacity>
                <View style={{ borderWidth: 1, width: widthToDp('45'), marginStart: widthToDp('2'), marginTop: heightToDp('2'), height: heightToDp('5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(252,73,17)' }}>
                <Text style={{ color: 'rgb(252,73,17)', fontSize: widthToDp('4.3') }}>Loyalty-Smile Club</Text>
              </View>
</TouchableOpacity>

            </View>

          </ScrollView>
        </View>
        <View style={{ marginStart: widthToDp('5'), marginEnd: widthToDp('5') }}>
          <Text
            style={{
              fontSize: widthToDp('4'),
              borderBottomWidth: 1,
              color: "#191970",
            }}
          ></Text>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={{ alignItems: 'center' }}>
              <View>
                <TouchableOpacity activeOpacity={0.9}
                  onPress={() => setShow(!show)}
                >
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('2'), width: widthToDp('90'), height: heightToDp('8'), borderRadius: widthToDp('2'), elevation: 1, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>How do I extend the validity of my gift{'\n'}voucher?</Text>
                    </View>
                    <View>
                      {show == false ? (
                        <AntDesign name='down' size={20} color={'#000'} />
                      ) : (
                        <AntDesign name='up' size={20} color={'#000'} />
                      )}

                    </View>
                  </View>
                </TouchableOpacity>
                {show &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>Please write to us on sales@barbequenation{'\n'}.com</Text>
                  </View>
                }
              </View>
              <View>
                <TouchableOpacity onPress={() => setShow1(!show1)}
                  activeOpacity={1}
                >
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('3'), elevation: 1, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>Do you have gift vouchers/meal coupons?</Text>
                    </View>
                    <View>
                      {show1 == false ? (
                        <AntDesign name='down' size={20} color={'#000'} />
                      ) : (
                        <AntDesign name='up' size={20} color={'#000'} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                {
                  show1 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('3.7'), paddingStart: widthToDp('4') }}>Gift vouchers are available in our app or{'\n'}Website. Please wisit Happiness card section.</Text>
                  </View>
                }
              </View>
              <View>
                <TouchableOpacity onPress={() => setShow2(!show2)}
                  activeOpacity={1}>
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('3'), elevation: 1, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>Are there any corporate discounts Offers?</Text>
                    </View>
                    <View>
                      {show2 == false ? (
                        <AntDesign name='down' size={20} color={'#000'} />
                      ) : (
                        <AntDesign name='up' size={20} color={'#000'} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                {show2 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>For corporate Booking write to us{'\n'}at dine@barbequenation.com or call{'\n'}+918069028721</Text>
                  </View>
                }
              </View>
              <View>
                <TouchableOpacity onPress={() => setShow3(!show3)}
                  activeOpacity={1}
                >
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('8'), borderRadius: widthToDp('3'), elevation: 3, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>How do I make a booking?</Text>
                    </View>
                    <View>
                      {show3 == false ? (
                        <AntDesign name='down' size={20} color={'#000'} />
                      ) : (
                        <AntDesign name='up' size={20} color={'#000'} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                {show3 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>You can book through our App or Website or{'\n'}Call- 8069028721</Text>
                  </View>
                }
              </View>
              <View>
                <TouchableOpacity onPress={() => setShow4(!show4)}
                  activeOpacity={1}>
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('8'), borderRadius: widthToDp('3'), elevation: 3, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>How do I get notified about the booking{'\n'}confirmation?</Text>
                    </View>
                    <View>
                      {show4 == false ? (
                        <AntDesign name='down' size={20} color={'#000'} />
                      ) : (
                        <AntDesign name='up' size={20} color={'#000'} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                {show4 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>You will get confirmation message on your{'\n'}registered mobile number or registered Email{'\n'}ID.Bookings can also be seen in app or web{'\n'}app under the mobile log-in.</Text>
                  </View>
                }
              </View>
              <View>
                <TouchableOpacity onPress={() => setShow5(!show5)}
                  activeOpacity={1}>
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('8'), borderRadius: widthToDp('3'), elevation: 3, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>I had booked the table but I haven't{'\n'}received confirmation?</Text>
                    </View>
                    <View>
                      {show5 == false ? (
                        <AntDesign name='down' size={20} color={'#000'} />
                      ) : (
                        <AntDesign name='up' size={20} color={'#000'} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                {show5 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>You will get confirmation message on your{'\n'}registered mobile number or registered Email{'\n'}ID.Bookings can also be seen in app or web{'\n'}app under the mobile log-in.</Text>
                  </View>
                }
              </View>
              <View>
                <TouchableOpacity onPress={() => setShow6(!show6)}
                  activeOpacity={1}>
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('8'), borderRadius: widthToDp('3'), elevation: 3, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>Will I get the table if I simply walk in?</Text>
                    </View>
                    <View>
                      {show6 == false ? (
                        <AntDesign name='down' size={20} color={'#000'} />
                      ) : (
                        <AntDesign name='up' size={20} color={'#000'} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                {show6 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>You can book through our App or Website or{'\n'}Call- 8069028721</Text>
                  </View>
                }
              </View>
              <View>
                <TouchableOpacity activeOpacity={1} onPress={() => setShow7(!show7)}>
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('8'), borderRadius: widthToDp('3'), elevation: 3, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>How do I cancel a booking?</Text>
                    </View>
                    <View>
                      {show7 == false ? (
                        <AntDesign name='down' size={20} color={'#000'} />
                      ) : (
                        <AntDesign name='up' size={20} color={'#000'} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                {show7 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>You can book through our App or Website or{'\n'}Call- 8069028721</Text>
                  </View>
                }
              </View>
              <View>
                <TouchableOpacity onPress={() => setShow8(!show8)}
                  activeOpacity={1}
                >
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('8'), borderRadius: widthToDp('3'), elevation: 3, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>What are the time slots available?</Text>
                    </View>
                    <View>
                      {show8 == false ? (
                        <AntDesign name='down' size={20} color={'#000'} />
                      ) : (
                        <AntDesign name='up' size={20} color={'#000'} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                {show8 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>You can book through our App or Website or{'\n'}Call- 8069028721</Text>
                  </View>
                }
              </View>
              <View>
                <TouchableOpacity onPress={() => setShow9(!show9)}
                  activeOpacity={1}>
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('8'), borderRadius: widthToDp('3'), elevation: 3, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>Can I get my preferred time slot?</Text>
                    </View>
                    <View>
                      {show9 == false ? (
                        <AntDesign name='down' size={20} color={'#000'} />
                      ) : (
                        <AntDesign name='up' size={20} color={'#000'} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                {show9 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>You can book through our App or Website or{'\n'}Call- 8069028721</Text>
                  </View>
                }
              </View>
              <View>
                <TouchableOpacity onPress={() => setShow10(!show10)}
                  activeOpacity={1}
                >
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('8'), borderRadius: widthToDp('3'), elevation: 3, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>What are the prices for buffet in Barbeque{'\n'}Nation?</Text>
                    </View>
                    <View>
                      {show10 == false ? (
                        <AntDesign name='down' size={20} color={'#000'} />
                      ) : (
                        <AntDesign name='up' size={20} color={'#000'} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                {show10 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>You can book through our App or Website or{'\n'}Call- 8069028721</Text>
                  </View>
                }
              </View>

              <View>
                <TouchableOpacity onPress={() => setShow11(!show11)}
                  activeOpacity={1}>
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('8'), borderRadius: widthToDp('3'), elevation: 3, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>I want to know the food menu details.</Text>
                    </View>
                    <View>
                      {show11 == false ? (
                        <AntDesign name='down' size={20} color={'#000'} />
                      ) : (
                        <AntDesign name='up' size={20} color={'#000'} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                {show11 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>You can book through our App or Website or{'\n'}Call- 8069028721</Text>
                  </View>
                }
              </View>

              <View style={{ marginBottom: heightToDp('1') }}>
                <TouchableOpacity onPress={() => setShow12(!show12)}
                  activeOpacity={1}
                >
                  <View style={{ flexDirection: 'row', marginTop: heightToDp('3'), width: widthToDp('90'), height: heightToDp('8'), borderRadius: widthToDp('3'), elevation: 3, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4'), width: widthToDp('75') }}>
                      <Text style={{ color: '#000' }}>Do you serve alcohol?</Text>
                    </View>
                    <View>
                      {show12 == false ? (
                        <AntDesign name='down' size={20} color={'#000'} />
                      ) : (
                        <AntDesign name='up' size={20} color={'#000'} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                {show12 &&
                  <View style={{ height: heightToDp('10'), elevation: 0.5, backgroundColor: '#fff', bottom: heightToDp('1'), borderBottomStartRadius: widthToDp('3'), borderBottomEndRadius: widthToDp('3'), justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: widthToDp('4'), paddingStart: widthToDp('4') }}>You can book through our App or Website or{'\n'}Call- 8069028721</Text>
                  </View>
                }
              </View>

            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={{ height: heightToDp('8'), flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around', elevation: 5, alignItems: 'center' }}>
        <View style={{ bottom: heightToDp('10') }}>
          <TouchableOpacity onPress={() => props.navigation.replace('Home_Screen')}>
            <View style={{ height: heightToDp('8.5'), width: widthToDp('17.5'), borderRadius: widthToDp('15'), marginStart: widthToDp('5'), marginBottom: heightToDp('1'), backgroundColor: 'rgb(255,130,50)', alignItems: 'center', justifyContent: 'center' }}>
            <AntDesign name='arrowleft' color={'#fff'} size={25} />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={{ alignItems: 'center', right: widthToDp('26') }}>
            {press == 0 ?
              <Image source={HomeLogo1} style={{ height: heightToDp('3.4'), width: widthToDp('10'), color: 'rgb(252,73,17)' }} /> :
              <Image source={HomeLogo} style={{ height: heightToDp('3.4'), width: widthToDp('10'), color: 'rgb(252,73,17)' }} />}

            <View>
              <Text style={{ color: press == 0 ? 'rgb(252,73,17)' : 'rgb(111,111,111)' }}>Reservation</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => MyCart()}>
          <View style={{ alignItems: 'center', right: widthToDp('18') }}>
            <FontAwesome5 name='shopping-bag' size={23} style={{ color: press == 1 ? 'rgb(252,73,17)' : 'rgb(111,111,111)' }} />
            <View>
              <Text style={{ color: press == 1 ? 'rgb(252,73,17)' : 'rgb(111,111,111)' }}>My Cart</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignItems: 'center', right: widthToDp('5') }}>
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