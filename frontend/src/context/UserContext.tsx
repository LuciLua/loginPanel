import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState<Object>({});

    return (
        <UserContext.Provider
            value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
