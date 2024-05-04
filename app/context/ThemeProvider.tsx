import { ThemeContext } from "./ThemeContext";
import React, { useContext, useEffect, useState, ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const context = useContext(ThemeContext);
    const theme = context ? context.theme : "default-theme"; // Provide a default theme or handle the undefined case
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (mounted) {
        return <div className={theme}>{children}</div>;
    }

    return null; // or return loading indicator or placeholder if needed
};

export default ThemeProvider;
