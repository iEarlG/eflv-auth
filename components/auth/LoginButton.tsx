"use client"

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
    const onClick = () => {
        console.log("LoginButton clicked");
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