export type StatsProps = {
    numberOfVisits: number,
    expirationDay: string,
    daysToExpiration: number
}

export default function Stats ({ numberOfVisits, expirationDay, daysToExpiration }: StatsProps) {
    return (
        <article className="StatsContainer">
            <p>Number of visits</p>
            {numberOfVisits}

            <p>Expiration day</p>
            {expirationDay}

            <p>Days to expirate</p>
            {daysToExpiration}
        </article>
    )
}