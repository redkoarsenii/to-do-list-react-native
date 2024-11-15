import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ListItemContainer: {
      backgroundColor: 'darkgrey',
    },
    textstyle:{
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        textAlign: 'center',
        color: 'white',
    },
    listtextstyle:{
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        textAlign: 'center',
        color: 'white',
        backgroundColor: "grey",
        borderRadius: 15,
        padding: 20,
    },
    listitemscontainer: {
        marginTop: 25,
        width: 200
    },
    vievcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginHorizontal: "auto",
        marginTop: 20,
        width: '60%'
    },
    inputbtn:{
        marginHorizontal: "auto",
        marginTop: 20,
        width: '60%'
    }
});

export default styles;
