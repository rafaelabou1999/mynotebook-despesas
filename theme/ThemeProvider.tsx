import { createContext, useEffect, useState } from "react";


type ThemeProps = "light" | "dark";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeContextType {
    theme: ThemeProps;
    handleThemeChange: () => void;
}

interface ThemeProviderProps{
    children: React.ReactNode;
}

export function ThemeProvider({children}: ThemeProviderProps) {

    const [theme, setTheme] = useState<ThemeProps>((): ThemeProps => {
        const themeStorage = localStorage.getItem('theme') as ThemeProps || 'light';
        return themeStorage;
    });
    
    function handleThemeChange(){
       setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
       localStorage.setItem('theme', theme);
    }, [theme])


    useEffect(() => {
        document.documentElement.setAttribute("data-theme",theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
}