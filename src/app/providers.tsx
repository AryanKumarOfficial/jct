"use client";
import * as React from "react";
import {ThemeProvider as NextThemeProvider} from "next-themes";
import {type ThemeProviderProps} from "next-themes";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {TooltipProvider} from "@radix-ui/react-tooltip";
import {Toaster as Sonner} from "@/components/ui/sonner"
import {ErrorBoundary} from "react-error-boundary";


interface ProviderProps extends ThemeProviderProps {
    children: React.ReactNode;
}

const ErrorFallback = ({error, resetErrorBoundary}: any) => {
    return (
        <div role="alert" className="p-4 bg-red-50 text-red-900 rounded-md">
            <p className="font-bold">Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary} className="mt-2 underline">Try again</button>
        </div>
    );
};

const queryClient = new QueryClient();

export default function Providers({children, ...props}: ProviderProps) {
    return (
        <ErrorBoundary fallback={<ErrorFallback/>}>
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
        </ErrorBoundary>
    )

}

