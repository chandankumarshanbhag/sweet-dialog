import { ActivityItem, Link, makeStyles } from '@fluentui/react';
import React from 'react';
import SweetDialog from "../logo/logo";


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing * 2,
    },
    bubble: {

        // backgroundColor: theme.palette.themePrimary,
        // color: "#fff"
    }
}));

export default function Chat() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.bubble}>
                <ActivityItem
                    activityDescription={[
                        <Link
                            key={1}
                            onClick={() => {
                                alert('A name was clicked.');
                            }}
                        >
                            Bot
                        </Link>,

                    ]}
                    // activityIcon={<SweetDialog width={32} />}
                    activityPersonas={[{ imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABpUlEQVRoge2YP04CQRxG3wCVCSSQYEflATyChkJbr2CBiXIAKaHTwlhZkXABz0CUytaWwj+JUEFCgMQCmR0LMTGEWZYdZIZkXjm789vvLZN8G8Dj8XhsIsIu7t19FgIhb4EjIL3G544FNBWq8naRaZsM0grMwj8DOZMHLGGQUMn9l/LOR9wBCd2F2Zv/z/AA2UDIG5MBWgF+js0mODbZHCawzjMfRsZkc5jAVuAFbOMFbJOyHQAgX3pUC5bHCprIoNJvFLVt7fIvkBZwIpKJp9xpq6C7yWWBX7LJlNK29TYIQEhbb4uAtq23RUCLdQElpdF+6wJyNDLab1dATpl0O0YjrBSZCgLkcMik2yH4mhjNWklACarv5+na3zVNi26MyEdoUXgXiCTganiIIOByeFgi4Hp4CBEQiprr4SFE4LWcrkacMV5TllgYF5mC5jqCxMW8iWVQAQbmUeJhLNBvFNtyKvaBe8DswyYGof9O2yBfal2Cuppf79UPF2a1/jU6T69+cA2iEvV+5wRgNQknBSC6hLMCsPpxcpbds4eoperxeDwb5htK7XUxP7UCGQAAAABJRU5ErkJggg==" }]}
                    comments={'Hello, Hi'}
                    timeStamp={'23m ago'} />
            </div>
        </div>
    )
}
