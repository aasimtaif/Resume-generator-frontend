import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { AiOutlineLink as FaLink } from 'react-icons/ai';


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        margin: 4,
        padding: 4,
        width: "auto",
    },
    techUsed: {
        fontWeight: 450,
        fontSize: 12,
        marginLeft: 5,
        borderLeft: "1px solid black",
    },
    projectName: {
        fontSize: 20,
        fontWeight: 450,
    },
    link: {
        fontWeight: 450,
        fontSize: 12,
        marginLeft: 5,
        cursior: "pointer"
    },
    description: {
        marginTop: 5,
        fontSize: 13,
        fontWeight: 400,
    },
    title: {
        fontSize: 35,
        color: "Grey",
        fontWeight: 260,
        marginBottom: 6,
    },

});

function Projects({ projects }) {
    console.log(projects)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Projetcs</Text>
            {projects.map((project, index) => {
                return (
                    <View style={styles.container}>
                        <Text style={styles.projectName}>
                            {project.projectName}
                            <Text style={styles.techUsed}> {project.techUsed}   </Text>
                        </Text>
                        <Text style={styles.link} onClick={() => window.open(project.projectLink, "_blank")}>
                            link
                            <FaLink />
                        </Text>
                        <Text style={styles.description} >
                            {project.details.length === 0 ? "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak" : project.details}
                        </Text>
                    </View>
                )
            })}
        </View>
    )
}

export default Projects