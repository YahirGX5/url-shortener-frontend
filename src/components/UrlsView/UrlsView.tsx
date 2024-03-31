import { useRef, useContext } from "react";
import { urlsContext } from "../../contexts/UrlsContext";

import './UrlsViews.css';

type UrlsViewsProps = {
    originalUrl: string,
    shortUrl: string
}

export default function UrlsViews ({ originalUrl, shortUrl }: UrlsViewsProps) {
    const urlRef = useRef(shortUrl);
    const { urls, setUrls } = useContext(urlsContext);

    const handleDelete = () => {
        setUrls(urls!.filter(url => url.shortUrl !== urlRef.current));

    }

    const handleCopy = () => {
        navigator.clipboard.writeText(urlRef.current);
    }

    return (
        <section className="UrlBox">
            <a href={originalUrl} className="AnchorUrl" target="_blank">{urlRef.current}</a>
            
            <button className="CopyButton" onClick={handleCopy}>Copy</button>
            <button className="ShareButton">Share</button>
            <button className="DeleteButton" onClick={handleDelete}>Delete</button>
        </section>
    )
}