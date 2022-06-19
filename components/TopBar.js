import React from 'react-native';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5, FontAwesome} from '@expo/vector-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function TopBar(){
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <FontAwesome5 
                    name ="home" 
                    size={30} 
                    color="#00ced1">
                    
                    </FontAwesome5>
            </TouchableOpacity>

            <FontAwesome5 name ="filter" size={30} color="#00ced1"></FontAwesome5>
            <FontAwesome5 name ="search" size={30} color="#00ced1"></FontAwesome5>
            <FontAwesome name ="comments" size={30} color="#00ced1"></FontAwesome>
            <FontAwesome name ="animal" size={30} color="#00ced1"></FontAwesome>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9
    }
})