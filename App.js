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
      <Text style={styles.paragraph}>
      Enhance your Puri pilgrimage with the official Puri Temple app! Explore the temple's history, rituals, and daily darshan timings.
      Plan your visit, navigate the temple complex, and discover hidden gems. This app is your pocket-sized pandit for a spiritual and enriching journey.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Calendar</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.signInButton]}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.signUpButton]}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
    position: 'absolute',
    top: 80,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 20, // Adjust this value to change the curvature of the border
  },
  text: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 20,
    color: '#000',
  },
  paragraph: {
    textAlign: 'center',
    marginVertical: 5,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
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
  signInButton: {
    marginRight: 10, // Adjust the spacing between buttons if needed
  },
  signUpButton: {
    marginLeft: 10, // Adjust the spacing between buttons if needed
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
