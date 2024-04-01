import { useState } from 'react';
/*
import { useContext } from 'react';
import { urlsContext } from '../../contexts/UrlsContext';
*/

import './HomePage.css';

export default function HomePage () {
    const [url, setUrl] = useState('');
    // const { setUrls } = useContext(urlsContext);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // do a request to backend for generate the short url and retrieve it
        // with the context setUrls, change the global urls with the response of request`
        /*
        const response = await fetch('https://url-back/v1/api/create-url', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ WENAS: 'hola' })
        });

        const dataInJson = response.json();
        
        setUrl(dataInJson.data);
        */
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    }

    return (
        <article className="FormContainer">
            <h1>This is a home page</h1>
            <form className="HomeForm" onSubmit={handleSubmit}>
                <input type="text" value={url} required placeholder="Url here" onChange={handleChange}/>
                <button type="submit" className='HomeFormButton'>CONVERT</button> 
            </form>
        </article> 
    )
}