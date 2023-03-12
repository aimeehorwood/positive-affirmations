import { StyleSheet, Text, View } from "react-native";

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>&#10024;My Affirmations &#10024;</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 60,
        backgroundColor: '#bd9391'
    },
    title: {
        textAlign:"center",
        color: "#fff",
        fontSize: 23,
        fontWeight: 'bold',
    }

});