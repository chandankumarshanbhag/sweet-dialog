import { CommandButton, IconButton, makeStyles, TextField, useTheme } from "@fluentui/react";
import EmojiPicker from "emoji-picker-react";
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import GoogleSignin from "../../components/google_signin/google_signin";
import Navbar from "../../components/navbar/navbar";
import useApp from "../../provider/app_provider";
import Chat from "./../../components/chat/chat";
import firebase, { appConfig } from "./../../utils/firebase";


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
        },
        emojiPicker: {
            height: 240,
            width: "100%",
            position: "absolute",
            bottom: 80
        }
    });
})

let inputRef = React.createRef();

export default function Conversation() {
    const theme = useTheme();
    const [message, setMessage] = useState("");
    const [emojiPicker, setEmojiPicker] = useState(false)
    const { user, conversations, addChat } = useApp();
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    const classes = useStyles();

    async function sendMessage() {

        if (message) {
            setMessage("");
            addChat({
                message: message,
                isChatbot: false,
                timestamp: new Date()
            });
            fetch(`https://us-central1-${appConfig.projectId}.cloudfunctions.net/sweetDialogBot`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "message": message,
                    "sessionId": user.email
                })
            })
                .then(res => {
                    if (res.ok && res.status == 200) {
                        return res.text();
                    }
                    throw "Message not sent"
                })
                .then((chatbotResponse) => {
                    addChat({
                        message: chatbotResponse,
                        isChatbot: true,
                        timestamp: new Date()
                    });
                });
        }
    }
    return (
        <div className={classes.root} style={{ width: isTabletOrMobileDevice ? "100vw" : "50vw" }}>
            <Navbar />
            <div className={classes.chats}>
                {user == null ? <GoogleSignin /> : <div>
                    {conversations?.map((x, key) => <Chat {...x} key={x.timestamp.valueOf()} />)}
                </div>}

            </div>
            <div className={classes.chatContainer}>
                <TextField className={classes.textField}
                    elementRef={inputRef}
                    multiline
                    rows={2}
                    placeholder="Type your message"
                    value={message}
                    onChange={(e, value) => {
                        setMessage(value);
                    }}
                    suffix={
                        <div>
                            <IconButton iconProps={{ iconName: "Emoji", onClick: () => setEmojiPicker(!emojiPicker) }}></IconButton>
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
                    <IconButton iconProps={{ iconName: "Send" }} onClick={sendMessage}></IconButton>
                </div>
            </div>
            {emojiPicker && <div className={classes.emojiPicker}>
                <EmojiPicker disableAutoFocus native={true} pickerStyle={{ width: "100%", height: "100%" }} onEmojiClick={(e, data) => {
                    inputRef.current.focus();
                    setMessage(message + data.emoji)
                }} />
            </div>}
        </div>
    )
}
