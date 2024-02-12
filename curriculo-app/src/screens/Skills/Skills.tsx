import React from 'react';
import { View } from 'react-native';

import { styles } from './SkillsStyles';
import { ImageName } from '../../components/ImageName/ImageName';
import { SkillsName } from '../../components/SkillsName/SkillsName';

export function Skills() {
  return (
    <View style={styles.container}>
      <ImageName name="Minhas habilidades"/>
      <SkillsName technology='SCSS' starsNumber={4}/>
      <SkillsName technology='HTML' starsNumber={4}/>
      <SkillsName technology='React' starsNumber={4}/>
      <SkillsName technology='React-Native' starsNumber={3}/>
      <SkillsName technology='TypeScript' starsNumber={3}/>
      <SkillsName technology='Python' starsNumber={4}/>
    </View>
  );
}