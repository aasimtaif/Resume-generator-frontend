import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { AiFillGithub, AiOutlinePhone, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
// import { Link } from "react-router-dom";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        margin: 0,
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        borderBottom: "1px solid black",

    },
    nameTitle: {
        fontSize: 30,
        fontWeight: 'bolder',
    },
    jobTitle: {
        fontSize: 12,
        fontWeight: 400,
        marginLeft:5
    },
    links: {
        fontFamily: 'Lato',
        fontSize: 15,
        padding: 2,
        color: 'black',
    },
    link: {
        margin: 6
    },
});

function BasicInfo({ basicInfo }) {
    const { firstName, lastName, jobTitle, email, github, phoneNo, linkedIn } = basicInfo
    const OpenLink = (link) => {
        console.log(link)
        window.open(link, "_blank")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.nameTitle}>
                {firstName + lastName}
                <Text style={styles.jobTitle}>
                    {jobTitle}
                </Text>
            </Text>
            <View style={styles.links}>
                <View style={styles.link}>
                    <AiFillGithub onClick={() => { OpenLink(github) }} />
                </View>
                <View style={styles.link}>
                    <AiOutlinePhone onClick={() => { window.location = `tel:${phoneNo}` }} />
                </View>
                <View style={styles.link}>
                    <AiOutlineMail onClick={() => { window.location = `mailto:${email}` }} />
                </View>
                <View style={styles.link}>
                    <AiFillLinkedin onClick={() => { OpenLink(linkedIn) }} />
                </View>
            </View>
        </View>
    )
}

export default BasicInfo