import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TodoItem({ pressHandlers, item }) {
  return (
    // <TouchableOpacity onPress={() => pressHandlers(item)}>
        <View style={styles.item}>
            <Text >{item.text}</Text>
            {/* <CheckBox
                   value={item.completed}
                   onValueChange={(newValue) =>{
                    
                    // setToggleCheckBox(newValue)
                    item.completed = newValue
                   }}
      
            /> */}
            <Icon name="delete" size={30} color="#900" 
            onPress ={
                console.log('TagMc',item.id)
            }
            />
      </View>
    // </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: 'row'
  }
});