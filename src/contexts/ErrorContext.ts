import { createContext } from "react";

interface IErrorContext {
    error: string | null,
    setError: React.Dispatch<React.SetStateAction<string | null>> 
} 

export const errorContext = createContext<IErrorContext>({
    error: 'not error',
    setError: () => {}
});