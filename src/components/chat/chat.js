import { makeStyles } from '@fluentui/react'
import React from 'react'
import { TextField, IconButton, CommandButton, ActivityItem, Link, Grid } from "@fluentui/react";
import SweetDialog from "../logo/logo"


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing * 2,
    }
}));

export default function Chat() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ActivityItem activityDescription={[
                <Link
                    key={1}
                    onClick={() => {
                        alert('A name was clicked.');
                    }}
                >
                    Bot
                </Link>,

            ]}
                activityIcon={<SweetDialog />}
                // activityPersonas={[{ imageUrl: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png" }]}
                comments={'Hello, this is the text of my basic comment!'}
                timeStamp={'23m ago'} />
        </div>
    )
}
