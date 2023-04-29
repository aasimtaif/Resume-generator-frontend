import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Rating from '@mui/material/Rating';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        margin: 2,
        padding: 2,
        width: "auto",
    },

    skillName: {
        fontSize: 15,
        fontWeight: 400,
        marginLeft: 5
    },
    title: {
        fontSize: 25,
        color: "Grey",
        fontWeight: 260,
        marginBottom: 6,
    },
});

function Skills({ skills }) {
    console.log(skills)
    return (

        <View style={styles.container}>
            <Text style={styles.title}>
                Skills
            </Text>
            {skills.map((skill, index) => {
                return (
                    <View style={styles.container}>
                        <Text style={styles.skillName}>{skill.skillName} <Rating size="small" name="read-only" value={skill.rating} readOnly /></Text>
                    </View>
                )
            })}
        </View>

    )
}

export default Skills