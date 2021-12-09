import React, { Component } from 'react'
import { Text, View ,StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import Card from '../Component/Card';


let AllPizza = [
    {   
        id: 1,
        name: "Chicken Tikka",
        image : "https://ph-web-bucket.s3.us-east-2.amazonaws.com/data/img/products/images/111-1627418162-chicken-tikka.jpeg",
        price: 200,
        description : "A specially developed recipe for Pakistan topped with spicy chicken tikka & onions."
    },
    {
        id: 2,
        name: "Chicken Fajita",
        image : "https://ph-web-bucket.s3.us-east-2.amazonaws.com/data/img/products/images/132-1627418066-Fajita-Sicilian.jpeg",
        price: 300,
        description : "Special marinated chicken, onions, green peppers with special herbs and spices."
    },
    {
        id: 3,
        name: "Very Veggie",
        image : "https://ph-web-bucket.s3.us-east-2.amazonaws.com/data/img/products/images/111-1627418162-chicken-tikka.jpeg",
        price: 250,
        description : "Tomatoes, Onions & Green Pepper"
    },
    {
        id: 4,
        name: "Creamy Melt",
        image : "https://ph-web-bucket.s3.us-east-2.amazonaws.com/data/img/products/images/81-1630139426-Creamy-Melt.jpg",
        price: 200,
        description : "Creamy goodness with spicy chicken chunks, onions and bell pepper for your taste buds."
    }
]

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            allOrder: [],
            headerFunc : this.cart_Image
        }

   
    }

    
    static getDerivedStateFromProps = (props, state) =>  {
        console.log(state)
        props.navigation.setOptions({ 
            headerRight: () => state.headerFunc()
    })
    return true
    } 

cart_Image = ()=> {
  return  <TouchableOpacity onPress= {()=> this.props.navigation.navigate("Cart", {orders: this.state.allOrder})}>
  <Image source={require("./../../assests/cart.png")} style={styles.cartImage} />
  <Text style={styles.order}>{this.state.allOrder.length}</Text>
</TouchableOpacity>
  }

  AddOrder = (v)=> {
      let {allOrder} = this.state
      let flag = false
      if(allOrder.length > 0){
      allOrder.map((val, i)=> {
        if(val.id  === v.id ) {
            flag = true
            allOrder[i].item = val.item + 1;
            this.setState({allOrder: allOrder})
      }
    })
}
if(allOrder.length > 0 && flag === false) {
    v.item = 1
    allOrder.push(v)
    this.setState({allOrder: allOrder})
}
if(allOrder.length === 0) {
    v.item = 1
    allOrder.push(v)
    this.setState({allOrder: allOrder})
}
  }
    render() {
        console.log(this.state.allOrder.length)
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}> Chose your Pizza </Text>
                {AllPizza.map((v,i)=> 
                <Card key={i} data= {v} AddOrder= {this.AddOrder}/>
                )}
            </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:30
    },
    title : {
        textAlign: "center",
        backgroundColor: "lightgray",
        padding:15,
        width:"90%",
        alignSelf:"center",
        marginTop:20,
        fontSize:30,
        fontWeight:"bold"
    },
    cartImage : {
        width:40, height:40,
        position:"relative"
    },
    order :{
        backgroundColor: "white",
        position: "absolute",
        left:15,
        top: -10,
        width:30,
        textAlign:"center",
        padding: 5,
        borderRadius:50,
        fontSize:18,
        fontWeight: "bold",
        elevation:1
    }
  });
