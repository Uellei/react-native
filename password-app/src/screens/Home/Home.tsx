import React from "react"
import { Text, View } from "react-native"
import { StatusBar } from 'expo-status-bar'
import styles from "./Style"
import { ViewPass } from "../../components/ViewPass/ViewPass"
import { Botao } from "../../components/Botao/Botao"

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.textContainer}>GENERATOR</Text>
                <Botao />
            </View>

            <StatusBar style="light" />
        </View>

    )
}