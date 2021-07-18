import { useState, useContext, createContext } from "react";
const AppContext = createContext();

export function AppProvider(props) {
    const [chatOpen, setChatOpen] = useState(false);
    function toggleChat() {
        setChatOpen(!chatOpen);
    }
    return <AppContext.Provider value={{ toggleChat,isChatOpen: chatOpen }}>{props.children}</AppContext.Provider>
}

export default function useApp() {
    let values = useContext(AppContext);
    return values;
}