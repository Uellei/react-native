import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import { Checkbox } from 'react-native-paper';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';
import { ViewPass } from '../ViewPass/ViewPass';
import { ViewUsername } from '../ViewUsername/ViewUsername';

export function Botao() {
    const [selectedOption, setSelectedOption] = useState<string>("password")
    const [passwordLength, setPasswordLength] = useState<number>(10);
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
    const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);

    const [numberOfWords, setNumberOfWords] = useState<number>(2)
    const [separator, setSeparetor] = useState<string>("-")
    const [isCapitalize, setIsCapitalize] = useState<boolean>(false)
    const [includeNumber, setIncludeNumber] = useState<boolean>(false)

    const handleValueChange = (value: number) => {
        // Arredondar o valor para o inteiro mais próximo
        const roundedValue = Math.round(value);
        setPasswordLength(roundedValue);
    }

    const increment = () => {
        setNumberOfWords(prevValue => prevValue > 9 ? 10 : prevValue + 1)
    }

    const decrement = () => {
        setNumberOfWords(prevValue => prevValue > 1 ? prevValue - 1 : 1)
    }

    return (
        <View>
            {selectedOption === "password" ? (
                <ViewPass passwordLength={passwordLength} includeUppercase={includeUppercase} includeLowercase={includeLowercase} includeNumbers={includeNumbers} includeSymbols={includeSymbols} />

            ) : (
                <ViewUsername numberOfWords={numberOfWords} separator={separator} capitalizeWords={isCapitalize} includeNumbers={includeNumber} />
            )}
            <View style={styles.container}>
                <Text style={styles.textContainer}>What would you like to generate?</Text>
                <View style={styles.radioContainer}>
                    <RadioButton
                        value="password"
                        status={selectedOption === "password" ? "checked" : "unchecked"}
                        onPress={() => setSelectedOption("password")}
                    />
                    <Text style={styles.text}>Password</Text>
                </View>
                <View style={styles.radioContainer}>
                    <RadioButton
                        value="username"
                        status={selectedOption === "username" ? "checked" : "unchecked"}
                        onPress={() => setSelectedOption("username")}
                    />
                    <Text style={styles.text}>Username</Text>
                </View>
            </View>
            {selectedOption === "password" ? (
                <>
                    <View style={styles.container}>
                        <View style={styles.optionsContainer}>
                            <Text style={styles.text}>Length    {passwordLength}</Text>
                            <Slider
                                style={{ width: 200, height: 40 }}
                                maximumValue={128}
                                minimumValue={8}
                                onValueChange={handleValueChange}
                                value={passwordLength}
                            >
                            </Slider>
                        </View>
                    </View>
                    <View style={{ ...styles.container, marginTop: 10 }}>
                        <View style={styles.optionsContainer}>
                            <Text style={styles.text}>A-Z</Text>
                            <Checkbox
                                status={includeUppercase ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setIncludeUppercase(!includeUppercase);
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ ...styles.container, marginTop: 10 }}>
                        <View style={styles.optionsContainer}>
                            <Text style={styles.text}>a-z</Text>
                            <Checkbox
                                status={includeLowercase ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setIncludeLowercase(!includeLowercase);
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ ...styles.container, marginTop: 10 }}>
                        <View style={styles.optionsContainer}>
                            <Text style={styles.text}>0-9</Text>
                            <Checkbox
                                status={includeNumbers ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setIncludeNumbers(!includeNumbers);
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ ...styles.container, marginTop: 10 }}>
                        <View style={styles.optionsContainer}>
                            <Text style={styles.text}>!@#$%^&*</Text>
                            <Checkbox
                                status={includeSymbols ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setIncludeSymbols(!includeSymbols);
                                }}
                            />
                        </View>
                    </View>
                </>

            ) : (
                <>
                    <View style={[styles.containerNumber, styles.container]}>
                        <Text style={styles.label}>Number of words</Text>
                        <View style={styles.numberContainer}>
                            <Text style={styles.value}>{numberOfWords}</Text>
                            <TouchableOpacity onPress={increment} style={styles.buttonNumber}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={decrement} style={{ ...styles.buttonNumber, marginLeft: 15 }}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.containerNumber, styles.container, { marginTop: 10 }]}>
                        <Text style={styles.label}>Word separator</Text>
                        <View style={styles.numberContainer}>
                            <TextInput
                                style={styles.value}
                                onChangeText={setSeparetor}
                                value={separator}
                            />
                        </View>
                    </View>
                    <View style={{ ...styles.container, marginTop: 10 }}>
                        <View style={styles.optionsContainer}>
                            <Text style={styles.text}>Capitalize</Text>
                            <Checkbox
                                status={isCapitalize ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setIsCapitalize(!isCapitalize);
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ ...styles.container, marginTop: 10 }}>
                        <View style={styles.optionsContainer}>
                            <Text style={styles.text}>Include number</Text>
                            <Checkbox
                                status={includeNumber ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setIncludeNumber(!includeNumber);
                                }}
                            />
                        </View>
                    </View>
                </>
            )}
        </View>
    );
}

