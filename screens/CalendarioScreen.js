import React from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'

const CalendarioScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >   
    <Image 
    style={styles.logo}
    source = {{uri:'https://cdn-icons-png.flaticon.com/512/2927/2927067.png'}}/>
    
        <h3>Diálisis del día 04/11/21</h3>
         <View style={styles.buttonContainer}>
         
         <TouchableOpacity
                //onPress={()=>navigation.navigate('Home')}
                style={styles.button}
                >                    
                    <Image 
                        style={styles.logo2}
                        source = {{uri:'https://cdn-icons-png.flaticon.com/512/862/862032.png'}}/>
                    <text>
                    Insumos
                    </text>
        </TouchableOpacity>
        <TouchableOpacity
                //onPress={()=>navigation.navigate('Home')}
                style={styles.button}
                >                    
                    <Image 
                        style={styles.logo2}
                        source = {{uri:'https://cdn-icons-png.flaticon.com/512/272/272340.png'}}/>
                    <text>
                    Incidentes
                    </text>
        </TouchableOpacity>
        <TouchableOpacity
                //onPress={()=>navigation.navigate('Home')}
                style={styles.button}
                >                    
                    <Image 
                        style={styles.logo2}
                        source = {{uri:'https://cdn-icons-png.flaticon.com/512/1450/1450338.png'}}/>
                    <text>
                    Observaciones
                    </text>
        </TouchableOpacity>
        <TouchableOpacity
                //onPress={()=>navigation.navigate('Home')}
                style={styles.buttonNext}
                >                    
                    <text style={styles.buttonText}>
                        Registrar
                    </text>
            </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Home')}
                style={styles.buttonBack}
                >                    
                    <text style={styles.buttonText}>
                        Regresar
                    </text>
                </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    )
}

export default CalendarioScreen

const styles = StyleSheet.create({container:{  
    flex:1,
justifyContent: 'center',
alignItems:'center',
backgroundColor:'#e6f0fa',
fontFamily:'roboto',
},
buttonContainer:{
    width:'50%',
    justifyContent: 'center',
    alignItems:'center',
    marginTop:5,
},
button:{
    width:'100%',
    backgroundColor:'#98ff96',
    justifyContent: 'center',
    alignItems:'center',
    color:'black',
    borderRadius:10,
    paddingHorizontal:5,
    paddingVertical:5,
    borderColor:'#cfd1d3',
    borderWidth:'5',
    marginTop:10,
},
buttonNext:{
    width:'100%',
    backgroundColor:'#5ccb5f',
    justifyContent: 'center',
    alignItems:'center',
    color:'black',
    borderRadius:10,
    paddingHorizontal:5,
    paddingVertical:5,
    borderColor:'#cfd1d3',
    borderWidth:'5',
    marginTop:15,
},
buttonBack:{
    width:'100%',
    backgroundColor:'#B3D936',
    justifyContent: 'center',
    alignItems:'center',
    color:'black',
    borderRadius:10,
    paddingHorizontal:5,
    paddingVertical:5,
    borderColor:'#cfd1d3',
    borderWidth:'5',
    marginTop:15,
},
logo:{
    width:100,
    height:100
},
logo2:{
    width:30,
    height:30,
    marginLeft:5,
}})
