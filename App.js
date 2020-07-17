import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)
  
  function addGoal(){
    console.log(enteredGoal);
    setEnteredGoal("");
  }
  function addGoalHandler(data){
    setGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: data }]);
    console.log(data);
    setIsAddMode(false);
    // setEnteredGoal("");
  }
  function cancelModal(){
    setIsAddMode(false);
  }
  function removeGoalHandler(data){
    console.log(goals);
    setGoals(currentGoals => {
      return currentGoals.filter( (goal) => goal.key !== data )
    })
  }
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={ () => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelModal} />
      <FlatList
      // {console.log(itemData.item.id)}
      data={goals}
      renderItem={itemData => (
        <GoalItem id={itemData.item.key} title={itemData.item.value} onDelete={removeGoalHandler}/>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 35,
    padding: 10
  },
 
  
});
