import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'

const SumarioScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >   
        <Image 
        style={styles.logo}
        source = {{uri:'https://cdn-icons-png.flaticon.com/512/4069/4069776.png'}}/>
        
            <h3>¿Qué es la diálisis?</h3>
             <View style={styles.buttonContainer}>
             
             <TouchableOpacity
                    //onPress={()=>navigation.navigate('Home')}
                    style={styles.button}
                    >                    
                        
                        <text>
                        La diálisis es el proceso artificial mediante el cual se 
                        extraen los productos de desecho y el exceso de agua del organismo. 
                        Este proceso es necesario cuando los riñones no funcionan correctamente.
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

export default SumarioScreen

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
        marginTop:5,
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
    },
    logo:{
        width:100,
        height:100
    }
})