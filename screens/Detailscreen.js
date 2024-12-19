import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import {Bar} from 'react-native-progress';
const DetailScreen = ({ route }) => {
  const { item } = route.params;
  const [step, setStep] = useState(0);

  const startCooking = () => {
    if (step < item.steps.length - 1) {
      setStep(step + 1);
    } else {
      setStep(0); // Reset after finishing all steps
    }
  };

  const progress = (step + 1) / item.steps.length;

  return (
    <View style={styles.container}>
      <Image source={item.imageUri} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      {/* Progress Bar */}
      <Bar styleAttr="Horizontal" color="#2196F3" progress={progress} />
      <Text style={styles.stepText}>Step {step + 1} of {item.steps.length}: {item.steps[step]}</Text>

      {/* Start Button */}
      <Button title="Start Next Step" onPress={startCooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  image: { width: '100%', height: 200, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  description: { fontSize: 16, color: '#666', marginBottom: 16 },
  stepText: { fontSize: 18, marginVertical: 8, textAlign: 'center' },
});

export default DetailScreen;
