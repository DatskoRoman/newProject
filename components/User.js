import {Text, View} from "react-native";
import React from 'react';
import { StyleSheet } from 'react-native';


const User = ({item}) => {
    return <View style={[styles.userBox, styles.margins, styles.sizes]}>
        <Text style={[styles.align]}> {item.name}</Text>
        </View>;
}

export default User;

let styles = StyleSheet.create({
    userBox:{
        flex: 1,
        backgroundColor: 'gold',

    },
    margins: {
        marginBottom: 3,
    },
    sizes:{
        width: '70%',
        height: 100
    },
    align: {
        textAlign: "center"
    }
});