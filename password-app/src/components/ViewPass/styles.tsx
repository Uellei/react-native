import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    generatePassword: {
        flex: 0,
        // textAlign: "center",
        letterSpacing: 1,
        borderWidth: 1,
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
        borderColor: "#fff",
        borderRadius: 7
    },
    password: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        width: "75%",
        marginRight: "3%",
        paddingLeft: 10
    },
    text: {
        width: "10%",
        alignSelf: "center",
        height: 50,
        textAlignVertical: "center",
        textAlign: "center",
        borderRadius: 7
    },
    icon: {
        flex: 1,
        alignSelf: "center",
        textAlignVertical: "center",
        textAlign: "center"
    }
    // #0C2666 - Escuro
    // #175DDC - Claro
});