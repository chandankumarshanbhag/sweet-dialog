import { useState, useContext, createContext } from "react";
import { ThemeProvider as FluentUIThemeProvider } from "@fluentui/react"
import LightTheme from "./light_theme";
import DarkTheme from "./dark_theme";
const UIContext = createContext();

export function ThemeProvider(props) {
    const [darkTheme, setDarkTheme] = useState(false);
    function toggleTheme() {
        if(!darkTheme){
            document.body.classList.add("dark");
        }else{
            document.body.classList.remove("dark");
        }
        setDarkTheme(!darkTheme);
    }
    return <UIContext.Provider value={{ toggleTheme }}><FluentUIThemeProvider style={{width: "100%",height: "100%"}} theme={darkTheme ? DarkTheme : LightTheme}>{props.children}</FluentUIThemeProvider></UIContext.Provider>
}

export default function useUI() {
    let values = useContext(UIContext);
    return values;
}