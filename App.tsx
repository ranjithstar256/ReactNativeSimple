import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const Drawer = createDrawerNavigator();

const CalculatorScreen = () => {
  const [length, setLength] = useState('');
  const [breadth, setBreadth] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleCalculate = () => {
    const len = parseFloat(length);
    const brdth = parseFloat(breadth);

    if (isNaN(len) || isNaN(brdth)) {
      setError('Please enter valid numbers');
      setResult('');
    } else {
      setError('');
      const totalSqft = len * brdth;
      setResult(`Total sqft is ${totalSqft}`);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Length"
        onChangeText={(text) => setLength(text)}
        value={length}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Breadth"
        onChangeText={(text) => setBreadth(text)}
        value={breadth}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#E6E6FA',
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#D8BFD8',
    padding: 10,
    width: '80%',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  error: {
    marginTop: 10,
    fontSize: 16,
    color: 'red',
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Calculator">
        <Drawer.Screen name="Calculator" component={CalculatorScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/me.jpg')}
        style={{ width: 300, height: 300 }}
      />
      <Text style={styles.button}>Profile Screen</Text>
    
      {/* Add your profile screen content here */}
    </View>
  );
};


const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.button}>Settings Screen</Text>
      {/* Add your settings screen content here */}
    </View>
  );
};




export default App;
import { Image } from 'react-native';

