import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Dimensions } from 'react-native';

import { styles } from './styles';
import { InputScreen } from '../InputScreen/InputScreen';

export function Home() {
    const [isActive, setIsActive] = useState<boolean>(false)

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <>
            {isActive ? (
                <View style={{ width: windowWidth, height: windowHeight, paddingVertical: 20 }}>
                    <TouchableOpacity onPress={() => { setIsActive(!isActive) }}>
                        <Image
                            source={require('../../../assets/w-icon.jpg')}
                            style={[{ width: windowWidth - 250, height: windowHeight - 650 }]}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <InputScreen />
                </View>
            ) : (
                <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>
                    <View style={{ alignContent: "center" }}>
                        <Image
                            source={require('../../../assets/w-icon.jpg')}
                            style={styles.logo}
                            resizeMode='contain'
                        />
                    </View>
                    <View style={{ width: windowWidth - 60 }}>
                        <TouchableOpacity onPress={() => { setIsActive(!isActive) }} style={{ display: "flex" }}>
                            <Text style={styles.text}>activate signal</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            )}

        </>
    );
}