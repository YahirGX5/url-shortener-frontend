type ErrorTypes = {
    errorToShow: string,
    codeOfError: number
}

export default function Error ({ errorToShow, codeOfError }: ErrorTypes) {
    return (
        <article className="ErrorContainer">
            <h2>{codeOfError}</h2>
            <p>{errorToShow}</p>
        </article>
    )
}