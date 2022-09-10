import { useContext } from "react";
import { SignContext } from "../context/SignContext";

// criação de hook para facilitar utilizaçao do contexto
export const useSign = () => {
    const context = useContext<any>(SignContext);

    if (!context) {
        throw new Error("useSign must be used withim an SignProvider");
    }

    const { sign, setSign } = context;

    return { sign, setSign };
};