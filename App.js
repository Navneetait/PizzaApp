import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  LogBox
} from 'react-native';
import SplashScreen from './Src/Screens/SplashScreen';
import SignUp from './Src/Screens/Signup';
import PaymentMethod from './Src/Screens/paymentMothod';
import Address from './Src/Screens/Address';
import ThanksScreen from './Src/Screens/ThanksScreen';
import Navigation from './Src/Config/navigation';
import firebase from "firebase";
import "firebase/firestore"
import config from "./Src/Config/firebase";
//for ignore yellow box
LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.firestore().settings({ experimentalForceLongPolling: true }); //add this..

}


const App = () => {
  let [ loading, setLoading] = useState(false)
  setTimeout(()=> {
    setLoading(true)
  }, 20)
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar  />
      {loading ? <Navigation /> :
      <SplashScreen />
      }
    </SafeAreaView>
  );
};



export default App;
