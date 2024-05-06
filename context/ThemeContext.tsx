import { createContext, useEffect, useState, ReactNode } from "react";

export interface ThemeContextProps {
    theme: string;
    toggle: () => void;
}
// interface ThemeContextProps {
//     toggle: () => void;
//     theme: string;
// }

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const getFromLocalStorage = (): string => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "dark";
    }
    return "dark";
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>(() => {
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};
