"use server"

import * as z from "zod";

import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            status: 400,
            error: "Invalid credentials"
        }
    }
    
    return {
        status: 200,
        success: "Login Success"
    }
};