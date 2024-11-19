import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const initialState = { count: 0 };
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
