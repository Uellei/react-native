import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';

import { Audio, Video } from 'expo-av';

import { styles } from './style';
import { VideoPlayerProps } from './props';

export function VideoPlayer({video, onDiscard, onSave, onShare}: VideoPlayerProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Video
        style={styles.video}
        source={{ uri: video.uri }}
        useNativeControls
        isLooping
      />
      <View style={styles.menuButton}>
        <Button title='Share' onPress={onShare} />
        <Button title='Save' onPress={onSave} />
        <Button title='Discard' onPress={onDiscard} />
      </View>
    </SafeAreaView>
  );
}