import { urlsContext } from "../../contexts/UrlsContext";
import { loginContext } from "../../contexts/LoginContext";
import { useContext, useEffect, useMemo } from "react";
import UrlsViews from "../../components/UrlsView/UrlsView";

import './UrlsPage.css';

export default function UrlsPage () {
    const { urls } = useContext(urlsContext);
    const { login } = useContext(loginContext);

    useEffect(() => {
         
        if (login) {
            // logic for stablish the urls
        } 
    }, [login]);

    const isUrlsEmpty = useMemo(() => urls.length === 0, [urls]);

    return (
        <section className={isUrlsEmpty ? "UrlsEmptyContainer" : "UrlsContainer"}>
            {isUrlsEmpty ? 
                <h1>Nothing to see here</h1>
            : urls.map(({ originalUrl, shortUrl }) => <UrlsViews originalUrl={originalUrl} shortUrl={shortUrl} key={shortUrl}/>)} 
        </section> 
    );
}