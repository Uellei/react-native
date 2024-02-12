import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './style';
import { CameraViewProps } from "./props"
import { Camera } from 'expo-camera';

export function CameraView({camRef, isRecording, onRecording, onStopRecording}: CameraViewProps) {
  return (
    <Camera style={styles.container} ref={camRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity  style={styles.buttonRecording} onPress={isRecording ? onStopRecording : onRecording}>
          <Text style={styles.buttonText}>{isRecording ? "Stop Recording" : "Start Recording"}</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
}