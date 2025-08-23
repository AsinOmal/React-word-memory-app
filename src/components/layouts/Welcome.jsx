export default function Welcome(props) {
    const {name, setName} = props

    console.log('PROPS', props)

    return (
        <section id="welcome">
            <h3 className="text-large special-shadow">365 Days.<br />365 Words.</h3>

            <h6>
                Build your Lexicon
                <br /> Start the Challenge Today!
            </h6>

            <div>
                <input value={name} onChange={(e) => {
                    console.log(e.target.value)
                    setName(e.target.value)
                }}
                type="text" placeholder="Enter your Name..." />
                <button>
                    <h6>Start  &rarr;</h6>
                </button>
            </div>
        </section>
    )
}