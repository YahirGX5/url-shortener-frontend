import { createContext } from "react";

interface IAuthContext {
    login: boolean,
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const loginContext = createContext<IAuthContext>({
    login: false,
    setLogin: () => {}
})