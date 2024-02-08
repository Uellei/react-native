import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    logo: {
        height: 350
    },
    text: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#333333",
        borderRadius: 7,
        lineHeight: 40,
        verticalAlign: 'middle'
    },
    textContainer: {
        marginHorizontal: 30
    }
});