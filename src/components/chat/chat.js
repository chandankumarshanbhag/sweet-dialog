import { ActivityItem, Link, makeStyles } from '@fluentui/react';
import useApp from "../../provider/app_provider"
import clsx from 'clsx';
import React from 'react';
import SweetDialog from "../logo/logo";


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing * 2,
    },
    alignRight: {

    },
    bubble: {

        // backgroundColor: theme.palette.themePrimary,
        // color: "#fff"
    }
}));

export default function Chat({ isChatbot = true, message }) {
    const classes = useStyles();
    const { user } = useApp();

    return (
        <div className={clsx(classes.root, !isChatbot && classes.alignRight)}>
            <div className={classes.bubble}>
                <ActivityItem
                    activityDescription={[
                        <Link
                            key={1}
                        >
                            {isChatbot ? "Sweet Dialog" : user.name}
                        </Link>,

                    ]}

                    activityPersonas={[{ imageInitials: "SD", imageShouldFadeIn: true, ...!isChatbot ? { imageUrl: user.photoURL } : {} }]}
                    comments={message || ""}
                    timeStamp={'23m ago'} />
            </div>
        </div>
    )
}
