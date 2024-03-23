import { urlsContext } from "../../contexts/UrlsContext";
import { useContext } from "react";
import { UrlsViews } from "../../components/UrlsView/UrlsView";
import { Link } from "wouter";

import './UrlsPage.css';

export function UrlsPage () {
    const { urls } = useContext(urlsContext);

    return (
        <section className="UrlsContainer">
            <h1>This is urls page</h1>
            <Link href="/home">Home</Link>
            {urls ? 
                urls.map(({ originalUrl, shortUrl }) => <UrlsViews originalUrl={originalUrl} shortUrl={shortUrl}/>)
            : <h1>Nothing to see here</h1>} 
        </section> 
    )
}