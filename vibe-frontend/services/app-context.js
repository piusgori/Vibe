import { createContext } from "react";

export const ApppContext = createContext();

const AppContextProvider = ({ children }) => {
    const value = {};
    return <ApppContext.Provider value={value}>{children}</ApppContext.Provider>
};

export default AppContextProvider;