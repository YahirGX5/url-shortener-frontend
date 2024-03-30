import { createContext } from "react";

type Urls = {
    originalUrl: string,  
    shortUrl: string,
}[]

interface IUrlsContext {
    urls: Urls | null,
    setUrls: React.Dispatch<React.SetStateAction<Urls>>
}

export const urlsContext = createContext<IUrlsContext>({
    urls: [
        {
            originalUrl: '',
            shortUrl: '',
        }
    ],
    setUrls: () => {}
})