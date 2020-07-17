import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


// const GoalItem = props => {
//     return ...GoalItem;
// }

function GoalItem(props){
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} activeOpacity={0.5}>
            <View  style={styles.view}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
      }
});

export default GoalItem;