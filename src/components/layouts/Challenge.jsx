import ProgressBar from "../ProgressBar"

export default function Challenge() {
    const word = 'Copacetic'
    const definition = 'In Excellent Order'

    return (
        <section id="challenge">
            <h1>{word}</h1>
            <p>{definition}</p>
            <div className="helper">
                <div>
                    {/* CONTAINS ALL THE ERROR CORRECTIONS VISUAL BARS */}

                    {[...Array(definition.length).keys()
                        .map((element, elementIdx) => {
                            //determine whether or not the user has typed the character
                            //they think is correct, and show red or blue depending
                            //on whether or not it's actually correct

                            return (
                                <div key={elementIdx}></div>
                            )
                        })]}
                </div>
                <input type="text" placeholder="Enter the Definition..." />
            </div>

            <div className="challenge-btns">
                <button className="card-button-secondary">
                    <h6>Quit</h6>
                </button>

                <button className="card-button-primary">
                    <h6>I Forgot</h6>
                </button>
            </div>

            <ProgressBar />
        </section>
    )
}