import React from  'react';

export const ThemeContext = React.createContext({
    themMode: "light",
    darkMode: () => {},
    lightMode: () => {},
});

export const ThemProvider = ThemeContext.Provider;

export function useTheme() {
    return React.useContext(ThemeContext);
}