import { View, Text, SafeAreaView, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { DiwaliLogo, FirstSlide, PizzaLogo, PureLogo, RDLogo, Slide1, Slider, Slider1, Slider2 } from '../../Utils/Image'
import Swiper from 'react-native-swiper'
export default function SkipMenuList(props) {

  const data = [
    {
      id: 0,
      name: 'Suppli Classico Pizza',
      Price: 119,
      subtitle: `Corn,Capsicum,Paneer
Topped With Mozzarella 
Cheese
      `,
      quantity:1
    },
    {
      id: 1,
      name: 'Farm Fresh Pizza',
      Price: 169,
      subtitle: `Capsicum,Tomato,
Mushroom,Onion
      `,
      quantity:1
    },
  ]

  const Search = (input)=>{
    if(input){
      const newData = searchdata.filter(item=>{
      const itemData = item.name ? item.name.toUpperCase():''.toUpperCase();
      const inputData = input.toUpperCase();
      return itemData.indexOf(inputData) > -1;
      });
      setSearchData(newData);
    }else{
      setSearchData(data);
    }
  }


const Increment = (item,index)=>{
  const Products = searchdata;
  Products[index].quantity+1;
}

  const [searchdata,setSearchData] = useState(data);
  // console.log(searchdata,'=-=-=-=-=-=')
  const [cart, setCart] = useState([]);
  // console.log('Cart data', cart);
  const [Recomanded, setRecomanded] = useState(true);
  const [salad, setSalad] = useState(false);
  const [Pizza, setPizza] = useState(false);
  const [Burger, setBurger] = useState(false);
  const [Sand, setSand] = useState(false);
  const [Sub, setSub] = useState(false);
  const [Wrap, setWrap] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ borderWidth: 1, height: heightToDp('33') }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: heightToDp('4') }}>
          {/* <View style={{ marginTop: heightToDp('1') }}>
            <AntDesign name='left' size={30} color={'#fff'} />
          </View> */}
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: widthToDp('78'), marginEnd: widthToDp('6'), height: heightToDp('5.5'), borderRadius: widthToDp('10'), flexDirection: 'row', backgroundColor: '#fff', elevation: 5,marginStart:widthToDp('7')}}>
              <View style={{ justifyContent: 'center', marginStart: widthToDp('2') }}>
                <AntDesign name='search1' color={'red'} size={18} />
              </View>
              <View style={{ width: widthToDp('75') }}>
                <TextInput
                  placeholder='Search Menu'
                  placeholderTextColor={'#a9a9a9'}
                  onChangeText={(input)=>{
                    Search(input);
                  }}
                  style={{ color: '#000' }}
                />
              </View>
            </View>
            <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
            <View style={{ borderWidth: 1, width: widthToDp('11'), backgroundColor: '#fff', borderRadius: widthToDp('15'), height: heightToDp('5.5'), justifyContent: 'center', right: widthToDp('4') }}>
              <View style={{ alignItems: 'center' }}>
                <AntDesign name='ellipsis1' color={'#000'} size={20} />
              </View>

            </View>
            </TouchableOpacity>

          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: heightToDp('2') }}>
          <View style={{ width: widthToDp('90'), height: heightToDp('18'), backgroundColor: '#fff', borderRadius: widthToDp('3'), elevation: 6 }}>
            <Swiper>
              <View>
                <Image source={FirstSlide} style={{ height: heightToDp('18'), width: widthToDp('90') }} />
              </View>
              <View>
                <Image source={Slide1} style={{ height: heightToDp('18'), width: widthToDp('90') }} />
              </View>
              <View>
                <Image source={Slider2} style={{ height: heightToDp('18'), width: widthToDp('90') }} />
              </View>
            </Swiper>

          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          <View>
            <TouchableOpacity onPress={() => setRecomanded(!Recomanded)}>
              <View style={{ flexDirection: 'row', height: heightToDp('7'), justifyContent: 'space-between' }}>

                <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Recomended (2)</Text>
                </View>
                <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                  {Recomanded == false ? <AntDesign name='caretdown' size={15} color={'#000'} /> :
                    <AntDesign name='caretup' size={15} color={'#000'} />}

                </View>
              </View>
            </TouchableOpacity>
            {Recomanded &&
              <>
                {searchdata.map((item,index) => (
                  <Pressable key={item.id}>
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <View>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                              <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                            </View>
                            <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                              <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                            </View>
                          </View>
                        </View>
                        <View style={{ marginTop: heightToDp('1.5'), marginStart: widthToDp('5'), width: widthToDp('40') }}>
                          <Text style={{ color: '#000', fontSize: widthToDp('4') }}>{item.name}</Text>
                        </View>
                        <View style={{ marginStart: widthToDp('5') }}>
                          <Text style={{ color: '#000', fontWeight: 'bold' }}>₹{item.Price}</Text>
                        </View>
                        <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1'), width: widthToDp('40') }}>
                          <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>{item.subtitle}</Text>
                        </View>
                      </View>
                      <View style={{ alignItems: 'center', marginStart: widthToDp('6') }}>
                        <View style={{ marginTop: heightToDp('5'), width: widthToDp('45'), alignItems: 'center' }}>
                          <Image source={PizzaLogo} />
                        </View>
                        {cart.includes(item)?(
                           <View>
                           <View style={{ borderWidth: 1, width: widthToDp('25'), height: heightToDp('5'), justifyContent: 'space-evenly', alignItems: 'center', borderRadius: widthToDp('2'), backgroundColor: 'rgb(255,247,246)', borderColor: 'rgb(236,85,94)',flexDirection:'row' }}>
                          <TouchableOpacity onPress={()=>Decrement(item,index)}>
                         <View style={{bottom:heightToDp('0.7')}}>
                           <Text style={{ color: 'rgb(236,85,94)',fontSize:widthToDp('8') }}>-</Text>
                           </View>
                          </TouchableOpacity>

                           <View>
                           <Text style={{ color: '#000',fontSize:widthToDp('6') }}>{item.quantity}</Text>
                           </View>
                           <TouchableOpacity onPress={()=>Increment(item,index)}>
                           <View>
                           <Text style={{ color: 'rgb(236,85,94)',fontSize:widthToDp('6') }}>+</Text>
                           </View>
                           </TouchableOpacity>

                           
                         </View>
                          </View>
                        ):(
                          <TouchableOpacity onPress={()=>props.navigation.navigate('Total',{Data:item})} >
                          <View style={{ borderWidth: 1, width: widthToDp('25'), height: heightToDp('5'), justifyContent: 'center', alignItems: 'center', borderRadius: widthToDp('2'), backgroundColor: 'rgb(255,247,246)', borderColor: 'rgb(236,85,94)' }}>
                            <Text style={{ color: 'rgb(236,85,94)' }}>ADD</Text>
                          </View>
                        </TouchableOpacity>
                        )}


                      </View>

                    </View>
                  </Pressable>
                ))}
              </>
            }
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: "#191970",
              }}
            ></Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => setSalad(!salad)}>
              <View style={{ flexDirection: 'row', height: heightToDp('7'), justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Salad (2)</Text>
                </View>
                <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                  {salad == false ?
                    <AntDesign name='caretdown' size={15} color={'#000'} /> :
                    <AntDesign name='caretup' size={15} color={'#000'} />
                  }

                </View>
              </View>
            </TouchableOpacity>
            {salad &&
              <View style={{ backgroundColor: '#fff', marginBottom: heightToDp('4') }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                        <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                      </View>
                      <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                      </View>

                    </View>
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1') }}>
                      <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Suppli Classico Pizza</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, width: widthToDp('24'), height: heightToDp('3'), marginTop: heightToDp('1'), backgroundColor: 'rgb(255,255,237)', flexDirection: 'row', alignItems: 'center' }}>
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star-o' size={13} color={'#000'} style={{ marginStart: widthToDp('1') }} />
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: widthToDp('2'), marginTop: heightToDp('1') }}>
                          <Text style={{ color: '#000' }}>82 reviews</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: heightToDp('1') }}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>₹169</Text>
                      </View>
                      <View>
                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>Corn,Capsicum,Panner Topped{'\n'}With Mozzarella Cheese</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity >
                    <View style={{ borderWidth: 1, height: heightToDp('6'), width: widthToDp('30'), marginStart: widthToDp('5'), marginTop: heightToDp('8'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,246,247)', borderColor: 'rgb(237,81,94)', borderRadius: widthToDp('2') }}>
                      <Text style={{ color: 'rgb(237,81,94)', fontSize: widthToDp('5') }}>ADD</Text>
                    </View>
                  </TouchableOpacity>

                </View>
                <View style={{ alignItems: 'center', marginTop: heightToDp('3') }}>
                  <Text style={{ color: '#a9a9a9' }}>-----------------------------------------------------------------------------------</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                        <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                      </View>
                      <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                      </View>

                    </View>
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1') }}>
                      <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Veg Mexicano</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, width: widthToDp('24'), height: heightToDp('3'), marginTop: heightToDp('1'), backgroundColor: 'rgb(255,255,237)', flexDirection: 'row', alignItems: 'center' }}>
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star-o' size={13} color={'#000'} style={{ marginStart: widthToDp('1') }} />
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: widthToDp('2'), marginTop: heightToDp('1') }}>
                          <Text style={{ color: '#000' }}>92 reviews</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: heightToDp('1') }}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>₹199</Text>
                      </View>
                      <View>
                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>Fiery Paneer,Jalapnenos,Black{'\n'}Olives,Sweet Corn,Onions And{'\n'}Red Paprika Topped With{'\n'}Mozzarella Cheese </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={{ borderWidth: 1, height: heightToDp('6'), width: widthToDp('30'), marginStart: widthToDp('5'), marginTop: heightToDp('8'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,246,247)', borderColor: 'rgb(237,81,94)', borderRadius: widthToDp('2') }}>
                      <Text style={{ color: 'rgb(237,81,94)', fontSize: widthToDp('5') }}>ADD</Text>
                    </View>
                  </TouchableOpacity>

                </View>
              </View>
            }
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: "#191970",
              }}
            ></Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setPizza(!Pizza)}>
              <View style={{ flexDirection: 'row', height: heightToDp('10'), justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Pizza and Pasta (2)</Text>
                  <View style={{ marginTop: heightToDp('2') }}>
                    <Text style={{ color: '#a9a9a9' }}>Pasta 2</Text>
                  </View>
                </View>
                <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                  {Pizza == false ? <AntDesign name='caretdown' size={15} color={'#000'} /> : <AntDesign name='caretup' size={15} color={'#000'} />}

                </View>
              </View>
            </TouchableOpacity>
            {Pizza &&
              <View style={{ backgroundColor: '#fff', marginBottom: heightToDp('4') }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                        <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                      </View>
                      <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                      </View>

                    </View>
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1') }}>
                      <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Suppli Classico Pizza</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, width: widthToDp('24'), height: heightToDp('3'), marginTop: heightToDp('1'), backgroundColor: 'rgb(255,255,237)', flexDirection: 'row', alignItems: 'center' }}>
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star-o' size={13} color={'#000'} style={{ marginStart: widthToDp('1') }} />
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: widthToDp('2'), marginTop: heightToDp('1') }}>
                          <Text style={{ color: '#000' }}>82 reviews</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: heightToDp('1') }}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>₹169</Text>
                      </View>
                      <View>
                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>Corn,Capsicum,Panner Topped{'\n'}With Mozzarella Cheese</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={{ borderWidth: 1, height: heightToDp('6'), width: widthToDp('30'), marginStart: widthToDp('5'), marginTop: heightToDp('8'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,246,247)', borderColor: 'rgb(237,81,94)', borderRadius: widthToDp('2') }}>
                      <Text style={{ color: 'rgb(237,81,94)', fontSize: widthToDp('5') }}>ADD</Text>
                    </View>
                  </TouchableOpacity>

                </View>
                <View style={{ alignItems: 'center', marginTop: heightToDp('3') }}>
                  <Text style={{ color: '#a9a9a9' }}>-----------------------------------------------------------------------------------</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                        <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                      </View>
                      <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                      </View>

                    </View>
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1') }}>
                      <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Veg Mexicano</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, width: widthToDp('24'), height: heightToDp('3'), marginTop: heightToDp('1'), backgroundColor: 'rgb(255,255,237)', flexDirection: 'row', alignItems: 'center' }}>
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star-o' size={13} color={'#000'} style={{ marginStart: widthToDp('1') }} />
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: widthToDp('2'), marginTop: heightToDp('1') }}>
                          <Text style={{ color: '#000' }}>92 reviews</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: heightToDp('1') }}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>₹199</Text>
                      </View>
                      <View>
                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>Fiery Paneer,Jalapnenos,Black{'\n'}Olives,Sweet Corn,Onions And{'\n'}Red Paprika Topped With{'\n'}Mozzarella Cheese </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={{ borderWidth: 1, height: heightToDp('6'), width: widthToDp('30'), marginStart: widthToDp('5'), marginTop: heightToDp('8'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,246,247)', borderColor: 'rgb(237,81,94)', borderRadius: widthToDp('2') }}>
                      <Text style={{ color: 'rgb(237,81,94)', fontSize: widthToDp('5') }}>ADD</Text>
                    </View>
                  </TouchableOpacity>

                </View>
              </View>

            }
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: "#191970",
              }}
            ></Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setBurger(!Burger)}>
              <View style={{ flexDirection: 'row', height: heightToDp('12'), justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Burgers and Sandwiches</Text>
                  <View style={{ marginTop: heightToDp('2') }}>
                    <Text style={{ color: '#a9a9a9' }}>Burgers(10)</Text>
                  </View>
                </View>
                <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                  {Burger == false ? <AntDesign name='caretdown' size={15} color={'#000'} /> :
                    <AntDesign name='caretup' size={15} color={'#000'} />}

                </View>
              </View>
            </TouchableOpacity>
            {Burger &&
              <View style={{ backgroundColor: '#fff', marginBottom: heightToDp('4') }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                        <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                      </View>
                      <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                      </View>

                    </View>
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1') }}>
                      <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Suppli Classico Pizza</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, width: widthToDp('24'), height: heightToDp('3'), marginTop: heightToDp('1'), backgroundColor: 'rgb(255,255,237)', flexDirection: 'row', alignItems: 'center' }}>
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star-o' size={13} color={'#000'} style={{ marginStart: widthToDp('1') }} />
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: widthToDp('2'), marginTop: heightToDp('1') }}>
                          <Text style={{ color: '#000' }}>82 reviews</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: heightToDp('1') }}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>₹169</Text>
                      </View>
                      <View>
                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>Corn,Capsicum,Panner Topped{'\n'}With Mozzarella Cheese</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={{ borderWidth: 1, height: heightToDp('6'), width: widthToDp('30'), marginStart: widthToDp('5'), marginTop: heightToDp('8'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,246,247)', borderColor: 'rgb(237,81,94)', borderRadius: widthToDp('2') }}>
                      <Text style={{ color: 'rgb(237,81,94)', fontSize: widthToDp('5') }}>ADD</Text>
                    </View>
                  </TouchableOpacity>

                </View>
                <View style={{ alignItems: 'center', marginTop: heightToDp('3') }}>
                  <Text style={{ color: '#a9a9a9' }}>-----------------------------------------------------------------------------------</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                        <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                      </View>
                      <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                      </View>

                    </View>
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1') }}>
                      <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Veg Mexicano</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, width: widthToDp('24'), height: heightToDp('3'), marginTop: heightToDp('1'), backgroundColor: 'rgb(255,255,237)', flexDirection: 'row', alignItems: 'center' }}>
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star-o' size={13} color={'#000'} style={{ marginStart: widthToDp('1') }} />
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: widthToDp('2'), marginTop: heightToDp('1') }}>
                          <Text style={{ color: '#000' }}>92 reviews</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: heightToDp('1') }}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>₹199</Text>
                      </View>
                      <View>
                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>Fiery Paneer,Jalapnenos,Black{'\n'}Olives,Sweet Corn,Onions And{'\n'}Red Paprika Topped With{'\n'}Mozzarella Cheese </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={{ borderWidth: 1, height: heightToDp('6'), width: widthToDp('30'), marginStart: widthToDp('5'), marginTop: heightToDp('8'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,246,247)', borderColor: 'rgb(237,81,94)', borderRadius: widthToDp('2') }}>
                      <Text style={{ color: 'rgb(237,81,94)', fontSize: widthToDp('5') }}>ADD</Text>
                    </View>
                  </TouchableOpacity>

                </View>
              </View>
            }
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: "#191970",
              }}
            ></Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setSand(!Sand)}>
              <View style={{ flexDirection: 'row', height: heightToDp('7'), justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                  <Text style={{ color: '#a9a9a9', fontSize: widthToDp('4.5') }}>Sandwiches (2)</Text>
                </View>
                <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                  {Sand == false ?
                    <AntDesign name='caretdown' size={15} color={'#000'} /> : <AntDesign name='caretup' size={15} color={'#000'} />
                  }
                </View>
              </View>
            </TouchableOpacity>
            {Sand &&
              <View style={{ backgroundColor: '#fff', marginBottom: heightToDp('4') }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                        <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                      </View>
                      <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                      </View>

                    </View>
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1') }}>
                      <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Suppli Classico Pizza</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, width: widthToDp('24'), height: heightToDp('3'), marginTop: heightToDp('1'), backgroundColor: 'rgb(255,255,237)', flexDirection: 'row', alignItems: 'center' }}>
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star-o' size={13} color={'#000'} style={{ marginStart: widthToDp('1') }} />
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: widthToDp('2'), marginTop: heightToDp('1') }}>
                          <Text style={{ color: '#000' }}>82 reviews</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: heightToDp('1') }}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>₹169</Text>
                      </View>
                      <View>
                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>Corn,Capsicum,Panner Topped{'\n'}With Mozzarella Cheese</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={{ borderWidth: 1, height: heightToDp('6'), width: widthToDp('30'), marginStart: widthToDp('5'), marginTop: heightToDp('8'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,246,247)', borderColor: 'rgb(237,81,94)', borderRadius: widthToDp('2') }}>
                      <Text style={{ color: 'rgb(237,81,94)', fontSize: widthToDp('5') }}>ADD</Text>
                    </View>
                  </TouchableOpacity>

                </View>
                <View style={{ alignItems: 'center', marginTop: heightToDp('3') }}>
                  <Text style={{ color: '#a9a9a9' }}>-----------------------------------------------------------------------------------</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                        <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                      </View>
                      <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                      </View>

                    </View>
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1') }}>
                      <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Veg Mexicano</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, width: widthToDp('24'), height: heightToDp('3'), marginTop: heightToDp('1'), backgroundColor: 'rgb(255,255,237)', flexDirection: 'row', alignItems: 'center' }}>
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star-o' size={13} color={'#000'} style={{ marginStart: widthToDp('1') }} />
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: widthToDp('2'), marginTop: heightToDp('1') }}>
                          <Text style={{ color: '#000' }}>92 reviews</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: heightToDp('1') }}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>₹199</Text>
                      </View>
                      <View>
                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>Fiery Paneer,Jalapnenos,Black{'\n'}Olives,Sweet Corn,Onions And{'\n'}Red Paprika Topped With{'\n'}Mozzarella Cheese </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={{ borderWidth: 1, height: heightToDp('6'), width: widthToDp('30'), marginStart: widthToDp('5'), marginTop: heightToDp('8'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,246,247)', borderColor: 'rgb(237,81,94)', borderRadius: widthToDp('2') }}>
                      <Text style={{ color: 'rgb(237,81,94)', fontSize: widthToDp('5') }}>ADD</Text>
                    </View>
                  </TouchableOpacity>

                </View>
              </View>
            }
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: "#191970",
              }}
            ></Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setSub(!Sub)}>
              <View style={{ flexDirection: 'row', height: heightToDp('7'), justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Sub (3)</Text>
                </View>
                <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                  {Sub == false ?
                    <AntDesign name='caretdown' size={15} color={'#000'} /> :
                    <AntDesign name='caretup' size={15} color={'#000'} />
                  }

                </View>
              </View>
            </TouchableOpacity>
            {Sub &&
              <View style={{ backgroundColor: '#fff', marginBottom: heightToDp('4') }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                        <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                      </View>
                      <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                      </View>

                    </View>
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1') }}>
                      <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Suppli Classico Pizza</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, width: widthToDp('24'), height: heightToDp('3'), marginTop: heightToDp('1'), backgroundColor: 'rgb(255,255,237)', flexDirection: 'row', alignItems: 'center' }}>
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star-o' size={13} color={'#000'} style={{ marginStart: widthToDp('1') }} />
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: widthToDp('2'), marginTop: heightToDp('1') }}>
                          <Text style={{ color: '#000' }}>82 reviews</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: heightToDp('1') }}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>₹169</Text>
                      </View>
                      <View>
                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>Corn,Capsicum,Panner Topped{'\n'}With Mozzarella Cheese</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={{ borderWidth: 1, height: heightToDp('6'), width: widthToDp('30'), marginStart: widthToDp('5'), marginTop: heightToDp('8'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,246,247)', borderColor: 'rgb(237,81,94)', borderRadius: widthToDp('2') }}>
                      <Text style={{ color: 'rgb(237,81,94)', fontSize: widthToDp('5') }}>ADD</Text>
                    </View>
                  </TouchableOpacity>

                </View>
                <View style={{ alignItems: 'center', marginTop: heightToDp('3') }}>
                  <Text style={{ color: '#a9a9a9' }}>-----------------------------------------------------------------------------------</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                        <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                      </View>
                      <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                      </View>

                    </View>
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1') }}>
                      <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Veg Mexicano</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, width: widthToDp('24'), height: heightToDp('3'), marginTop: heightToDp('1'), backgroundColor: 'rgb(255,255,237)', flexDirection: 'row', alignItems: 'center' }}>
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star-o' size={13} color={'#000'} style={{ marginStart: widthToDp('1') }} />
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: widthToDp('2'), marginTop: heightToDp('1') }}>
                          <Text style={{ color: '#000' }}>92 reviews</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: heightToDp('1') }}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>₹199</Text>
                      </View>
                      <View>
                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>Fiery Paneer,Jalapnenos,Black{'\n'}Olives,Sweet Corn,Onions And{'\n'}Red Paprika Topped With{'\n'}Mozzarella Cheese </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={{ borderWidth: 1, height: heightToDp('6'), width: widthToDp('30'), marginStart: widthToDp('5'), marginTop: heightToDp('8'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,246,247)', borderColor: 'rgb(237,81,94)', borderRadius: widthToDp('2') }}>
                      <Text style={{ color: 'rgb(237,81,94)', fontSize: widthToDp('5') }}>ADD</Text>
                    </View>
                  </TouchableOpacity>

                </View>
                <View style={{ alignItems: 'center', marginTop: heightToDp('3') }}>
                  <Text style={{ color: '#a9a9a9' }}>-----------------------------------------------------------------------------------</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                        <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                      </View>
                      <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                      </View>

                    </View>
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1') }}>
                      <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Veg Mexicano</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, width: widthToDp('24'), height: heightToDp('3'), marginTop: heightToDp('1'), backgroundColor: 'rgb(255,255,237)', flexDirection: 'row', alignItems: 'center' }}>
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star-o' size={13} color={'#000'} style={{ marginStart: widthToDp('1') }} />
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: widthToDp('2'), marginTop: heightToDp('1') }}>
                          <Text style={{ color: '#000' }}>92 reviews</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: heightToDp('1') }}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>₹199</Text>
                      </View>
                      <View>
                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>Fiery Paneer,Jalapnenos,Black{'\n'}Olives,Sweet Corn,Onions And{'\n'}Red Paprika Topped With{'\n'}Mozzarella Cheese </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={{ borderWidth: 1, height: heightToDp('6'), width: widthToDp('30'), marginStart: widthToDp('5'), marginTop: heightToDp('8'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,246,247)', borderColor: 'rgb(237,81,94)', borderRadius: widthToDp('2') }}>
                      <Text style={{ color: 'rgb(237,81,94)', fontSize: widthToDp('5') }}>ADD</Text>
                    </View>
                  </TouchableOpacity>

                </View>
              </View>

            }
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: "#191970",
              }}
            ></Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => setWrap(!Wrap)}>
              <View style={{ flexDirection: 'row', height: heightToDp('7'), justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                  <Text style={{ color: '#000', fontSize: widthToDp('4.5'), fontWeight: 'bold' }}>Wrap (1)</Text>
                </View>
                <View style={{ justifyContent: 'center', marginEnd: widthToDp('3') }}>
                  {Wrap == false ?
                    <AntDesign name='caretdown' size={15} color={'#000'} /> :
                    <AntDesign name='caretup' size={15} color={'#000'} />
                  }

                </View>
              </View>
            </TouchableOpacity>
            {Wrap &&
              <View style={{ backgroundColor: '#fff', marginBottom: heightToDp('4') }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('3') }}>
                        <Image source={RDLogo} style={{ height: heightToDp('3'), width: widthToDp('6') }} />
                      </View>
                      <View style={{ height: heightToDp('2.8'), justifyContent: 'center', marginTop: heightToDp('3'), marginStart: widthToDp('3'), width: widthToDp('19'), backgroundColor: 'rgb(234,113,60)', borderRadius: widthToDp('1.5') }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: widthToDp('3.5') }}>Bestseller</Text>
                      </View>

                    </View>
                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('1') }}>
                      <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Suppli Classico Pizza</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, width: widthToDp('24'), height: heightToDp('3'), marginTop: heightToDp('1'), backgroundColor: 'rgb(255,255,237)', flexDirection: 'row', alignItems: 'center' }}>
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star' size={13} color={'rgb(244,191,15)'} style={{ marginStart: widthToDp('1') }} />
                          <FontAwesome name='star-o' size={13} color={'#000'} style={{ marginStart: widthToDp('1') }} />
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: widthToDp('2'), marginTop: heightToDp('1') }}>
                          <Text style={{ color: '#000' }}>82 reviews</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: heightToDp('1') }}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>₹169</Text>
                      </View>
                      <View>
                        <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.5') }}>Corn,Capsicum,Panner Topped{'\n'}With Mozzarella Cheese</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View style={{ borderWidth: 1, height: heightToDp('6'), width: widthToDp('30'), marginStart: widthToDp('5'), marginTop: heightToDp('8'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,246,247)', borderColor: 'rgb(237,81,94)', borderRadius: widthToDp('2') }}>
                      <Text style={{ color: 'rgb(237,81,94)', fontSize: widthToDp('5') }}>ADD</Text>
                    </View>
                  </TouchableOpacity>

                </View>
              </View>
            }
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: "#191970",
              }}
            ></Text>
          </View>

        </View>
      </ScrollView>


    </SafeAreaView>

  )
}