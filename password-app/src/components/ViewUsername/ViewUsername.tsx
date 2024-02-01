import React, { useState } from 'react';
import { View, Pressable, TextInput, TouchableHighlight } from 'react-native';
import * as Clipboard from 'expo-clipboard'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { styles } from './styles';
import generateUsername from '../../services/usernameService';

interface UsernameProps {
    numberOfWords: number
    separator: string
    capitalizeWords: boolean
    includeNumbers: boolean
}

export function ViewUsername({ numberOfWords, separator, capitalizeWords, includeNumbers }: UsernameProps) {
    const [username, setUsername] = useState<string>("")

    function handleGenerateButton() {
        let generateToken = generateUsername(numberOfWords, separator, capitalizeWords, includeNumbers)
        setUsername(generateToken)
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(username)
    }

    return (
        <View style={styles.generatePassword}>
            <TextInput
                style={styles.password}
                placeholder='Username'
                readOnly
                value={username}
                multiline
            />
            <TouchableHighlight
                style={{ ...styles.text, marginLeft: "2%"}}
                onPress={handleCopyButton}

            ><FontAwesome name="copy" size={20} color="white" style={styles.icon} /></TouchableHighlight>
            <TouchableHighlight
                style={styles.text}
                onPress={handleGenerateButton}
            ><FontAwesome name="refresh" size={20} color="white" style={styles.icon} /></TouchableHighlight>
        </View>
    );
}