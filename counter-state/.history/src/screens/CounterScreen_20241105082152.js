import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  state = {count : 0 }
  action = {}
}
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {})
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          return { count: state.count + 1 };
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          return { count: state.count - 1 };
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
