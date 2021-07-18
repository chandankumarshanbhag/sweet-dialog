import React from 'react'
import { classNamesFunction, makeStyles, Toggle, Link } from "@fluentui/react"
import useUI from '../../theme'
import { PrimaryButton } from "@fluentui/react"
import SweetDialogLogo from "./../../components/logo/logo"
import GifLogo from "./../../assets/images/icons8-chat-unscreen.gif"
import TechStack from '../../components/techstack/techstack'
import { useMediaQuery } from 'react-responsive'
import useApp from '../../provider/app_provider'

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.neutralLighter,
        minHeight: "840px"
    },
    content: {
        display: "block",
    },
    branding: {
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: theme.spacing * 4,
        paddingBottom: theme.spacing * 4
    },
    logo: {
        width: 120,
        objectFit: "contain",
        padding: 16,
        boxShadow: theme.effects.elevation64,
        borderRadius: 12
    },
    techstack: {
        // padding: theme.spacing *4,
        height: 220,
        width: "100%"
    }
}))

export default function Home() {
    let { toggleTheme, darkTheme } = useUI();
    const classes = useStyles();
    const { toggleChat, } = useApp();
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    return (
        <div style={{ height: "100%", width: "100%", overflowX: "hidden", overflowY: "auto" }}>
            <div className={classes.root} style={{ minHeight: isTabletOrMobileDevice ? 840 : 600 }}>

                <div className={classNamesFunction.branding}>
                    <img src={GifLogo} className={classes.logo} />
                    <h2 style={{ textAlign: "center" }}>Sweet Dialog</h2>
                </div>
                {isTabletOrMobileDevice && <PrimaryButton checked={darkTheme} onClick={toggleChat} color="primary" iconProps={{ iconName: "Send" }} className={classes.fab}>Chat</PrimaryButton>}
                <div className={classes.techstack}>
                    <TechStack />
                </div>
                <div className={classes.content}><Toggle label="Dark mode" inlineLabel onChange={(a, checked) => toggleTheme()} /> </div>
                <div><p>Developed by <strong><Link href="https://shanbhag.dev" target="_blank">Chandan Kumar</Link></strong></p></div>
            </div>
        </div>
    )
}
