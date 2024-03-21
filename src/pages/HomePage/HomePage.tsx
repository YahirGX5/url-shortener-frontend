import { useState } from 'react';

import './HomePage.css';

export function HomePage () {
    const [url, setUrl] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //logic of handleSubmit
        console.log(url);
        setUrl('');
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