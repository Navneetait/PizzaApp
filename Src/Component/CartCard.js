import React from 'react'
import { View, Text,StyleSheet, Image, TouchableOpacity} from 'react-native'

export default function Card({data ,add ,ind, minus}) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={{uri:data.image }} style={styles.cardImage} />
                <View style={styles.RightView}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.price}>{data.price * data.item}/-</Text>
                </View>
                <View style={styles.CountView}>
                    <TouchableOpacity onPress= {()=> add(ind)}><Text style={styles.count}>+</Text></TouchableOpacity>
                    <Text style={styles.count}>{data.item}</Text>
                    <TouchableOpacity onPress = {()=> minus(ind)}><Text style={styles.count}>-</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#f6f6f2",
        padding:20,
        marginVertical:10

    },
    cardImage: {
        width:"30%", 
        height:100
    },
    card : {
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    RightView :{
        width: "40%"
    },
    CountView: {
        backgroundColor:"lightgray",
        flexDirection: "column",
        // padding: 20,
        // paddingVertical: 10,
        paddingHorizontal: 20
    },
    count: {
        fontWeight:"bold",
        fontSize: 20,
        textAlign:"right",
        paddingTop:5
    },
    name: {
        fontWeight:"bold",
        fontSize: 19,
    },
    price : {
        fontWeight: "bold",
        fontSize: 20,
        marginTop:30
    },

})

