import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return(
        <View style = {styles.header}>
            <Text style = {styles.title}>TO Do App</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header : {
        height : 80,
        paddingTop : 38,
        backgroundColor : 'blue'

    },
title : {
    color : 'white',
    fontSize: 20,
    fontWeight :'bold',
     paddingStart: 25
}
});
