import { makeStyles, Link } from '@fluentui/react'
import React from 'react'
import FluentGif from "../../assets/images/fluent.gif"
import DialogFlow from "../../assets/images/1280px-Dialogflow_logo.svg.png"

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        // marginTop: theme.spacing*2,
        marginBottom:theme.spacing*2
    },
    tech: {
        flex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "top",
        "& img": {
            width: "100%",
            height: "80px",
            objectFit: "contain",

        }
    }
}));

export default function TechStack() {
    const classes = useStyles();
    return (
        <>
            <center><h3 style={{ fontWeight: "500" }}>Powered By</h3></center>
            <div className={classes.root}>
                <div className={classes.tech}>
                    <img src="https://i.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.webp" />
                    <h4 style={{ fontWeight: "500",textAlign: "center" }}><Link href="https://reactjs.org/" target="_blank">ReactJs</Link></h4>
                </div>
                <div className={classes.tech}>
                    <img src={FluentGif} style={{ transform: "scale(1.5)" }} />
                    <h4 style={{ fontWeight: "500",textAlign: "center" }}><Link href="https://www.microsoft.com/design/fluent/#/" target="_blank">Fluent Design System</Link></h4>
            </div>
            <div className={classes.tech}>
                <img src="https://media4.giphy.com/media/Ri2TUcKlaOcaDBxFpY/giphy.gif?cid=ecf05e471szxpkexapzqikju5wpa6yayw98jve7cs00kpu6q&rid=giphy.gif&ct=s" />

                <h4 style={{ fontWeight: "500",textAlign: "center" }}><Link href="https://firebase.google.com/docs/functions" target="_blank">Cloud Functions for Firebase</Link></h4>
            </div>
            <div className={`${classes.tech}`}>
                <img className=" bounce-5" src={DialogFlow} style={{ transform: "scale(0.8)" }} />


                <h4 style={{ fontWeight: "500",textAlign: "center" }}><Link href="https://cloud.google.com/dialogflow" target="_blank">Dialogflow</Link></h4>
            </div>
        </div>
        </>
    )
}
