"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { LoginSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

import { CardWrapper } from "@/components/auth/ux/CardWrapper";

export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });
    
    return (
        <CardWrapper
            headerLabel="Welcome back!"
            backButtonLabel="Create an account"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form>
                
            </Form>
        </CardWrapper>
    )
};