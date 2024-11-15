import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import styles from '../styles';
import {useState} from "react";

export default function Form({addHandler}) {

    const [inputText, setValue] = useState("")

    const onChange = (inputText) => {
        setValue(inputText);
    }


    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="enter to-do task..." />
            <View style={styles.inputbtn}>
                <Button onPress={() => addHandler(inputText)} title={"add"} />
            </View>

        </View>
    );
}


