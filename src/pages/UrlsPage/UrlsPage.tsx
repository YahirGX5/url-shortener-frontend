import { urlsContext } from "../../contexts/UrlsContext";
import { useContext } from "react";
import { Link } from "wouter";

export function UrlsPage () {
    const { urls, setUrls } = useContext(urlsContext);

    return (
        <section>
            <h1>This is urls page</h1>
            <Link href="/home">Home</Link>
            {urls ? 
            <h1>Here goes the components for urls</h1> 
            : <h1>Nothing to see here</h1>} 
        </section> 
    )
}