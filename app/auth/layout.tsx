
const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="flex items-center justify-center h-full bg-signInGradient">
            {children}
        </div>
    );
}
 
export default AuthLayout;