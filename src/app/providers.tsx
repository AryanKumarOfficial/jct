"use client";
import * as React from "react";
import {ThemeProvider as NextThemeProvider} from "next-themes";
import {type ThemeProviderProps} from "next-themes";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {TooltipProvider} from "@radix-ui/react-tooltip";
import {Toaster as Sonner} from "@/components/ui/sonner"


interface ProviderProps extends ThemeProviderProps {
    children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function Providers({children, ...props}: ProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <NextThemeProvider
                attribute={"class"}
                defaultTheme={"light"}
                enableSystem
                disableTransitionOnChange
                {...props}
            >
                <TooltipProvider>
                    <Sonner/>
                    {children}
                </TooltipProvider>
            </NextThemeProvider>
        </QueryClientProvider>
    )

}

