import React from 'react';
import { View } from 'react-native';

import { ImageName } from '../../components/ImageName/ImageName';
import { LinkText } from '../../components/LinkText/LinkText';

import { styles } from './HomeStyles';

export function Home() {
  return (
    <View style={styles.container}>
      <ImageName name="Weslley Marcelo"/>
      <LinkText text='Linkedin' url='https://www.linkedin.com/in/wessmarcelo/'/>
      <LinkText text='GitHub' url='https://github.com/Uellei'/>
      <LinkText text='E-mail' url=''/>
    </View>
  );
}