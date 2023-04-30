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
    details: {
        fontWeight: 400,
        fontSize: "0.9rem",
    },
    instituteName: {
        fontSize: 20,
        fontWeight: 450,
    },
    title: {
        fontSize: 35,
        color: "Grey",
        fontWeight: 260,
        marginBottom: 6,
    },

});



function Education({ educationList }) {
    console.log(educationList)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Education</Text>
            {educationList.map((institute, index) => {
                return (
                    <View style={styles.container}>
                        <Text style={styles.instituteName}>{institute.instituteName}</Text>
                        <Text style={styles.details}>{institute.degree} in { !institute.field  ? "Computer Science" : institute.field}</Text>

                    </View>
                )
            })}
        </View>

    )
}

export default Education