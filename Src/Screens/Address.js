import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import firebase from 'firebase'
export default class Address extends Component {
    constructor(){ 
        super()
        this.state = {

        }
    }

    GetInputValue = (Text, Value)=> {
        this.setState({
            [Value]: Text
        })
    }
    placeOrder = ()=> {
        let {ordersList} = this.props.route.params
        firebase.database().ref("/").child(`orders/${this.state.uid}`).push({
            OrderProduct: ordersList,
            address: this.state
        }).then(()=> {
            this.props.navigation.navigate("Thanks")
        })


    }

    componentDidMount = ()=> {
        firebase.auth().onAuthStateChanged((user)=> {
            this.setState({
                uid: user.uid
            })
        })
    }
    render() {
        console.log(this.state)
        return (
            <ScrollView >
            <View style={styles.container}>
                <Text style={styles.title}> Address Detail </Text>
                <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder="Name" onChangeText = {(Text)=>this.GetInputValue(Text, "Name") }/>
                <TextInput style={styles.input} keyboardType="email-address" placeholder= "Email" onChangeText = {(Text)=>this.GetInputValue(Text, "Email") }/>
                <TextInput style={styles.input} placeholder="Street No" onChangeText = {(Text)=>this.GetInputValue(Text, "Streat_No") }/>
                <TextInput style={styles.input} placeholder="Suburb/ City" onChangeText = {(Text)=>this.GetInputValue(Text, "City") }/>
                <TextInput style={styles.input} keyboardType="number-pad" placeholder= "Post Code" onChangeText = {(Text)=>this.GetInputValue(Text, "Post_Code") }/>
                <TextInput style={styles.input} keyboardType="name-phone-pad" placeholder= "Mobile No" onChangeText = {(Text)=>this.GetInputValue(Text, "Mobile_No") }/>
                <TouchableOpacity style={styles.contiue} onPress= {() => this.placeOrder()}>
                    <Text style={styles.contiueText}>Continue</Text>
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        )

    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    inputView :{
        paddingHorizontal: 10
    },
    title: {
        fontSize:25,
        marginTop:10
    },
    input: {
        borderBottomWidth:1,
        fontSize:20,
        fontWeight:"bold",
        marginVertical: 10
    },
    contiue: {
        backgroundColor: "#33af32",
        marginTop:150,
        padding: 10
    },
    contiueText: {
        fontSize: 20,
        color:"white",
        fontWeight:"bold",
        textAlign:"center"
    }
})