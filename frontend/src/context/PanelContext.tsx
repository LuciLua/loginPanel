import React, { createContext, useContext, useState } from "react";

export const PanelContext = createContext('');

export const PanelProvider = ({ children }) => {
    const [panel, setPanel] = useState(false);

    return (
        <PanelContext.Provider
            value={{ panel, setPanel }}>
            {children}
        </PanelContext.Provider>
    );
};
