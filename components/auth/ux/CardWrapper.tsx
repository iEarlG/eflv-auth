"use client"


import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";

import { Header } from "@/components/ux/Header";
import { Social } from "@/components/ux/Social";
import { BackButton } from "@/components/ux/BackButton";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton 
                    href={backButtonHref} 
                    label={backButtonLabel}
                />
            </CardFooter>
        </Card>
    );
}