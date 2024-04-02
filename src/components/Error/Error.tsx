import './Error.css';

type ErrorTypes = {
    errorToShow: string
}

export default function Error ({ errorToShow }: ErrorTypes) {
    return (
        <article className="ErrorContainer">
            <h2>Error...</h2>
            <p>{errorToShow}</p>
        </article>
    )
}