import './HomePage.css';

export function HomePage () {

    return (
        <article className="FormContainer">
            <h1>This is a home page</h1>
            <form className="HomeForm">
                <input type="text" required/>
                <button type="submit" className='HomeFormButton'>CONVERT</button> 
            </form>
        </article> 
    )
}