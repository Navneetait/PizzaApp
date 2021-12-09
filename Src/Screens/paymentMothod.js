import React, { Component } from 'react'
import { Text, View ,StyleSheet, ScrollView ,TouchableOpacity} from 'react-native'
import Card from '../Component/Card';
import { CreditCardInput, LiteCreditCardInput } from "react-native-input-credit-card";



let AllPizza = [
    {
        name: "Chicken Tikka",
        image : "https://ph-web-bucket.s3.us-east-2.amazonaws.com/data/img/products/images/111-1627418162-chicken-tikka.jpeg",
        price: 200,
        description : "A specially developed recipe for Pakistan topped with spicy chicken tikka & onions."
    },
    {
        name: "Chicken Fajita",
        image : "https://ph-web-bucket.s3.us-east-2.amazonaws.com/data/img/products/images/132-1627418066-Fajita-Sicilian.jpeg",
        price: 300,
        description : "Special marinated chicken, onions, green peppers with special herbs and spices."
    },
    {
        name: "Very Veggie",
        image : "https://ph-web-bucket.s3.us-east-2.amazonaws.com/data/img/products/images/111-1627418162-chicken-tikka.jpeg",
        price: 250,
        description : "Tomatoes, Onions & Green Pepper"
    },
    {
        name: "Creamy Melt",
        image : "https://ph-web-bucket.s3.us-east-2.amazonaws.com/data/img/products/images/81-1630139426-Creamy-Melt.jpg",
        price: 200,
        description : "Creamy goodness with spicy chicken chunks, onions and bell pepper for your taste buds."
    }
]

export default class PaymentMethod extends Component {
 
// will print:
// {
//   valid: true, // will be true once all fields are "valid" (time to enable the submit button)
//   values: { // will be in the sanitized and formatted form
//   	number: "4242 4242",
//   	expiry: "06/19",
//   	cvc: "300",
//   	type: "visa", // will be one of [null, "visa", "master-card", "american-express", "diners-club", "discover", "jcb", "unionpay", "maestro"]
//   	name: "Sam",
//   	postalCode: "34567",
//   },
//   status: {  // will be one of ["incomplete", "invalid", and "valid"]
//     number: "incomplete",
//     expiry: "incomplete",
//     cvc: "incomplete",
//     name: "incomplete", 
//     postalCode: "incomplete",
//   },
// };
    render() {
        _onChange => form => alert("jndjn")
        let {ordersList} = this.props.route.params


        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.paymentCard}>
                <CreditCardInput onChange={this._onChange} />
                </View>
                <TouchableOpacity style={styles.checkout} onPress= {()=> this.props.navigation.navigate("Address", {ordersList: ordersList})}>
                <Text style={styles.checkouttext}>Checkout</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
    },
  
    paymentCard :{
        marginTop:40
    },
    checkout: {
        flex:1,
        backgroundColor:"#33af32",
        padding:20,
        width:"100%",
        marginTop:150
    },
    checkouttext :{
        fontSize: 30,
        color:"white",
        textAlign:"center"

    }
  });
