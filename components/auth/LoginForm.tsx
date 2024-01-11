
import { CardWrapper } from "@/components/auth/ux/CardWrapper";

export const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome back!"
            backButtonLabel="Create an account"
            backButtonHref="/auth/register"
            showSocial
        >
            LoginForm
        </CardWrapper>
    )
};