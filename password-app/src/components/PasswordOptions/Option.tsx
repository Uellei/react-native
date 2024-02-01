import React, { useState } from 'react';
import { View, TextInput, Text, Switch } from 'react-native';

import { styles } from './styles';

interface PasswordOptionsState {
    passwordLength: number;
    includeUppercase: boolean;
    includeLowercase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
}

// Interface para as props do componente, incluindo a função de callback
interface PasswordOptionsProps {
    options: PasswordOptionsState;
    onOptionsChange: (options: PasswordOptionsState) => void;
}

const PasswordOptions: React.FC<PasswordOptionsProps> = ({ options, onOptionsChange}) => {
    const [passwordLength, setPasswordLength] = useState<number>(5)
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true)
    const [includeLowercase, setIncludeLowercase] = useState<boolean>(true)
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(true)
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(true)

    const handleOptionChange = () => {
        onOptionsChange({
            passwordLength,
            includeUppercase,
            includeLowercase,
            includeNumbers,
            includeSymbols
        });
    };

    return (
        <View>
            <TextInput
                keyboardType="numeric"
                value={passwordLength.toString()}
                onChangeText={(text) => {
                    setPasswordLength(Number(text));
                    handleOptionChange();
                }}
                placeholder="Length of the password"
            />
            {/* Repita a estrutura abaixo para includeUppercase, includeLowercase, includeNumbers, includeSymbols */}
            <Text>Include Uppercase Letters</Text>
            <Switch
                value={includeUppercase}
                onValueChange={(newValue) => {
                    setIncludeUppercase(newValue);
                    handleOptionChange();
                }}
            />
        </View>
    );
}

export default PasswordOptions