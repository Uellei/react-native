import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './SkillsNameStyles';
import { AntDesign } from '@expo/vector-icons';

interface SkillNameProps {
  technology: string
  starsNumber: number
}

export function SkillsName({technology, starsNumber}: SkillNameProps) {
  const fullStars = Array(starsNumber).fill("star")
  const emptyStarts = Array(5 - starsNumber).fill("staro")

  return (
    <View style={styles.container}>
      <Text style={styles.textSkills}>{technology}:</Text>
      {fullStars.map((name, index) => (
        <AntDesign
          key={`full-${index}`}
          name={name}
          style={styles.iconSkills}
          />
      ))}
      {emptyStarts.map((name, index) => (
        <AntDesign
          key={`full-${index}`}
          name={name}
          style={styles.iconSkills}
          />
      ))}
    </View>
  );
}