import React, { Component } from 'react'
import { Text, View, Image ,StyleSheet, TouchableOpacity } from 'react-native'
import Input from '../Component/input';
import firebase from 'firebase'

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
        }

    }

    _getInputValue = (text, value)=> {
        this.setState({
            [value]: text
        })
    }
    _Signup = ()=> {
        let {Name, Email, Password} = this.state
                firebase.auth()
                .createUserWithEmailAndPassword(Email,Password)
                .then((res) => {
                    console.log(res.user.uid)
                    firebase.database().ref('/').child(`user/${res.user.uid}`).set({
                        name :Name,email: Email
                    }).then(()=>{ 
                        this.props.navigation.navigate("Home")
                        alert("Signup Success")}).catch((error)=>alert(`error ${ error.message}`))
                })
                .catch(function (error) {
                    alert(`Failed ${error.message}`)
                })
            }
    render() {
        let {Name, Email, Password} = this.state
        return (
            <View style={styles.container}>
                <Image source={require("./../../assests/pizalogo.jpg")} style={styles.image} />
                <Input placeholder = "Name" security = {false} onChangeText = {this._getInputValue}/>
                <Input placeholder = "Email"  security = {false} onChangeText = {this._getInputValue}/>
                <Input placeholder = "Password" security = {true} onChangeText = {this._getInputValue}/>
                <TouchableOpacity style={styles.login}
                 disabled = {Name && Email && Password ? false : true} 
                 >
                    <Text style={styles.login_Text} onPress={()=> this._Signup()}>Signup</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.lastView} onPress={()=> this.props.navigation.navigate("Login")}>
                    <Text style={styles.lastText}>
                        Already have account? Login
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:20
    },
    image : {
        width:"45%",
        height:160,
        alignSelf:"center",
        marginVertical:50
    },
    appName : {
        textAlign :'center',
        fontSize: 45,
        fontWeight:"bold",
        marginBottom:30
    },
    login : {
        width: "100%",
        backgroundColor: "#43bcde",
        alignSelf: "center",
        padding:15,
        marginVertical: 10

    },
    login_Text : {
        color:"white",
        fontWeight:"bold",
        textAlign: "center",
        fontSize:20
    },
    google: {
        flex: 1,
        backgroundColor: "#b14c21",
        height:55,
        marginVertical:15,
        marginLeft:20,
        paddingTop:15

    },
    google_Text : {
        color:"white",
        fontWeight:"bold",
        textAlign: "center",
        fontSize:20
    },
    facebook: {
        flex: 1,
        backgroundColor: "#2f6b94",
        height:55,
        marginVertical:15,
        // marginHorizontal: 20,
        paddingTop:15
    },
    facebook_Text : {
        color:"white",
        fontWeight:"bold",
        textAlign: "center",
        fontSize:20,
        justifyContent: "center"
    },
    ButtonView : {
        flex:1,
        flexDirection: "row"
    },
    lastView : {
        flex:1,
        justifyContent:"center"
    },
    lastText: {
        textAlign: "center",
        fontSize:17,
        color:"#43bcde",
        fontWeight:"bold"
    }
  });
