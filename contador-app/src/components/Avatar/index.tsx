import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, ViewStyle } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { WINDOW_HEIGHT } from '../../constants/styles';
import { FontAwesome } from '@expo/vector-icons';

interface AvatarProps {
  name: string
  onImageUriChange?: (uri: string) => void
  style?: ViewStyle
}

const backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`

const Avatar = ({ name, onImageUriChange }: AvatarProps) => {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = (result.assets[0] as any).uri
      setImageUri(uri)
      if (onImageUriChange) {
        onImageUriChange(uri);
      }
    }
  }

  return (
    <TouchableOpacity onPress={pickImage} style={styles.avatar}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <View style={[styles.initialContainer, { backgroundColor }]}>
          <Text style={styles.initial}>{name ? name[0] : "W"}</Text>
        </View>
      )}
      <View style={styles.iconContainer}>
        <FontAwesome style={styles.icon} name="pencil" color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: WINDOW_HEIGHT / 40
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 100,
  },
  initialContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  initial: {
    color: '#fff',
    fontSize: 80,
  },
  iconContainer: {
    position: 'absolute',
    bottom: -15,
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#000',
    fontSize: 18,
  },
});

export default Avatar;
