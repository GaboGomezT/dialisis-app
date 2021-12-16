import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const FaqsScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
         <h3>Preguntas Frecuentes</h3>
        
         <View style={styles.buttonContainer}>
                <TouchableOpacity
                //onPress={()=>navigation.navigate('Home')}
                style={styles.button}
                >                    
                    <text style={styles.buttonText}>
                        Pregunta    1
                    </text>
                </TouchableOpacity>
               
                <TouchableOpacity
                //onPress={()=>navigation.navigate('Home')}
                style={styles.button}
                >                    
                    <text style={styles.buttonText}>
                        Pregunta    2
                    </text>
                </TouchableOpacity>
                <TouchableOpacity
                //onPress={()=>navigation.navigate('Home')}
                style={styles.button}
                >                    
                    <text style={styles.buttonText}>
                        Pregunta    3
                    </text>
                </TouchableOpacity>
                <TouchableOpacity
                //onPress={()=>navigation.navigate('Home')}
                style={styles.button}
                >                    
                    <text style={styles.buttonText}>
                        Pregunta    5
                    </text>
                </TouchableOpacity>
                <TouchableOpacity
                //onPress={()=>navigation.navigate('Home')}
                style={styles.button}
                >                    
                    <text style={styles.buttonText}>
                        Pregunta    6
                    </text>
                </TouchableOpacity>
                <TouchableOpacity
                //onPress={()=>navigation.navigate('Home')}
                style={styles.button}
                >                    
                    <text style={styles.buttonText}>
                        Pregunta    7
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

export default FaqsScreen

const styles = StyleSheet.create({
    container:{  
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
        marginTop:40,
    },
    button:{
        width:'100%',
        backgroundColor:'#BEBEBE',
        justifyContent: 'center',
        alignItems:'center',
        color:'black',
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:10,
        borderColor:'#cfd1d3',
        borderWidth:'5',
        marginTop:10,
    },
    buttonBack:{
        width:'100%',
        backgroundColor:'#B3D936',
        justifyContent: 'center',
        alignItems:'center',
        color:'black',
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:10,
        borderColor:'#cfd1d3',
        borderWidth:'5',
        marginTop:15,
    }
})
