import React, { useState } from 'react';
import { View, Pressable, TextInput, TouchableHighlight } from 'react-native';
import * as Clipboard from 'expo-clipboard'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { styles } from './styles';
import generatePassword from '../../services/passwordService';

interface PasswordProps {
    passwordLength: number
    includeUppercase: boolean
    includeLowercase: boolean
    includeNumbers: boolean
    includeSymbols: boolean
}

export function ViewPass({ passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols }: PasswordProps) {
    const [password, setPassword] = useState<string>("")

    function handleGenerateButton() {
        let generateToken = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
        setPassword(generateToken)
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(password)
    }

    return (
        <View style={styles.generatePassword}>
            <TextInput
                style={styles.password}
                placeholder='Password'
                readOnly
                value={password}
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