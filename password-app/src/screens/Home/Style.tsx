import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#181B2A',
        alignItems: 'center'
    },
    logoContainer: {
        flexDirection: "column",
        borderColor: "#fff",
        borderWidth: 2,
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 60,
        paddingBottom: 10,
        paddingTop: 20,
        backgroundColor: "#4D4D4D",
    },
    inputContainer: {
        width: "95%",
        marginTop: 30,
        alignItems: "center"
    },
    textContainer: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",
        marginVertical: 20
    }
});

export default styles