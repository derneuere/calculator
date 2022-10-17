/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 * export ANDROID_HOME="/home/niaz/Android/Sdk/"
 * @format
 */

import React from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  // This App implements a calculator
  const [result, setResult] = React.useState(0);
  const [firstNumber, setFirstNumber] = React.useState(0);
  const [secondNumber, setSecondNumber] = React.useState(0);

  const add = () => {
    setResult(firstNumber + secondNumber);
    setFirstNumber(firstNumber + secondNumber);
  };

  const subtract = () => {
    setResult(firstNumber - secondNumber);
    setFirstNumber(firstNumber - secondNumber);
  };

  const multiply = () => {
    setResult(firstNumber * secondNumber);
    setFirstNumber(firstNumber * secondNumber);
  };

  const divide = () => {
    setResult(firstNumber / secondNumber);
    setFirstNumber(firstNumber / secondNumber);
  };

  const setNumber = (number: number) => {
    if (firstNumber === 0) {
      setFirstNumber(number);
    } else {
      setSecondNumber(number);
    }
  };

  return (
    <View>
      <Text>Calculator</Text>
      <Text>Result: {result}</Text>
      <Text>First Number: {firstNumber}</Text>
      <Text>Second Number: {secondNumber}</Text>
      <Button
        title="1"
        onPress={() => {
          setNumber(1);
        }}
      />
      <Button
        title="2"
        onPress={() => {
          setNumber(2);
        }}
      />
      <Button
        title="3"
        onPress={() => {
          setNumber(3);
        }}
      />
      <Button
        title="4"
        onPress={() => {
          setNumber(4);
        }}
      />
      <Button
        title="5"
        onPress={() => {
          setNumber(5);
        }}
      />
      <Button
        title="6"
        onPress={() => {
          setNumber(6);
        }}
      />
      <Button
        title="7"
        onPress={() => {
          setNumber(7);
        }}
      />
      <Button
        title="8"
        onPress={() => {
          setNumber(8);
        }}
      />
      <Button
        title="9"
        onPress={() => {
          setNumber(9);
        }}
      />

      <Button
        title="0"
        onPress={() => {
          setNumber(0);
        }}
      />

      <Button title="Add" onPress={add} />
      <Button title="Subtract" onPress={subtract} />
      <Button title="Multiply" onPress={multiply} />
      <Button title="Divide" onPress={divide} />
    </View>
  );
};

export default App;
