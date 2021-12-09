import React from 'react'
import { View, Text ,StyleSheet } from 'react-native'

export default function ThanksScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.placed}>Your Order Has Been Placed</Text>
            <Text style={styles.thanks}>Thanks</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    placed : {
        fontSize: 40,
        fontWeight:"bold",
        textAlign:"center",
        width: "80%"
    },
    thanks: {
        fontSize: 35,
        marginTop:100,
        fontWeight:"bold"
    }
})