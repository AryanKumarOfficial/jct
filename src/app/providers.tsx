import {ThemeProvider as NextThemeProvider} from "next-themes";
import * as React from "react";
import {type ThemeProviderProps} from "next-themes";

interface ProviderProps extends ThemeProviderProps {
    children: React.ReactNode;
}

export default function Providers({children, ...props}: ProviderProps) {
    return (
        <NextThemeProvider
            attribute={"class"}
            defaultTheme={"system"}
            enableSystem
            disableTransitionOnChange
            {...props}
        >
            {children}
        </NextThemeProvider>
    )

}

