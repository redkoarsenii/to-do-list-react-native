import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

export default function ListItems({element, deleteHandler}) {
    return (
        <View style={styles.vievcontainer}>
            <TouchableOpacity style={styles.listitemscontainer} onPress={() => deleteHandler(element.key)}>
                <Text style={styles.listtextstyle}>{element.text}</Text>
            </TouchableOpacity>
        </View>

    );
}


