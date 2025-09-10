import { useState } from "react"
import ProgressBar from "../ProgressBar"
import { isEncountered, shuffle } from "../../utils"
import DEFINITIONS from '../../utils/VOCAB.json'
import { list } from "postcss"

export default function Challenge(props) {

    const { day, daysWords, handleChangePage,
        handleIncrementAttempts, handleCompleteDay, PLAN } = props


    const [wordIndex, setWordIndex] = useState(0)
    const [inputVal, setInputVal] = useState('')
    const [showDefinition, setShowDefinition] = useState(false)
    const [listToLearn, setListToLearn] = useState([
        ...daysWords,
        ...shuffle(daysWords),
        ...shuffle(daysWords),
        ...shuffle(daysWords),
    ])


    const word = listToLearn[wordIndex]
    const isNewWord = showDefinition ||
        (!isEncountered(day, word) && wordIndex < daysWords.length)
    const definition = DEFINITIONS[word]

    function giveUp() {
        setListToLearn([...listToLearn, word])
        setShowDefinition(true)
    }

    return (
        <section id="challenge">
            <h1>{word}</h1>
            {isNewWord && (<p>{definition}</p>)}
            <div className="helper">
                <div>
                    {/* CONTAINS ALL THE ERROR CORRECTIONS VISUAL BARS */}

                    {[...Array(definition.length).keys()]
                        .map((char, elementIdx) => {
                            //determine whether or not the user has typed the character
                            //they think is correct, and show red or blue depending
                            //on whether or not it's actually correct

                            const styleToApply = inputVal.length < char + 1 ?
                                ''
                                :
                                inputVal.split('')[elementIdx].toLowerCase() == definition.split('')[elementIdx].toLowerCase() ? 'correct' : 'incorrect'

                            return (
                                <div className={' ' + styleToApply} key={elementIdx}></div>
                            )
                        })}
                </div>
                <input type="text" value={inputVal}
                    onChange={(e) => {
                        //if a user has entered the correct number of characters, we need to do few things.
                        //! 1. If the entry is correct, we need to incremenet attempts and move them on to the next word
                        //! 2. If the entry is incorrect, we need to increment attempts, and 

                        if (e.target.value.length === definition.length && e.target.value.length > inputVal.length) {
                            // compare words
                            handleIncrementAttempts()

                            if (e.target.value.toLowerCase() == definition.toLowerCase()) {
                                //then the user have the correct outcome
                                if (wordIndex >= listToLearn.length - 1) {
                                    handleCompleteDay()
                                    return
                                }
                                setWordIndex(wordIndex + 1)
                                setShowDefinition(false)
                                setInputVal('')
                                return

                                //! check if finished all the words, 
                                //! then end of the day. otherwise go to next word
                            }
                        }
                        setInputVal(e.target.value)
                    }}
                    placeholder="Enter the definition..." />
            </div>

            <div className="challenge-btns">
                <button className="card-button-secondary" onClick={() => { handleChangePage(1) }}>
                    <h6>Quit</h6>
                </button>

                <button className="card-button-primary" onClick={giveUp}>
                    <h6>I Forgot</h6>
                </button>
            </div>

            <ProgressBar text={`${wordIndex} / ${listToLearn.length}`}
                remainder={wordIndex * 100 / listToLearn.length} />
        </section>
    )
}