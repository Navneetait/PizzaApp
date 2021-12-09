import React, { Component } from 'react'
import { Text, View, Image ,StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Input from '../Component/input';
import firebase from 'firebase'

export default class Login extends Component {
    constructor(){ 
        super();
        this.state = {}
    }
    componentDidMount = ()=> {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {
                this.props.navigation.navigate("Home")
            }
        } )
    }
    _Login = ()=> {
        let {Email, Password} = this.state
        firebase.auth()
        .signInWithEmailAndPassword(Email,Password)
        .then(()=>{ 
                this.props.navigation.navigate("Home")
                alert("Login Success")}).catch(function (error) {
            alert(`Failed ${error.message}`)
        })
    }
    render() {
        let {Email, Password}= this.state
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView>
                <Image source={require("./../../assests/pizalogo.jpg")} style={styles.image} />
                <Input placeholder = "Email"  security = {false} onChangeText= {(Text)=> this.setState({Email: Text})}/>
                <Input placeholder = "Password" security = {true} onChangeText= {(Text)=> this.setState({Password: Text})}/>
                <TouchableOpacity style={styles.login} disabled={Email && Password ? false : true
                }
                onPress= {()=>this._Login()}
                >
                    <Text style={styles.login_Text}>Login</Text>
                </TouchableOpacity>
                <View style={styles.ButtonView}>
                <TouchableOpacity style={styles.facebook}>
                    <Text style={styles.facebook_Text}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.google}>
                    <Text style={styles.google_Text}>Google</Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.lastView} onPress={()=> this.props.navigation.navigate("Signup")}>
                    <Text style={styles.lastText}>
                        Don't have account? SignUp
                    </Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
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
        marginTop:50
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
        padding:15
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
