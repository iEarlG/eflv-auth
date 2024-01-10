"use client"

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    asChild?: boolean;
    mode?: "modal" | "redirect";
};

export const LoginButton = ({
    children,
    asChild,
    mode = "redirect"
}: LoginButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push("/auth/login")
    };
    
    if (mode === "modal") {
        return (
            <span>
                TODO: Remove this span and implement modal login
            </span>
        )
    };
    return (
        <span className="cursor-pointer"  onClick={onClick}>
            {children}
        </span>
    )
};