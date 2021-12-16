import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView
            style={styles.header}
            behavior="padding"
        >
            <Image 
            style={styles.userlogo}
            source={{uri:'https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1635996533~hmac=3ee180f18c29d5f9c730a1341002e310'
            }}/>
            <View style={styles.DisplayTexto}>
            
            <h3>¡Nos da gusto verte de nuevo Ariana!</h3>
            </View>

            
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Dialisis')}
                style={styles.buttonDialisis}
                >                    
                    <text style={styles.buttonText}>
                        Iniciar Dialisis
                    </text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Calendario')}
                style={styles.buttonCalendario}
                >                    
                    <text style={styles.buttonText}>
                        Calendario
                    </text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>navigation.navigate('FAQs')}
                style={styles.buttonFAQS}
                >                    
                    <text style={styles.buttonText}>
                        FAQs
                    </text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>navigation.navigate('Sumario')}
                style={styles.buttonSUM}
                >                    
                    <text style={styles.buttonText}>
                        Sumario
                    </text>
                </TouchableOpacity>
                

                <TouchableOpacity
                onPress={()=>navigation.navigate('Emergencia')}
                style={styles.buttonEmergencia}
                >                    
                    <text style={styles.buttonText}>
                        Números de Emergencia
                    </text>
                </TouchableOpacity>

            </View>
            </KeyboardAvoidingView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header:{

        backgroundColor:'#e6f0fa',
        fontFamily:'roboto',
    },
    userlogo:{
        marginLeft:5,
        marginTop:5,
        width:50,
        height:50,
    },
    DisplayTexto:{
        marginLeft:80,
        marginTop:-50,
        justifyContent: 'right-top',
        alignItems:'top',
    },

    buttonDialisis:{
        paddingHorizontal:15,
        paddingVertical:20,
        position:'absolute',
        marginTop:'15%',
        marginLeft:'10%',
        borderRadius:'15',
        backgroundColor:'#C6D337'
    },
    buttonCalendario:{
        paddingHorizontal:20,
        paddingVertical:20,
        position:'absolute',
        marginTop:'15%',
        marginLeft:'50%',
        borderRadius:'15',
        backgroundColor:'#179A9D'
    },
    buttonFAQS:{
        paddingHorizontal:40,
        paddingVertical:20,
        position:'absolute',
        marginTop:'40%',
        marginLeft:'10%',
        borderRadius:'5',
        backgroundColor:'#F8D210'
    },
    buttonSUM:{
        paddingHorizontal:30,
        paddingVertical:23,
        position:'absolute',
        marginTop:'40%',
        marginLeft:'50%',
        borderRadius:'5',
        backgroundColor:'#ECF87F'
    },
    buttonEmergencia:{
        position:'absolute',
        paddingHorizontal:10,
        paddingVertical:10,
        marginTop:'70%',
        marginLeft:'20%',
        borderRadius:'5',
        backgroundColor:'#EF4526'

    }

})
