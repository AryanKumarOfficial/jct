"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Send, User, LogOut, LayoutDashboard, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useSWR, { mutate } from "swr";
import { toast } from "sonner";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const ActionButtons = () => {
    const router = useRouter();
    const { data, isLoading } = useSWR("/api/auth/user", fetcher);

    const user = data?.user;

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
            toast.success("Logged out successfully");
            await mutate("/api/auth/user"); // Re-fetch user state
            router.push("/");
            router.refresh();
        } catch (error) {
            toast.error("Failed to logout");
        }
    };

    const getDashboardLink = (role: string) => {
        switch (role) {
            case "ADMIN": return "/admin/dashboard";
            case "EDITOR": return "/editor/dashboard";
            default: return "/author/dashboard";
        }
    };

    return (
        <div className="flex items-center gap-2 md:gap-3">
            {/* Submit CTA - Always visible but smaller on mobile if needed */}
            <div className="hidden sm:block">
                <Link href="/submit">
                    <Button
                        size="sm"
                        className="relative overflow-hidden h-9 px-4 md:h-10 md:px-6 bg-primary text-primary-foreground hover:bg-primary-hover font-semibold rounded-full shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Submit Paper
                            <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"/>
                        </span>
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0"/>
                    </Button>
                </Link>
            </div>

            {/* Auth State */}
            {isLoading ? (
                <Button variant="ghost" size="icon" className="rounded-full w-9 h-9">
                    <Loader2 className="h-4 w-4 animate-spin" />
                </Button>
            ) : user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-2 rounded-full pl-2 pr-4 h-9 md:h-10 border-primary/20 bg-primary/5 hover:bg-primary/10">
                            <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                                {user.firstName?.[0]}
                            </div>
                            <span className="max-w-[80px] truncate hidden md:inline-block">{user.firstName}</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">{user.firstName} {user.lastName}</p>
                                <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href={getDashboardLink(user.role)} className="cursor-pointer">
                                <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
                            </Link>
                        </DropdownMenuItem>
                        {user.role === 'AUTHOR' && (
                            <DropdownMenuItem asChild>
                                <Link href="/submit" className="cursor-pointer">
                                    <Send className="mr-2 h-4 w-4" /> New Submission
                                </Link>
                            </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive cursor-pointer">
                            <LogOut className="mr-2 h-4 w-4" /> Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Link href="/author/login">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium">
                        Login
                    </Button>
                </Link>
            )}
        </div>
    );
};