import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.textstyle}>To-do List!</Text>
        </View>
    );
}


