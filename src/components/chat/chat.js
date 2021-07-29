import { ActivityItem, Link, makeStyles, Shimmer, ShimmerElementType } from '@fluentui/react';
import useApp from "../../provider/app_provider"
import clsx from 'clsx';
import React from 'react';
import SweetDialog from "../logo/logo";


const useStyles = makeStyles(theme => ({
    root: {
        padding: `${theme.spacing * 2}px ${theme.spacing * 4}px`,
    },
    alignRight: {

    },
    bubble: {

        // backgroundColor: theme.palette.themePrimary,
        // color: "#fff"
    },
    activity: {

    },
    message: {
        color: theme.palette.black,
    }
}));

export default function Chat({ loading, isChatbot = true, message, timestamp }) {
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
                    className={classes.activity}
                    activityPersonas={[{ imageInitials: "SD", imageShouldFadeIn: true, ...!isChatbot ? { imageUrl: user.photoURL } : {} }]}
                    comments={loading ? <Shimmer width="140px" height="80px" /> : <span className={classes.message}>{message || ""}</span>}
                    timeStamp={timestamp && typeof timestamp == "object" && Intl?.DateTimeFormat('default', {
                        hour: 'numeric', minute: 'numeric',
                        hourCycle: 'h12',
                    })?.format(timestamp)?.toUpperCase()} />

            </div>
        </div>
    )
}
