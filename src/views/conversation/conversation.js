import { CommandButton, IconButton, makeStyles, TextField } from "@fluentui/react";
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import GoogleSignin from "../../components/google_signin/google_signin";
import Navbar from "../../components/navbar/navbar";
import useApp from "../../provider/app_provider";
import Chat from "./../../components/chat/chat";


const useStyles = makeStyles((theme) => {
    return ({
        root: {
            height: "100vh",
            width: "50vw",
            display: "block",
            position: "relative",
            flexDirection: "column",
            boxShadow: theme.effects.elevation8,
            animationName: "slideInRight",
            animationDuration: ".4s",
            backgroundColor: theme.palette.neutralLighter,
            overflow: "hidden"
        },
        textField: {
            flex: 1
        },
        chats: {
            flex: 1,
            paddingTop: "51px",
            paddingBottom: "80px",
            height: "100%",
            overflowX: "hidden",
            overflowY: "auto",
        },
        chatContainer: {
            position: "absolute",
            bottom: 0,
            overflow: "hidden",
            "display": "flex",
            "flexDirection": "row",
            width: "100%",
            padding: theme.spacing * 2,
            backgroundColor: theme.palette.neutralLight,
            boxShadow: theme.effects.elevation4,
            float: "left"

        },
        languageSelector: {
            // width: 60
        },
        sendButton: {
            width: 40,
            paddingRight: 8,
        }
    });
})

export default function Conversation() {
    const [message, setMessage] = useState("");
    const { user } = useApp();
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ width: isTabletOrMobileDevice ? "100vw" : "50vw" }}>
            <Navbar />
            <div className={classes.chats}>
                {user == null ? <GoogleSignin /> : <div>

                    <Chat />
                    <Chat />
                    <Chat />
                    <Chat />
                </div>}

            </div>
            <div className={classes.chatContainer}>
                <TextField className={classes.textField}
                    multiline
                    rows={2}
                    placeholder="Type your message"
                    value={message}
                    onChange={(e, value) => {
                        setMessage(value);
                    }}
                    suffix={
                        <div>
                            <IconButton iconProps={{ iconName: "Emoji" }}></IconButton>
                            <IconButton iconProps={{ iconName: "Microphone" }}></IconButton>
                        </div>
                    }></TextField>
                {!message && <div className={classes.languageSelector}>
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
                </div>}
                <div className={classes.sendButton}>
                    <IconButton iconProps={{ iconName: "Send" }}></IconButton>
                </div>
            </div>
        </div>
    )
}
