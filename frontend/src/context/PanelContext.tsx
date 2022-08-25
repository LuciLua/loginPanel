import React, { createContext, useState } from "react";

export const PanelContext = createContext(null);

export const PanelProvider = ({ children }) => {
    const [panel, setPanel] = useState<Boolean>(false);

    return (
        <PanelContext.Provider
            value={{ panel, setPanel }}>
            {children}
        </PanelContext.Provider>
    );
};
