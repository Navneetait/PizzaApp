import React from 'react'
import { View, Text,StyleSheet, Image, TouchableOpacity} from 'react-native'

export default function Card({data, AddOrder}) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={{uri:data.image }} style={styles.cardImage} />
                <View style={styles.RightView}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.price}>{data.price}/-</Text>

                <TouchableOpacity style={styles.add_Button} onPress= {()=>AddOrder(data) }>
                    <Text style={styles.addText}>Add</Text>
                </TouchableOpacity>
                </View>
            </View>
                <Text style={styles.description}>{data.description}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 20,
        borderBottomColor: "gray",
        borderBottomWidth: 1
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
        alignContent: "flex-end",
        width: "40%"
    },
    name: {
        fontWeight:"bold",
        fontSize: 19,
        textAlign:"right"
    },
    price : {
        fontWeight: "bold",
        fontSize: 20,
        textAlign:"right",
        marginTop:20
    },
    add_Button :{
        borderWidth: 1,
        borderColor:"gray",
        width: "60%",
        alignSelf: 'flex-end',
        padding:5,
        borderRadius: 5
    },
    addText : {
        textAlign:"center",
        color:"#43bcde",
        fontWeight:"bold"
    },
    description :{
        fontSize:18,
        fontWeight:"bold",
        padding:10
    }
})

