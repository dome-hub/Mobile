import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity ,Image} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Home Screen </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {
                greetings: "Hello Mootoo 😊",
                id: '001',
                
            })}>
        
                <View style={styles.button}>
                    <Text style={styles.buttonText}> go to Detail </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'lightsalmon',
        width: 125,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        elevation: 6, //android
        borderRadius: 12
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default HomeScreen
