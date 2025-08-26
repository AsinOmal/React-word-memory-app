import ProgressBar from './ProgressBar';


export default function Stats(props) {
    const { name } = props

    // const name = 'Asin'
    const day = 20

    return (
        <div className='card stats-card'>
            <div className="welcome-text">
                <h6>Welcome</h6>
                <h4 className="text-large">
                    {name}
                </h4>
            </div>

            <div className="stats-column">
                <div>
                    <p>Streak 🔥</p>
                    <h4>{day - 1}</h4>
                </div>

                <div>
                    <p>Words Seen</p>
                    <h4>{40}</h4>
                </div>

                <div>
                    <p>Accuracy (%)</p>
                    <h4>{93.33.toFixed(2)}</h4>
                </div>
            </div>

            <ProgressBar />

        </div>
    )
}