import { createContext, useState } from "react";

export const AuthContext = createContext({
    isAuth: false,
    profile: null,
    setIsAuth: null,
    setProfile: null,
});

const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [profile, setProfile] = useState();

    const value = {
        isAuth,
        profile,
        setIsAuth,
        setProfile,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthContextProvider;