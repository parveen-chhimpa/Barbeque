import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, BackHandler } from 'react-native'
import React, { useState,useEffect} from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import Swiper from 'react-native-swiper'
import { BBQLogo, Card1, Card2, HomeLogo, HomeLogo1, MYCartLogo1, SplashLogo } from '../../Utils/Image'
export default function Notification(props) {
    const [select, setSelect] = useState(0);
    const [press, setPress] = useState(0);

    const Bell = () => {
        setSelect(0);
    }
    const MyCart = () => {
        props.navigation.navigate('My');
        setPress(1);
    }

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
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar backgroundColor={'#fff'}
                    barStyle={'dark-content'}
                />
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
                            <TouchableOpacity>
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
                            <TouchableOpacity onPress={() =>props.navigation.replace('Home_Screen')}>
                                <View style={{ height: heightToDp('8.5'), width: widthToDp('17'), borderRadius: widthToDp('15'), marginStart: widthToDp('5'), marginBottom: heightToDp('4'), backgroundColor: 'rgb(255,130,50)', alignItems: 'center', justifyContent: 'center' }}>
                                    <AntDesign name='arrowleft' color={'#fff'} size={25} />
                                </View>
                            </TouchableOpacity>

                        </View>
                    </>

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