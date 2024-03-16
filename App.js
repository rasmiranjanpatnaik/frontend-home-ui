import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/image/hero image.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={[styles.text, { fontSize: 20 }]}>
        🙏 Namesta{' '}
        <Text style={{ fontWeight: 'bold', color: 'red' }}>Welcome</Text> to{' '}
        <Text style={{ fontStyle: 'italic' }}>our</Text> App
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Calendar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    shadowColor: '#000',
    position: 'absolute',
    top: 80,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 300,
    height: 200,
  },
  button: {
    marginTop: 100, // Adjusted to position the button lower
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 5, // Shadow effect
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
