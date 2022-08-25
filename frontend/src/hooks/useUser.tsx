import { UserContext } from "../context/UserContext"
import { useContext } from "react";

// criação de hook para facilitar utilizaçao do contexto
export const useUser = () => {
    const context = useContext<any>(UserContext);

    if (!context) {
        throw new Error("useUser must be used withim an userProvider");
    }

    const { user, setUser } = context;

    return { user, setUser };
};