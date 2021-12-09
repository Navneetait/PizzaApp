import React, { Component } from 'react'
import { Text, View ,StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Card from '../Component/CartCard';


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
    }
]

export default class Cart extends Component {
    constructor () {
        super()
        this.state = {
            totalAmount : 0,
            ordersList: []
        }
    }


    componentDidMount = () => {
        let {orders} = this.props.route.params
        let {totalAmount  }= this.state

        orders.length > 0 && orders.map((v, i)=> {
            console.log(v.item)
            totalAmount += v.price * v.item
        })
        this.setState({totalAmount: totalAmount, ordersList: orders})
    } 

    add = (ind)=> {
        let {ordersList, totalAmount} = this.state
        ordersList[ind].item = ordersList[ind].item  +1
        totalAmount += ordersList[ind].price
        this.setState({ordersList: ordersList, totalAmount: totalAmount})
    }

    minus = (ind)=> {
        let {ordersList, totalAmount} = this.state
        if(ordersList[ind].item > 1) {
        ordersList[ind].item = ordersList[ind].item  - 1
        totalAmount -= ordersList[ind].price
        this.setState({ordersList: ordersList, totalAmount: totalAmount})
        }
    }


    render() {
        let {totalAmount ,ordersList} = this.state
        return (
            <ScrollView style={{paddingBottom:30}}>
            <View style={styles.container}>
                {ordersList.length > 0 && ordersList.map((v,i)=> 
                <Card key={i} ind = {i} data= {v} minus = {this.minus} add = {this.add}/>
                )}
            <View style={styles.totalView}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalPrice}>{totalAmount}$</Text>
            </View>
            <TouchableOpacity style={styles.checkout} onPress= {()=> this.props.navigation.navigate("PaymentMethod", {ordersList: ordersList})}>
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
        paddingHorizontal:10
    },
    title : {
        width:"90%",
        marginTop:20,
        fontSize:45,
        // fontWeight:"bold"
    },
    total : {
        fontSize: 25,
        fontWeight: "bold"
    },
    totalPrice : {
        fontSize: 25,
        fontWeight: "bold",
    
    },
    totalView : {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 100
    },
    checkout: {
        alignSelf:"center",
        backgroundColor:"lightblue",
        padding:10
    },
    checkouttext :{
        fontSize: 30
    }
  });
