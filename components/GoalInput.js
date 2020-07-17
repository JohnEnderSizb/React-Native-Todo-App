import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native';



function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState("");

    const inputHandler = (data) => {
        setEnteredGoal(data);
    }

    function addGoalHandler(){
        // () => props.onAddGoal(enteredGoal)
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    

    return (<Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={inputHandler}
                value={enteredGoal}
            />
            <View style={styles.buttonDiv}>
                <View style={styles.button}>
                    <Button title="CANCEL" color="red" onPress={props.onCancel} />
                </View>
                <View style={styles.button}>
                    <Button title="ADD" onPress={addGoalHandler} />
                </View>
                
            </View>
        </View>
    </Modal>)

}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '85%',
        padding: 2,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10
    },
    buttonDiv: {
        flexDirection: "row",
        width: '60%',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    button: {
        width: '40%',
    },
});


export default GoalInput;