import { useState, useContext, createContext, useEffect } from "react";
import firebase from "./../utils/firebase"
const AppContext = createContext();

export function AppProvider(props) {
    const [chatOpen, setChatOpen] = useState(false);
    const [user, setUser] = useState(null);

    function logOut() {
        setUser(null);
        firebase.auth().signOut();
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged((e) => {
            if (e.email && user == null) {
                setUser({
                    email: e.email,
                    name: e.displayName,
                    photoURL: e.photoURL
                });
            } else {
                setUser(null);
            }
        });
        return () => {

        }
    }, []);

    function toggleChat() {
        setChatOpen(!chatOpen);
    }
    return <AppContext.Provider value={{ toggleChat, isChatOpen: chatOpen, user, logOut }}>{props.children}</AppContext.Provider>
}

export default function useApp() {
    let values = useContext(AppContext);
    return values;
}