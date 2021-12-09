import React, { Component } from 'react'
import { Text, View ,StyleSheet, Image} from 'react-native'

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.appName}> Pizza Order </Text>
                <Image source={require("./../../assests/logo.jpg")} style={styles.image} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent :"center"
    },
    image : {
        width:"100%",
        height:250
    },
    appName : {
        textAlign :'center',
        fontSize: 45,
        fontWeight:"bold",
        marginBottom:30
    }
  });