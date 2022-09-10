import React, { createContext, useState } from "react";

export const SignContext = createContext(null);

export const SignProvider = ({ children }) => {
    const [sign, setSign] = useState<Boolean>(true);

    return (
        <SignContext.Provider
            value={{ sign, setSign }}>
            {children}
        </SignContext.Provider>
    );
};
