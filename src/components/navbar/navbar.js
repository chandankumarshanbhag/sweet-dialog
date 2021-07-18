import React from 'react'
import { Layer, makeStyles, DetailsHeader, CommandButton, IconButton } from "@fluentui/react"
import SweetDialog from "./../logo/logo"
import useApp from '../../provider/app_provider';


const useStyles = makeStyles((theme) => ({
    root: {
        // padding: theme.spacing,
        "position": "absolute",
        top: 0,
        width: "100%",
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "verticalAlign": "middle",
        backgroundColor: theme.palette.neutralLight
    },
    branding: {
        width: "300px",
        "position": "relative",
        "display": "flex",
        "flexDirection": "row",
    },
    title: {
        margin: theme.spacing * 3
    },
    toolbar: {
        flex: 1,
        display: "flex",

        justifyContent: "flex-end"
    }
}))

export default function Navbar() {
    const { toggleChat } = useApp();
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton iconProps={{ iconName: "Back" }} onClick={toggleChat}></IconButton>
            <div className={classes.branding}>
                {/* <SweetDialog /> */}
                <h4 className={classes.title}>Bot</h4>
            </div>
            <div className={classes.toolbar}>
                <CommandButton iconProps={{ iconName: "Contact" }} menuProps={{
                    items: [

                        {
                            key: 'Logout',
                            text: 'Logout',
                            //   iconProps: { iconName: 'Calendar' },
                        },
                    ],
                }} />
            </div>
        </div>
    )
}
