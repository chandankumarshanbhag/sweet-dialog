import React from 'react'
import { FontIcon } from '@fluentui/react/lib/Icon';
import { TextField, IconButton, makeStyles, CommandButton, ActivityItem, Link, Grid } from "@fluentui/react";
import { Layer, DetailsHeader } from "@fluentui/react"
import SweetDialog from "../../components/logo/logo"
import Navbar from "../../components/navbar/navbar"
import Chat from "./../../components/chat/chat"
import { useMediaQuery } from 'react-responsive';


const useStyles = makeStyles((theme) => {
    return ({
        root: {
            // position: "relative",
            height: "100vh",
            width: "50vw",
            display: "block",
            flexDirection: "column",
            boxShadow: theme.effects.elevation8,
            animationName: "slideInRight",
            animationDuration: ".4s"
        },
        textField: {
            width: "100%",
        },
        chats: {
            flex: 1,
            height: "100%",
            // padding: theme.spacing * 2,
            overflowX: "hidden",
            overflowY: "auto",
            backgroundColor: theme.palette.neutralLighter
        },
        chatContainer: {
            // height: 66,
            position: "absolute",
            bottom: 0,
            overflow: "hidden",
            "display": "flex",
            "flexDirection": "row",
            width: "100%",
            padding: theme.spacing * 2,
            backgroundColor: theme.palette.neutralLight
        }
    });
})

export default function Conversation() {
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ width: isTabletOrMobileDevice ? "100%" : "50vw", position: isTabletOrMobileDevice ? "inherit" : "relative" }}>
            <Navbar />
            <div className={classes.chats}>
                <Chat />
                <Chat />
                <Chat />
                <Chat />

            </div>
            <div className={classes.chatContainer}>
                <TextField className={classes.textField}
                    placeholder="Type your message"
                    suffix={
                        <div>
                            <IconButton iconProps={{ iconName: "Emoji" }}></IconButton>
                            <IconButton iconProps={{ iconName: "Microphone" }}></IconButton>
                        </div>
                    }></TextField>
                <CommandButton iconProps={{ iconName: "LocaleLanguage" }} menuProps={{
                    items: [
                        {
                            key: 'English',
                            text: 'English',
                            //   iconProps: { iconName: 'Mail' },
                        },
                        {
                            key: 'Kannada',
                            text: 'Kannada',
                            //   iconProps: { iconName: 'Calendar' },
                        },
                    ],
                }} />
                <IconButton iconProps={{ iconName: "Send" }}></IconButton>
            </div >
        </div>
    )
}
