import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash_Screen from '../../Pages/Splash_Screen/Splash_Screen';
import MenuList from '../../Pages/MenuList/MenuList';
import MenuContent from '../../Pages/MenuContent/MenuContent';
import Reservation from '../../Pages/Reservation/Reservation';
import Order_History from '../../Pages/Order_History/Order_History';
import HelpSupport from '../../Pages/Help_And_Support/Help_And_Support';
import About from '../../Pages/About/About';
import MyProfile from '../../Pages/MyProfile/MyProfile';
import ViewOrder from '../../Pages/Order_History/ViewOrder/ViewOrder';
import Restaurant_Info from '../../Pages/Restaurant_Info/Restaurant_Info';
import AbstractLink from '../../Pages/About/AbstractLink';
import Total from '../../Pages/Total/Total';
import SignIn_UpScreen from '../../Pages/SignIn_SignUpScreen/SignIn_UpScreen';
import SignUpScreen from '../../Pages/SignUpScreen/SignUpScreen';
import HomeScreen from '../../Pages/HomePage/HomeScreen';
import BookTable from '../../Pages/BookTable/BookTable';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function MainNavigation() {

const MenuNavigation = ()=>{
    return(
        <Drawer.Navigator drawerContent={props=><MenuContent {...props} />}>
        <Drawer.Screen name="Menu" component={MenuList} options={{headerShown:false}} />
        <Drawer.Screen name="RS" component={Reservation} options={{headerShown:false}} />
        <Drawer.Screen name="Order" component={Order_History} options={{headerShown:false}} />
        <Drawer.Screen name="Help" component={HelpSupport} options={{headerShown:false}} />
        <Drawer.Screen name="About" component={About} options={{headerShown:false}} /> 
        <Drawer.Screen name="My_Profile" component={MyProfile} options={{headerShown:false}} /> 
      </Drawer.Navigator>
    )
}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Splash_Screen"
         component={Splash_Screen}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Menu"
         component={MenuNavigation}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="View"
         component={ViewOrder}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Info"
         component={Restaurant_Info}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Link"
         component={AbstractLink}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Total"
         component={Total}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="SignIn_Up"
         component={SignIn_UpScreen}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="SignUp"
         component={SignUpScreen}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Home_Screen"
         component={HomeScreen}
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name="Book"
         component={BookTable}
         options={{headerShown:false}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  )
}