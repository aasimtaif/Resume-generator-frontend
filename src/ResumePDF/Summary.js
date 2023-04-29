import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        margin: 4,
        padding: 4,
        width: "auto",
    },
    description: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: 400,
    },
    title: {
        fontSize: 25,
        color: "Grey",
        fontWeight: 260,
        marginBottom: 6,
    },

});

function Summary({ resume }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Summary
            </Text>
            <Text style={styles.description}>
                {!resume.summary ? "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as" : resume.summary}
            </Text>
        </View>
    )
}

export default Summary