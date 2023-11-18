import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Pressable,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {heightToDp, widthToDp} from '../../Utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  DiwaliLogo,
  FirstSlide,
  PizzaLogo,
  PureLogo,
  RDLogo,
  Slide1,
  Slider,
  Slider1,
  Slider2,
} from '../../Utils/Image';
import Swiper from 'react-native-swiper';
import Styles from './MenuList_Style';
import Icon from 'react-native-vector-icons/AntDesign';
export default function MenuList(props) {
  const data = [
    {
      id: 0,
      name: 'Suppli Classico Pizza',
      Price: 119,
      subtitle: `Corn,Capsicum,Paneer
Topped With Mozzarella 
Cheese
      `,
      quantity: 0,
    },
    {
      id: 1,
      name: 'Farm Fresh Pizza',
      Price: 169,
      subtitle: `Capsicum,Tomato,
Mushroom,Onion
      `,
      quantity: 0,
    },
  ];
  const [searchdata, setSearchData] = useState(data);
  const [cart, setCart] = useState(data);
  const [isData,setIsData] = useState([])
  const [Recomanded, setRecomanded] = useState(true);
  const [salad, setSalad] = useState(true);
  const [Pizza, setPizza] = useState(true);
  const [Burger, setBurger] = useState(true);
  const [Sand, setSand] = useState(true);
  const [Sub, setSub] = useState(true);
  const [Wrap, setWrap] = useState(true);
  const [istotalprice, settotalprice] = useState(0);
  const [istotalItem, settotalItem] = useState(0);
  const [nextData,setNextData]=useState([])
  const Search = input => {
    if (input) {
      const newData = searchdata.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const inputData = input.toUpperCase();
        return itemData.indexOf(inputData) > -1;
      });
      setSearchData(newData);
    } else {
      setSearchData(data);
    }
  };

  const Increment = (item, index) => {//
    // console.log(item, '---', index);
    if (item.quantity >= 0) {
      const newArr = cart.map((obj, i) => {
        if (index == i) {
          return {
            ...obj,
            quantity: parseInt(cart[index].quantity) + 1,
          };
        }
        return obj;
      });
      console.log(newArr,'-----------');
      setCart(newArr);
      settotalItem(istotalItem + 1);
      settotalprice(istotalprice + parseInt(item.Price));
    }
  };

  //-------------------------------------------------Remove quantity---------------------------------

  const RemoveQuantity = (item, index) => {
    if (item.quantity > 0) {
      const newArr = cart.map((obj, i) => {
        if (index == i) {
          return {...obj, quantity: parseInt(cart[index].quantity) - 1};
        }
        return obj;
      });
      setCart(newArr);
      settotalItem(istotalItem - 1);
      settotalprice(istotalprice - parseInt(item.Price));
    }
  };

