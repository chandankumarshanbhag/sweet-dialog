import { ThemeProvider } from "./theme";
import { PrimaryButton, ActivityItem, Link, makeStyles } from "@fluentui/react"
import Chat from "./views/conversation/conversation"
import Home from "./views/home/home";
import Navbar from "./components/navbar/navbar"
import Logo from "./components/logo/logo"
import { useMediaQuery } from "react-responsive";
import useApp, {AppProvider} from "./provider/app_provider"
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100% !important",
    backgroundColor: theme.palette.neutralLighter,
  },
  fab: {
    position: "fixed",
    bottom: 10,
    right: 10,
  }
}))

function App() {
  const classes = useStyles();
  const {isChatOpen} = useApp();
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  return (
    
    <div className={classes.root}>
      {isChatOpen && isTabletOrMobileDevice ? null : <Home />}
      {/* <Button>hello</Button> */}

      {!isTabletOrMobileDevice ||isChatOpen ? <Chat></Chat> : null}

    </div>
  );
}

export default App;
