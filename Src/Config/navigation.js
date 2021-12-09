import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Address, Login, PaymentMethod, Signup, ThanksScreen, Cart} from './../Screens/index'
import firebase from 'firebase';
const Stack = createNativeStackNavigator();

function Navigation() {

  let logout = (navigation)=> {
    console.log(navigation)
    firebase.auth().signOut().then(()=> navigation.navigate("Login"))
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Login">
        <Stack.Screen name="Login" component={Login}  options= {{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} options= {{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} 
        	options={({route,navigation})=> ({
              headerStyle: {
                backgroundColor: "lightwhite",
                shadowColor: "transparent",
                },
                headerTitle: ()=> <View style={{width:"70%"}}><Text style={{textAlign:"center", fontWeight:"bold", fontSize: 18}}>Menu</Text></View>,
                headerRight: () => <View><Text style={{ fontWeight:"bold", fontSize: 18}}>Order</Text></View>,
                headerLeft: () => <TouchableOpacity  onPress= {()=>logout(navigation)}>
                  <Text style={{color:"blue", fontSize: 18}}>Logout</Text>
                  </TouchableOpacity>,
                animationEnabled: false,
                headerBackVisible: false
            })}
        />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} options= {{
           headerStyle: {
            backgroundColor: '#85c3f9',
            titlecolor: "white"
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:"white",
            fontSize:25
          },
          headerTintColor: "white"
        }}/>
        <Stack.Screen name="Thanks" component={ThanksScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const unqueueHeaderOptions = {
	headerStyle: {
		backgroundColor: "lightwhite",
		shadowColor: "transparent",
	},
	headerTitle: () => _renderHeaderTitle(),
	headerTintColor: "lightgray",
};

const _renderHeaderTitle = () => (
	<Text style={{ fontSize: 28, color: "white" }}>
		<Text style={{ fontSize: 28 }}>un</Text>queue
		<Text>.</Text>
	</Text>
);


export default Navigation;