const next = ()=>{
  var localarr=[]
cart.forEach((item,index)=>{
if(item.quantity>0){
localarr.push(item)
}
props.navigation.navigate('Total',{Data:localarr})
})
setNextData(localarr);
console.log(localarr,"----");
}

  return (
    <SafeAreaView style={Styles.conrainer}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={Styles.MainView}>
        <View style={Styles.TopView}>
          {/* <View style={{ marginTop: heightToDp('1') }}>
            <AntDesign name='left' size={30} color={'#fff'} />
          </View> */}
          <View style={Styles.FlexView}>
            <View style={Styles.SearchBar}>
              <View style={Styles.SearchIcon}>
                <AntDesign name="search1" color={'red'} size={18} />
              </View>
              <View style={Styles.TextInputView}>
                <TextInput
                  placeholder="Search Menu"
                  placeholderTextColor={'#a9a9a9'}
                  onChangeText={input => {
                    Search(input);
                  }}
                  style={Styles.TextInput}
                />
              </View>
            </View>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <View style={Styles.MenuView}>
                <View style={Styles.Menu}>
                  <AntDesign name="ellipsis1" color={'#000'} size={20} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.BanerMainView}>
          <View style={Styles.BanerView}>
            <Swiper>
              <View>
                <Image source={FirstSlide} style={Styles.BanerImage} />
              </View>
              <View>
                <Image source={Slide1} style={Styles.BanerImage} />
              </View>
              <View>
                <Image source={Slider2} style={Styles.BanerImage} />
              </View>
            </Swiper>
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          <View>
            <TouchableOpacity onPress={() => setRecomanded(!Recomanded)}>
              <View style={Styles.RecomandedMain}>
                <View style={Styles.RecomandedView}>
                  <Text style={Styles.RecomandedText}>Recomended (2)</Text>
                </View>
                <View
                  style={{justifyContent: 'center', marginEnd: widthToDp('3')}}>
                  {Recomanded == false ? (
                    <AntDesign name="caretdown" size={15} color={'#000'} />
                  ) : (
                    <AntDesign name="caretup" size={15} color={'#000'} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
            {Recomanded && (
              <>
                {cart.map((item, index) => (
                  <Pressable key={item.id}>
                    <View style={Styles.RecomandedListView}>
                      <View>
                        <View>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <View
                              style={{
                                marginStart: widthToDp('5'),
                                marginTop: heightToDp('3'),
                              }}>
                              <Image
                                source={RDLogo}
                                style={{
                                  height: heightToDp('3'),
                                  width: widthToDp('6'),
                                }}
                              />
                            </View>
                            <View
                              style={{
                                height: heightToDp('2.8'),
                                justifyContent: 'center',
                                marginTop: heightToDp('3'),
                                marginStart: widthToDp('3'),
                                width: widthToDp('19'),
                                backgroundColor: 'rgb(234,113,60)',
                                borderRadius: widthToDp('1.5'),
                              }}>
                              <Text
                                style={{
                                  color: '#fff',
                                  textAlign: 'center',
                                  fontSize: widthToDp('3.5'),
                                }}>
                                Bestseller
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            marginTop: heightToDp('1.5'),
                            marginStart: widthToDp('5'),
                            width: widthToDp('40'),
                          }}>
                          <Text
                            style={{color: '#000', fontSize: widthToDp('4')}}>
                            {item.name}
                          </Text>
                        </View>
                        <View style={{marginStart: widthToDp('5')}}>
                          <Text style={{color: '#000', fontWeight: 'bold'}}>
                            ₹{item.Price}
                          </Text>
                        </View>
                        <View
                          style={{
                            marginStart: widthToDp('5'),
                            marginTop: heightToDp('1'),
                            width: widthToDp('40'),
                          }}>
                          <Text
                            style={{
                              color: '#a9a9a9',
                              fontSize: widthToDp('3.5'),
                            }}>
                            {item.subtitle}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          alignItems: 'center',
                          marginStart: widthToDp('6'),
                        }}>
                        <View
                          style={{
                            marginTop: heightToDp('5'),
                            width: widthToDp('45'),
                            alignItems: 'center',
                          }}>
                          <Image source={PizzaLogo} />
                        </View>
                        {cart[index].quantity > 0 ? (
                          <View>
                            <View
                              style={{
                                borderWidth: 1,
                                width: widthToDp('25'),
                                height: heightToDp('5'),
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                borderRadius: widthToDp('2'),
                                backgroundColor: 'rgb(255,247,246)',
                                borderColor: 'rgb(236,85,94)',
                                flexDirection: 'row',
                              }}>
                              <TouchableOpacity
                                onPress={() => RemoveQuantity(item, index)}>
                                <View style={{bottom: heightToDp('0.7')}}>
                                  <Text
                                    style={{
                                      color: 'rgb(236,85,94)',
                                      fontSize: widthToDp('8'),
                                    }}>
                                    -
                                  </Text>
                                </View>
                              </TouchableOpacity>

                              <View>
                                <Text
                                  style={{
                                    color: '#000',
                                    fontSize: widthToDp('6'),
                                  }}>
                                  {item.quantity}
                                </Text>
                              </View>
                              <TouchableOpacity
                                onPress={() => Increment(item, index)}>
                                <View>
                                  <Text
                                    style={{
                                      color: 'rgb(236,85,94)',
                                      fontSize: widthToDp('6'),
                                    }}>
                                    +
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          </View>
                        ) : (
                          <TouchableOpacity
                            onPress={() => Increment(item, index)}>
                            <View
                              style={{
                                borderWidth: 1,
                                width: widthToDp('25'),
                                height: heightToDp('5'),
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: widthToDp('2'),
                                backgroundColor: 'rgb(255,247,246)',
                                borderColor: 'rgb(236,85,94)',
                              }}>
                              <Text style={{color: 'rgb(236,85,94)'}}>ADD</Text>
                            </View>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  </Pressable>
                ))}
              </>
            )}
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: '#191970',
              }}></Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => setSalad(!salad)}>
              <View
                style={{
                  flexDirection: 'row',
                  height: heightToDp('7'),
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    marginStart: widthToDp('5'),
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: widthToDp('4.5'),
                      fontWeight: 'bold',
                    }}>
                    Salad (2)
                  </Text>
                </View>
                <View
                  style={{justifyContent: 'center', marginEnd: widthToDp('3')}}>
                  {salad == false ? (
                    <AntDesign name="caretdown" size={15} color={'#000'} />
                  ) : (
                    <AntDesign name="caretup" size={15} color={'#000'} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
            {salad && (
              <View
                style={{
                  backgroundColor: '#fff',
                  marginBottom: heightToDp('4'),
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          marginStart: widthToDp('5'),
                          marginTop: heightToDp('3'),
                        }}>
                        <Image
                          source={RDLogo}
                          style={{
                            height: heightToDp('3'),
                            width: widthToDp('6'),
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: heightToDp('2.8'),
                          justifyContent: 'center',
                          marginTop: heightToDp('3'),
                          marginStart: widthToDp('3'),
                          width: widthToDp('19'),
                          backgroundColor: 'rgb(234,113,60)',
                          borderRadius: widthToDp('1.5'),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Bestseller
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('1'),
                      }}>
                      <Text style={{color: '#000', fontSize: widthToDp('4.5')}}>
                        Suppli Classico Pizza
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            borderWidth: 1,
                            width: widthToDp('24'),
                            height: heightToDp('3'),
                            marginTop: heightToDp('1'),
                            backgroundColor: 'rgb(255,255,237)',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star-o"
                            size={13}
                            color={'#000'}
                            style={{marginStart: widthToDp('1')}}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            marginStart: widthToDp('2'),
                            marginTop: heightToDp('1'),
                          }}>
                          <Text style={{color: '#000'}}>82 reviews</Text>
                        </View>
                      </View>
                      <View style={{marginTop: heightToDp('1')}}>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>
                          ₹169
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#a9a9a9',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Corn,Capsicum,Panner Topped{'\n'}With Mozzarella
                          Cheese
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View
                      style={{
                        borderWidth: 1,
                        height: heightToDp('6'),
                        width: widthToDp('30'),
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('8'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(255,246,247)',
                        borderColor: 'rgb(237,81,94)',
                        borderRadius: widthToDp('2'),
                      }}>
                      <Text
                        style={{
                          color: 'rgb(237,81,94)',
                          fontSize: widthToDp('5'),
                        }}>
                        ADD
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{alignItems: 'center', marginTop: heightToDp('3')}}>
                  <Text style={{color: '#a9a9a9'}}>
                    -----------------------------------------------------------------------------------
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          marginStart: widthToDp('5'),
                          marginTop: heightToDp('3'),
                        }}>
                        <Image
                          source={RDLogo}
                          style={{
                            height: heightToDp('3'),
                            width: widthToDp('6'),
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: heightToDp('2.8'),
                          justifyContent: 'center',
                          marginTop: heightToDp('3'),
                          marginStart: widthToDp('3'),
                          width: widthToDp('19'),
                          backgroundColor: 'rgb(234,113,60)',
                          borderRadius: widthToDp('1.5'),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Bestseller
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('1'),
                      }}>
                      <Text style={{color: '#000', fontSize: widthToDp('4.5')}}>
                        Veg Mexicano
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            borderWidth: 1,
                            width: widthToDp('24'),
                            height: heightToDp('3'),
                            marginTop: heightToDp('1'),
                            backgroundColor: 'rgb(255,255,237)',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star-o"
                            size={13}
                            color={'#000'}
                            style={{marginStart: widthToDp('1')}}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            marginStart: widthToDp('2'),
                            marginTop: heightToDp('1'),
                          }}>
                          <Text style={{color: '#000'}}>92 reviews</Text>
                        </View>
                      </View>
                      <View style={{marginTop: heightToDp('1')}}>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>
                          ₹199
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#a9a9a9',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Fiery Paneer,Jalapnenos,Black{'\n'}Olives,Sweet
                          Corn,Onions And{'\n'}Red Paprika Topped With{'\n'}
                          Mozzarella Cheese{' '}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View
                      style={{
                        borderWidth: 1,
                        height: heightToDp('6'),
                        width: widthToDp('30'),
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('8'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(255,246,247)',
                        borderColor: 'rgb(237,81,94)',
                        borderRadius: widthToDp('2'),
                      }}>
                      <Text
                        style={{
                          color: 'rgb(237,81,94)',
                          fontSize: widthToDp('5'),
                        }}>
                        ADD
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: '#191970',
              }}></Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setPizza(!Pizza)}>
              <View
                style={{
                  flexDirection: 'row',
                  height: heightToDp('10'),
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    marginStart: widthToDp('5'),
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: widthToDp('4.5'),
                      fontWeight: 'bold',
                    }}>
                    Pizza and Pasta (2)
                  </Text>
                  <View style={{marginTop: heightToDp('2')}}>
                    <Text style={{color: '#a9a9a9'}}>Pasta 2</Text>
                  </View>
                </View>
                <View
                  style={{justifyContent: 'center', marginEnd: widthToDp('3')}}>
                  {Pizza == false ? (
                    <AntDesign name="caretdown" size={15} color={'#000'} />
                  ) : (
                    <AntDesign name="caretup" size={15} color={'#000'} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
            {Pizza && (
              <View
                style={{
                  backgroundColor: '#fff',
                  marginBottom: heightToDp('4'),
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          marginStart: widthToDp('5'),
                          marginTop: heightToDp('3'),
                        }}>
                        <Image
                          source={RDLogo}
                          style={{
                            height: heightToDp('3'),
                            width: widthToDp('6'),
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: heightToDp('2.8'),
                          justifyContent: 'center',
                          marginTop: heightToDp('3'),
                          marginStart: widthToDp('3'),
                          width: widthToDp('19'),
                          backgroundColor: 'rgb(234,113,60)',
                          borderRadius: widthToDp('1.5'),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Bestseller
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('1'),
                      }}>
                      <Text style={{color: '#000', fontSize: widthToDp('4.5')}}>
                        Suppli Classico Pizza
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            borderWidth: 1,
                            width: widthToDp('24'),
                            height: heightToDp('3'),
                            marginTop: heightToDp('1'),
                            backgroundColor: 'rgb(255,255,237)',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star-o"
                            size={13}
                            color={'#000'}
                            style={{marginStart: widthToDp('1')}}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            marginStart: widthToDp('2'),
                            marginTop: heightToDp('1'),
                          }}>
                          <Text style={{color: '#000'}}>82 reviews</Text>
                        </View>
                      </View>
                      <View style={{marginTop: heightToDp('1')}}>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>
                          ₹169
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#a9a9a9',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Corn,Capsicum,Panner Topped{'\n'}With Mozzarella
                          Cheese
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View
                      style={{
                        borderWidth: 1,
                        height: heightToDp('6'),
                        width: widthToDp('30'),
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('8'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(255,246,247)',
                        borderColor: 'rgb(237,81,94)',
                        borderRadius: widthToDp('2'),
                      }}>
                      <Text
                        style={{
                          color: 'rgb(237,81,94)',
                          fontSize: widthToDp('5'),
                        }}>
                        ADD
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{alignItems: 'center', marginTop: heightToDp('3')}}>
                  <Text style={{color: '#a9a9a9'}}>
                    -----------------------------------------------------------------------------------
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          marginStart: widthToDp('5'),
                          marginTop: heightToDp('3'),
                        }}>
                        <Image
                          source={RDLogo}
                          style={{
                            height: heightToDp('3'),
                            width: widthToDp('6'),
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: heightToDp('2.8'),
                          justifyContent: 'center',
                          marginTop: heightToDp('3'),
                          marginStart: widthToDp('3'),
                          width: widthToDp('19'),
                          backgroundColor: 'rgb(234,113,60)',
                          borderRadius: widthToDp('1.5'),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Bestseller
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('1'),
                      }}>
                      <Text style={{color: '#000', fontSize: widthToDp('4.5')}}>
                        Veg Mexicano
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            borderWidth: 1,
                            width: widthToDp('24'),
                            height: heightToDp('3'),
                            marginTop: heightToDp('1'),
                            backgroundColor: 'rgb(255,255,237)',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star-o"
                            size={13}
                            color={'#000'}
                            style={{marginStart: widthToDp('1')}}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            marginStart: widthToDp('2'),
                            marginTop: heightToDp('1'),
                          }}>
                          <Text style={{color: '#000'}}>92 reviews</Text>
                        </View>
                      </View>
                      <View style={{marginTop: heightToDp('1')}}>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>
                          ₹199
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#a9a9a9',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Fiery Paneer,Jalapnenos,Black{'\n'}Olives,Sweet
                          Corn,Onions And{'\n'}Red Paprika Topped With{'\n'}
                          Mozzarella Cheese{' '}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View
                      style={{
                        borderWidth: 1,
                        height: heightToDp('6'),
                        width: widthToDp('30'),
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('8'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(255,246,247)',
                        borderColor: 'rgb(237,81,94)',
                        borderRadius: widthToDp('2'),
                      }}>
                      <Text
                        style={{
                          color: 'rgb(237,81,94)',
                          fontSize: widthToDp('5'),
                        }}>
                        ADD
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: '#191970',
              }}></Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setBurger(!Burger)}>
              <View
                style={{
                  flexDirection: 'row',
                  height: heightToDp('12'),
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    marginStart: widthToDp('5'),
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: widthToDp('4.5'),
                      fontWeight: 'bold',
                    }}>
                    Burgers and Sandwiches
                  </Text>
                  <View style={{marginTop: heightToDp('2')}}>
                    <Text style={{color: '#a9a9a9'}}>Burgers(10)</Text>
                  </View>
                </View>
                <View
                  style={{justifyContent: 'center', marginEnd: widthToDp('3')}}>
                  {Burger == false ? (
                    <AntDesign name="caretdown" size={15} color={'#000'} />
                  ) : (
                    <AntDesign name="caretup" size={15} color={'#000'} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
            {Burger && (
              <View
                style={{
                  backgroundColor: '#fff',
                  marginBottom: heightToDp('4'),
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          marginStart: widthToDp('5'),
                          marginTop: heightToDp('3'),
                        }}>
                        <Image
                          source={RDLogo}
                          style={{
                            height: heightToDp('3'),
                            width: widthToDp('6'),
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: heightToDp('2.8'),
                          justifyContent: 'center',
                          marginTop: heightToDp('3'),
                          marginStart: widthToDp('3'),
                          width: widthToDp('19'),
                          backgroundColor: 'rgb(234,113,60)',
                          borderRadius: widthToDp('1.5'),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Bestseller
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('1'),
                      }}>
                      <Text style={{color: '#000', fontSize: widthToDp('4.5')}}>
                        Suppli Classico Pizza
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            borderWidth: 1,
                            width: widthToDp('24'),
                            height: heightToDp('3'),
                            marginTop: heightToDp('1'),
                            backgroundColor: 'rgb(255,255,237)',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star-o"
                            size={13}
                            color={'#000'}
                            style={{marginStart: widthToDp('1')}}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            marginStart: widthToDp('2'),
                            marginTop: heightToDp('1'),
                          }}>
                          <Text style={{color: '#000'}}>82 reviews</Text>
                        </View>
                      </View>
                      <View style={{marginTop: heightToDp('1')}}>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>
                          ₹169
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#a9a9a9',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Corn,Capsicum,Panner Topped{'\n'}With Mozzarella
                          Cheese
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View
                      style={{
                        borderWidth: 1,
                        height: heightToDp('6'),
                        width: widthToDp('30'),
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('8'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(255,246,247)',
                        borderColor: 'rgb(237,81,94)',
                        borderRadius: widthToDp('2'),
                      }}>
                      <Text
                        style={{
                          color: 'rgb(237,81,94)',
                          fontSize: widthToDp('5'),
                        }}>
                        ADD
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{alignItems: 'center', marginTop: heightToDp('3')}}>
                  <Text style={{color: '#a9a9a9'}}>
                    -----------------------------------------------------------------------------------
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          marginStart: widthToDp('5'),
                          marginTop: heightToDp('3'),
                        }}>
                        <Image
                          source={RDLogo}
                          style={{
                            height: heightToDp('3'),
                            width: widthToDp('6'),
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: heightToDp('2.8'),
                          justifyContent: 'center',
                          marginTop: heightToDp('3'),
                          marginStart: widthToDp('3'),
                          width: widthToDp('19'),
                          backgroundColor: 'rgb(234,113,60)',
                          borderRadius: widthToDp('1.5'),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Bestseller
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('1'),
                      }}>
                      <Text style={{color: '#000', fontSize: widthToDp('4.5')}}>
                        Veg Mexicano
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            borderWidth: 1,
                            width: widthToDp('24'),
                            height: heightToDp('3'),
                            marginTop: heightToDp('1'),
                            backgroundColor: 'rgb(255,255,237)',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star-o"
                            size={13}
                            color={'#000'}
                            style={{marginStart: widthToDp('1')}}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            marginStart: widthToDp('2'),
                            marginTop: heightToDp('1'),
                          }}>
                          <Text style={{color: '#000'}}>92 reviews</Text>
                        </View>
                      </View>
                      <View style={{marginTop: heightToDp('1')}}>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>
                          ₹199
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#a9a9a9',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Fiery Paneer,Jalapnenos,Black{'\n'}Olives,Sweet
                          Corn,Onions And{'\n'}Red Paprika Topped With{'\n'}
                          Mozzarella Cheese{' '}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View
                      style={{
                        borderWidth: 1,
                        height: heightToDp('6'),
                        width: widthToDp('30'),
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('8'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(255,246,247)',
                        borderColor: 'rgb(237,81,94)',
                        borderRadius: widthToDp('2'),
                      }}>
                      <Text
                        style={{
                          color: 'rgb(237,81,94)',
                          fontSize: widthToDp('5'),
                        }}>
                        ADD
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: '#191970',
              }}></Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setSand(!Sand)}>
              <View
                style={{
                  flexDirection: 'row',
                  height: heightToDp('7'),
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    marginStart: widthToDp('5'),
                  }}>
                  <Text style={{color: '#a9a9a9', fontSize: widthToDp('4.5')}}>
                    Sandwiches (2)
                  </Text>
                </View>
                <View
                  style={{justifyContent: 'center', marginEnd: widthToDp('3')}}>
                  {Sand == false ? (
                    <AntDesign name="caretdown" size={15} color={'#000'} />
                  ) : (
                    <AntDesign name="caretup" size={15} color={'#000'} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
            {Sand && (
              <View
                style={{
                  backgroundColor: '#fff',
                  marginBottom: heightToDp('4'),
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          marginStart: widthToDp('5'),
                          marginTop: heightToDp('3'),
                        }}>
                        <Image
                          source={RDLogo}
                          style={{
                            height: heightToDp('3'),
                            width: widthToDp('6'),
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: heightToDp('2.8'),
                          justifyContent: 'center',
                          marginTop: heightToDp('3'),
                          marginStart: widthToDp('3'),
                          width: widthToDp('19'),
                          backgroundColor: 'rgb(234,113,60)',
                          borderRadius: widthToDp('1.5'),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Bestseller
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('1'),
                      }}>
                      <Text style={{color: '#000', fontSize: widthToDp('4.5')}}>
                        Suppli Classico Pizza
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            borderWidth: 1,
                            width: widthToDp('24'),
                            height: heightToDp('3'),
                            marginTop: heightToDp('1'),
                            backgroundColor: 'rgb(255,255,237)',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star-o"
                            size={13}
                            color={'#000'}
                            style={{marginStart: widthToDp('1')}}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            marginStart: widthToDp('2'),
                            marginTop: heightToDp('1'),
                          }}>
                          <Text style={{color: '#000'}}>82 reviews</Text>
                        </View>
                      </View>
                      <View style={{marginTop: heightToDp('1')}}>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>
                          ₹169
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#a9a9a9',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Corn,Capsicum,Panner Topped{'\n'}With Mozzarella
                          Cheese
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View
                      style={{
                        borderWidth: 1,
                        height: heightToDp('6'),
                        width: widthToDp('30'),
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('8'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(255,246,247)',
                        borderColor: 'rgb(237,81,94)',
                        borderRadius: widthToDp('2'),
                      }}>
                      <Text
                        style={{
                          color: 'rgb(237,81,94)',
                          fontSize: widthToDp('5'),
                        }}>
                        ADD
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{alignItems: 'center', marginTop: heightToDp('3')}}>
                  <Text style={{color: '#a9a9a9'}}>
                    -----------------------------------------------------------------------------------
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          marginStart: widthToDp('5'),
                          marginTop: heightToDp('3'),
                        }}>
                        <Image
                          source={RDLogo}
                          style={{
                            height: heightToDp('3'),
                            width: widthToDp('6'),
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: heightToDp('2.8'),
                          justifyContent: 'center',
                          marginTop: heightToDp('3'),
                          marginStart: widthToDp('3'),
                          width: widthToDp('19'),
                          backgroundColor: 'rgb(234,113,60)',
                          borderRadius: widthToDp('1.5'),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Bestseller
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('1'),
                      }}>
                      <Text style={{color: '#000', fontSize: widthToDp('4.5')}}>
                        Veg Mexicano
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            borderWidth: 1,
                            width: widthToDp('24'),
                            height: heightToDp('3'),
                            marginTop: heightToDp('1'),
                            backgroundColor: 'rgb(255,255,237)',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star-o"
                            size={13}
                            color={'#000'}
                            style={{marginStart: widthToDp('1')}}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            marginStart: widthToDp('2'),
                            marginTop: heightToDp('1'),
                          }}>
                          <Text style={{color: '#000'}}>92 reviews</Text>
                        </View>
                      </View>
                      <View style={{marginTop: heightToDp('1')}}>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>
                          ₹199
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#a9a9a9',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Fiery Paneer,Jalapnenos,Black{'\n'}Olives,Sweet
                          Corn,Onions And{'\n'}Red Paprika Topped With{'\n'}
                          Mozzarella Cheese{' '}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View
                      style={{
                        borderWidth: 1,
                        height: heightToDp('6'),
                        width: widthToDp('30'),
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('8'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(255,246,247)',
                        borderColor: 'rgb(237,81,94)',
                        borderRadius: widthToDp('2'),
                      }}>
                      <Text
                        style={{
                          color: 'rgb(237,81,94)',
                          fontSize: widthToDp('5'),
                        }}>
                        ADD
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: '#191970',
              }}></Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setSub(!Sub)}>
              <View
                style={{
                  flexDirection: 'row',
                  height: heightToDp('7'),
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    marginStart: widthToDp('5'),
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: widthToDp('4.5'),
                      fontWeight: 'bold',
                    }}>
                    Sub (3)
                  </Text>
                </View>
                <View
                  style={{justifyContent: 'center', marginEnd: widthToDp('3')}}>
                  {Sub == false ? (
                    <AntDesign name="caretdown" size={15} color={'#000'} />
                  ) : (
                    <AntDesign name="caretup" size={15} color={'#000'} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
            {Sub && (
              <View
                style={{
                  backgroundColor: '#fff',
                  marginBottom: heightToDp('4'),
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          marginStart: widthToDp('5'),
                          marginTop: heightToDp('3'),
                        }}>
                        <Image
                          source={RDLogo}
                          style={{
                            height: heightToDp('3'),
                            width: widthToDp('6'),
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: heightToDp('2.8'),
                          justifyContent: 'center',
                          marginTop: heightToDp('3'),
                          marginStart: widthToDp('3'),
                          width: widthToDp('19'),
                          backgroundColor: 'rgb(234,113,60)',
                          borderRadius: widthToDp('1.5'),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Bestseller
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('1'),
                      }}>
                      <Text style={{color: '#000', fontSize: widthToDp('4.5')}}>
                        Suppli Classico Pizza
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            borderWidth: 1,
                            width: widthToDp('24'),
                            height: heightToDp('3'),
                            marginTop: heightToDp('1'),
                            backgroundColor: 'rgb(255,255,237)',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star-o"
                            size={13}
                            color={'#000'}
                            style={{marginStart: widthToDp('1')}}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            marginStart: widthToDp('2'),
                            marginTop: heightToDp('1'),
                          }}>
                          <Text style={{color: '#000'}}>82 reviews</Text>
                        </View>
                      </View>
                      <View style={{marginTop: heightToDp('1')}}>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>
                          ₹169
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#a9a9a9',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Corn,Capsicum,Panner Topped{'\n'}With Mozzarella
                          Cheese
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View
                      style={{
                        borderWidth: 1,
                        height: heightToDp('6'),
                        width: widthToDp('30'),
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('8'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(255,246,247)',
                        borderColor: 'rgb(237,81,94)',
                        borderRadius: widthToDp('2'),
                      }}>
                      <Text
                        style={{
                          color: 'rgb(237,81,94)',
                          fontSize: widthToDp('5'),
                        }}>
                        ADD
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{alignItems: 'center', marginTop: heightToDp('3')}}>
                  <Text style={{color: '#a9a9a9'}}>
                    -----------------------------------------------------------------------------------
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          marginStart: widthToDp('5'),
                          marginTop: heightToDp('3'),
                        }}>
                        <Image
                          source={RDLogo}
                          style={{
                            height: heightToDp('3'),
                            width: widthToDp('6'),
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: heightToDp('2.8'),
                          justifyContent: 'center',
                          marginTop: heightToDp('3'),
                          marginStart: widthToDp('3'),
                          width: widthToDp('19'),
                          backgroundColor: 'rgb(234,113,60)',
                          borderRadius: widthToDp('1.5'),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Bestseller
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('1'),
                      }}>
                      <Text style={{color: '#000', fontSize: widthToDp('4.5')}}>
                        Veg Mexicano
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            borderWidth: 1,
                            width: widthToDp('24'),
                            height: heightToDp('3'),
                            marginTop: heightToDp('1'),
                            backgroundColor: 'rgb(255,255,237)',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star-o"
                            size={13}
                            color={'#000'}
                            style={{marginStart: widthToDp('1')}}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            marginStart: widthToDp('2'),
                            marginTop: heightToDp('1'),
                          }}>
                          <Text style={{color: '#000'}}>92 reviews</Text>
                        </View>
                      </View>
                      <View style={{marginTop: heightToDp('1')}}>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>
                          ₹199
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#a9a9a9',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Fiery Paneer,Jalapnenos,Black{'\n'}Olives,Sweet
                          Corn,Onions And{'\n'}Red Paprika Topped With{'\n'}
                          Mozzarella Cheese{' '}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View
                      style={{
                        borderWidth: 1,
                        height: heightToDp('6'),
                        width: widthToDp('30'),
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('8'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(255,246,247)',
                        borderColor: 'rgb(237,81,94)',
                        borderRadius: widthToDp('2'),
                      }}>
                      <Text
                        style={{
                          color: 'rgb(237,81,94)',
                          fontSize: widthToDp('5'),
                        }}>
                        ADD
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{alignItems: 'center', marginTop: heightToDp('3')}}>
                  <Text style={{color: '#a9a9a9'}}>
                    -----------------------------------------------------------------------------------
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          marginStart: widthToDp('5'),
                          marginTop: heightToDp('3'),
                        }}>
                        <Image
                          source={RDLogo}
                          style={{
                            height: heightToDp('3'),
                            width: widthToDp('6'),
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: heightToDp('2.8'),
                          justifyContent: 'center',
                          marginTop: heightToDp('3'),
                          marginStart: widthToDp('3'),
                          width: widthToDp('19'),
                          backgroundColor: 'rgb(234,113,60)',
                          borderRadius: widthToDp('1.5'),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Bestseller
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('1'),
                      }}>
                      <Text style={{color: '#000', fontSize: widthToDp('4.5')}}>
                        Veg Mexicano
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            borderWidth: 1,
                            width: widthToDp('24'),
                            height: heightToDp('3'),
                            marginTop: heightToDp('1'),
                            backgroundColor: 'rgb(255,255,237)',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star-o"
                            size={13}
                            color={'#000'}
                            style={{marginStart: widthToDp('1')}}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            marginStart: widthToDp('2'),
                            marginTop: heightToDp('1'),
                          }}>
                          <Text style={{color: '#000'}}>92 reviews</Text>
                        </View>
                      </View>
                      <View style={{marginTop: heightToDp('1')}}>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>
                          ₹199
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#a9a9a9',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Fiery Paneer,Jalapnenos,Black{'\n'}Olives,Sweet
                          Corn,Onions And{'\n'}Red Paprika Topped With{'\n'}
                          Mozzarella Cheese{' '}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View
                      style={{
                        borderWidth: 1,
                        height: heightToDp('6'),
                        width: widthToDp('30'),
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('8'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(255,246,247)',
                        borderColor: 'rgb(237,81,94)',
                        borderRadius: widthToDp('2'),
                      }}>
                      <Text
                        style={{
                          color: 'rgb(237,81,94)',
                          fontSize: widthToDp('5'),
                        }}>
                        ADD
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: '#191970',
              }}></Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => setWrap(!Wrap)}>
              <View
                style={{
                  flexDirection: 'row',
                  height: heightToDp('7'),
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    marginStart: widthToDp('5'),
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: widthToDp('4.5'),
                      fontWeight: 'bold',
                    }}>
                    Wrap (1)
                  </Text>
                </View>
                <View
                  style={{justifyContent: 'center', marginEnd: widthToDp('3')}}>
                  {Wrap == false ? (
                    <AntDesign name="caretdown" size={15} color={'#000'} />
                  ) : (
                    <AntDesign name="caretup" size={15} color={'#000'} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
            {Wrap && (
              <View
                style={{
                  backgroundColor: '#fff',
                  marginBottom: heightToDp('4'),
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          marginStart: widthToDp('5'),
                          marginTop: heightToDp('3'),
                        }}>
                        <Image
                          source={RDLogo}
                          style={{
                            height: heightToDp('3'),
                            width: widthToDp('6'),
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: heightToDp('2.8'),
                          justifyContent: 'center',
                          marginTop: heightToDp('3'),
                          marginStart: widthToDp('3'),
                          width: widthToDp('19'),
                          backgroundColor: 'rgb(234,113,60)',
                          borderRadius: widthToDp('1.5'),
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Bestseller
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('1'),
                      }}>
                      <Text style={{color: '#000', fontSize: widthToDp('4.5')}}>
                        Suppli Classico Pizza
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            borderWidth: 1,
                            width: widthToDp('24'),
                            height: heightToDp('3'),
                            marginTop: heightToDp('1'),
                            backgroundColor: 'rgb(255,255,237)',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star"
                            size={13}
                            color={'rgb(244,191,15)'}
                            style={{marginStart: widthToDp('1')}}
                          />
                          <FontAwesome
                            name="star-o"
                            size={13}
                            color={'#000'}
                            style={{marginStart: widthToDp('1')}}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            marginStart: widthToDp('2'),
                            marginTop: heightToDp('1'),
                          }}>
                          <Text style={{color: '#000'}}>82 reviews</Text>
                        </View>
                      </View>
                      <View style={{marginTop: heightToDp('1')}}>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>
                          ₹169
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#a9a9a9',
                            fontSize: widthToDp('3.5'),
                          }}>
                          Corn,Capsicum,Panner Topped{'\n'}With Mozzarella
                          Cheese
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View
                      style={{
                        borderWidth: 1,
                        height: heightToDp('6'),
                        width: widthToDp('30'),
                        marginStart: widthToDp('5'),
                        marginTop: heightToDp('8'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(255,246,247)',
                        borderColor: 'rgb(237,81,94)',
                        borderRadius: widthToDp('2'),
                      }}>
                      <Text
                        style={{
                          color: 'rgb(237,81,94)',
                          fontSize: widthToDp('5'),
                        }}>
                        ADD
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <Text
              style={{
                fontSize: 1,
                borderBottomWidth: 1,
                color: '#191970',
              }}></Text>
          </View>
        </View>
      </ScrollView>
      {istotalItem > 0 && (
        <View style={Styles.bottombtn}>
          <View>
            <View style={{marginStart:widthToDp('2')}}>
              <Text style={{color:'#fff'}}>{istotalItem} ITEM</Text>
            </View>
            <View style={[Styles.horizontal]}>
              <Text style={{color:'#fff'}}>{istotalprice}</Text>
              <Text style={{color:'#fff'}}> plus taxes</Text>
            </View>
          </View>
          <View style={[Styles.horizontal]}>
            <TouchableOpacity onPress={()=>next()}>
            <Text style={{color:'#fff',fontSize:widthToDp('4')}}>Next</Text>
            </TouchableOpacity>
            <Icon name="caretright" color={'#fff'} size={15} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
