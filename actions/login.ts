"use server"

import * as z from "zod";

import { LoginSchema } from "@/schemas";

export const login = (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            status: 400,
            message: "Invalid Login"
        }
    }
    
    return {
        status: 200,
        message: "Login Success"
    }
};