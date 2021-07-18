import { Link, makeStyles, MessageBar, MessageBarType } from '@fluentui/react';
import React from 'react';
import google_signin from '../../utils/google_signin';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "middle",
        flexDirection: "column",
        height: "100%"
    }
}))


export default function GoogleSignin() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MessageBar
                messageBarType={MessageBarType.warning}>
                SignIn to use this app&nbsp;
                <Link  onClick={() => {
                    google_signin();
                }} underline>
                     Google SignIn
                </Link>
                {/* <DefaultButtonsize="120"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png" /> &nbsp;&nbsp;&nbsp;Google SignIn</DefaultButton> */}
            </MessageBar>
        </div>
    )
}
