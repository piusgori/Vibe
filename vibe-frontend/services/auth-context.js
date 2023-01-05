import { createContext } from 'react';
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const value = {};
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthContextProvider;