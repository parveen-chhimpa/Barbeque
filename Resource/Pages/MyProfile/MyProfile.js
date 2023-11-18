import { View, Text, SafeAreaView, TouchableOpacity, Switch, ImageBackground, ToastAndroid, Image, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import { BottomSheet } from 'react-native-btr'
import { Camera, Gallery } from '../../Utils/Image'
import { Avatar } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';
export default function MyProfile(props) {
    const [isEnabled, setIsEnabled] = useState(true);
    const [Pic, setPic] = useState('');
    const [visible, setVisible] = useState(false);
    const [select, setSelect] = useState(0);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [mode, setMode] = useState('date');
    const [text, setText] = useState('add birthday');
    const [text1, setText1] = useState('add anniversary');
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const edit = () => {
        setSelect(!select);
    }

    const AddImage = () => {
        setVisible(!visible);
    }
    const setToastmsg = msg => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER)
    }
    const Upload = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                setToastmsg('Cancelled Image Selection');
            }
            else if (response.errorCode == 'permission') {
                setToastmsg('permission not satisfied');
            }
            else if (response.errorCode == 'others') {
                setToastmsg(response.errorMessage);
            }
            else if (response.assets[0].fileSize > 2097152) {
                Alert.alert(
                    'Maximum image Size Expanded',
                    'Please choose image under 2 MB',
                    [{ text: 'OK' }]
                )
            }
            else {
                setPic(response.assets[0].base64);
            }
        });
    }
    const CameraImg = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true
        };
        launchCamera(options, response => {
            if (response.didCancel) {
                setToastmsg('Cancelled Image Selection');
            }
            else if (response.errorCode == 'permission') {
                setToastmsg('permission not satisfied');
            }
            else if (response.errorCode == 'others') {
                setToastmsg(response.errorMessage);
            }
            else {
                setPic(response.assets[0].base64);
            }
        });
    }

    const onChange = (event, selectedDate) => {

        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);

        let tempdate = new Date(currentDate);
        let fDate = tempdate.getDate() + '/' + (tempdate.getMonth() + 1) + '/' + tempdate.getFullYear();
        setText(fDate);
    };
    const onChange1 = (event, selectedDate) => {

        const currentDate = selectedDate || date;
        setShow1(false);
        setDate(currentDate);

        let tempdate = new Date(currentDate);
        let fDate = tempdate.getDate() + '/' + (tempdate.getMonth() + 1) + '/' + tempdate.getFullYear();
        setText1(fDate);
    };

    const showMode = () => {
        setShow(true);
    };
    const showMode1 = () => {
        setShow1(true);
    };

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: heightToDp('4'), marginEnd: widthToDp('6') }}>
                    <View style={{ marginStart: widthToDp('6') }}>
                        <Text style={{ color: '#000', fontSize: widthToDp('5'), fontWeight: 'bold' }}>Parveen's Profile</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => props.navigation.openDrawer()} >
                            <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ flexDirection: 'row-reverse' }}>

                    <View style={{ flexDirection: 'row', top: heightToDp('7'), marginEnd: widthToDp('5') }}>
                        <View>
                            <EvilIcons name='pencil' size={30} color={'#000'} />
                        </View>
                        <TouchableOpacity onPress={() => edit()}>
                            <View style={{ marginStart: widthToDp('4') }}>
                                {select == 0 ? <Text style={{ color: '#000' }}>edit</Text> :
                                    <Text style={{ color: '#000' }}>Update</Text>}
                            </View>
                        </TouchableOpacity>


                    </View>

                </View>
                <View style={{ alignItems: 'center' }}>

                    <View style={{ borderWidth: 1, width: widthToDp('100'), height: heightToDp('20'), alignItems: 'center', backgroundColor: 'rgb(54,63,68)', marginTop: heightToDp('10') }}>
                        <View style={{ bottom: heightToDp('10'), justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar.Image
                                size={150}
                                source={{ uri: 'data:image/png;base64' + Pic }}
                            />
                            <TouchableOpacity onPress={() => AddImage()}>
                                <View style={{ bottom: heightToDp('4') }}>
                                    <AntDesign name='camera' size={20} color={'#000'} />
                                </View>
                            </TouchableOpacity>

                            <View>
                                <BottomSheet
                                    visible={visible}
                                    onBackButtonPress={AddImage}>
                                    <View style={{ height: heightToDp('30'), backgroundColor: 'rgb(30,47,55)', borderTopStartRadius: widthToDp('5'), borderTopEndRadius: widthToDp('5') }}>
                                        <View style={{ marginStart: widthToDp('10'), marginTop: heightToDp('4') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('6') }}>Edit Image</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: heightToDp('4') }}>
                                            <View>
                                                <TouchableOpacity>
                                                    <View style={{ borderWidth: 0.2, height: heightToDp('8'), width: widthToDp('16'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('6'), borderColor: '#fff' }}>
                                                        <View style={{ height: heightToDp('6'), width: widthToDp('12'), borderRadius: widthToDp('20'), backgroundColor: 'rgb(252,60,23)', justifyContent: 'center', alignItems: 'center' }} >
                                                            <MaterialCommunityIcons name='delete' size={25} color={'#fff'} />
                                                        </View>
                                                    </View>
                                                    <View style={{ alignItems: 'center', marginStart: widthToDp('5') }}>
                                                        <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>Remove</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View>
                                                <TouchableOpacity onPress={() => CameraImg()}>
                                                    <View style={{ borderWidth: 1, height: heightToDp('8'), width: widthToDp('16'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('6'), borderColor: '#fff' }}>
                                                        <View style={{ borderWidth: 1, height: heightToDp('5'), width: widthToDp('10'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center' }} >
                                                            <Image source={Camera} style={{ height: heightToDp('5'), width: widthToDp('10') }} />
                                                        </View>
                                                    </View>
                                                    <View style={{ alignItems: 'center', marginStart: widthToDp('5') }}>
                                                        <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>Camera</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>

                                            <View>
                                                <TouchableOpacity onPress={() => Upload()}>
                                                    <View style={{ borderWidth: 1, borderColor: '#fff', height: heightToDp('8'), width: widthToDp('16'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('6') }}>
                                                        <View style={{ height: heightToDp('5'), width: widthToDp('10'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center' }} >
                                                            <Image source={Gallery} style={{ height: heightToDp('5'), width: widthToDp('10') }} />
                                                        </View>
                                                    </View>
                                                    <View style={{ alignItems: 'center', marginStart: widthToDp('5') }}>
                                                        <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>Gallery</Text>
                                                    </View>
                                                </TouchableOpacity>

                                            </View>

                                        </View>
                                    </View>
                                </BottomSheet>
                            </View>

                        </View>
                        <View style={{ bottom: heightToDp('9'), flexDirection: 'row' }}>
                            <Text style={{ color: '#fff', fontSize: widthToDp('4.5') }}>Hey</Text>
                            <Text style={{ color: '#fff', paddingStart: widthToDp('2'), fontSize: widthToDp('4.5') }}>Parveen!</Text>
                        </View>
                    </View>
                </View>
                {select == 0 ? (
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('4') }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Feather name='phone-call' size={20} color={'#000'} />
                            </View>
                            <View style={{ marginStart: widthToDp('2') }}>
                                <Text style={{ color: '#000' }}>+91 1234567891</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: heightToDp('3') }}>
                            <View>
                                <Fontisto name='email' size={20} color={'#000'} />
                            </View>
                            <View style={{ marginStart: widthToDp('1') }}>
                                <Text style={{ color: '#a9a9a9' }}>add email</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: heightToDp('3') }}>
                            <View>
                                <FontAwesome5 name='birthday-cake' size={20} color={'#000'} />
                            </View>
                            <View style={{ marginStart: widthToDp('1') }}>
                                <Text style={{ color: '#a9a9a9' }}>add birthday</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: heightToDp('3') }}>
                            <View>
                                <MaterialCommunityIcons name='glass-flute' size={20} color={'#000'} />
                            </View>
                            <View style={{ marginStart: widthToDp('1') }}>
                                <Text style={{ color: '#a9a9a9' }}>add anniversary</Text>
                            </View>
                        </View>
                    </View>
                ) : (
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('4') }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Feather name='phone-call' size={20} color={'#000'} />
                            </View>
                            <View style={{ marginStart: widthToDp('2') }}>
                                <TextInput
                                    placeholder='Enter Number'
                                    defaultValue='+91 1234567891'
                                    placeholderTextColor={'#000'}
                                    style={{ color: '#000' }}
                                />
                                <View style={{ alignItems: 'center', bottom: heightToDp('2') }}>
                                    <Text
                                        style={{
                                            fontSize: 1,
                                            borderBottomWidth: 1,
                                            color: "#a9a9a9",
                                            width: widthToDp('50')
                                        }}
                                    ></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Fontisto name='email' size={20} color={'#000'} />
                            </View>
                            <View style={{ marginStart: widthToDp('1') }}>
                                <TextInput
                                    placeholder='add email'
                                    placeholderTextColor={'#000'}
                                    style={{ color: '#000' }}
                                />
                                <View style={{ alignItems: 'center', bottom: heightToDp('2') }}>
                                    <Text
                                        style={{
                                            fontSize: 1,
                                            borderBottomWidth: 1,
                                            color: "#a9a9a9",
                                            width: widthToDp('50')
                                        }}
                                    ></Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',marginTop:heightToDp('1') }}>
                                <View style={{ marginBottom: heightToDp('1'), flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome5 name='birthday-cake' size={20} color={'#000'} />
                                    <View style={{ marginStart: widthToDp('2') }}>
                                        <Text style={{color:'#000'}}>{text}</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                                    <TouchableOpacity onPress={() => showMode()}>
                                        <AntDesign name='calendar' color={'#000'} size={20} />
                                    </TouchableOpacity>

                                </View>
                            </View>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="calendar"
                                    onChange={onChange}
                                />
                            )}
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: heightToDp('2'), justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialCommunityIcons name='glass-flute' size={20} color={'#000'} />
                                    <View style={{ marginStart: widthToDp('1') }}>
                                        <Text style={{color:'#000'}}>{text1}</Text>
                                    </View>
                                </View>

                                <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                                    <TouchableOpacity onPress={() => showMode1()}>
                                        <AntDesign name='calendar' color={'#000'} size={20} />
                                    </TouchableOpacity>

                                </View>
                            </View>
                            {show1 && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="calendar"
                                    onChange={onChange1}
                                />
                            )}
                        </View>

                    </View>
                )}

            </SafeAreaView>
            <View style={{ height: heightToDp('0.1') }}>
                <View style={{ bottom: heightToDp('10'), width: widthToDp('25') }}>
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