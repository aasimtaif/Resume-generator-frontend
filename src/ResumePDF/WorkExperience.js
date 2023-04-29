import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer';



const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        margin: 4,
        padding: 4,
        width: "100%",
    },
    title: {
        fontSize: 35,
        color: "Grey",
        fontWeight: 260,
        marginBottom: 4,

    },
    companyName: {
        fontWeight: 400,
        fontSize: 16,
        marginLeft: 5,
        borderLeft: "2px solid black",

    },
    jobTitle: {
        fontSize: 20,
        fontWeight: 650,
    },
    duration: {
        fontSize: 11,
    },
    description: {
        marginTop:5,
fontSize:13,
fontWeight: 400,

    },

});

function WorkExperience({ workExperience }) {
    console.log(workExperience)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Work Experience</Text>
            {workExperience.map((job, index) => {
                return (
                    <View style={styles.container}>
                        <Text style={styles.jobTitle}>
                            {job.jobTitle}
                            <Text style={styles.companyName}> {job.companyName}</Text>
                        </Text>
                        <Text style={styles.duration}>
                            {job.fromDate.slice(0, 7)} | {job.tillDate.slice(0, 7)}
                        </Text>
                        <Text style={styles.description} >{job.description}</Text>
                    </View>
                )
            })
            }
        </View>
    )
}

export default WorkExperience