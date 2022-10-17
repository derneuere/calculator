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

const NumberButton = (props: {number: number; setCalculationNumber: any}) => {
  return (
    <Button
      title={props.number + ''}
      onPress={() => props.setCalculationNumber(props.number)}
    />
  );
};

const App = () => {
  // This App implements a calculator
  const [result, setResult] = React.useState(0);
  const [number, setNumber] = React.useState(0);
  const [operation, setOperation] = React.useState('');

  const setCalculationNumber = (numberInput: number) => {
    if (result == 0 && operation == '') {
      setResult(numberInput);
    } else {
      setNumber(numberInput);
      calculate();
    }
  };

  const calculate = () => {
    setResult(eval(result + operation + number));
  };

  const clear = () => {
    setNumber(0);
  };

  const clearAll = () => {
    setResult(0);
    setNumber(0);
    setOperation('');
  };

  return (
    <View>
      <Text>Calculator</Text>
      <Text>Result: {result}</Text>
      <Text>
        Calculation: {result} {operation} {number}
      </Text>
      <Text>First Number: {number}</Text>
      <Text>Operation: {operation}</Text>
      <NumberButton number={1} setCalculationNumber={setCalculationNumber} />
      <NumberButton number={2} setCalculationNumber={setCalculationNumber} />
      <NumberButton number={3} setCalculationNumber={setCalculationNumber} />
      <NumberButton number={4} setCalculationNumber={setCalculationNumber} />
      <NumberButton number={5} setCalculationNumber={setCalculationNumber} />
      <NumberButton number={6} setCalculationNumber={setCalculationNumber} />
      <NumberButton number={7} setCalculationNumber={setCalculationNumber} />
      <NumberButton number={8} setCalculationNumber={setCalculationNumber} />
      <NumberButton number={9} setCalculationNumber={setCalculationNumber} />
      <NumberButton number={0} setCalculationNumber={setCalculationNumber} />
      <Button title="Add" onPress={() => setOperation('+')} />
      <Button title="Subtract" onPress={() => setOperation('-')} />
      <Button title="Multiply" onPress={() => setOperation('*')} />
      <Button title="Divide" onPress={() => setOperation('/')} />
      <Button title="Result" onPress={() => calculate()} />
      <Button title="C" onPress={() => clear()} />
      <Button title="CE" onPress={() => clearAll()} />
    </View>
  );
};

export default App;
