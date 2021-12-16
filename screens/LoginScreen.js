import React from 'react'
import {Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
//import { auth } from '../firebase'

const LoginScreen = ({navigation}) => {
    /*const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSingUp=()=>{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials=>{
            const user=userCredentials.user;
            console.log(user.email);
        })
        .catch(error=>alert(error.message))
    }*/
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Image 
            style={styles.logo}
            source = {{uri:'https://cdn-icons-png.flaticon.com/512/971/971620.png'}}/>
            <View style={styles.inputContainer}>
            
                <h1 >Ingresar</h1>
                <text>Correo:</text>
                <TextInput
                placeholder="nombre@dominio.com"
                //value={email}
                //onChangeText={text=> setEmail(text)}
                style={styles.input}
                />
                <text>Contraseña:</text>
                <TextInput
                placeholder="Ingresa tú contraseña"
                //value={password}
                //onChangeText={text=>setPassword(text)}
                style={styles.input}
                secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Home')}
                style={styles.button}
                >                    
                    <text style={styles.buttonText}>
                        Ingresar
                    </text>
                </TouchableOpacity>
               
            </View>
        </KeyboardAvoidingView>
        
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#e6f0fa',
    fontFamily:'roboto',
    },
    inputContainer:{
        width:'50%',
        

    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:10,
        borderColor:'#cfd1d3',
        borderWidth:'5',
    },
    buttonContainer:{
        width:'50%',
        justifyContent: 'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
        width:'100%',
        backgroundColor:'#909090',
        justifyContent: 'center',
        alignItems:'center',
        color:'white',
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:10,
        borderColor:'#cfd1d3',
        borderWidth:'5',
    },
    buttonOutline:{
        marginTop:100,
        marginLeft:'70%',
        fontWeight:'bold',
    },
    logo:{
        width:100,
        height:100
    }

})
