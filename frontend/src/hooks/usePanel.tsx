import { useContext } from "react";
import { PanelContext } from "../context/PanelContext";

// criação de hook para facilitar utilizaçao do contexto
export const usePanel = () => {
    const context = useContext<any>(PanelContext);

    if (!context) {
        throw new Error("usePanel must be used withim an panelProvider");
    }

    const { panel, setPanel } = context;

    return { panel, setPanel };
};