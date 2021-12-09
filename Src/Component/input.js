import React from 'react'
import { View, Text,TextInput ,StyleSheet} from 'react-native'

export default function Input({placeholder, security, onChangeText}) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} secureTextEntry= {security} onChangeText={(Text)=> onChangeText(Text, placeholder) }/>
        </View>
    )
}



const styles = StyleSheet.create({

    input : {
        borderWidth:1,
        borderColor:"gray",
        alignSelf:"center",
        width:"100%",
        textAlign:"center",
        marginVertical: 10
    },
    });
