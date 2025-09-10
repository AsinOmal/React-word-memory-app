import Layout from "./components/layouts/Layout"
import Welcome from "./components/layouts/Welcome"
import Dashboard from "./components/layouts/Dashboard"
import Challenge from "./components/layouts/Challenge"
import { useState, useEffect } from "react"

import WORDS from "./utils/VOCAB.json"
import { getWordByIndex, PLAN } from './utils'


function App() {
  const [selectedPage, setSeletedPage] = useState(0)
  // const selectedPage = 2 
  // zero is for welcome, 1 is for dashboard, 2 is for challenge

  const [name, setName] = useState('')
  const [day, setDay] = useState(1)
  const [datetime, setDatetime] = useState(null)
  const [History, setHistory] = useState([])
  const [attempts, setAttempts] = useState(0)

  // console.log(PLAN);

  const daysWords = PLAN[day].map((idx) => {
    return getWordByIndex(WORDS, idx).word
  })
  console.log(daysWords)

  function handleChangePage(pageIndex) {
    setSeletedPage(pageIndex)
  }

  function handleCreateAccount() {
    if (!name) { return }
    localStorage.setItem('username', name)
    handleChangePage(1)
  }

  function handleCompleteDay() {
    const newDay = day + 1
    const newDatetime = Date.now()
    setDay(newDay)
    setDatetime(newDatetime)

    localStorage.setItem('day', JSON.stringify({ day: newDay, datetime: newDatetime }))

    setSeletedPage(1)
  }

  function handleIncrementAttempts() {
    // take the current attempt number, and add one save it to local storage.
    const newRecord = attempts + 1
    localStorage.setItem('attempts', newRecord)
    setAttempts(newRecord)
  }
  //! this callback function is triggered on page load
  useEffect(() => {
    if (!localStorage) { return }
    // if we don't have access to the database, 
    // then exit the callback function 

    if (localStorage.getItem('username')) {
      // if we find the item, (get item returns something) 
      // then we enter the if block
      setName(localStorage.getItem('username'))

      // we have a name, so we can skip to the dashboard
      setSeletedPage(1)
    }

  }, [])


  const pages = {
    0: < Welcome
      handleCreateAccount={handleCreateAccount}
      name={name} username="hello world"
      setName={setName}
    />,
    1: <Dashboard name={name} attempts={attempts} PLAN={PLAN} day={day}
      handleChangePage={handleChangePage} daysWords={daysWords} datetime={datetime} history={history}
    />,
    2: <Challenge day={day} daysWords={daysWords} handleChangePage={handleChangePage}
      handleIncrementAttempts={handleIncrementAttempts} handleCompleteDay={handleCompleteDay}
      PLAN= {PLAN}/>,
  }


  return (

    <div>
      <Layout>
        {pages[selectedPage]}
      </Layout>
    </div>

  )
}

export default App
